import { WorkshopServiceCreationSchema } from '@/schemas/WorkshopServicesSchema';
import { z } from 'zod';

export type WorkshopServiceCreationSchemaType = z.infer<typeof WorkshopServiceCreationSchema>;
