import type { Vehicle, NewVehicle } from '@/types/common';
import { axiosClient } from './AxiosClient';

export const createVehicle = async (vehicleData: NewVehicle) => {
  const result = await axiosClient.post<{ vehicle: Vehicle }>('/vehicles', vehicleData);
  return result.data;
};

export const getVehicles = async () => {
  const result = await axiosClient.get<{ vehicles: Vehicle[] }>('/vehicles');
  return result.data;
};

export const deleteVehicle = async (vehicleId: number) => {
  const result = await axiosClient.delete<{ vehicle: Vehicle }>(`/vehicles/${vehicleId}`);
  return result.data;
};
