import React from 'react';
import { VehiclesTable } from '@/components/Tables';
import { TableSkeleton } from '@/components/TableSkeleton';

export default function page() {
  return (
    <>
      <VehiclesTable>
        <TableSkeleton />
      </VehiclesTable>
    </>
  );
}
