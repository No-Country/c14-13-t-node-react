import { z } from 'zod';
import { UserSchema } from '@/schemas/UserSchema';

/**
 * Se definen cuales son los requerimientos por cada propiedad
 * en el Schema de Autenticación,
 * también los mensajes que el usuario debe visualizar en caso de Error
 * Mas información: https://zod.dev/?id=objects
 */
const AuthBaseSchema = UserSchema.omit({ id: true, id_rol: true, is_active: true }).extend({
  confirmPassword: z.string().min(1, { message: 'Se requiere confirmar su contraseña' }),
});
/**
 * Para el registro o sign up, se requieren todos los campos,
 * junto a la comparación de Contraseña y Confirmación de contraseña
 */
export const SignUpSchema = AuthBaseSchema.omit({ password: true })
  .extend({
    password: z
      .string()
      .regex(/[A-Z]/, 'Debe tener al menos una letra mayúscula')
      .regex(/[a-z]/, 'Debe tener al menos una letra minúscula')
      .regex(/[0-9]/, 'Debe tener al menos un número')
      .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 'Debe tener al menos un símbolo')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(50, 'La contraseña no puede tener más de 50 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Las contraseñas no coinciden',
  });
/**
 * Para el Login o Sign In, solo se requiere Email y Contraseña
 */
export const SignInSchema = AuthBaseSchema.pick({ email: true, password: true });
