'use client';
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { useQuery } from '@tanstack/react-query';
import { getCustomers } from '@/services/customerService';
import StatusChip from './StatusChip';

export const CustomersTable = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomers,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {String(error)}</div>;
  if (data.customers.length === 0) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div>No hay clientes</div>
      </div>
    );
  }
  return (
    <>
      <div className='mb-4 text-slate-800 dark:text-white'>Lista de Clientes</div>
      <Table>
        <TableCaption>Lista de Clientes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>DNI</TableHead>
            <TableHead className='w-[50rem]'>Nombre</TableHead>
            <TableHead className='w-[50rem]'>Apellido</TableHead>
            <TableHead>Correo Electrónico</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Estatus</TableHead>
            <TableHead className='text-right'>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.customers.map(({ dni, firstName, lastName, email, phone, isActive }) => (
            <TableRow key={dni}>
              <TableCell>{dni}</TableCell>
              <TableCell className='font-medium'>{firstName}</TableCell>
              <TableCell className='font-medium'>{lastName}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{phone}</TableCell>
              <TableCell>
                <StatusChip isActive={isActive} />
              </TableCell>
              <TableCell className='text-right'>Ver - Borrar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
