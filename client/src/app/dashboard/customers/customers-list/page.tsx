import React from 'react';
import { CustomersTable } from '@/components/CustomersTable';
import { TableSkeleton } from '@/components/TableSkeleton';
export default function page() {
  return (
    <>
      <CustomersTable>
        <TableSkeleton />
      </CustomersTable>
    </>
  );
}
