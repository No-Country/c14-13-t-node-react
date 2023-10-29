import { z } from 'zod';

export const WorkshopServiceBaseSchema = z.object({
  serviceCode: z
    .string()
    .min(6, 'El Código de Servicio debe tener al menos 6 caracteres')
    .max(25, 'El Código de Servicio no puede tener más de 25 caracteres')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'El Código de Servicio solo puede contener letras, números, guiones y guiones bajos',
    )
    .trim(),
  service: z.string().min(4, 'El Servicio debe tener al menos 2 caracteres').trim(),
  description: z
    .string()
    .min(4, 'La Descripción debe tener al menos 4 caracteres')
    .max(120, 'La Descripción no puede tener más de 120 caracteres')
    .trim(),
  servicePrice: z
    .string()
    .regex(
      /^\d+(\.\d+)?$/,
      'El precio del servicio debe ser un numero valido. Para indicar decimales utilice "."',
    )
    .transform((value) => {
      const float = parseFloat(value);
      if (isNaN(float)) {
        throw new Error(
          'El precio del servicio debe ser un numero valido. Para indicar decimales utilice "."',
        );
      }
      return parseFloat(float.toFixed(2));
    }),
});

export const WorkshopServiceCreationSchema = WorkshopServiceBaseSchema;
export const WorkshopServiceApiSchema = WorkshopServiceBaseSchema.omit({
  servicePrice: true,
}).extend({
  servicePrice: z.number().transform((value) => {
    const float = parseFloat(value.toFixed(2));
    if (isNaN(float)) {
      throw new Error(
        'El precio del servicio debe ser un numero valido. Para indicar decimales utilice "."',
      );
    }
    return float;
  }),
});
export const WorkshopServiceSchema = WorkshopServiceBaseSchema.extend({
  id: z.number().int().positive(),
  isActive: z.boolean(),
});
