'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema } from '@/schemas/AuthSchema';
import { z } from 'zod';
import { Text, Button, Spinner } from '@/components/ui';
import { FormField } from '@/components';
import { TextFieldItem } from '@/types/formTypes';
import { toast } from 'sonner';
import Link from 'next/link';
import OauthButtons from '../oauth-buttons/OauthButtons';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type SignInSchemaType = z.infer<typeof SignInSchema>;

export const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    // reset,
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });

  const handleInputChange = async (field: keyof SignInSchemaType) => {
    await trigger(field);
  };

  const onSubmit: SubmitHandler<SignInSchemaType> = async ({ email, password }) => {
    setIsLoading(true);
    const res = await signIn('credentials', { email, password, redirect: false });
    if (!res?.ok && res?.error) {
      toast.error(res.error);
      setIsLoading(false);
      return;
    }
    toast.success('Ingresando al sistema');
    setIsLoading(false);
    router.refresh();
    router.push('/dashboard');
  };
  const signInFields: TextFieldItem<SignInSchemaType>[] = [
    {
      label: 'Correo Electrónico',
      id: 'email',
      placeholder: 'correo@ejemplo.com',
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

      <OauthButtons />
      <p className='pb-6 text-center text-black dark:text-white'>
        ¿No tienes una cuenta?{' '}
        <Link
          href='/auth/sign-up'
          className='text-primary-darkBlue hover:text-primary-lightBlue dark:text-primary-lighterBlue dark:hover:text-primary-lightBlue'
        >
          Regístrate
        </Link>{' '}
      </p>
    </div>
  );
};
