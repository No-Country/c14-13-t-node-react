import { z } from 'zod';

export const MechanicSchema = z.object({
  dni: z
    .string()
    .min(6, 'El DNI debe tener al menos 6 caracteres')
    .max(25, 'El DNI no puede tener más de 25 caracteres')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'El DNI solo puede contener letras, números, guiones y guiones bajos',
    )
    .trim(),
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(20, 'El nombre no puede tener más de 20 caracteres')
    .regex(
      /^[a-zA-Z ]+$/,
      'El nombre solo puede contener letras, números, guiones y guiones bajos',
    )
    .trim(),
  address: z
    .string()
    .min(4, 'La dirección debe tener al menos 4 caracteres')
    .max(75, 'La dirección no puede tener más de 75 caracteres'),
  city: z
    .string()
    .min(4, 'La ciudad debe tener al menos 4 caracteres')
    .max(35, 'La ciudad no puede tener más de 35 caracteres'),
  phone: z
    .string()
    .min(6, 'El teléfono debe tener al menos 6 caracteres')
    .max(25, 'El teléfono no puede tener más de 25 caracteres')
    .regex(
      /^[0-9_-]+$/,
      'El numero de teléfono solo puede tener números, guiones y guiones bajos',
    )
    .trim(),
    isActive: z
.boolean()
});

export const MechanicCreationSchema = MechanicSchema;
