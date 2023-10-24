import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions, User } from 'next-auth';
import NextAuth from 'next-auth/next';
import DiscordProvider from 'next-auth/providers/discord';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { envServer } from '@/utils/envServer';
import { prisma } from '@/server/db';
import { existingUserByEmail } from '@/server/services/user';
import { compare } from 'bcrypt';
import { AdapterUser } from 'next-auth/adapters';

const discordScopes = ['identify', 'email'];

export const authOptions: NextAuthOptions = {
  // debug: true,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  secret: envServer.NEXTAUTH_SECRET,
  callbacks: {
    // redirect: (url: string, baseUrl: string) => {
    //   // Allows relative callback URLs
    //   if (url.startsWith('/')) return `${baseUrl}${url}`;
    //   // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) return url;
    //   return baseUrl;
    // },
    jwt: async ({ token, user }) => {
      //esto permite añadir datos del user en el jwt y usarlo en el session callback
      if (user) {
        const { id, role, isActivated, username } = user;
        token.user = {
          id,
          role,
          isActivated,
          username,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      if (!token?.user) {
        return session;
      }
      const tokenUser = token.user as User | AdapterUser;
      session.user.id = tokenUser.id;
      if (tokenUser.username) {
        session.user.username = tokenUser.username;
      }
      if ('role' in tokenUser) {
        session.user.role = tokenUser.role;
      }
      if ('isActivated' in tokenUser) {
        session.user.isActivated = tokenUser.isActivated;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const existingUser = await existingUserByEmail(credentials.email);
        if (!existingUser) {
          throw new Error('No existe un usuario con ese email');
        }
        if (!existingUser.password) {
          //Si el usuario existe y no tiene contraseña es porque utilizo un proveedor externo
          throw new Error(
            'Usuario registrado con proveedor externo, por favor inicie sesión con el mismo',
          );
        }
        const passwordMatch = await compare(credentials.password, existingUser.password);
        if (!passwordMatch) {
          throw new Error('Error en los datos de inicio de sesión');
        }
        return existingUser;
      },
    }),
    DiscordProvider({
      clientId: envServer.DISCORD_CLIENT_ID,
      clientSecret: envServer.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: discordScopes.join(' ') } },
    }),
    GoogleProvider({
      clientId: envServer.GOOGLE_CLIENT_ID,
      clientSecret: envServer.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/sign-in',
    newUser: '/dashboard',
    signOut: '/auth/sign-in',
  },
};
const handler = NextAuth(authOptions) as unknown;
export { handler as GET, handler as POST };
