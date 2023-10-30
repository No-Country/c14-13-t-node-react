'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomerUpdateFormSchema } from '@/schemas/CustomerSchema';
import { Text, Button, Spinner, FormContainer } from '@/components/ui';
import { FormField } from '@/components';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCustomer } from '@/services/customerService';
import { CustomerUpdateForm } from '@/types/common';
import { updateCustomerFields } from './data';
import { ControlledSelect } from '../../ControlledSelect/ControlledSelect';

interface EditCustomerFormProps {
  id: number;
  defaultValues: CustomerUpdateForm;
  onClose: () => void;
}

export const EditCustomerForm = ({ id, defaultValues, onClose }: EditCustomerFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: CustomerUpdateForm) => {
      const { isActive, ...rest } = data;
      console.log(data);
      console.log(isActive);
      const newData = { ...rest, isActive: isActive === 'Activo' };
      console.log(newData);
      return updateCustomer(id, newData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['customers'], { refetchType: 'all' });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    trigger,
    reset,
  } = useForm<CustomerUpdateForm>({
    resolver: zodResolver(CustomerUpdateFormSchema),
    defaultValues,
  });
  const handleInputChange = async (field: keyof CustomerUpdateForm) => {
    //con el "keyof" obtenemos auto completado cuando llamemos la función
    await trigger(field); //dispara la validación del campo
  };

  const onSubmit: SubmitHandler<CustomerUpdateForm> = (data) => {
    setIsLoading(true);
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success('Cliente actualizado exitosamente');
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
        Editar Cliente
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {updateCustomerFields.map((field) => {
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
            {isLoading ? <Spinner /> : 'Editar Cliente'}
          </Button>
        </span>
      </form>
    </FormContainer>
  );
};
