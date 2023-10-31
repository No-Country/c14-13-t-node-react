'use client';
import { useQuery } from '@tanstack/react-query';
import { useModal } from '@/hooks/useModal';
import { getVehicleById } from '@/services/vehicleService';
import DetailsCard from '@/components/DetailsCard';
import { Spinner } from '@/components/ui';
import { EditVehicleForm } from '@/components/Forms';

export const VehicleDetails = ({ id }: { id: number }) => {
  const [editModal, showEditModal] = useModal();
  const {
    data: vehicle,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['vehicles', id],
    queryFn: () => getVehicleById(id),
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
    { label: 'Placa', value: vehicle.plate },
    { label: 'Marca', value: vehicle.brand },
    { label: 'Modelo', value: vehicle.model },
    { label: 'Tipo', value: vehicle.vehicleType },
    { label: 'Kilometraje', value: vehicle.mileage },
    { label: 'Año', value: vehicle.year },
    { label: 'Color', value: vehicle.color },
    { label: 'Puertas', value: vehicle.doors },
    { label: 'Comentarios', value: vehicle.comments ?? 'Sin comentarios' },
    { label: 'Estatus', value: vehicle.isActive ? 'Activo' : 'Inactivo' },
  ];
  const handleEdit = () => {
    const newActive: 'Activo' | 'Inactivo' = vehicle?.isActive ? 'Activo' : 'Inactivo';
    const defaultValues = {
      ...vehicle,
      isActive: newActive,
    };
    showEditModal(true, (onClose) => (
      <EditVehicleForm id={id} defaultValues={defaultValues} onClose={onClose} />
    ));
  };
  return (
    <div className='flex h-full w-full pt-6'>
      <DetailsCard handleEdit={handleEdit} title='Datos del Vehículo' infoRows={infoRows} />
      {editModal}
    </div>
  );
};
