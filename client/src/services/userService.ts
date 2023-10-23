import axios from 'axios';
import type { SessionUser, NewUser } from '@/types/common';

const BASE_URL = 'http://localhost:3000/api/'; //En producción debería cambiar

const axiosClient = axios.create({ baseURL: BASE_URL });

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
  const response = await axios.get(`/users/${userId}`);
  return response.data;
};

export const updateUser = async <T>(userData: T) => {
  const response = await axios.put('/users', userData);
  return response.data;
};

export const deleteUser = async (userId: number) => {
  const response = await axios.delete(`/users/${userId}`);
  return response.data;
};

//Vehicles Crud

// export const createVehicle = async <T>(userData: T) => {
//   const result = await axiosClient.post<Algo>('/vehicules', userData);
//   return result.data;
// };

// export const getVehicles = async () => {
//   const result = await axiosClient.get<Algo[]>('/vehicules');
//   return result.data;
// };
