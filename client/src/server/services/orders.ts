import { prisma } from '@/server/db';
import type { NewOrder } from '@/types/common';
import { convertStatusFromZod } from '@/utils/status';

export const getAllOrders = async () => {
  return await prisma?.order.findMany();
};

export const createOrder = async (orderData: NewOrder) => {
  const status = convertStatusFromZod(orderData.status);
  return await prisma.order.create({ data: { ...orderData, status } });
};

export const getOrderById = async (id: number) => {
  const order = await prisma.order.findFirst({ where: { id } });
  return order;
};

export const updateOrder = async (id: number, orderData: NewOrder) => {
  const status = convertStatusFromZod(orderData.status);
  return await prisma.order.update({ where: { id }, data: { ...orderData, status } });
};

export const removeOrder = async (id: number) => {
  const deleteOrder = await prisma.order.delete({ where: { id } });
  return deleteOrder;
};

/**
 * Solo los datos que realmente necesito mostrar en la tabla de ordenes
 */
export const getOrders = async () => {
  const orders = await prisma.order.findMany({
    orderBy: {
      id: 'desc',
    },
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
