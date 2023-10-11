import * as React from 'react';

import { cn } from '@/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isError = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'relative box-border inline-block w-full overflow-visible rounded-[0.25rem] border-[0.0625rem] border-blue-300 bg-white px-3 py-[0.6875rem] text-base font-semibold text-[#272b41] shadow-sm outline-none transition-all duration-300 hover:border-blue-500 focus:ring-1 focus:ring-blue-500/50',
          className,
          isError && 'border-red-300 hover:border-red-500 focus:ring-red-500/50',
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
