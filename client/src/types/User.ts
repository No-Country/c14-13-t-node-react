import type { UserSchema } from '@/schemas/UserSchema';
import type { z } from 'zod';

export type User = z.infer<typeof UserSchema>;
