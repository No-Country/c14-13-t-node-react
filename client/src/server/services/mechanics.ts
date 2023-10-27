import { prisma } from '@/server/db';
import type { NewMechanic } from '@/types/common';

export const getAllMechanics = async () => {
  return await prisma?.mechanic.findMany();
};

export const createMechanic = async (mechanicData: NewMechanic) => {
  return await prisma.mechanic.create({ data: mechanicData });
};

export const getMechanicById = async (params: unknown) => {
  return await prisma.mechanic.findFirst();
};

export const updateMechanic = async (params: unknown) => {};

export const removeMechanic = async (params: unknown) => {};
