import { z } from 'zod';

export const WorkshopServiceSchema = z.object({
serviceCode: z
    .string()
    .min(6, 'El Codigo de Servicio debe tener al menos 6 caracteres')
    .max(25, 'El Codigo de Servicio no puede tener más de 25 caracteres')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'El Codigo de Servicio solo puede contener letras, números, guiones y guiones bajos',
    )
    .trim(),
service: z
    .string()
    .min(4, 'El Servicio debe tener al menos 2 caracteres')
    .trim(),
description: z
    .string(),
servicePrice: z
.number()
.multipleOf(0.01),
isActive: z
.boolean()
});

export const WorkshopServiceCreationSchema = WorkshopServiceSchema;
