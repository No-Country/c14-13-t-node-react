'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomerCreationSchema } from '@/schemas/CustomerSchema';
import { Text, Button, Spinner, FormContainer } from '@/components/ui';
import { FormField } from '@/components';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registerCustomer } from '@/services/customerService';
import { NewCustomer } from '@/types/common';
import { createCustomerFields } from './data';

export const AddCustomerForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: NewCustomer) => {
      return registerCustomer(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['customers'], { refetchType: 'all' });
      //Otra manera de actualizar el cache es tomar la respuesta de la mutation y añadirlo al cache:
      // queryClient.setQueriesData(['customers'], (oldData) => {
      //   return {
      //     customers: [...(oldData as { customers: Customer[] })?.customers, data.customer],
      //   };
      // });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<NewCustomer>({ resolver: zodResolver(CustomerCreationSchema) });
  const handleInputChange = async (field: keyof NewCustomer) => {
    //con el "keyof" obtenemos auto completado cuando llamemos la función
    await trigger(field); //dispara la validación del campo
  };

  const onSubmit: SubmitHandler<NewCustomer> = (data) => {
    setIsLoading(true);
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success('Cliente registrado exitosamente');
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
        Añadir Cliente
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {createCustomerFields.map((field) => (
          <FormField
            key={field.id}
            {...field}
            register={register}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        ))}
        <Button type='submit' variant='formSubmit' disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Añadir Cliente'}
        </Button>
      </form>
    </FormContainer>
  );
};
