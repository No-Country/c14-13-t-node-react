import { z } from 'zod';
import { PersonSchema } from './PersonSchema';

export const CustomerBaseSchema = PersonSchema.extend({
  dni: z
    .string()
    .min(6, 'El DNI debe tener al menos 6 caracteres')
    .max(25, 'El DNI no puede tener más de 25 caracteres')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'El DNI solo puede contener letras, números, guiones y guiones bajos',
    )
    .trim(),
  phone: z
    .string()
    .min(6, 'El teléfono debe tener al menos 6 caracteres')
    .max(25, 'El teléfono no puede tener más de 25 caracteres')
    .regex(
      /^[0-9_-]+$/,
      'El numero de teléfono solo puede tener números, guiones y guiones bajos',
    )
    .trim(),
  address: z
    .string()
    .min(4, 'La dirección debe tener al menos 4 caracteres')
    .max(95, 'La dirección no puede tener más de 75 caracteres'),
  city: z
    .string()
    .min(4, 'La ciudad debe tener al menos 4 caracteres')
    .max(35, 'La ciudad no puede tener más de 35 caracteres'),
});

export const CustomerCreationSchema = CustomerBaseSchema;
/**
 * Este es el que se debe usar en la entrada de la API PATCH
 */
export const CustomerUpdateSchema = CustomerBaseSchema.extend({
  isActive: z.boolean(),
});
/**
 * Solo para el formulario de Editar,
 * Para este campo es mas fácil usar un select
 */
export const CustomerUpdateFormSchema = CustomerBaseSchema.extend({
  isActive: z.enum(['Activo', 'Inactivo']),
});
export const CustomerSchema = CustomerBaseSchema.extend({
  id: z.number().int().positive(),
  isActive: z.boolean(),
});
