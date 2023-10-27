import { prisma } from '@/server/db';
import type { NewVehicle } from '@/types/common';

export const getAllVehicles = async () => {
  return await prisma?.vehicle.findMany();
};

// ERROR DE TIPO  REVISAR RAD
export const getVehicleByPlate = async (plate: string) => {
  const vehicle = await prisma.vehicle.findUnique({ where: { plate } });
  return vehicle;
};

export const createVehicle = async (vehicleData: NewVehicle) => {
  return await prisma.vehicle.create({ data: vehicleData });
};

// export const updateVehicle = async (vehicleData: UpdateVehicle) => {
//   return await prisma.vehicle.update({ where: { plate } });
// };

// export const deleteVehicle = async (vehicleData: deleteVehicle) => {
//   return await prisma.vehicle.delete({ where: { plate } });
// };
