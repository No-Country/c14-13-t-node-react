import { NewWorkshopService, WorkshopServiceUpdateForm } from '@/types/common';
import { FormItems } from '@/types/formTypes';

export const createWorkshopServiceFields: FormItems<NewWorkshopService> = [
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
export const updateWorkshopServiceFields: FormItems<WorkshopServiceUpdateForm> = [
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
    id: 'isActive',
    label: 'Estado',
    fieldType: 'select',
    options: ['Activo', 'Inactivo'],
  },
  {
    id: 'description',
    label: 'Descripción',
    fieldType: 'textarea',
  },
];
