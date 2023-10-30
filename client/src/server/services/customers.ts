import { prisma } from '@/server/db';
import type { NewCustomer } from '@/types/common';

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

export const updateCustomer = async (id: number, customerData: NewCustomer) => {
  return await prisma.customer.update({where: {id}, data: customerData})
}

export const removeCustomer = async (id: number) => {
  const deleteCustomer = await prisma.customer.delete({ where: { id }})
  return deleteCustomer;
}
