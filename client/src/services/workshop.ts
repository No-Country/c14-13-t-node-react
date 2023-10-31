import type { Workshop } from '@/types/common';
import { axiosClient } from './AxiosClient';

/**
 * De momento, la app es para un único taller, se puede actualizar datos,
 * pero preferiblemente no ir creando / borrando mas.
 */
export const getWorkshop = async () => {
  const result = await axiosClient.get<Workshop>('/workshops/1');
  return result.data;
};

export const updateWorkshop = async (workshopData: Workshop) => {
  const result = await axiosClient.patch<Workshop>(`/workshops/1`, workshopData);
  return result.data;
};
