import type { Employee, NewEmployee } from '@/types/common';
import { axiosClient } from './AxiosClient';

export const createEmployee = async (employeeData: NewEmployee) => {
  const result = await axiosClient.post<{ employee: Employee }>('/employees', employeeData);
  return result.data;
};

export const getEmployees = async () => {
  const result = await axiosClient.get<{ employees: Employee[] }>('/employees');
  return result.data;
};

export const deleteEmployee = async (employeeId: number) => {
  const result = await axiosClient.delete<{ employee: Employee }>(`/employees/${employeeId}`);
  return result.data;
};
