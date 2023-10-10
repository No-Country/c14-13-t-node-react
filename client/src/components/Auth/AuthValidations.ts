import { z } from 'zod';

/**
 * Se definen cuales son los requerimientos por cada propiedad
 * en el Schema de Autenticación,
 * también los mensajes que el usuario debe visualizar en caso de Error
 * Mas información: https://zod.dev/?id=objects
 */
const AuthBaseSchema = z.object({
  userName: z
    .string()
    .min(4, 'El nombre de usuario debe tener al menos 4 caracteres')
    .max(20, 'El nombre de usuario no puede tener más de 20 caracteres')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'El nombre de usuario solo puede contener letras, números, guiones y guiones bajos',
    )
    .trim(),
  email: z.string().email('Introduzca una dirección de correo electrónico válida'),
  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(50, 'La contraseña no puede tener más de 50 caracteres'),
  confirmPassword: z.string().min(1, { message: 'Se requiere confirmar su contraseña' }),
});

/**
 * Para el registro o sign up, se requieren todos los campos,
 * junto a la comparación de Contraseña y Confirmación de contraseña
 */
export const SignUpSchema = AuthBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    path: ['confirmPassword'],
    message: 'Las contraseñas no coinciden',
  },
);

/**
 * Para el Login o Sign In, solo se requiere Email y Contraseña
 */
export const SignInSchema = AuthBaseSchema.pick({ email: true, password: true });
