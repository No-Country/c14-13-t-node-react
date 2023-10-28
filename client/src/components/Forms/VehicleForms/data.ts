import { FormItems } from '@/types/formTypes';
import { VehicleCreationSchemaType } from './types';

const doorOptions: VehicleCreationSchemaType['doors'][] = ['2 Puertas', '4 Puertas'];

export const createVehicleFields: FormItems<VehicleCreationSchemaType> = [
  {
    id: 'plate',
    label: 'Placa',
  },
  {
    id: 'brand',
    label: 'Fabricante',
  },
  {
    id: 'model',
    label: 'Modelo',
  },
  { id: 'color', label: 'Color' },
  {
    id: 'doors',
    label: 'Numero de Puertas',
    fieldType: 'select',
    options: doorOptions,
  },
  {
    id: 'vehicleType',
    label: 'Tipo de Vehículo',
  },
  {
    id: 'year',
    label: 'Año',
  },
  {
    id: 'mileage',
    label: 'Kilometraje',
  },
  {
    id: 'comments',
    label: 'Comentarios',
    fieldType: 'textarea',
  },
];
