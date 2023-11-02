import React from 'react';
import { OrdersTable } from '@/components/Tables';
import { TableSkeleton } from '@/components/TableSkeleton';

export default function page() {
  return (
    <>
      <OrdersTable>
        <TableSkeleton />
      </OrdersTable>
    </>
  );
}
