import React from 'react';
import { Eye, Trash } from 'lucide-react';
import Link from 'next/link';
import { useModal } from '@/hooks/useModal';
import { ActionBase } from '@/types/common';
import { DeleteModal } from './DeleteModal';

interface ActionsButtonsProps extends ActionBase {}

export const ActionsButtons = ({ id, category, deleteDescription }: ActionsButtonsProps) => {
  const [deleteModal, showDeleteModal] = useModal();

  const handleDelete = () => {
    showDeleteModal(true, (onClose) => (
      <DeleteModal
        category={category}
        deleteDescription={deleteDescription}
        id={id}
        onClose={onClose}
      />
    ));
  };
  return (
    <div className='flex items-center gap-3'>
      <Link
        href={`/dashboard/${category}/${id}`}
        className='rounded-lg bg-green-600 p-[3px] text-white'
        title='Ver'
      >
        <Eye size={20} />
      </Link>
      <button
        onClick={handleDelete}
        className='rounded-lg bg-red-600 p-[3px] text-white'
        title='Borrar'
      >
        <Trash size={20} />
      </button>
      {deleteModal}
    </div>
  );
};
