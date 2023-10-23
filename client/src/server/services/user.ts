import { prisma } from '@/server/db';
import type { NewUser } from '@/types/common';

export const existingUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
};
export const existingUserByUsername = async (username: string) => {
  const user = await prisma.user.findUnique({ where: { username } });
  return user;
};
export const createUser = async (userData: NewUser) => {
  //Password should not be returned
  const { password, ...rest } = await prisma.user.create({ data: userData });
  return rest;
};
export const getUsers = async () => {
  const res = await prisma?.user.findMany();
  const users = res?.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    image: user.image,
    isActivated: user.isActivated,
    role: user.role,
  }));
  return users;
};
