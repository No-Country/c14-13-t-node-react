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
  Text,
} from '@/components/ui';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/services/userService';
import StatusChip from './StatusChip';
import ActionsButtons from './ActionsButtons';

export const UsersTable = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  if (isLoading) return <>{children}</>;
  if (isError) return <div>Error: {String(error)}</div>;
  return (
    <div className='w-full pt-4'>
      <Text variant='title' className='mb-4 text-center text-slate-800 dark:text-white'>
        Lista de Usuarios
      </Text>
      <Table>
        <TableCaption>Lista de Usuarios</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Correo Electrónico</TableHead>
            <TableHead>Estatus</TableHead>
            <TableHead>Rol</TableHead>
            <TableHead className='text-center'>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.users.map(({ name, username, id, isActivated, email, role }) => (
            <TableRow key={name ?? username}>
              <TableCell className='font-medium'>{name ?? username}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>
                <StatusChip isActive={isActivated} />
              </TableCell>
              <TableCell>
                {role === 'user' || role === 'guest' ? 'Usuario' : 'Administrador'}
              </TableCell>
              <TableCell className='flex items-center justify-center'>
                <ActionsButtons id={id} category='users' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
