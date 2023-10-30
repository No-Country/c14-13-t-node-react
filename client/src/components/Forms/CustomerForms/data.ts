import { TextFieldItem, FormItems } from '@/types/formTypes';
import { NewCustomer, CustomerUpdateForm } from '@/types/common';

export const createCustomerFields: TextFieldItem<NewCustomer>[] = [
  {
    id: 'firstName',
    label: 'Nombre',
  },
  { id: 'lastName', label: 'Apellido' },
  {
    id: 'dni',
    label: 'DNI',
  },
  {
    id: 'email',
    label: 'Correo Electrónico',
    placeholder: 'correo@ejemplo.com',
  },
  {
    id: 'city',
    label: 'Ciudad',
  },
  {
    id: 'phone',
    label: 'Teléfono',
    placeholder: '51 999 999 999',
  },
  {
    id: 'address',
    label: 'Dirección',
    fieldType: 'textarea',
  },
];

type Active = CustomerUpdateForm['isActive'];
const activeOptions: Active[] = ['Activo', 'Inactivo'];
export const updateCustomerFields: FormItems<CustomerUpdateForm> = [
  {
    id: 'firstName',
    label: 'Nombre',
  },
  { id: 'lastName', label: 'Apellido' },
  {
    id: 'dni',
    label: 'DNI',
  },
  {
    id: 'email',
    label: 'Correo Electrónico',
    placeholder: 'correo@ejemplo.com',
  },
  {
    id: 'city',
    label: 'Ciudad',
  },
  {
    id: 'phone',
    label: 'Teléfono',
    placeholder: '51 999 999 999',
  },
  {
    id: 'isActive',
    label: 'Estado',
    fieldType: 'select',
    options: activeOptions,
  },
  {
    id: 'address',
    label: 'Dirección',
    fieldType: 'textarea',
  },
];
