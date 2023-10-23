import { getServerSession } from 'next-auth/next';
import { authOptions } from '../app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export const getServerAuthSession = () => getServerSession(authOptions);

export const sessionIsRequiredServer = async () => {
  const session = await getServerAuthSession();
  if (!session) {
    redirect('/auth/sign-in');
  }
};
