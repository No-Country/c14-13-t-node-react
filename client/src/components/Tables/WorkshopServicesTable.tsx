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
import { deleteWorkshopService, getWorkshopService } from '@/services/workshopService';
import { usePagination } from '@/hooks/usePagination';
import { StatusChip } from '../StatusChip';
import { ActionsButtons } from '../ActionsButtons';
import { TableContainer } from '../TableContainer';

export const WorkshopServicesTable = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['services'],
    queryFn: getWorkshopService,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const itemsPerPage = 10;
  const { currentPage, setCurrentPage, totalPages, PaginationButtons } = usePagination(
    data?.workshopServices.length ?? 1,
    itemsPerPage,
  );

  if (isLoading) return <div className='w-full'>{children}</div>;
  if (isError) return <div>Error: {String(error)}</div>;
  if (data.workshopServices.length === 0) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div>No hay Vehículos para mostrar</div>
      </div>
    );
  }
  const workshopServicesOnCurrentPage = data.workshopServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  return (
    <TableContainer>
      <Text variant='title' className='mb-4 text-center text-slate-800 dark:text-white'>
        Lista de Servicios
      </Text>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Código</TableHead>
            <TableHead>Servicio</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Estatus</TableHead>
            <TableHead className='text-center'>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workshopServicesOnCurrentPage.map(
            ({ id, isActive, service, description, serviceCode, servicePrice }) => (
              <TableRow key={id}>
                <TableCell>{serviceCode}</TableCell>
                <TableCell>{service}</TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>{servicePrice}</TableCell>
                <TableCell>
                  <StatusChip isActive={isActive} />
                </TableCell>
                <TableCell className='flex items-center justify-center'>
                  <ActionsButtons
                    deleteFunction={deleteWorkshopService}
                    id={id}
                    category='services'
                    deleteDescription={`Esta seguro que desea borrar el servicio: ${service}. Borrarlo afectara a las ordenes relacionadas`}
                  />
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
