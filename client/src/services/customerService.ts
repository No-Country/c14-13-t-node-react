import type {
  NewCustomer,
  Customer,
  CustomerUpdate,
  FullOrder,
  Vehicle,
} from '@/types/common';
import { axiosClient } from './AxiosClient';

//Users Crud

export const registerCustomer = async (customerData: NewCustomer) => {
  const result = await axiosClient.post<{ customer: Customer }>('/customers', customerData);
  return result.data;
};

export const getCustomers = async () => {
  const result = await axiosClient.get<{ customers: Customer[] }>('/customers');
  return result.data;
};

export const getCustomerById = async (id: number) => {
  const result = await axiosClient.get<{ customer: Customer }>(`/customers/${id}`);
  return result.data;
};
export const getCustomerVehicles = async (id: number) => {
  const result = await axiosClient.get<{ vehicles: Vehicle[] }>(`/customers/${id}/vehicles`);
  return result.data;
};
export const getCustomerOrders = async (id: number) => {
  const result = await axiosClient.get<{ orders: FullOrder[] }>(`/customers/${id}/orders`);
  return result.data;
};

export const updateCustomer = async (id: number, customerData: CustomerUpdate) => {
  const result = await axiosClient.patch<{ customer: Customer }>(
    `/customers/${id}`,
    customerData,
  );
  return result.data;
};

export const deleteCustomer = async (id: number) => {
  const result = await axiosClient.delete<{ customer: Customer }>(`/customers/${id}`);
  return result.data;
};
