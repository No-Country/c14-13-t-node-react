import React from 'react';
import { cn } from '@/utils/cn';

interface LabelProps {
  id: string;
  label: string;
  className?: string;
}

export const Label = ({ id, label, className }: LabelProps) => {
  return (
    <label
      htmlFor={id}
      className={cn('text-sm font-medium text-slate-900 dark:text-slate-200', className)}
    >
      {label}
    </label>
  );
};
