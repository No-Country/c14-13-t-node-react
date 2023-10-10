import { cva } from 'class-variance-authority';

export const buttonVariants = cva('', {
  variants: {
    variant: {
      base: 'h-12 min-w-[12.8125rem] rounded-lg border-[#5f63f2] bg-[#5f63f2] text-lg font-semibold text-white hover:border-[#8c94ff] hover:bg-[#8c94ff]',
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});
