import React from 'react';
import { Text } from './ui';

type InfoRow = {
  label: string;
  value: string;
};

interface DetailsCardProps {
  title: string;
  infoRows: InfoRow[];
}
const DetailsCard = ({ title, infoRows }: DetailsCardProps) => {
  return (
    <article className='w-[19.75rem] rounded-3xl border border-slate-300 bg-slate-100/50 p-8 dark:bg-slate-800/30'>
      <Text variant='detailsTitle'>{title}</Text>
      <div className='mt-8 flex flex-col gap-3'>
        {infoRows.map((row) => (
          <div className='flex flex-col justify-between gap-[0.125rem]' key={row.label}>
            <Text variant='detailsLabel'>{row.label}</Text>
            <Text variant='detailsValue'>{row.value}</Text>
          </div>
        ))}
      </div>
    </article>
  );
};

export default DetailsCard;
