import { WorkshopCreationSchema } from '@/schemas/WorkshopSchema';
import { z } from 'zod';

export type WorkshopCreationSchemaType = z.infer<typeof WorkshopCreationSchema>;
