import type { FullOrder } from '@/types/common';
import { axiosClient } from './AxiosClient';

export const getNewOrders = async () => {
  const result = await axiosClient.get<{ newOrders: FullOrder[] }>('/new-orders');
  return result.data;
};
