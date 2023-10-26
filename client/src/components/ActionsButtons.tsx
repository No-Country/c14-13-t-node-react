import React from 'react';
import { Eye, Trash } from 'lucide-react';
import Link from 'next/link';

interface ActionsButtonsProps {
  id: string | number;
  category:
    | 'customers'
    | 'vehicles'
    | 'users'
    | 'employees'
    | 'orders'
    | 'mechanics'
    | 'services';
}

export const ActionsButtons = ({ id, category }: ActionsButtonsProps) => {
  return (
    <div className='flex items-center gap-3'>
      <Link
        href={`/dashboard/${category}/${id}`}
        className='rounded-lg bg-green-600 p-[3px] text-white'
        title='Ver'
      >
        <Eye size={20} />
      </Link>
      <button className='rounded-lg bg-red-600 p-[3px] text-white' title='Borrar'>
        <Trash size={20} />
      </button>
    </div>
  );
};
