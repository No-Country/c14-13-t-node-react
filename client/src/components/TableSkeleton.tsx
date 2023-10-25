import React from 'react';
import { Skeleton } from './ui';

export const TableSkeleton = () => {
  return (
    <div className='flex w-full flex-col items-center gap-4 pt-7'>
      <Skeleton className='h-9 w-60' />
      <div className='flex h-full w-full flex-col items-center gap-3'>
        <Skeleton className='h-10 w-4/5' />
        <Skeleton className='h-10 w-4/5' />
        <Skeleton className='h-10 w-4/5' />
        <Skeleton className='h-10 w-4/5' />
        <Skeleton className='h-10 w-4/5' />
        <Skeleton className='h-10 w-4/5' />
      </div>
    </div>
  );
};
