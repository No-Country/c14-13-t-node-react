'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomerCreationSchema } from '@/schemas/CustomerSchema';
import { z } from 'zod';
import { Text, Button, Spinner } from '@/components/ui';
import { FormField, type FieldList } from '@/components';
import { toast } from 'sonner';

type CustomerFormSchemaType = z.infer<typeof CustomerCreationSchema>;

export const AddCustomerForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Datos enviados exitosamente');
      console.log(data);
    }, 1000);
  };

  const createCustomerFields: FieldList<CustomerFormSchemaType> = [
    {
      id: 'name',
      label: 'Nombre',
    },
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
      placeholder: '+51 999 999 999',
    },
    {
      id: 'address',
      label: 'Dirección',
      fieldType: 'textarea',
    },
  ];
  return (
    <div className='w-[90%] max-w-[23.75rem] pt-10'>
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
