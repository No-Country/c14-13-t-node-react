'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { ThemeToggle } from '@/components';
import { Button } from '@/components/ui';
import { UserDropdown } from './UserDropdown';

export const Navbar = () => {
  const { data: session } = useSession();
  const name = session?.user.name ?? session?.user.username ?? 'Guest';
  return (
    <header className='flex h-10 w-full items-center justify-between gap-4 border-b border-slate-400/30 bg-white px-4 py-6 pr-10 transition-colors duration-300 dark:bg-primary-lightBackground'>
      <Link href={'/'} className='flex gap-2 text-base font-bold text-black dark:text-white'>
        {/* <CarFront size={20} /> */}
        GarageGuest
      </Link>
      <div className='flex items-center gap-5'>
        <ThemeToggle />
        <div className='flex items-center justify-center gap-4'>
          {session ? (
            <div className='flex items-center gap-3 text-slate-800 dark:text-slate-200'>
              {name}
              <UserDropdown />
            </div>
          ) : (
            <>
              <Link href='/auth/sign-up'>
                <Button variant='NavButton1' link>
                  SignUp
                </Button>
              </Link>
              <Link href='/auth/sign-in' className='overflow-visible'>
                <Button variant='NavButton2' link>
                  SignIn
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
