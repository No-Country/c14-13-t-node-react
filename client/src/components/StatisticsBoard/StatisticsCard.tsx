import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Text } from '../ui';
import { cn } from '@/utils/cn';

export interface StatisticsCardProps {
  description: string;
  Icon: LucideIcon;
  value: number;
  currency: boolean;
  iconColor: string;
}

export const StatisticsCard = ({
  currency,
  Icon,
  description,
  value,
  iconColor,
}: StatisticsCardProps) => {
  const valueString = currency
    ? `${value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol',
      })}`
    : value;
  return (
    <div className='flex h-[9rem] w-full min-w-[7rem] items-center justify-center gap-2 rounded-3xl bg-white p-3 pl-2 dark:bg-primary-lightBackground'>
      <div className='flex h-5/6 w-5/6 justify-start gap-6'>
        <div className={cn('flex h-full w-11 items-center justify-center', iconColor)}>
          <Icon size={34} />
        </div>
        <div className='flex flex-col gap-[0.1875rem] pt-1'>
          <Text variant='statisticsDescription'>{description}</Text>
          <Text variant='statisticsValue' className={cn(value > 99999 && 'text-2xl')}>
            {valueString}
          </Text>
        </div>
      </div>
    </div>
  );
};
