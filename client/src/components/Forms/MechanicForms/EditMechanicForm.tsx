'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MechanicUpdateFormSchema } from '@/schemas/MechanicSchema';
import { Text, Button, Spinner, FormContainer } from '@/components/ui';
import { FormField } from '@/components';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMechanic } from '@/services/mechanicsService';
import { MechanicUpdateForm } from '@/types/common';
import { updateMechanicFields } from './data';
import { ControlledSelect } from '../../ControlledSelect/ControlledSelect';

interface EditMechanicFormProps {
  id: number;
  defaultValues: MechanicUpdateForm;
  onClose: () => void;
}

export const EditMechanicForm = ({ id, defaultValues, onClose }: EditMechanicFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: MechanicUpdateForm) => {
      const { isActive, ...rest } = data;
      const newData = {
        ...rest,
        isActive: isActive === 'Activo',
      };
      console.log(newData);
      return updateMechanic(id, newData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['mechanics'], { refetchType: 'all' });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    trigger,
    reset,
  } = useForm<MechanicUpdateForm>({
    resolver: zodResolver(MechanicUpdateFormSchema),
    defaultValues,
  });
  const handleInputChange = async (field: keyof MechanicUpdateForm) => {
    //con el "keyof" obtenemos auto completado cuando llamemos la función
    await trigger(field); //dispara la validación del campo
  };

  const onSubmit: SubmitHandler<MechanicUpdateForm> = (data) => {
    setIsLoading(true);
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success('Mecánico actualizado exitosamente');
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
        Editar Mecánico
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {updateMechanicFields.map((field) => {
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
