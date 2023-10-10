'use client';
import { Text, Button, Input } from '@/components/ui';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '../AuthValidations';
import { z } from 'zod';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
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

  const onSubmit: SubmitHandler<SignUpSchemaType> = ({ userName, email, password }) => {
    console.log({ userName, email, password });
  };
  return (
    <div className='w-[90%] max-w-[23.75rem]'>
      <Text variant='title' className='text-center'>
        Sign Up
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-1'>
          <label htmlFor='username'>Nombre de Usuario</label>
          <Input
            type='text'
            placeholder='Nombre de Usuario'
            {...register('userName')}
            onBlur={() => handleInputChange('userName')}
            isError={!!errors.userName}
          />
          {errors.userName && (
            <span className='font-bold text-red-600'>{errors.userName.message}</span>
          )}
        </div>
        <div className='mb-1'>
          <label htmlFor='email'>Correo Electrónico</label>
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
          <label htmlFor='password'>Contraseña</label>
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
        <div className='mb-2'>
          <label htmlFor='confirm password'>Confirme Contraseña</label>
          <Input
            type='password'
            placeholder='Confirme Contraseña'
            {...register('confirmPassword')}
            isError={!!errors.confirmPassword}
            onBlur={() => handleInputChange('confirmPassword')}
          />
          {errors.confirmPassword && (
            <span className='font-bold text-red-600'>{errors.confirmPassword.message}</span>
          )}
        </div>
        <Button type='submit' variant='base' className='mt-7 w-full'>
          Aceptar
        </Button>
      </form>
    </div>
  );
};
