import { cva } from 'class-variance-authority';

export const buttonVariants = cva('disabled:pointer-events-none', {
  variants: {
    variant: {
      base: ' flex h-12 min-w-[12.8125rem] items-center justify-center rounded-lg border-[#5f63f2] bg-[#5f63f2] text-base font-medium text-white hover:border-[#8c94ff] hover:bg-[#8c94ff]',
      formSubmit:
        'mt-7 flex h-12 w-full min-w-[12.8125rem] items-center justify-center rounded-lg border-[#5f63f2] bg-[#5f63f2] text-lg font-semibold text-white hover:border-[#8c94ff] hover:bg-[#8c94ff]',
      NavButton1:
        'rounded-full bg-slate-900 px-5 py-[0.375rem] font-normal text-white ring-1 ring-slate-200/40 transition-colors duration-300 ease-in hover:bg-slate-700',
      NavButton2:
        'rounded-full bg-white px-5 py-[0.375rem] font-semibold text-slate-900 ring-1 ring-slate-900/40 transition-colors duration-300 ease-in hover:bg-slate-300',
      OauthButton:
        'flex w-full transform items-center justify-center gap-3 rounded-xl border border-gray-300  py-2 text-base font-semibold  text-gray-700 transition-all ease-in-out hover:bg-gray-200 active:bg-gray-100 active:duration-75 ',
      navbar:
        'flex items-center justify-center rounded-full border-[#5f63f2] bg-[#5f63f2] p-2 text-base font-medium text-white hover:border-[#8c94ff] hover:bg-[#8c94ff]',
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});
