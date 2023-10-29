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

export const getEmployeeById = async (params: NewOrder) => {
  return await prisma.order.findFirst();
};

export const updateEmployee = async (params: NewOrder) => {};

export const removeEmployee = async (params: NewOrder) => {};
