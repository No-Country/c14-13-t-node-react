'use client';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from '@/components/ui';
import { ActionsButtons } from '../ActionsButtons';
import { FullOrder } from '@/types/common';
import { TableContainer } from '../TableContainer';

interface NewstOrdersTableProps {
  orders: FullOrder[];
}

const NewstOrdersTable = ({ orders }: NewstOrdersTableProps) => {
  const tableHead = ['Orden', 'Cliente', 'Vehículo', 'Servicio', 'Fecha de Entrega', 'Costo'];

  return (
    <TableContainer className='mt-4'>
      <Text variant='title' className='mb-4 text-center text-slate-800 dark:text-white'>
        Ultimas Ordenes
      </Text>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHead.map((head) => (
              <TableHead key={head} className='text-center'>
                {head}
              </TableHead>
            ))}
            <TableHead className='text-center'>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map(({ id, vehicle, orderServices, departureDate, cost }) => {
            const date = new Date(departureDate);
            const formatedDate = new Intl.DateTimeFormat('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(date);
            return (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{`${vehicle?.customer.firstName} ${vehicle?.customer.lastName}`}</TableCell>
                <TableCell>{`${vehicle?.plate.toUpperCase()}`}</TableCell>
                <TableCell>{orderServices[0]?.service.service ?? 'Aspirado'}</TableCell>
                <TableCell>{formatedDate}</TableCell>
                <TableCell>
                  {cost.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'symbol',
                  })}
                </TableCell>
                <TableCell className='flex items-center justify-center'>
                  <ActionsButtons
                    deleteFunction={() =>
                      console.log(id) as unknown as Promise<Record<string, unknown>>
                    }
                    id={id}
                    category='orders'
                    deleteDescription={`Esta seguro que desea borrar la orden ${id}`}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewstOrdersTable;
