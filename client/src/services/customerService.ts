import axios from 'axios';
import type { NewCustomer, Customer } from '@/types/common';

const BASE_URL = 'http://localhost:3000/api/'; //En producción debería cambiar

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
