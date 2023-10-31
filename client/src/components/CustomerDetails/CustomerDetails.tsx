'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useModal } from '@/hooks/useModal';
import { getCustomerById } from '@/services/customerService';
import { Customer } from '@/types/common';
import DetailsCard from '../DetailsCard';
import { cn } from '@/utils/cn';
import { VehicleForm } from '../Forms';
import { Spinner } from '../ui';
import { Resumen } from './Resumen';
import { EditCustomerForm } from '../Forms/CustomerForms/EditCustomerForm';

type Tabs = 'resumen' | 'vehiculos' | 'ordenes';

const temporal = () => (
  <div className='flex w-full flex-col items-center'>Tablas de vehiculos y ordenes</div>
);

type Views = {
  resumen: typeof Resumen;
  vehiculos: typeof VehicleForm;
  ordenes: typeof temporal;
};

const views: Views = {
  resumen: Resumen,
  vehiculos: VehicleForm,
  ordenes: temporal,
};

export const ClientDetails = ({ id }: { id: number }) => {
  const [editModal, showEditModal] = useModal();
  const [pestaña, setPestaña] = useState<Tabs>('resumen');
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
  const CurrentView = views[pestaña];
  const pestañas = [
    {
      name: 'resumen',
      label: 'Resumen',
    },
    {
      name: 'vehiculos',
      label: 'Agregar Vehículo',
    },
    {
      name: 'ordenes',
      label: 'Crear Orden',
    },
  ] as const;
  const handleEdit = () => {
    const newActive: 'Activo' | 'Inactivo' = customer?.customer.isActive
      ? 'Activo'
      : 'Inactivo';
    const defaultValues = {
      ...customer?.customer,
      isActive: newActive,
    };
    showEditModal(true, (onClose) => (
      <EditCustomerForm id={id} defaultValues={defaultValues} onClose={onClose} />
    ));
  };
  return (
    <div className='flex h-full w-full pt-6'>
      <DetailsCard handleEdit={handleEdit} title='Datos del Cliente' infoRows={infoRows} />
      <div className='flex w-full flex-col items-center space-y-10'>
        <div className='flex gap-6'>
          {pestañas.map((tab, index) => (
            <button
              type='button'
              key={index + tab.name}
              onClick={() => setPestaña(tab.name)}
              className={cn(
                'cursor-pointer border-b-4 border-b-transparent pb-3 text-lg font-semibold text-slate-800 duration-300 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-500',
                tab.name === pestaña && 'border-b-4 border-b-blue-500',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <span key={pestaña} className='flex w-full animate-fadeIn justify-center'>
          <CurrentView customerId={id} />
        </span>
      </div>
      {editModal}
    </div>
  );
};
