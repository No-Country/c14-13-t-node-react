import { prisma } from '@/server/db';
import type { NewWorkshop } from '@/types/common';

export const getAllWorkshops = async () => {
  return await prisma?.workshop.findMany();
};

export const createWorkshop = async (workshopData: NewWorkshop) => {
  return await prisma.workshop.create({ data: workshopData });
};

export const getWorkshopById = async (params: unknown) => {
  return await prisma.workshop.findFirst();
};

export const updateWorkshop = async (params: unknown) => {};

export const removeWorkshop = async (params: unknown) => {};
