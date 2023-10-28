import { z } from 'zod';
import { CustomerCreationSchema } from '@/schemas/CustomerSchema';

export type CustomerFormSchemaType = z.infer<typeof CustomerCreationSchema>;
