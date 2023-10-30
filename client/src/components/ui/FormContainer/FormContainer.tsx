import React from 'react';
import { cn } from '@/utils/cn';

export const FormContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'mt-10 w-[90%] max-w-[23.75rem] rounded-3xl bg-white p-7 dark:bg-primary-lightBackground',
        className,
      )}
    >
      {children}
    </div>
  );
};
