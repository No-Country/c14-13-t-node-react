import type { Vehicle, NewVehicle, VehicleUpdate } from '@/types/common';
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

export const getVehicleById = async (vehicleId: number) => {
  const result = await axiosClient.get<Vehicle>(`/vehicles/${vehicleId}`);
  return result.data;
};

export const updateVehicle = async (id: number, vehicleData: VehicleUpdate) => {
  const result = await axiosClient.patch<Vehicle>(`/vehicles/${id}`, vehicleData);
  return result.data;
};
