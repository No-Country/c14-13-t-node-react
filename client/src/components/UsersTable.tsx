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
import { getUsers } from '@/services/userService';
import StatusChip from './StatusChip';
export const UsersTable = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {String(error)}</div>;
  return (
    <>
      <div className='mb-4 text-slate-800 dark:text-white'>Lista de Usuarios</div>
      <Table>
        <TableCaption>Lista de Usuarios</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Correo Electrónico</TableHead>
            <TableHead>Estatus</TableHead>
            <TableHead>Rol</TableHead>
            <TableHead className='text-right'>Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.users.map(({ name, username, id, isActivated, email, role }) => (
            <TableRow key={name ?? username}>
              <TableCell>{id}</TableCell>
              <TableCell className='font-medium'>{name ?? username}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>
                <StatusChip isActive={isActivated} />
              </TableCell>
              <TableCell>{role === 'user' ? 'Usuario' : 'Administrador'}</TableCell>
              <TableCell className='text-right'>Ver - Borrar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
