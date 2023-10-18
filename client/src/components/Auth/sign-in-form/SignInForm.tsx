'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema } from '@/schemas/AuthSchema';
import { z } from 'zod';
import { Text, Button, Spinner } from '@/components/ui';
import { FormField, type FieldList } from '@/components';
import { toast } from 'sonner';

type SignInSchemaType = z.infer<typeof SignInSchema>;

export const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });

  const handleInputChange = async (field: keyof SignInSchemaType) => {
    await trigger(field);
  };

  const onSubmit: SubmitHandler<SignInSchemaType> = ({ email, password }) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Entrando');
    }, 1000);
  };
  const signInFields: FieldList<SignInSchemaType> = [
    {
      label: 'Correo Electrónico',
      id: 'email',
      type: 'text',
    },
    {
      label: 'Contraseña',
      id: 'password',
      type: 'password',
    },
  ];
  return (
    <div className='w-[90%] max-w-[23.75rem]'>
      <Text variant='title' className='text-center'>
        Sign In
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {signInFields.map((field) => (
          <FormField
            key={field.id}
            {...field}
            register={register}
            errors={errors}
            handleInputChange={handleInputChange}
          />
        ))}
        <Button type='submit' variant='formSubmit' disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Aceptar'}
        </Button>
      </form>
    </div>
  );
};
