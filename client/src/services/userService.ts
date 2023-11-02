import type { SessionUser, NewUser } from '@/types/common';
import { axiosClient } from './AxiosClient';

//Users Crud

export const registerUser = async (userData: NewUser) => {
  const result = await axiosClient.post<{ user: SessionUser; message: string }>(
    '/users',
    userData,
  );
  return result.data;
};

export const getUsers = async () => {
  const result = await axiosClient.get<{ users: SessionUser[] }>('/users');
  return result.data;
};

export const getUserDetails = async (userId: number) => {
  const response = await axiosClient.get(`/users/${userId}`);
  return response.data;
};

export const updateUser = async <T>(userData: T) => {
  const response = await axiosClient.put('/users', userData);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axiosClient.delete(`/users/${userId}`);
  return response.data;
};
