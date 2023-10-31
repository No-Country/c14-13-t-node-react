import { z } from 'zod';

export const VehicleBaseSchema = z.object({
  plate: z
    .string()
    .min(6, 'La Placa debe tener al menos 6 caracteres')
    .max(10, 'El Placa no puede tener más de 10 caracteres')
    .regex(/^[a-zA-Z0-9_-]+$/, 'La Placa solo puede contener letras, números y guiones')
    .trim(),
  brand: z
    .string()
    .min(1, 'La marca debe tener al menos 1 caracter')
    .max(30, 'La marca no puede tener más de 30 caracteres'),
  model: z
    .string()
    .min(1, 'El modelo debe tener al menos 1 caracter')
    .max(30, 'El modelo no puede tener más de 30 caracteres'),
  comments: z.string().optional(),
  vehicleType: z
    .string()
    .min(4, 'El campo debe tener al menos 4 caracteres')
    .max(20, 'El campo no puede tener más de 20 caracteres'),
  mileage: z.string().regex(/^[0-9]+$/, 'El kilometraje solo puede contener números'),
  year: z
    .string()
    .regex(/^[0-9]+$/, 'El año solo puede contener números')
    .regex(/^[0-9]{4}$/, 'El año debe tener 4 dígitos')
    .refine((val) => parseInt(val) >= 1900, {
      message: 'El año debe ser mayor o igual a 1900',
    })
    .refine((val) => parseInt(val) < new Date().getFullYear() + 2, {
      message: 'El año debe ser menor a 2024',
    }),
  color: z.string().min(1, 'El campo debe tener al menos 1 caracter'),
  doors: z.enum(['2 Puertas', '4 Puertas']),
  customerId: z.number().min(1, 'El campo debe tener al menos 1 caracter'),
});

export const VehicleCreationSchema = VehicleBaseSchema;
export const VehicleWithOutCustomerId = VehicleCreationSchema.omit({ customerId: true });
export const VehicleSchema = VehicleBaseSchema.extend({
  id: z.number().int().positive(),
  isActive: z.boolean(),
});
export const VehicleUpdateSchema = VehicleBaseSchema.extend({
  isActive: z.boolean(),
});
export const VehicleUpdateFormSchema = VehicleBaseSchema.extend({
  isActive: z.enum(['Activo', 'Inactivo']),
});
