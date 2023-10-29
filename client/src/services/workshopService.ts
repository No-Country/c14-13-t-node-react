import type { NewWorkshopService, WorkshopService } from '@/types/common';
import { axiosClient } from './AxiosClient';

export const createWorkshopService = async (data: NewWorkshopService) => {
  const result = await axiosClient.post<{ workshopService: WorkshopService }>(
    '/workshopServices',
    data,
  );
  return result.data;
};

export const getWorkshopService = async () => {
  const result = await axiosClient.get<{ workshopServices: WorkshopService[] }>(
    '/workshopServices',
  );
  return result.data;
};

export const deleteWorkshopService = async (id: number) => {
  const result = await axiosClient.delete<{ workshopService: WorkshopService }>(
    `/workshopServices/${id}`,
  );
  return result.data;
};
