import { forwardRef } from 'react';

export const TableContainer = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className='w-full rounded-3xl bg-gray-100 pt-4 dark:bg-primary-lightBackground'
      >
        {children}
      </div>
    );
  },
);

TableContainer.displayName = 'TableContainer';
