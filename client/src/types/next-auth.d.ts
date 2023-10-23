import type { User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    email: string;
    username: string | null;
    isActivated: boolean;
    role: string;
    name: string | null;
    image: string | null;
  }
  interface Session {
    user: User;
    token: {
      username?: string | null;
    };
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    user: {
      id: string;
      role: string;
      isActivated: boolean;
    };
  }
}
