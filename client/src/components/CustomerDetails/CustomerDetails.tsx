'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCustomerById } from '@/services/customerService';
import { Customer } from '@/types/common';
import DetailsCard from '../DetailsCard';
import { cn } from '@/utils/cn';
import { VehicleForm } from '../Forms';
import { Spinner } from '../ui';

export const ClientDetails = ({ id }: { id: number }) => {
  const [pestaña, setPestaña] = useState<'resumen' | 'vehiculos' | 'ordenes'>('resumen');
  const {
    data: customer,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['customers', id],
    queryFn: () => getCustomerById(id),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  if (isLoading)
    return (
      <div className='flex min-h-screen w-full items-center justify-center text-slate-800 dark:text-slate-200'>
        <Spinner className='h-10 w-10' />
      </div>
    );
  if (isError)
    return <div className='text-slate-800 dark:text-slate-200'>Error: {String(error)}</div>;
  const infoRows = [
    { label: 'Nombre', value: customer?.customer.firstName },
    { label: 'Apellido', value: customer?.customer.lastName },
    { label: 'DNI', value: customer?.customer.dni },
    { label: 'Correo Electrónico', value: customer?.customer.email },
    { label: 'Teléfono', value: customer?.customer.phone },
    { label: 'Dirección', value: customer?.customer.address },
    { label: 'Ciudad', value: customer?.customer.city },
    { label: 'Estatus', value: customer?.customer.isActive ? 'Activo' : 'Inactivo' },
  ];
  return (
    <div className='flex h-full w-full pt-6'>
      <DetailsCard title='Datos del Cliente' infoRows={infoRows} />
      <div className='flex w-full flex-col items-center'>
        <div className='flex gap-6'>
          <span
            onClick={() => setPestaña('resumen')}
            className={cn(
              'cursor-pointer text-lg font-semibold text-slate-800 hover:text-blue-600 dark:text-slate-200',
              pestaña === 'resumen' && 'text-blue-600 dark:text-blue-500',
            )}
          >
            Resumen
          </span>
          <span
            onClick={() => setPestaña('vehiculos')}
            className={cn(
              'cursor-pointer text-lg font-semibold text-slate-800 hover:text-blue-600 dark:text-slate-200',
              pestaña === 'vehiculos' && 'text-blue-600 dark:text-blue-500',
            )}
          >
            Agregar Vehículo
          </span>
          <span
            onClick={() => setPestaña('ordenes')}
            className={cn(
              'cursor-pointer text-lg font-semibold text-slate-800 hover:text-blue-600 dark:text-slate-200',
              pestaña === 'ordenes' && 'text-blue-600 dark:text-blue-500',
            )}
          >
            Crear Orden
          </span>
        </div>
        {pestaña === 'resumen' && (
          <div className='animate-fadeIn bg-green-300 text-slate-800'>Lista de Vehículos</div>
        )}
        {pestaña === 'vehiculos' && (
          <span className='animate-fadeIn'>
            <VehicleForm />
          </span>
        )}
        {pestaña === 'ordenes' && (
          <div className='animate-fadeIn bg-green-300 text-slate-800'>Formulario ordenes</div>
        )}
      </div>
    </div>
  );
};
