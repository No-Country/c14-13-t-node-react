'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '@/schemas/AuthSchema';
import { z } from 'zod';
import { Text, Button, Spinner } from '@/components/ui';
import { FormField, type FieldList } from '@/components';
import { toast } from 'sonner';

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

  const onSubmit: SubmitHandler<SignUpSchemaType> = ({ userName, email, password }) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Datos enviados exitosamente');
    }, 1000);
  };

  const signUpFields: FieldList<SignUpSchemaType> = [
    {
      label: 'Nombre de Usuario',
      id: 'userName',
      type: 'text',
    },
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
    </div>
  );
};
