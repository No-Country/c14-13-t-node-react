import { UserSchema } from '@/schemas/UserSchema';
import { z } from 'zod';

export type User = z.infer<typeof UserSchema>;
