import React from 'react';
import { MechanicsTable } from '@/components/Tables';
import { TableSkeleton } from '@/components/TableSkeleton';

export default function page() {
  return (
    <>
      <MechanicsTable>
        <TableSkeleton />
      </MechanicsTable>
    </>
  );
}
