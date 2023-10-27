import { prisma } from '@/server/db';
import type { NewEmployee } from '@/types/common';

export const getAllEmployees = async () => {
  return await prisma?.employee.findMany();
};

export const createEmployee = async (employeeData: NewEmployee) => {
  return await prisma.employee.create({ data: employeeData });
};

export const getEmployeeById = async (params: unknown) => {
  return await prisma.employee.findFirst();
};

export const updateEmployee = async (params: unknown) => {};

export const removeEmployee = async (params: unknown) => {};
