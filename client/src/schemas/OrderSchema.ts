import { z } from 'zod';

export const OrderSchema = z.object({
  entryDate: z //manejar por date o datetime????
    .string()
    .datetime(),
  departureDate: z.string().datetime(),
  deadline: z.string().datetime(),
  cost: z.number().max(10, '').multipleOf(0.01),
  workshopId: z.number(),
  mechanicId: z.number(),
  vehicleId: z.number(),
  employeeId: z.number(),
});

export const OrderCreationSchema = OrderSchema;
