'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Text, Button, Spinner, FormContainer } from '@/components/ui';
import { FormField } from '@/components';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createWorkshopServiceFields } from './data';
import { NewWorkshopService } from '@/types/common';
import { WorkshopServiceCreationSchema } from '@/schemas/WorkshopServicesSchema';
import { createWorkshopService } from '@/services/workshopService';

export const WorkshopServiceForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: NewWorkshopService) => {
      return createWorkshopService(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['services'], { refetchType: 'all' });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<NewWorkshopService>({
    resolver: zodResolver(WorkshopServiceCreationSchema),
  });
  //
  const handleInputChange = async (field: keyof NewWorkshopService) => {
    await trigger(field);
  };

  const onSubmit: SubmitHandler<NewWorkshopService> = (data) => {
    setIsLoading(true);
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success('Servicio registrado exitosamente');
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
