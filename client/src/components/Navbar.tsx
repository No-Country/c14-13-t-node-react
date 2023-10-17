import Link from 'next/link';
import { ThemeToggle } from '@/components';
import { Button } from '@/components/ui';

export const Navbar = () => {
  return (
    <header className='flex h-10 w-full items-center justify-between gap-4 bg-white px-4 py-7 pr-10 transition-colors duration-300 dark:bg-primary-lightBackground'>
      <Link href={'/'} className='text-lg font-bold text-black dark:text-white'>
        GarageGuest
      </Link>
      <div className='flex items-center gap-3'>
        <ThemeToggle />
        <Link href='/auth/signup'>
          <Button variant='NavButton1' link>
            SignUp
          </Button>
        </Link>
        <Link href='/auth/signin' className='overflow-visible'>
          <Button variant='NavButton2' link>
            SignIn
          </Button>
        </Link>
      </div>
    </header>
  );
};
