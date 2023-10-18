import { cva } from 'class-variance-authority';

export const buttonVariants = cva('disabled:pointer-events-none', {
  variants: {
    variant: {
      base: ' flex h-12 min-w-[12.8125rem] items-center justify-center rounded-lg border-[#5f63f2] bg-[#5f63f2] text-lg font-semibold text-white hover:border-[#8c94ff] hover:bg-[#8c94ff]',
      formSubmit:
        'mt-7 flex h-12 w-full min-w-[12.8125rem] items-center justify-center rounded-lg border-[#5f63f2] bg-[#5f63f2] text-lg font-semibold text-white hover:border-[#8c94ff] hover:bg-[#8c94ff]',
      NavButton1:
        'rounded-full bg-slate-900 px-5 py-[0.375rem] font-normal text-white ring-1 ring-slate-200/40 transition-colors duration-300 ease-in hover:bg-slate-700',
      NavButton2:
        'rounded-full bg-white px-5 py-[0.375rem] font-semibold text-slate-900 ring-1 ring-slate-900/40 transition-colors duration-300 ease-in hover:bg-slate-300',
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});
