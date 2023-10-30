import type { Mechanic, NewMechanic } from '@/types/common';
import { axiosClient } from './AxiosClient';

export const createMechanic = async (mechanicData: NewMechanic) => {
  const result = await axiosClient.post<{ mechanic: Mechanic }>('/mechanics', mechanicData);
  return result.data;
};

export const getMechanics = async () => {
  const result = await axiosClient.get<{ mechanics: Mechanic[] }>('/mechanics');
  return result.data;
};

export const deleteMechanic = async (mechanicId: number) => {
  const result = await axiosClient.delete<{ mechanic: Mechanic }>(`/mechanics/${mechanicId}`);
  return result.data;
};
