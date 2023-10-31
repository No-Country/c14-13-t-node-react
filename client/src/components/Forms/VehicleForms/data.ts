import { FormItems } from '@/types/formTypes';
import { VehicleCreationSchemaType, VehicleUpdateForm } from '@/types/common';

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
    placeholder: 'Seleccione una opción',
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

export const updateVehicleFields: FormItems<VehicleUpdateForm> = [
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
    placeholder: 'Seleccione una opción',
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
    id: 'isActive',
    label: 'Estado',
    fieldType: 'select',
    options: ['Activo', 'Inactivo'],
  },
  {
    id: 'comments',
    label: 'Comentarios',
    fieldType: 'textarea',
  },
];
