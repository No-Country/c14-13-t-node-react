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
import { Vehicle } from '@/types/common';
import { deleteVehicle } from '@/services/vehicleService';

interface VehiclesVehiclesProps {
  vehicles: Vehicle[];
}

export const CustomersVehicles = ({ vehicles }: VehiclesVehiclesProps) => {
  const itemsPerPage = 10;
  const { currentPage, setCurrentPage, totalPages, PaginationButtons } = usePagination(
    vehicles.length ?? 1,
    itemsPerPage,
  );

  if (vehicles.length === 0) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <Text variant='modalTitle' className='text-xl'>
          Este cliente no posee vehículos
        </Text>
      </div>
    );
  }
  const reversedVehicles = [...vehicles].reverse();
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
            <TableHead>Año</TableHead>
            <TableHead>Color</TableHead>
            <TableHead className='text-center'>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehiclesOnCurrentPage.map(({ id, plate, brand, model, year, color }) => (
            <TableRow key={id}>
              <TableCell>{plate}</TableCell>
              <TableCell>{brand}</TableCell>
              <TableCell>{model}</TableCell>
              <TableCell>{year}</TableCell>
              <TableCell>{color}</TableCell>
              <TableCell className='flex items-center justify-center'>
                <ActionsButtons
                  deleteFunction={deleteVehicle}
                  id={id}
                  category='vehicles'
                  deleteDescription={`Esta seguro que desea borrar el vehículo: ${plate},
                    también se borraran las ordenes asociadas
                    `}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {vehicles?.length > 10 && (
        <PaginationButtons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </TableContainer>
  );
};
