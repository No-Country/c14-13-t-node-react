import React from 'react';
import { EmployeesTable } from '@/components/Tables';
import { TableSkeleton } from '@/components/TableSkeleton';

export default function page() {
  return (
    <>
      <EmployeesTable>
        <TableSkeleton />
      </EmployeesTable>
    </>
  );
}
