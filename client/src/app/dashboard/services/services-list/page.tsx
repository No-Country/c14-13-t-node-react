import React from 'react';
import { WorkshopServicesTable } from '@/components/Tables';
import { TableSkeleton } from '@/components/TableSkeleton';

export default function page() {
  return (
    <>
      <WorkshopServicesTable>
        <TableSkeleton />
      </WorkshopServicesTable>
    </>
  );
}
