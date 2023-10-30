import { prisma } from '@/server/db';
import type { NewCustomer, Customer, CustomerUpdate } from '@/types/common';

export const getCustomerById = async (id: number) => {
  const customer = await prisma.customer.findUnique({ where: { id } });
  return customer;
};
export const getCustomerByDni = async (DNI: string) => {
  const customer = await prisma.customer.findUnique({ where: { dni: DNI } });
  return customer;
};
export const createCustomer = async (customerData: NewCustomer) => {
  //Password should not be returned
  return await prisma.customer.create({ data: customerData });
};
export const getCustomers = async () => {
  return await prisma?.customer.findMany();
};

export const updateCustomer = async (id: number, customerData: CustomerUpdate) => {
  return await prisma.customer.update({ where: { id }, data: customerData });
};

export const deleteCustomer = async (id: number) => {
  return await prisma.customer.delete({ where: { id } });
};

export const getCustomerVehicles = async (id: number) => {
  return await prisma.vehicle.findMany({
    where: {
      customerId: id,
    },
  });
};
export const getCustomerOrders = async (id: number) => {
  const orders = await prisma.order.findMany({
    where: {
      vehicle: {
        customerId: id,
      },
    },
    // include: {
    //   vehicle: true, // Include vehicle details
    //   workshop: true, // Include workshop details
    //   mechanic: true, // Include mechanic details
    //   employees: true, // Include employee details
    //   orderServices: {
    //     include: {
    //       service: true, // Include service details for each orderService
    //     },
    //   },
    // },
    select: {
      id: true,
      entryDate: true,
      departureDate: true,
      deadline: true,
      cost: true,
      workshopId: true,
      mechanicId: true,
      vehicleId: true,
      employeeId: true,
      status: true,
      vehicle: {
        select: {
          plate: true,
          customer: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      },
      orderServices: {
        select: {
          serviceId: true,
          service: {
            select: {
              serviceCode: true,
              service: true,
            },
          },
        },
      },
      workshop: {
        select: {
          name: true,
        },
      },
      employees: {
        select: {
          name: true,
        },
      },
      mechanic: {
        select: {
          name: true,
        },
      },
    },
  });
  return orders;
};
