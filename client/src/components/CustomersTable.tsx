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
import { useQuery } from '@tanstack/react-query';
import { getCustomers } from '@/services/customerService';
import { usePagination } from '@/hooks/usePagination';
import { StatusChip } from './StatusChip';
import { ActionsButtons } from './ActionsButtons';
import { TableContainer } from './TableContainer';

export const CustomersTable = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomers,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const itemsPerPage = 10;
  const { currentPage, setCurrentPage, totalPages, PaginationButtons } = usePagination(
    data?.customers.length ?? 1,
    itemsPerPage,
  );

  if (isLoading) return <div className='w-full'>{children}</div>;
  if (isError) return <div>Error: {String(error)}</div>;
  if (data.customers.length === 0) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div>No hay clientes</div>
      </div>
    );
  }
  const customersOnCurrentPage = data.customers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  return (
    <TableContainer>
      <Text variant='title' className='mb-4 text-center text-slate-800 dark:text-white'>
        Lista de Clientes
      </Text>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>DNI</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido</TableHead>
            <TableHead>Correo Electrónico</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Estatus</TableHead>
            <TableHead className='text-center'>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customersOnCurrentPage.map(
            ({ id, dni, firstName, lastName, email, phone, isActive }) => (
              <TableRow key={dni}>
                <TableCell>{dni}</TableCell>
                <TableCell className='font-medium'>{firstName}</TableCell>
                <TableCell className='font-medium'>{lastName}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>
                  <StatusChip isActive={isActive} />
                </TableCell>
                <TableCell className='flex items-center justify-center'>
                  <ActionsButtons id={id} category='customers' />
                </TableCell>
              </TableRow>
            ),
          )}
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
