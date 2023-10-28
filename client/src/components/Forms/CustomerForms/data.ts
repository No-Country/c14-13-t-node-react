import { TextFieldItem } from '@/types/formTypes';
import { CustomerFormSchemaType } from './types';

export const createCustomerFields: TextFieldItem<CustomerFormSchemaType>[] = [
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
