import type { Session } from 'next-auth';
import { z } from 'zod';
import { AuthBaseSchema } from '@/schemas/AuthSchema';
import { CustomerCreationSchema } from '@/schemas/CustomerSchema';

export type ExtractProperties<T> = {
  [K in keyof T]: T[K];
};

export type SessionUser = ExtractProperties<Session['user']>;

export type NewUser = z.infer<typeof AuthBaseSchema>;
export type NewCustomer = z.infer<typeof CustomerCreationSchema>;
export type Customer = NewCustomer & { id: number; isActive: boolean };
