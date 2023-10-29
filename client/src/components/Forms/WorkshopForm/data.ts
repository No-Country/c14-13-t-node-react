import { WorkshopCreationSchemaType } from './types';
import { FormItems } from '@/types/formTypes';

export const createWorkshopFields: FormItems<WorkshopCreationSchemaType> = [
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
