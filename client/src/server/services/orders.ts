import { prisma } from '@/server/db';
import type { NewOrder } from '@/types/common';

export const getAllOrders = async () => {
  return await prisma?.order.findMany();
};

export const createOrder = async (orderData: NewEmployee) => {
  return await prisma.order.create({ data: orderData });
};

export const getEmployeeById = async (params:type) => {
  return await prisma.order.findFirst();
}

export const updateEmployee = async (params:type) => {
  
}

export const removeEmployee = async (params:type) => {
  
}
