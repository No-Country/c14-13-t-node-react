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

//? FEATURES

//por fecha de entrada de vehiculo
export const getAllOrderByEntryDate = async (entryDate: Date) => {
  const dataOrder = await prisma.order.findMany({where: {entryDate}})
  return dataOrder
}

//por fecha de salida de vehiculo
export const getAllOrderByDepartureDate = async (entryDate: Date) => {
  
}

//por ordenes emitida por empleado en especifico
export const getOrderByEmployyeId = async (entryDate: Date) => {
  
}

//por ordenes mecanicos que realizaron el servicio de reparacion
export const getOrderBymechanicId = async (entryDate: Date) => {
  
}