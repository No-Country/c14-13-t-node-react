import type { Employee, NewEmployee, EmployeeUpdate } from '@/types/common';
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

export const getEmployeeById = async (employeeId: number) => {
  const result = await axiosClient.get<Employee>(`/employees/${employeeId}`);
  return result.data;
};

export const updateEmployee = async (id: number, employeeData: EmployeeUpdate) => {
  const result = await axiosClient.patch<Employee>(`/employees/${id}`, employeeData);
  return result.data;
};
