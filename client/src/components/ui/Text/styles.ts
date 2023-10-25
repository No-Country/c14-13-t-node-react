import { cva } from 'class-variance-authority';

export const textVariants = cva('', {
  variants: {
    variant: {
      title: 'text-2xl font-bold text-slate-900 dark:text-slate-200',
      body: 'text-base font-normal text-slate-900 dark:text-slate-200',
      button: 'text-base font-semibold text-black',
      detailsTitle: 'text-xl font-semibold text-slate-900 dark:text-slate-200',
      detailsLabel: 'text-sm font-medium text-slate-900 dark:text-slate-200',
      detailsValue: 'text-sm font-normal text-slate-700 dark:text-slate-300',
      specialTitle: 'font-abril text-2xl font-bold text-[#5f63f2] dark:text-[#5f63f2]',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
