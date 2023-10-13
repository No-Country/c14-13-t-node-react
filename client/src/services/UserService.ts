import axios from 'axios';
import type { User } from '@/types/User';

const BASE_URL = 'http://localhost:3000/api/'; //En producción debería cambiar

const axiosClient = axios.create({ baseURL: BASE_URL });

//Users Crud

export const createUser = async <T>(userData: T) => {
  const result = await axiosClient.post<User>('/users', userData);
  return result.data;
};

export const getUsers = async () => {
  const result = await axiosClient.get<User[]>('/users');
  return result.data;
};

export const getUserDetails = async (userId: number) => {
  const response = await axios.get(`/users/${userId}`);
  return response.data;
};

export const updateUser = async <T>(body: T) => {
  const response = await axios.put('/users', body);
  return response.data;
};

export const deleteUser = async (userId: number) => {
  const response = await axios.delete(`/users/${userId}`);
  return response.data;
};

//Vehicles Crud

export const createVehicle = async <T>(userData: T) => {
  const result = await axiosClient.post<User>('/vehicules', userData);
  return result.data;
};

export const getVehicles = async () => {
  const result = await axiosClient.get<User[]>('/vehicules');
  return result.data;
};
