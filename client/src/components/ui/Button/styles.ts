import { cva } from 'class-variance-authority';

export const buttonVariants = cva('disabled:pointer-events-none', {
  variants: {
    variant: {
      base: ' flex h-12 min-w-[12.8125rem] items-center justify-center rounded-lg border-primary-lightBlue bg-primary-lightBlue text-base font-medium text-white duration-300 hover:border-primary-lighterBlue hover:bg-primary-lighterBlue',
      formSubmit:
        'mt-7 flex h-12 w-full min-w-[12.8125rem] items-center justify-center rounded-lg border-primary-lightBlue bg-primary-lightBlue text-lg font-semibold text-white duration-300 hover:border-primary-lighterBlue hover:bg-primary-lighterBlue',
      NavButton1:
        'rounded-full bg-primary-lightBlue px-5 py-[0.375rem] font-normal text-white ring-1 ring-primary-lightBlue/40 transition-colors duration-300 ease-in hover:bg-primary-lighterBlue',
      NavButton2:
        'rounded-full bg-white px-5 py-[0.375rem] font-semibold text-primary-lightBlue ring-1 ring-primary-lightBlue transition-colors duration-300 ease-in hover:bg-slate-300',
      OauthButton:
        'flex w-full transform items-center justify-center gap-3 rounded-xl border border-gray-300  py-2 text-base font-semibold  text-gray-700 transition-all ease-in-out hover:bg-gray-200 active:bg-gray-100 active:duration-75 dark:text-gray-300 dark:hover:text-gray-700',
      navbar:
        'flex items-center justify-center rounded-full border-primary-lightBlue bg-primary-lightBlue p-2 text-base font-medium text-white hover:border-primary-lighterBlue hover:bg-primary-lighterBlue',
      cancel:
        'flex min-w-[7rem] items-center justify-center rounded-lg border border-primary-lightBlue bg-gray-200 p-2 text-base font-medium text-gray-800 duration-300 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-950 dark:bg-gray-200 dark:hover:bg-gray-300/70',
      delete:
        'flex min-w-[7rem] items-center justify-center rounded-lg border-primary-lightBlue bg-red-400 p-2 text-base font-medium text-white duration-300 hover:border-primary-lighterBlue hover:bg-red-400/90 hover:text-white',
      edit: 'flex h-7 w-7 items-center justify-center rounded-lg border-primary-lightBlue bg-primary-lightBlue text-base font-medium text-gray-900 duration-300 hover:border-primary-lighterBlue hover:bg-primary-lighterBlue hover:text-white',
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});
