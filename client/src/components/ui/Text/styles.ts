import { cva } from 'class-variance-authority';

export const textVariants = cva('', {
  variants: {
    variant: {
      title: 'text-2xl font-bold text-slate-900 dark:text-slate-200',
      body: 'text-base font-normal text-slate-900 dark:text-slate-200',
      button: 'text-base font-semibold text-black',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
