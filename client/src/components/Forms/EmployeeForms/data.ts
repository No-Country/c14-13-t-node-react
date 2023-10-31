import { NewEmployee, EmployeeUpdateForm } from '@/types/common';
import { FormItems } from '@/types/formTypes';

export const createEmployeeFields: FormItems<NewEmployee> = [
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
export const updateEmployeeFields: FormItems<EmployeeUpdateForm> = [
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
    id: 'isActive',
    label: 'Estado',
    fieldType: 'select',
    options: ['Activo', 'Inactivo'],
  },
  {
    id: 'address',
    label: 'Dirección',
    fieldType: 'textarea',
  },
];
