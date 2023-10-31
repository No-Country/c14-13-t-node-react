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
import { deleteVehicle, getVehicles } from '@/services/vehicleService';
import { usePagination } from '@/hooks/usePagination';
import { StatusChip } from '../StatusChip';
import { ActionsButtons } from '../ActionsButtons';
import { TableContainer } from '../TableContainer';

export const VehiclesTable = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['vehicles'],
    queryFn: getVehicles,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const itemsPerPage = 10;
  const { currentPage, setCurrentPage, totalPages, PaginationButtons } = usePagination(
    data?.vehicles.length ?? 1,
    itemsPerPage,
  );

  if (isLoading) return <div className='w-full'>{children}</div>;
  if (isError) return <div>Error: {String(error)}</div>;
  if (data.vehicles.length === 0) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div>No hay Vehículos para mostrar</div>
      </div>
    );
  }
  const reversedVehicles = [...data.vehicles].reverse();
  const vehiclesOnCurrentPage = reversedVehicles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  return (
    <TableContainer>
      <Text variant='title' className='mb-4 text-center text-slate-800 dark:text-white'>
        Lista de Vehículos
      </Text>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Placa</TableHead>
            <TableHead>Marca</TableHead>
            <TableHead>Modelo</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Año</TableHead>
            <TableHead>Estatus</TableHead>
            <TableHead className='text-center'>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehiclesOnCurrentPage.map(({ id, plate, brand, model, color, isActive, year }) => (
            <TableRow key={id}>
              <TableCell>{plate}</TableCell>
              <TableCell>{brand}</TableCell>
              <TableCell>{model}</TableCell>
              <TableCell>{color}</TableCell>
              <TableCell>{year}</TableCell>
              <TableCell>
                <StatusChip isActive={isActive} />
              </TableCell>
              <TableCell className='flex items-center justify-center'>
                <ActionsButtons
                  deleteFunction={deleteVehicle}
                  id={id}
                  category='vehicles'
                  deleteDescription={`Esta seguro que desea borrar el vehículo, Placa: ${plate}. También se borraran las ordenes relacionadas`}
                />
              </TableCell>
            </TableRow>
          ))}
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
