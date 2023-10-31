import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export const TableContainer = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'w-full rounded-3xl bg-white pt-4 dark:bg-primary-lightBackground',
        className,
      )}
    >
      {children}
    </div>
  );
});

TableContainer.displayName = 'TableContainer';
