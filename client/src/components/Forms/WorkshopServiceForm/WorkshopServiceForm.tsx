'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Text, Button, Spinner, FormContainer } from '@/components/ui';
import { FormField } from '@/components';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { createWorkshopServiceFields } from './data';
import { WorkshopServiceCreationSchemaType } from './types';
import { WorkshopServiceCreationSchema } from '@/schemas/WorkshopServicesSchema';

export const WorkshopServiceForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  //   const mutation = useMutation({
  //     mutationFn: (data: WorkshopServiceCreationSchemaType) => {
  //       return registerCustomer(data);
  //     },
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(['customers'], { refetchType: 'all' });
  //       //Otra manera de actualizar el cache es tomar la respuesta de la mutation y añadirlo al cache:
  //       // queryClient.setQueriesData(['customers'], (oldData) => {
  //       //   return {
  //       //     customers: [...(oldData as { customers: Customer[] })?.customers, data.customer],
  //       //   };
  //       // });
  //     },
  //   });
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    control,
    reset,
  } = useForm<WorkshopServiceCreationSchemaType>({
    resolver: zodResolver(WorkshopServiceCreationSchema),
  });
  //
  const handleInputChange = async (field: keyof WorkshopServiceCreationSchemaType) => {
    await trigger(field);
  };

  const onSubmit: SubmitHandler<WorkshopServiceCreationSchemaType> = (data) => {
    setIsLoading(true);
    // mutation.mutate(data, {
    //   onSuccess: () => {
    //     toast.success('Cliente registrado exitosamente');
    //     reset();
    //     setIsLoading(false);
    //   },
    //   onError: (error) => {
    //     console.log(error);
    //     if (error instanceof AxiosError) {
    //       toast.error(error.response?.data.message);
    //       setIsLoading(false);
    //     } else {
    //       toast.error('Error al enviar los datos');
    //     }
    //   },
    // });
    toast(JSON.stringify(data), { duration: 5000 });
    console.log(data);
    setIsLoading(false);
  };

  return (
    <FormContainer>
      <Text variant='title' className='text-center'>
        Añadir Servicio
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {createWorkshopServiceFields.map((field) => {
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
