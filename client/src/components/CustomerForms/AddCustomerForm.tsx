'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomerCreationSchema } from '@/schemas/CustomerSchema';
import { z } from 'zod';
import { Text, Button, Spinner } from '@/components/ui';
import { FormField, type FieldList } from '@/components';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registerCustomer } from '@/services/customerService';
import { useQuery } from '@tanstack/react-query';
import { getCustomers } from '@/services/customerService';
import { Customer } from '@/types/common';

type CustomerFormSchemaType = z.infer<typeof CustomerCreationSchema>;

export const AddCustomerForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: CustomerFormSchemaType) => {
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
  } = useForm<CustomerFormSchemaType>({ resolver: zodResolver(CustomerCreationSchema) });
  const handleInputChange = async (field: keyof CustomerFormSchemaType) => {
    //con el "keyof" obtenemos auto completado cuando llamemos la función
    await trigger(field);
  };

  const onSubmit: SubmitHandler<CustomerFormSchemaType> = (data) => {
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

  const createCustomerFields: FieldList<CustomerFormSchemaType> = [
    {
      id: 'firstName',
      label: 'Nombre',
    },
    { id: 'lastName', label: 'Apellido' },
    {
      id: 'dni',
      label: 'DNI',
    },
    {
      id: 'email',
      label: 'Correo Electrónico',
      placeholder: 'correo@ejemplo.com',
    },
    {
      id: 'city',
      label: 'Ciudad',
    },
    {
      id: 'phone',
      label: 'Teléfono',
      placeholder: '51 999 999 999',
    },
    {
      id: 'address',
      label: 'Dirección',
      fieldType: 'textarea',
    },
  ];
  return (
    <div className='mt-10 w-[90%] max-w-[23.75rem] rounded-3xl bg-white p-7'>
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
    </div>
  );
};
