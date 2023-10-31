import type { Session } from 'next-auth';
import { z } from 'zod';
import { AuthBaseSchema } from '@/schemas/AuthSchema';
import {
  CustomerCreationSchema,
  CustomerUpdateSchema,
  CustomerUpdateFormSchema,
} from '@/schemas/CustomerSchema';
import {
  VehicleCreationSchema,
  VehicleWithOutCustomerId,
  VehicleSchema,
  VehicleUpdateFormSchema,
  VehicleUpdateSchema,
} from '@/schemas/VehicleSchema';
import {
  MechanicCreationSchema,
  MechanicSchema,
  MechanicUpdateFormSchema,
  MechanicUpdateSchema,
} from '@/schemas/MechanicSchema';
import {
  WorkshopServiceCreationSchema,
  WorkshopServiceSchema,
  WorkshopServiceUpdateFormSchema,
  WorkshopServiceUpdateSchema,
} from '@/schemas/WorkshopServicesSchema';
import { WorkshopCreationSchema } from '@/schemas/WorkshopSchema';
import {
  EmployeeSchema,
  EmployeeUpdateFormSchema,
  EmployeeUpdateSchema,
  NewEmployeeCreationSchema,
} from '@/schemas/EmployeeSchema';
import { OrderCreationSchema } from '@/schemas/OrderSchema';

export type ExtractProperties<T> = {
  [K in keyof T]: T[K];
};

export type SessionUser = ExtractProperties<Session['user']>;

export type NewUser = z.infer<typeof AuthBaseSchema>;

export type NewCustomer = z.infer<typeof CustomerCreationSchema>;
export type CustomerUpdate = z.infer<typeof CustomerUpdateSchema>;
export type CustomerUpdateForm = z.infer<typeof CustomerUpdateFormSchema>;
export type Customer = NewCustomer & { id: number; isActive: boolean };

export type NewVehicle = z.infer<typeof VehicleCreationSchema>;
export type VehicleUpdateForm = z.infer<typeof VehicleUpdateFormSchema>;
export type VehicleUpdate = z.infer<typeof VehicleUpdateSchema>;
export type Vehicles = NewVehicle;

export type NewMechanic = z.infer<typeof MechanicCreationSchema>;
export type Mechanic = z.infer<typeof MechanicSchema>;
export type MechanicUpdateForm = z.infer<typeof MechanicUpdateFormSchema>;
export type MechanicUpdate = z.infer<typeof MechanicUpdateSchema>;

export type NewWorkshopService = z.infer<typeof WorkshopServiceCreationSchema>;
export type WorkshopService = z.infer<typeof WorkshopServiceSchema>;
export type WorkshopServiceUpdate = z.infer<typeof WorkshopServiceUpdateSchema>;
//Solo por el type price en string, El problema es que el return de los inputs es string,
//y en DB el precio se guarda como numero, por lo que hay que convertirlo a string
const workshopServiceTemp = WorkshopServiceUpdateFormSchema.extend({
  servicePrice: z.string(),
});
export type WorkshopServiceUpdateForm = z.infer<typeof workshopServiceTemp>;

export type NewWorkshop = z.infer<typeof WorkshopCreationSchema>;
export type Workshop = NewWorkshop;

export type NewEmployee = z.infer<typeof NewEmployeeCreationSchema>;
export type Employee = z.infer<typeof EmployeeSchema>;
export type EmployeeUpdateForm = z.infer<typeof EmployeeUpdateFormSchema>;
export type EmployeeUpdate = z.infer<typeof EmployeeUpdateSchema>;

export type ActionBase<T extends string | number> = {
  id: T;
  category:
    | 'customers'
    | 'vehicles'
    | 'users'
    | 'employees'
    | 'orders'
    | 'mechanics'
    | 'services';
  deleteDescription: string;
  deleteFunction: (id: T) => Promise<Record<string, unknown>>;
};

export type NewOrder = z.infer<typeof OrderCreationSchema>;
export type Orders = NewOrder;
export type Vehicle = z.infer<typeof VehicleSchema>;
export type VehicleCreationSchemaType = z.infer<typeof VehicleWithOutCustomerId>;

export type Statistics = {
  counters: {
    usersCount: number;
    clientsCount: number;
    ordersCount: number;
    servicesCount: number;
    vehiclesCount: number;
  };
  totalSales: number;
  popularServices: {
    topServices: {
      serviceName: string;
      count: number;
      total: number;
    }[];
    otherServices: {
      serviceName: string;
      count: number;
      total: number;
    }[];
  };
  newOrders: FullOrder[];
};

export type FullOrder = {
  id: number;
  entryDate: string;
  departureDate: string;
  deadline: string;
  cost: number;
  workshopId: number;
  mechanicId: number;
  vehicleId: number;
  employeeId: number;
  status: 'pending' | 'inProgress' | 'finished';
  vehicle: {
    plate: string;
    customer: {
      id: number;
      firstName: string;
      lastName: string;
    };
  };
  orderServices: {
    serviceId: number;
    service: {
      serviceCode: string;
      service: string;
    };
  }[];
  workshop: {
    name: string;
  };
  employees: {
    name: string;
  };
  mechanic: {
    name: string;
  };
};
