import { z } from 'zod';
import { BaseWorkerSchema } from './BaseWorkerSchema';

export const MechanicSchema = BaseWorkerSchema;

export const MechanicCreationSchema = MechanicSchema.omit({ id: true, isActive: true });

export const MechanicUpdateSchema = MechanicSchema.omit({ id: true }).extend({
  isActive: z.boolean(),
});
export const MechanicUpdateFormSchema = MechanicSchema.omit({ id: true }).extend({
  isActive: z.enum(['Activo', 'Inactivo']),
});
