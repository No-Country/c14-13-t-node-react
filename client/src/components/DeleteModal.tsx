import React from 'react';
import { ActionBase } from '@/types/common';
import { Text, Button } from './ui';

interface DeleteModalProps extends ActionBase {
  onClose: () => void;
}

/**
 * "customers" | "vehicles" | "users" | "employees" | "orders" | "mechanics" | "services"
 */

const TitleOptions = {
  customers: 'Cliente',
  vehicles: 'Vehículo',
  users: 'Usuario',
  employees: 'Empleado',
  orders: 'Orden',
  mechanics: 'Mecánico',
  services: 'Servicio',
};

export const DeleteModal = ({
  id,
  category,
  deleteDescription,
  onClose,
}: DeleteModalProps) => {
  return (
    <div className='w-full pb-2 pl-6 pr-2 pt-6'>
      <Text variant='modalTitle' className='mb-4'>{`Borrar ${TitleOptions[category]}`}</Text>
      <Text variant='modalDescription' className='mb-6'>
        {deleteDescription}
      </Text>
      <div className='flex justify-end gap-3'>
        <Button variant='cancel' onClick={onClose}>
          Cancelar
        </Button>
        <Button variant='delete' onClick={onClose} className='bg-red-600'>
          Borrar
        </Button>
      </div>
    </div>
  );
};
