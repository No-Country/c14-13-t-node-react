import { prisma } from '@/server/db';
import type { NewWorkshopService } from '@/types/common';

export const getAllWorkshopServices = async () => {
  return await prisma?.service.findMany();
};

export const getWorkshopServiceById = async (id: number) => {
  const workshopService = await prisma.service.findFirst({ where: { id } });
  return workshopService;
};

export const createWorkshopService = async (workshopServiceData: NewWorkshopService) => {
  return await prisma.service.create({ data: workshopServiceData });
};

export const updateWorkshopService = async (
  id: number,
  workshopServiceData: NewWorkshopService,
) => {
  return await prisma.service.update({ where: { id }, data: workshopServiceData });
};

export const removeWorkshopService = async (id: number) => {
  const deleteWorkshopService = await prisma.service.delete({ where: { id } });
  return deleteWorkshopService;
};
