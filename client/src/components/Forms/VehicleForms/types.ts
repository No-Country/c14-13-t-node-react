import { VehicleCreationSchema as SchemaBase } from '@/schemas/VehicleSchema';
import { z } from 'zod';

export const VehicleWithOutId = SchemaBase.omit({ customerId: true });
export type VehicleCreationSchemaType = z.infer<typeof VehicleWithOutId>;
export const VehicleCreationSchema = SchemaBase;
