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
  description: z.string(),
  servicePrice: z.number().multipleOf(0.01),
  isActive: z.boolean(),
});

export const WorkshopServiceCreationSchema = WorkshopServiceBaseSchema;
export const WorkshopServiceSchema = WorkshopServiceBaseSchema.extend({
  id: z.number().int().positive(),
});
