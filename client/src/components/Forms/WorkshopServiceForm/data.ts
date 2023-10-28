import { WorkshopServiceCreationSchemaType } from './types';
import { FormItems } from '@/types/formTypes';

export const createWorkshopServiceFields: FormItems<WorkshopServiceCreationSchemaType> = [
  {
    id: 'service',
    label: 'Nombre del Servicio',
  },
  {
    id: 'serviceCode',
    label: 'Código del Servicio',
  },
  {
    id: 'servicePrice',
    label: 'Precio del Servicio',
  },
  {
    id: 'description',
    label: 'Descripción',
    fieldType: 'textarea',
  },
];
