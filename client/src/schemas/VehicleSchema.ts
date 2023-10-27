import { z } from 'zod';

export const VehicleSchema = z.object({
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
  comments: z.string(),
  vehicleType: z
    .string()
    .min(4, 'El campo debe tener al menos 4 caracteres')
    .max(20, 'El campo no puede tener más de 20 caracteres'),
  mileage: z.string(),
  year: z.string(),
  color: z.string(),
  doors: z.enum(['2 Puertas', '4 Puertas']),
  customerId: z.number().min(1, 'El campo debe tener al menos 1 caracter'),
});

export const VehicleCreationSchema = VehicleSchema;
