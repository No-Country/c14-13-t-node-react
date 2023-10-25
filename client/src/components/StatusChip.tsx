import React from 'react';

interface StatusChipProps {
  isActive: boolean;
}

const StatusChip = ({ isActive }: StatusChipProps) => {
  return (
    <>
      {isActive ? (
        <div className='flex items-center justify-center rounded-full bg-green-300/90 px-1 py-[0.125rem] text-xs font-semibold text-green-950'>
          Activo
        </div>
      ) : (
        <div className='flex items-center justify-center rounded-full bg-red-300/90 px-1 py-[0.125rem] text-xs font-semibold text-red-950'>
          Inactivo
        </div>
      )}
    </>
  );
};

export default StatusChip;
