'use client';
import { useQuery } from '@tanstack/react-query';
import { useModal } from '@/hooks/useModal';
import { getEmployeeById } from '@/services/employeesService';
import DetailsCard from '@/components/DetailsCard';
import { Spinner } from '@/components/ui';
import { EditEmployeeForm } from '@/components/Forms';

export const EmployeeDetails = ({ id }: { id: number }) => {
  const [editModal, showEditModal] = useModal();
  const {
    data: employee,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['employees', id],
    queryFn: () => getEmployeeById(id),
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
    { label: 'DNI', value: employee.dni },
    { label: 'Nombre', value: employee.name },
    { label: 'Teléfono', value: employee.phone },
    { label: 'Dirección', value: employee.address },
    { label: 'Ciudad', value: employee.city },
    { label: 'Estatus', value: employee.isActive ? 'Activo' : 'Inactivo' },
  ];
  const handleEdit = () => {
    const newActive: 'Activo' | 'Inactivo' = employee?.isActive ? 'Activo' : 'Inactivo';
    const defaultValues = {
      ...employee,
      isActive: newActive,
    };
    showEditModal(true, (onClose) => (
      <EditEmployeeForm id={id} defaultValues={defaultValues} onClose={onClose} />
    ));
  };
  return (
    <div className='flex h-full w-full pt-6'>
      <DetailsCard handleEdit={handleEdit} title='Datos del Empleado' infoRows={infoRows} />
      {editModal}
    </div>
  );
};
