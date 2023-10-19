import { z } from 'zod';

export const CustomerSchema = z.object({
  id: z.number().int(),
  name: z
    .string()
    .min(4, 'El nombre debe tener al menos 4 caracteres')
    .max(55, 'El nombre no puede tener más de 55 caracteres'),
  dni: z
    .string()
    .min(6, 'El DNI debe tener al menos 6 caracteres')
    .max(25, 'El DNI no puede tener más de 25 caracteres'),
  email: z
    .string()
    .email('Introduzca una dirección de correo electrónico válida')
    .max(40, 'El correo electrónico no puede tener más de 40 caracteres'),
  phone: z
    .string()
    .min(6, 'El teléfono debe tener al menos 6 caracteres')
    .max(25, 'El teléfono no puede tener más de 25 caracteres'),
  address: z
    .string()
    .min(4, 'La dirección debe tener al menos 4 caracteres')
    .max(75, 'La dirección no puede tener más de 75 caracteres'),
  city: z
    .string()
    .min(4, 'La ciudad debe tener al menos 4 caracteres')
    .max(35, 'La ciudad no puede tener más de 35 caracteres'),
});

export const CustomerCreationSchema = CustomerSchema.omit({ id: true });
