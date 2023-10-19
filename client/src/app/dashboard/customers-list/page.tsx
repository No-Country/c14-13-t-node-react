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

export default function page() {
  const invoices = [
    {
      name: 'Juan Martinez',
      dni: '4422123',
      totalAmount: '$250.00',
      email: 'correo@ejemplo.com',
    },
    {
      name: 'Juan Martinez',
      dni: '4422123',
      totalAmount: '$250.00',
      email: 'correo@ejemplo.com',
    },
    {
      name: 'Juan Martinez',
      dni: '4422123',
      totalAmount: '$250.00',
      email: 'correo@ejemplo.com',
    },
    {
      name: 'Juan Martinez',
      dni: '4422123',
      totalAmount: '$250.00',
      email: 'correo@ejemplo.com',
    },
    {
      name: 'Juan Martinez',
      dni: '4422123',
      totalAmount: '$250.00',
      email: 'correo@ejemplo.com',
    },
    {
      name: 'Juan Martinez',
      dni: '4422123',
      totalAmount: '$250.00',
      email: 'correo@ejemplo.com',
    },
    {
      name: 'Juan Martinez',
      dni: '4422123',
      totalAmount: '$250.00',
      email: 'correo@ejemplo.com',
    },
  ];
  return (
    <>
      <div className='mb-4 text-slate-800 dark:text-white'>Lista de Clientes</div>
      <Table>
        <TableCaption>Lista de Clientes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[10rem]'>Nombre</TableHead>
            <TableHead>DNI</TableHead>
            <TableHead>Correo Electrónico</TableHead>
            <TableHead className='text-right'>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.name}>
              <TableCell className='font-medium'>{invoice.name}</TableCell>
              <TableCell>{invoice.dni}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell className='text-right'>Ver - Borrar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
