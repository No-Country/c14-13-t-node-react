import { NextResponse } from 'next/server';
import { prisma } from '@/server/db';
import type { NewEmployee } from '@/types/common';

export const getAllEmployees = async () => {
  return await prisma?.employee.findMany();
};

export const getEmployeeById = async (id: number) => {
  const employee = await prisma.employee.findFirst({ where: { id } });
  return employee;
};

export const getEmployeeByDni = async (DNI: string) => {
  const employee = await prisma.employee.findFirst({ where: { dni: DNI } });
  return employee;
};

export const createEmployee = async (employeeData: NewEmployee) => {
  return await prisma.employee.create({ data: employeeData });
};

export const updateEmployee = async (id: number, employeeData: NewEmployee) => {
  return await prisma.employee.update({ where: { id }, data: employeeData });
};

export const removeEmployee = async (id: number) => {
  const deleteEmployee = await prisma.employee.delete({ where: { id } });
  return deleteEmployee;
};
