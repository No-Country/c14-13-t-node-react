import { prisma } from '@/server/db';
import type { NewWorkshop } from '@/types/common';

export const getAllWorkshops = async () => {
  return await prisma?.workshop.findMany();
};

export const createWorkshop = async (workshopData: NewWorkshop) => {
  return await prisma.workshop.create({ data: workshopData });
};

export const getWorkshopById = async (params: type) => {
  return await prisma.workshop.findFirst();
};

export const updateWorkshop = async (params: type) => {};

export const removeWorkshop = async (params: type) => {};
