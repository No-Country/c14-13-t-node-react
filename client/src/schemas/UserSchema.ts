import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
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
  is_active: z.number(),
  id_rol: z.number(),
});
