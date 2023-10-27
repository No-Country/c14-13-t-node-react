import React from 'react';
import { Skeleton } from './ui';

export const TableSkeleton = () => {
  return (
    <div className='flex w-full animate-pulse flex-col items-center gap-4 rounded-3xl bg-gray-200 py-7 dark:bg-primary-lightBackground'>
      <Skeleton className='h-9 w-60' />
      <div className='flex h-full w-full flex-col items-center gap-3'>
        <Skeleton className='h-10 w-[90%]' />
        <Skeleton className='h-10 w-[90%]' />
        <Skeleton className='h-10 w-[90%]' />
        <Skeleton className='h-10 w-[90%]' />
        <Skeleton className='h-10 w-[90%]' />
        <Skeleton className='h-10 w-[90%]' />
        <Skeleton className='h-10 w-[90%]' />
        <Skeleton className='h-10 w-[90%]' />
        <Skeleton className='h-10 w-[90%]' />
      </div>
    </div>
  );
};
