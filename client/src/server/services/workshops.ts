import { prisma } from '@/server/db';
import type { NewWorkshop } from '@/types/common';

export const getAllWorkshops = async () => {
  return await prisma?.workshop.findMany();
};

export const getWorkshopById = async (id: number) => {
  const workshop = await prisma.workshop.findFirst({ where: { id } });
  return workshop;
};

export const createWorkshop = async (workshopData: NewWorkshop) => {
  return await prisma.workshop.create({ data: workshopData });
};

export const updateWorkshop = async (id: number, workshopData: NewWorkshop) => {
  return await prisma.workshop.update({ where: { id }, data: workshopData });
};

export const removeWorkshop = async (id: number) => {
  const deleteWorkshop = await prisma.workshop.delete({ where: { id } });
  return deleteWorkshop;
};
