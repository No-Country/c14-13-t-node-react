import React from 'react';
import { UsersTable } from '@/components/UsersTable';
import { TableSkeleton } from '@/components/TableSkeleton';

export default async function page() {
  return (
    <>
      <UsersTable>
        <TableSkeleton />
      </UsersTable>
    </>
  );
}
