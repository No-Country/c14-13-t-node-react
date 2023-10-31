'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { WorkshopSchema } from '@/schemas/WorkshopSchema';
import { Text, Button, Spinner, FormContainer } from '@/components/ui';
import { FormField } from '@/components';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateWorkshop } from '@/services/workshop';
import { Workshop } from '@/types/common';
import { updateWorkshopFields } from './data';
import { ControlledSelect } from '../../ControlledSelect/ControlledSelect';

interface EditWorkshopFormProps {
  defaultValues: Workshop;
  onClose: () => void;
}

export const EditWorkshopForm = ({ defaultValues, onClose }: EditWorkshopFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: Workshop) => {
      return updateWorkshop(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['workshop'], { refetchType: 'all' });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    trigger,
    reset,
  } = useForm<Workshop>({
    resolver: zodResolver(WorkshopSchema),
    defaultValues,
  });
  const handleInputChange = async (field: keyof Workshop) => {
    //con el "keyof" obtenemos auto completado cuando llamemos la función
    await trigger(field); //dispara la validación del campo
  };

  const onSubmit: SubmitHandler<Workshop> = (data) => {
    setIsLoading(true);
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success('Taller actualizado exitosamente');
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
        Editar Taller
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {updateWorkshopFields.map((field) => {
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
