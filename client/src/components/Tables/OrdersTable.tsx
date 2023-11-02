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
import { TableContainer } from '../TableContainer';
import { useQuery } from '@tanstack/react-query';
import { getOrders } from '@/services/orders';
import { usePagination } from '@/hooks/usePagination';

export const OrdersTable = ({ children }: { children: React.ReactNode }) => {
  const tableHead = ['Orden', 'Cliente', 'Vehículo', 'Servicio', 'Fecha de Entrega', 'Costo'];
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
    // refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const itemsPerPage = 10;
  const { currentPage, setCurrentPage, totalPages, PaginationButtons } = usePagination(
    orders?.length ?? 1,
    itemsPerPage,
  );

  if (isLoading) return <div className='w-full'>{children}</div>;
  if (isError) return <div>Error: {String(error)}</div>;
  if (orders?.length === 0) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div>No hay Ordenes para mostrar</div>
      </div>
    );
  }
  const ordersOnCurrentPage = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <TableContainer className='mt-4'>
      <Text variant='title' className='mb-4 text-center text-slate-800 dark:text-white'>
        Lista de Ordenes
      </Text>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHead.map((head) => (
              <TableHead key={head} className='text-center'>
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ordersOnCurrentPage.map(({ id, vehicle, orderServices, departureDate, cost }) => {
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
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <PaginationButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </TableContainer>
  );
};
