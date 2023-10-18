import Link from 'next/link';
import { ThemeToggle } from '@/components';
import { Button } from '@/components/ui';
import { CarFront } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className='flex h-10 w-full items-center justify-between gap-4 border-b border-slate-400 bg-white px-4 py-6 pr-10 transition-colors duration-300 dark:bg-primary-lightBackground'>
      <Link href={'/'} className='flex gap-2 text-base font-bold text-black dark:text-white'>
        <CarFront size={20} />
        GarageGuest
      </Link>
      <div className='flex items-center gap-3'>
        <ThemeToggle />
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
      </div>
    </header>
  );
};
