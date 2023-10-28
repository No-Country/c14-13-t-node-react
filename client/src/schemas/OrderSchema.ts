import { z } from 'zod';

export const OrderBaseSchema = z.object({
  entryDate: z //manejar por date o datetime???? ->datetime!
    .string()
    .datetime(),
  departureDate: z.string().datetime(),
  deadline: z.string().datetime(),
  cost: z.number().max(10, '').multipleOf(0.01),
  workshopId: z.number(),
  mechanicId: z.number(),
  vehicleId: z.number(),
  employeeId: z.number(),
  status: z.enum(['Pendiente', 'En proceso', 'Finalizado']),
});

export const OrderCreationSchema = OrderBaseSchema;
export const OrderSchema = OrderBaseSchema.extend({
  id: z.number().int().positive(),
});
