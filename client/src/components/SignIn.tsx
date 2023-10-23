'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function SignIn() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>;

  if (session) {
    return (
      <div className='mt-10'>
        <div className='text-black dark:text-white'>
          Signed in as {session.user?.email} <br />
        </div>
        <button className='text-black dark:text-white' onClick={() => void signOut()}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className='mt-10'>
      <div className='text-black dark:text-white'>
        Not signed in <br />
      </div>
      <button className='text-black dark:text-white' onClick={() => void signIn()}>
        Sign In
      </button>
    </div>
  );
}
