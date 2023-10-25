import axios from 'axios';
import type { NewCustomer, Customer } from '@/types/common';
import { getBaseUrl } from '@/utils/getUrl';

const BASE_URL = `${getBaseUrl()}/api/`; //En producción debería cambiar

const axiosClient = axios.create({ baseURL: BASE_URL });

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
