import { BaseWorkerSchema } from './BaseWorkerSchema';

export const MechanicSchema = BaseWorkerSchema;

export const MechanicCreationSchema = MechanicSchema.omit({ id: true });
