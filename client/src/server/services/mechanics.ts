import { prisma } from '@/server/db';
import type { NewMechanic } from '@/types/common';

export const getAllMechanics = async () => {
  return await prisma?.mechanic.findMany();
};

export const getMechanicById = async (id: number) => {
  const mechanic = await prisma.mechanic.findFirst({ where: { id } });
  return mechanic;
};

export const getMechanicByDni = async (DNI: string) => {
  const mechanic = await prisma.mechanic.findFirst({ where: { dni: DNI } });
  return mechanic;
};

export const createMechanic = async (mechanicData: NewMechanic) => {
  return await prisma.mechanic.create({ data: mechanicData });
};

export const updateMechanic = async (id: number, mechanicData: NewMechanic) => {
  return await prisma.mechanic.update({ where: { id }, data: mechanicData });
};

export const removeMechanic = async (id: number) => {
  const deleteMechanic = await prisma.mechanic.delete({ where: { id } });
  return deleteMechanic;
};
