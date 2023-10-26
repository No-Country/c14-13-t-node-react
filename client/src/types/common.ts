import type { Session } from 'next-auth';
import { z } from 'zod';
import { AuthBaseSchema } from '@/schemas/AuthSchema';
import {
  CustomerCreationSchema,
  CustomerCreationSchema as NewCustomerSchema,
} from '@/schemas/CustomerSchema';
import { VehicleCreationSchema } from '@/schemas/VehicleSchema';
import { MechanicCreationSchema } from '@/schemas/MechanicSchema';
import { WorkshopServiceCreationSchema } from '@/schemas/WorkshopServicesSchema';
import { WorkshopCreationSchema } from '@/schemas/WorkshopSchema';
import { EmployeeCreationSchema } from '@/schemas/EmployeeSchema';

export type ExtractProperties<T> = {
  [K in keyof T]: T[K];
};

export type SessionUser = ExtractProperties<Session['user']>;

export type NewUser = z.infer<typeof AuthBaseSchema>;
export type NewCustomer = z.infer<typeof CustomerCreationSchema>;
export type Customer = NewCustomer & { id: number; isActive: boolean };

export type NewVehicle = z.infer<typeof VehicleCreationSchema>;
export type Vehicles = NewVehicle;

export type NewMechanic = z.infer<typeof MechanicCreationSchema>;
export type Mechanics = NewMechanic;

export type NewWorkshopService = z.infer<typeof WorkshopServiceCreationSchema>;
export type WorkshopServices = NewWorkshopService;

export type NewWorkshop = z.infer<typeof WorkshopCreationSchema>;
export type Workshops = NewWorkshop;

export type NewEmployee = z.infer<typeof EmployeeCreationSchema>;
export type Employees = NewEmployee;
