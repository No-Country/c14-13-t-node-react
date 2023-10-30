import { prisma } from '@/server/db';
import type { NewOrder } from '@/types/common';

export const getAllOrders = async () => {
  return await prisma?.order.findMany();
};

export const getOrderById = async (id: number) => {
  const order =  await prisma.order.findFirst( {where: {id}});
return order;
}

export const createOrder = async (orderData: NewOrder) => {
  return await prisma.order.create({ data: orderData });
};

export const updateOrder = async (id: number, orderData: NewOrder) => {
  return await prisma.order.update({where: {id}, data: orderData});
}

export const removeOrder = async (id: number) => {
  const deleteOrder = await prisma.order.delete({where: {id}});
  return deleteOrder;
}

