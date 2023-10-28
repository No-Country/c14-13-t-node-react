import { MechanicCreationSchema } from '@/schemas/MechanicSchema';
import { z } from 'zod';

export type MechanicCreationSchemaType = z.infer<typeof MechanicCreationSchema>;
