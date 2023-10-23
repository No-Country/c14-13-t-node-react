import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/utils/auth';
import { SignUpForm } from '@/components/Auth/';

export default async function page() {
  const session = await getServerAuthSession();
  if (session) {
    redirect('/dashboard');
  }
  return <SignUpForm />;
}
