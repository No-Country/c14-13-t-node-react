'use client';
import { useQuery } from '@tanstack/react-query';
import { useModal } from '@/hooks/useModal';
import { getMechanicById } from '@/services/mechanicsService';
import DetailsCard from '@/components/DetailsCard';
import { Spinner } from '@/components/ui';
import { EditMechanicForm } from '@/components/Forms';

export const MechanicDetails = ({ id }: { id: number }) => {
  const [editModal, showEditModal] = useModal();
  const {
    data: mechanic,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['mechanics', id],
    queryFn: () => getMechanicById(id),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  if (isLoading)
    return (
      <div className='flex min-h-screen w-full items-center justify-center text-slate-800 dark:text-slate-200'>
        <Spinner className='h-10 w-10' />
      </div>
    );
  if (isError)
    return <div className='text-slate-800 dark:text-slate-200'>Error: {String(error)}</div>;

  const infoRows = [
    { label: 'DNI', value: mechanic.dni },
    { label: 'Nombre', value: mechanic.name },
    { label: 'Teléfono', value: mechanic.phone },
    { label: 'Dirección', value: mechanic.address },
    { label: 'Ciudad', value: mechanic.city },
    { label: 'Estatus', value: mechanic.isActive ? 'Activo' : 'Inactivo' },
  ];
  const handleEdit = () => {
    const newActive: 'Activo' | 'Inactivo' = mechanic?.isActive ? 'Activo' : 'Inactivo';
    const defaultValues = {
      ...mechanic,
      isActive: newActive,
    };
    showEditModal(true, (onClose) => (
      <EditMechanicForm id={id} defaultValues={defaultValues} onClose={onClose} />
    ));
  };
  return (
    <div className='flex h-full w-full pt-6'>
      <DetailsCard handleEdit={handleEdit} title='Datos del Mecánico' infoRows={infoRows} />
      {editModal}
    </div>
  );
};
