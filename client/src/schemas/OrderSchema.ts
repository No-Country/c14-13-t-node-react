import { z } from 'zod';

export const OrderBaseSchema = z.object({
  entryDate: z //manejar por date o datetime???? ->datetime!
    .string()
    .datetime(),
  departureDate: z.string().datetime(),
  deadline: z.string().datetime(),
  workshopId: z.number(),
  mechanicId: z.number(),
  vehicleId: z.number(),
  employeeId: z.number(),
  status: z.enum(['Pendiente', 'En proceso', 'Finalizado']),
  cost: z.number().max(9999999999, 'El Costo no puede superar las 10 cifras').multipleOf(0.01),
});

export const OrderCreationSchema = OrderBaseSchema;
export const OrderSchema = OrderBaseSchema.extend({
  id: z.number().int().positive(),
});
