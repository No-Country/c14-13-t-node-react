import { z } from 'zod';

export const WorkshopBaseSchema = z.object({
  //ME ESTA TRAYENDO UN UUID
  nit: z
    .string()
    .min(6, 'El NIT debe tener al menos 6 caracteres')
    .max(25, 'El NIT no puede tener más de 25 caracteres')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'El NIT solo puede contener letras, números, guiones y guiones bajos',
    )
    .trim(),
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede tener más de 50 caracteres')
    .regex(
      /^[a-zA-Z0-9 ,_-]+$/,
      'El nombre solo puede contener letras, números, guiones y guiones bajos',
    )
    .trim(),
  address: z
    .string()
    .min(4, 'La dirección debe tener al menos 4 caracteres')
    .max(95, 'La dirección no puede tener más de 75 caracteres'),
  email: z
    .string()
    .email('Introduzca una dirección de correo electrónico válida')
    .max(40, 'El correo electrónico no puede tener más de 40 caracteres'),
  phone: z
    .string()
    .min(6, 'El teléfono debe tener al menos 6 caracteres')
    .max(25, 'El teléfono no puede tener más de 25 caracteres')
    .regex(
      /^[0-9_-]+$/,
      'El numero de teléfono solo puede tener números, guiones y guiones bajos',
    )
    .trim(),
});

export const WorkshopCreationSchema = WorkshopBaseSchema;
export const WorkshopSchema = WorkshopBaseSchema.extend({
  id: z.number().int().positive(),
});
