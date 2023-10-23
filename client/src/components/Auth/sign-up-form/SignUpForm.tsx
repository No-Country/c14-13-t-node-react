'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { z } from 'zod';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { Text, Button, Spinner } from '@/components/ui';
import { FormField, type FieldList } from '@/components';
import { SignUpSchema } from '@/schemas/AuthSchema';
import { registerUser } from '@/services/userService';
import OautButtons from '../oauth-buttons/OautButtons';
import { signIn } from 'next-auth/react';
import { AxiosError } from 'axios';

/**
 * Este Type representa los campos del Formulario.
 * Se infieren el Type del Schema de Validación,
 * Mas información: https://zod.dev/?id=type-inference
 */
type SignUpSchemaType = z.infer<typeof SignUpSchema>;
//TS reconoce los campos que vamos a utilizar

/**
 * Mas información sobre React Hook Form:
 * https://react-hook-form.com/get-started
 */

export const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const mutation = useMutation({
    mutationFn: ({ username, email, password }: Omit<SignUpSchemaType, 'confirmPassword'>) => {
      return registerUser({ username, email, password });
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  /**
   * En la linea anterior,
   * con el type le decimos que campos va a tener el Formulario,
   * y con el resolver le decimos quien se encarga de la validación de los campos
   */

  /**
   * Esta función la requerimos para validar cada campo del formulario
   * sin tener que esperar a presionar el botón de Aceptar / Submit.
   * Si hay errores el Usuario lo sabra inmediatamente.
   */
  const handleInputChange = async (field: keyof SignUpSchemaType) => {
    //con el "keyof" obtenemos auto completado cuando llamemos la función
    await trigger(field);
  };

  const onSubmit: SubmitHandler<SignUpSchemaType> = async ({ username, email, password }) => {
    setIsLoading(true);
    mutation.mutate(
      { username, email, password },
      {
        onSuccess: () => {
          toast.success('Registrado exitosamente');
          reset();
          setIsLoading(false);
          signIn('credentials', { email, password, callbackUrl: '/dashboard' });
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
      },
    );
  };

  const signUpFields: FieldList<SignUpSchemaType> = [
    {
      label: 'Nombre de Usuario',
      id: 'username',
    },
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
    {
      label: 'Confirmar Contraseña',
      id: 'confirmPassword',
      type: 'password',
    },
  ];

  return (
    <div className='w-[90%] max-w-[23.75rem]'>
      <Text variant='title' className='text-center'>
        Sign Up
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {signUpFields.map((field) => (
          <FormField
            key={field.id}
            {...field}
            register={register}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        ))}
        <Button type='submit' variant='formSubmit' disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Aceptar'}
        </Button>
      </form>
      <OautButtons />
      <p className='pb-6 text-center text-black dark:text-white'>
        ¿Ya tienes una cuenta?{' '}
        <Link href='/auth/sign-in' className='text-blue-600'>
          Inicia Sesión
        </Link>{' '}
      </p>
    </div>
  );
};
