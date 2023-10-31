'use client';
import React from 'react';
import { ActionBase } from '@/types/common';
import { Text, Button, Spinner } from './ui';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';
import { AxiosError } from 'axios';

interface DeleteModalProps<T extends string | number> extends ActionBase<T> {
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

export const DeleteModal = <T extends string | number>({
  id,
  category,
  deleteDescription,
  onClose,
  deleteFunction,
}: DeleteModalProps<T>) => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const mutation = useMutation({
    mutationFn: (id: T) => {
      return deleteFunction(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([category], { refetchType: 'all' });
    },
  });
  const handleDelete = () => {
    setIsLoading(true);
    mutation.mutate(id, {
      onSuccess: () => {
        toast.success(`${TitleOptions[category]} borrado exitosamente`);
        setIsLoading(false);
        onClose();
      },
      onError: (error) => {
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
          setIsLoading(false);
        } else {
          toast.error('Error al enviar los datos');
        }
        onClose();
      },
    });
  };

  return (
    <div className='w-full max-w-[23.75rem] pb-2 pl-6 pr-2 pt-6'>
      <Text variant='modalTitle' className='mb-4'>{`Borrar ${TitleOptions[category]}`}</Text>
      <Text variant='modalDescription' className='mb-6'>
        {deleteDescription}
      </Text>
      <div className='flex justify-end gap-3'>
        <Button variant='cancel' onClick={onClose}>
          Cancelar
        </Button>
        <Button
          variant='delete'
          disabled={isLoading}
          onClick={handleDelete}
          className='bg-red-600'
        >
          {isLoading ? (
            <Spinner className='fill-red-300' />
          ) : (
            `Borrar ${TitleOptions[category]}`
          )}
        </Button>
      </div>
    </div>
  );
};
