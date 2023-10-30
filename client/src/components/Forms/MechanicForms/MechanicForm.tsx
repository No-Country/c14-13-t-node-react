'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Text, Button, Spinner, FormContainer } from '@/components/ui';
import { FormField } from '@/components';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMechanicFields } from './data';
import { NewMechanic } from '@/types/common';
import { MechanicCreationSchema } from '@/schemas/MechanicSchema';
import { createMechanic } from '@/services/mechanicsService';

export const MechanicForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: NewMechanic) => {
      return createMechanic(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['mechanics'], { refetchType: 'all' });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<NewMechanic>({
    resolver: zodResolver(MechanicCreationSchema),
  });
  //
  const handleInputChange = async (field: keyof NewMechanic) => {
    await trigger(field);
  };

  const onSubmit: SubmitHandler<NewMechanic> = (data) => {
    setIsLoading(true);
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success('Mecánico registrado exitosamente');
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
        Añadir Mecánico
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {createMechanicFields.map((field) => {
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
