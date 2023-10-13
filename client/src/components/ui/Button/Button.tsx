import React, { forwardRef } from 'react';
import { buttonVariants } from './styles';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  link?: boolean;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, link, children, type, ...props }, ref) => {
    if (link) {
      return <div className={cn(buttonVariants({ variant, className }))}>{children}</div>;
    }
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
