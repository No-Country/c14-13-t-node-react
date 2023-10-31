'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Text, Button, Spinner, FormContainer } from '@/components/ui';
import { FormField } from '@/components';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEmployeeFields } from './data';
import { NewEmployee } from '@/types/common';
import { NewEmployeeCreationSchema } from '@/schemas/EmployeeSchema';
import { createEmployee } from '@/services/employeesService';

export const EmployeeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: NewEmployee) => {
      return createEmployee(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['employees'], { refetchType: 'all' });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<NewEmployee>({
    resolver: zodResolver(NewEmployeeCreationSchema),
  });
  //
  const handleInputChange = async (field: keyof NewEmployee) => {
    await trigger(field);
  };

  const onSubmit: SubmitHandler<NewEmployee> = (data) => {
    setIsLoading(true);
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success('Empleado registrado exitosamente');
        reset();
        setIsLoading(false);
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
    <FormContainer>
      <Text variant='title' className='text-center'>
        Añadir Empleado
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {createEmployeeFields.map((field) => {
          return (
            <FormField
              key={field.id}
              {...field}
              register={register}
              handleInputChange={handleInputChange}
              errors={errors}
            />
          );
        })}
        <Button type='submit' variant='formSubmit' disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Añadir'}
        </Button>
      </form>
    </FormContainer>
  );
};
