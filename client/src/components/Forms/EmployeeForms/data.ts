import { NewEmployeeCreationSchemaType } from './types';
import { FormItems } from '@/types/formTypes';

export const createEmployeeFields: FormItems<NewEmployeeCreationSchemaType> = [
  {
    id: 'name',
    label: 'Nombre',
    placeholder: 'Juan Martinez',
  },
  {
    id: 'dni',
    label: 'DNI',
  },
  {
    id: 'phone',
    label: 'Teléfono',
    placeholder: '51 999 999 999',
  },
  {
    id: 'city',
    label: 'Ciudad',
  },
  {
    id: 'address',
    label: 'Dirección',
    fieldType: 'textarea',
  },
];
