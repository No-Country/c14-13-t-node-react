import { cva } from 'class-variance-authority';

export const textVariants = cva('', {
  variants: {
    variant: {
      title: 'text-2xl font-bold text-gray-900 dark:text-gray-200',
      body: 'text-base font-normal text-gray-900 dark:text-gray-200',
      button: 'text-base font-semibold text-black',
      detailsTitle: 'text-xl font-semibold text-gray-900 dark:text-gray-200',
      detailsLabel: 'text-sm font-medium text-gray-900 dark:text-gray-200',
      detailsValue: 'text-sm font-normal text-gray-700 dark:text-gray-300',
      specialTitle: 'font-abril text-2xl font-bold text-[#5f63f2] dark:text-[#5f63f2]',
      statisticsValue: 'text-3xl font-bold text-gray-900 dark:text-gray-200',
      statisticsDescription: 'text-lg font-medium text-gray-900/80 dark:text-gray-200/80',
      modalTitle: 'text-2xl font-bold text-gray-900 dark:text-gray-200',
      modalDescription: 'text-base font-normal text-gray-900 dark:text-gray-200',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
