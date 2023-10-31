'use client';
import { useQuery } from '@tanstack/react-query';
import { useModal } from '@/hooks/useModal';
import { getWorkshop } from '@/services/workshop';
import DetailsCard from '@/components/DetailsCard';
import { Spinner } from '@/components/ui';
import { EditWorkshopForm } from '@/components/Forms';

export const WorkshopDetails = () => {
  const [editModal, showEditModal] = useModal();
  const {
    data: workshop,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['workshop'],
    queryFn: () => getWorkshop(),
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
    { label: 'NIT', value: workshop.nit },
    { label: 'Nombre', value: workshop.name },
    { label: 'Teléfono', value: workshop.phone },
    { label: 'Correo Electrónico', value: workshop.email },
    { label: 'Dirección', value: workshop.address },
  ];
  const handleEdit = () => {
    showEditModal(true, (onClose) => (
      <EditWorkshopForm defaultValues={workshop} onClose={onClose} />
    ));
  };
  return (
    <div className='flex h-full w-full pt-6'>
      <DetailsCard handleEdit={handleEdit} title='Datos del Taller' infoRows={infoRows} />
      {editModal}
    </div>
  );
};
