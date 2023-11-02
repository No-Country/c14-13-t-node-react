import { prisma } from '@/server/db';
import type { NewVehicle } from '@/types/common';

export const getAllVehicles = async () => {
  return await prisma?.vehicle.findMany();
};

// ERROR DE TIPO  REVISAR RAD
export const getVehicleByPlate = async (PLATE: string) => {
  const vehicle = await prisma.vehicle.findUnique({ where: { plate: PLATE } });
  return vehicle;
};

export const createVehicle = async (vehicleData: NewVehicle) => {
  return await prisma.vehicle.create({ data: vehicleData });
};

export const updateVehicle = async (id: number, vehicleData: NewVehicle) => {
  return await prisma.vehicle.update({ where: { id }, data: vehicleData });
};

export const deleteVehicle = async (id: number) => {
  return await prisma.vehicle.delete({ where: { id } });
};
