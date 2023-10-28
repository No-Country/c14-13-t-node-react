import { BaseWorkerSchema } from './BaseWorkerSchema';

export const EmployeeSchema = BaseWorkerSchema;

export const NewEmployeeCreationSchema = EmployeeSchema.omit({ id: true });
