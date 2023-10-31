'use client';
import { useQuery } from '@tanstack/react-query';
import { useModal } from '@/hooks/useModal';
import { getWorkshopServiceById } from '@/services/workshopService';
import DetailsCard from '@/components/DetailsCard';
import { Spinner } from '@/components/ui';
import { EditWorkshopServiceForm } from '@/components/Forms';

export const WorkshopServiceDetails = ({ id }: { id: number }) => {
  const [editModal, showEditModal] = useModal();
  const {
    data: workshopService,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['services', id],
    queryFn: () => getWorkshopServiceById(id),
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
  /**
    customerId: number;
     */
  const infoRows = [
    { label: 'Código', value: workshopService.serviceCode },
    { label: 'Nombre', value: workshopService.service },
    { label: 'Descripción', value: workshopService.description },
    { label: 'Estatus', value: workshopService.isActive ? 'Activo' : 'Inactivo' },
    { label: 'Precio', value: workshopService.servicePrice.toString() },
  ];
  const handleEdit = () => {
    const newActive: 'Activo' | 'Inactivo' = workshopService?.isActive ? 'Activo' : 'Inactivo';
    const defaultValues = {
      ...workshopService,
      isActive: newActive,
      servicePrice: workshopService.servicePrice.toString(),
    };
    showEditModal(true, (onClose) => (
      <EditWorkshopServiceForm id={id} defaultValues={defaultValues} onClose={onClose} />
    ));
  };
  return (
    <div className='flex h-full w-full pt-6'>
      <DetailsCard handleEdit={handleEdit} title='Datos del Servicio' infoRows={infoRows} />
      {editModal}
    </div>
  );
};
