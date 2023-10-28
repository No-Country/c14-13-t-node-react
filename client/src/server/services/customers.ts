import { prisma } from '@/server/db';
import type { NewCustomer, Customer } from '@/types/common';

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

export const updateCustomer = async (id: number, customerData: Customer) => {
  const { id: ids, ...rest } = customerData;
  return await prisma.customer.update({ where: { id }, data: rest });
};

export const deleteCustomer = async (id: number) => {
  return await prisma.customer.delete({ where: { id } });
};
