import React, { forwardRef } from 'react';
import { buttonVariants } from './styles';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, type, ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
export { Button };
