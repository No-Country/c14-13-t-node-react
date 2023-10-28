import { NewEmployeeCreationSchema } from '@/schemas/EmployeeSchema';
import { z } from 'zod';

export type NewEmployeeCreationSchemaType = z.infer<typeof NewEmployeeCreationSchema>;
