import { NewWorkshop, Workshop } from '@/types/common';
import { FormItems } from '@/types/formTypes';

export const createWorkshopFields: FormItems<NewWorkshop> = [
  {
    id: 'name',
    label: 'Nombre del Taller',
  },
  {
    id: 'nit',
    label: 'NIT',
  },
  {
    id: 'phone',
    label: 'Teléfono',
  },
  {
    id: 'email',
    label: 'Correo Electrónico',
  },
  {
    id: 'address',
    label: 'Dirección',
    fieldType: 'textarea',
  },
];

/**
 * Es el mismo, pero preferí mantenerlos separados
 */
export const updateWorkshopFields: FormItems<Workshop> = [
  {
    id: 'name',
    label: 'Nombre del Taller',
  },
  {
    id: 'nit',
    label: 'NIT',
  },
  {
    id: 'phone',
    label: 'Teléfono',
  },
  {
    id: 'email',
    label: 'Correo Electrónico',
  },
  {
    id: 'address',
    label: 'Dirección',
    fieldType: 'textarea',
  },
];
