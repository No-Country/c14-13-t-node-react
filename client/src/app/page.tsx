import Image from 'next/image';
import { Navbar } from '@/components';
import Link from 'next/link';
import { Button } from '../components/ui';

export default function Home() {
  return (
    <main className='flex min-h-screen w-full flex-col items-center justify-center bg-white transition-colors duration-300 dark:bg-primary-background'>
      <div className='flex w-full flex-col items-center justify-center gap-8'>
        <div className='relative h-60 w-60 overflow-hidden rounded-full'>
          <Image src={'/images/pandas.png'} alt='pandas' fill />
        </div>
        <h1 className='mb-8 text-[2rem] font-extrabold text-slate-700 dark:text-white'>
          Pagina en Construcción
        </h1>
        <Link href={'/dashboard'}>
          <Button variant='base' link>
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </main>
  );
}
