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
import { ControlledSelect } from '../../ControlledSelect/ControlledSelect';
import { createVehicleFields } from './data';
import { type VehicleCreationSchemaType } from '@/types/common';
import { createVehicle } from '@/services/vehicleService';
import { VehicleWithOutCustomerId } from '@/schemas/VehicleSchema';

export const VehicleForm = ({ customerId }: { customerId: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: VehicleCreationSchemaType) => {
      return createVehicle({ ...data, customerId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['vehicles'], { refetchType: 'all' });
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
    control,
    reset,
  } = useForm<VehicleCreationSchemaType>({ resolver: zodResolver(VehicleWithOutCustomerId) });
  //
  const handleInputChange = async (field: keyof VehicleCreationSchemaType) => {
    await trigger(field);
  };

  const onSubmit: SubmitHandler<VehicleCreationSchemaType> = (data) => {
    setIsLoading(true);
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success('Vehículo registrado exitosamente');
        reset();
        setIsLoading(false);
      },
      onError: (error) => {
        console.error(error);
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
        Añadir Vehículo
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {createVehicleFields.map((field) => {
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
        <Button type='submit' variant='formSubmit' disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Añadir'}
        </Button>
      </form>
    </FormContainer>
  );
};
