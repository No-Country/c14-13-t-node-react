'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { VehicleCreationSchema } from '@/schemas/VehicleSchema';
import { z } from 'zod';
import { Text, Button, Spinner } from '@/components/ui';
import { FormField, type FieldList } from '@/components';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { ControlledSelect } from '../ControlledSelect/ControlledSelect';

const VehicleWithOutId = VehicleCreationSchema.omit({ customerId: true });
type VehicleCreationSchemaType = z.infer<typeof VehicleWithOutId>;

interface FormData {
  mySelect: string;
}

export const FormWSelect = () => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  //   const mutation = useMutation({
  //     mutationFn: (data: VehicleCreationSchemaType) => {
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
  } = useForm<VehicleCreationSchemaType>({ resolver: zodResolver(VehicleWithOutId) });
  //
  const handleInputChange = async (field: keyof VehicleCreationSchemaType) => {
    //con el "keyof" obtenemos auto completado cuando llamemos la función
    await trigger(field);
  };
  //   const { handleSubmit, control } = useForm<FormData>();

  const onSubmit: SubmitHandler<VehicleCreationSchemaType> = (data) => {
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

  const createVehicleFields: FieldList<VehicleCreationSchemaType> = [
    {
      id: 'plate',
      label: 'Placa',
    },
    {
      id: 'brand',
      label: 'Fabricante',
    },
    {
      id: 'model',
      label: 'Modelo',
    },
    { id: 'color', label: 'Color' },
    {
      id: 'vehicleType',
      label: 'Tipo de Vehículo',
    },
    {
      id: 'year',
      label: 'Año',
    },
    {
      id: 'mileage',
      label: 'Kilometraje',
    },
    {
      id: 'comments',
      label: 'Comentarios',
      fieldType: 'textarea',
    },
  ];
  return (
    <div className='mt-10 w-[90%] max-w-[23.75rem] rounded-3xl bg-white p-7'>
      <Text variant='title' className='text-center'>
        Añadir Vehiculo
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {createVehicleFields.map((field) => (
          <FormField
            key={field.id}
            {...field}
            register={register}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        ))}
        <ControlledSelect
          control={control}
          name='doors'
          options={['2 Puertas', '4 Puertas']}
        />
        <Button type='submit' variant='formSubmit' disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Añadir Cliente'}
        </Button>
      </form>
    </div>
  );
};
