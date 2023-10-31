'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EmployeeUpdateFormSchema } from '@/schemas/EmployeeSchema';
import { Text, Button, Spinner, FormContainer } from '@/components/ui';
import { FormField } from '@/components';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateEmployee } from '@/services/employeesService';
import { EmployeeUpdateForm } from '@/types/common';
import { updateEmployeeFields } from './data';
import { ControlledSelect } from '../../ControlledSelect/ControlledSelect';

interface EditEmployeeFormProps {
  id: number;
  defaultValues: EmployeeUpdateForm;
  onClose: () => void;
}

export const EditEmployeeForm = ({ id, defaultValues, onClose }: EditEmployeeFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: EmployeeUpdateForm) => {
      const { isActive, ...rest } = data;
      const newData = {
        ...rest,
        isActive: isActive === 'Activo',
      };
      console.log(newData);
      return updateEmployee(id, newData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['employees'], { refetchType: 'all' });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    trigger,
    reset,
  } = useForm<EmployeeUpdateForm>({
    resolver: zodResolver(EmployeeUpdateFormSchema),
    defaultValues,
  });
  const handleInputChange = async (field: keyof EmployeeUpdateForm) => {
    //con el "keyof" obtenemos auto completado cuando llamemos la función
    await trigger(field); //dispara la validación del campo
  };

  const onSubmit: SubmitHandler<EmployeeUpdateForm> = (data) => {
    setIsLoading(true);
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success('Empleado actualizado exitosamente');
        reset();
        setIsLoading(false);
        onClose();
      },
      onError: (error) => {
        console.log(error);
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
          setIsLoading(false);
        } else {
          toast.error('Error al enviar los datos');
        }
      },
    });
  };

  return (
    <FormContainer className='m-auto mt-7 bg-gray-300'>
      <Text variant='title' className='text-center'>
        Editar Empleado
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {updateEmployeeFields.map((field) => {
          if (field.fieldType === 'select') {
            return (
              <ControlledSelect
                key={field.id}
                label={field.label}
                control={control}
                id={field.id}
                errors={errors}
                options={field.options}
                placeholder={field.placeholder}
              />
            );
          } else {
            return (
              <FormField
                key={field.id}
                {...field}
                register={register}
                handleInputChange={handleInputChange}
                errors={errors}
              />
            );
          }
        })}
        <span className='mt-4 flex h-12 justify-between'>
          <Button type='button' variant='cancel' onClick={onClose}>
            Cancelar
          </Button>
          <Button
            className='mt-0 w-[1rem] min-w-[8rem]'
            type='submit'
            variant='formSubmit'
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Editar'}
          </Button>
        </span>
      </form>
    </FormContainer>
  );
};
