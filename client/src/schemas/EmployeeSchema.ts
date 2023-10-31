import { BaseWorkerSchema } from './BaseWorkerSchema';
import { z } from 'zod';

export const EmployeeSchema = BaseWorkerSchema;

export const NewEmployeeCreationSchema = EmployeeSchema.omit({ id: true, isActive: true });

export const EmployeeUpdateSchema = EmployeeSchema.omit({ id: true }).extend({
  isActive: z.boolean(),
});
export const EmployeeUpdateFormSchema = EmployeeSchema.omit({ id: true }).extend({
  isActive: z.enum(['Activo', 'Inactivo']),
});
