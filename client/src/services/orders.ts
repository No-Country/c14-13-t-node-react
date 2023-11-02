import type { FullOrder } from '@/types/common';
import { axiosClient } from './AxiosClient';

export const getOrders = async () => {
  const result = await axiosClient.get<FullOrder[]>('/orders');
  return result.data;
};
