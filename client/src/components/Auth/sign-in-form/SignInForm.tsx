'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema } from '@/schemas/AuthSchema';
import { z } from 'zod';
import { Text, Button, Input, Spinner } from '@/components/ui';
import { toast } from 'sonner';

/**
 * Este Type representa los campos del Formulario.
 * Se infieren el Type del Schema de Validación,
 * Mas información: https://zod.dev/?id=type-inference
 */
type SignInSchemaType = z.infer<typeof SignInSchema>;
//TS reconoce los campos que vamos a utilizar

/**
 * Mas información sobre React Hook Form:
 * https://react-hook-form.com/get-started
 */

export const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });
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
  const handleInputChange = async (field: keyof SignInSchemaType) => {
    //con el "keyof" obtenemos auto completado cuando llamemos la función
    await trigger(field);
  };

  const onSubmit: SubmitHandler<SignInSchemaType> = ({ email, password }) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Entrando');
    }, 1000);
  };
  return (
    <div className='w-[90%] max-w-[23.75rem]'>
      <Text variant='title' className='text-center'>
        Sign In
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-1'>
          <label className='font-semibold text-slate-900 dark:text-slate-200' htmlFor='email'>
            Correo Electrónico
          </label>
          <Input
            type='text'
            placeholder='Correo Electrónico'
            {...register('email')}
            onBlur={() => handleInputChange('email')}
            isError={!!errors.email}
          />
          {errors.email && (
            <span className='font-bold text-red-600'>{errors.email.message}</span>
          )}
        </div>
        <div className='mb-1'>
          <label
            className='font-semibold text-slate-900 dark:text-slate-200'
            htmlFor='password'
          >
            Contraseña
          </label>
          <Input
            type='password'
            placeholder='Contraseña'
            {...register('password')}
            isError={!!errors.password}
            onBlur={() => handleInputChange('password')}
          />
          {errors.password && (
            <span className='font-bold text-red-600'>{errors.password.message}</span>
          )}
        </div>
        <Button type='submit' variant='formSubmit' disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Aceptar'}
        </Button>
      </form>
    </div>
  );
};
