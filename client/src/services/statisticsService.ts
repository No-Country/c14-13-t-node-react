import type { Statistics } from '@/types/common';
import { axiosClient } from './AxiosClient';

export const getStatistics = async () => {
  const result = await axiosClient.get<Statistics>('/statistics');
  return result.data;
};
