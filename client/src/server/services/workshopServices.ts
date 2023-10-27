import { prisma } from '@/server/db';
import type { NewWorkshopService } from '@/types/common';

export const getAllWorkshopServices = async () => {
  return await prisma?.service.findMany();
};

export const createWorkshopService = async (workshopServiceData: NewWorkshopService) => {
  return await prisma.service.create({ data: workshopServiceData });
};

export const getWorkshopServiceById = async (params: unknown) => {
  return await prisma.service.findFirst();
};

export const updateWorkshopService = async (params: unknown) => {};

export const removeWorkshopService = async (params: unknown) => {};
