import { z } from 'zod';

export const PersonSchema = z.object({
  firstName: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(20, 'El nombre no puede tener más de 20 caracteres')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'El nombre solo puede contener letras, números, guiones y guiones bajos',
    )
    .trim(),
  lastName: z
    .string()
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .max(20, 'El apellido no puede tener más de 20 caracteres')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'El apellido solo puede contener letras, números, guiones y guiones bajos',
    )
    .trim(),
  email: z
    .string()
    .email('Introduzca una dirección de correo electrónico válida')
    .max(40, 'El correo electrónico no puede tener más de 40 caracteres'),
});
