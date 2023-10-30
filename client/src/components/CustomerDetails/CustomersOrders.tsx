'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from '@/components/ui';
import { usePagination } from '@/hooks/usePagination';
import { ActionsButtons } from '../ActionsButtons';
import { TableContainer } from '../TableContainer';
import React from 'react';
import { FullOrder } from '@/types/common';
import { convertStatusFromPrisma } from '@/utils/status';

interface CustomersOrdersProps {
  orders: FullOrder[];
}

export const CustomersOrders = ({ orders }: CustomersOrdersProps) => {
  const itemsPerPage = 10;
  const { currentPage, setCurrentPage, totalPages, PaginationButtons } = usePagination(
    orders.length ?? 1,
    itemsPerPage,
  );

  if (orders.length === 0) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div>Este cliente no tiene ordenes</div>
      </div>
    );
  }
  const reversedCustomers = [...orders].reverse();
  const ordersOnCurrentPage = reversedCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  return (
    <TableContainer>
      <Text variant='title' className='mb-4 text-center text-slate-800 dark:text-white'>
        Lista de Ordenes
      </Text>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>N°</TableHead>
            <TableHead>Vehículo</TableHead>
            <TableHead className='min-w-[8rem]'>Fecha de Entrada</TableHead>
            <TableHead>Mecánico</TableHead>
            <TableHead>Estatus</TableHead>
            <TableHead>Costo</TableHead>
            <TableHead className='text-center'>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ordersOnCurrentPage.map(({ id, vehicle, entryDate, mechanic, status, cost }) => {
            const date = new Date(entryDate);
            const formatedDate = new Intl.DateTimeFormat('es-ES', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }).format(date);
            return (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{vehicle.plate}</TableCell>
                <TableCell>{formatedDate}</TableCell>
                <TableCell>{mechanic.name}</TableCell>
                <TableCell>{convertStatusFromPrisma(status ?? 'pending')}</TableCell>
                <TableCell>{cost}</TableCell>
                <TableCell className='flex items-center justify-center'>
                  {
                    <ActionsButtons
                      id={id}
                      deleteFunction={() =>
                        console.log(id) as unknown as Promise<Record<string, unknown>>
                      }
                      category='orders'
                      deleteDescription={`Esta seguro que desea borrar la orden: ${id}?
                    `}
                    />
                  }
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {orders?.length > 10 && (
        <PaginationButtons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </TableContainer>
  );
};
