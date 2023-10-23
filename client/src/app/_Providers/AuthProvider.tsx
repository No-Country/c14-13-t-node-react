'use client';

import { SessionProvider } from 'next-auth/react';
type Props = {
  children?: React.ReactNode;
};

export function NextAuthProvider({ children }: Props) {
  return (
    <SessionProvider refetchInterval={5 * 60} refetchOnWindowFocus={false}>
      {children}
    </SessionProvider>
  );
}
