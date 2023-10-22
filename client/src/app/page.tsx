import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui';
import SignIn from '../components/SignIn';
import LogSession from '../components/logSession';

export default function Home() {
  return (
    <main className='flex h-auto min-h-screen w-full flex-col items-center bg-white transition-colors duration-300 dark:bg-primary-background'>
      <div className='flex w-full flex-col items-center justify-center gap-8 py-10'>
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
        <SignIn />
        <LogSession />
      </div>
    </main>
  );
}
