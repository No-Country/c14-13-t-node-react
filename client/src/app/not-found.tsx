import Image from 'next/image';
import { getServerAuthSession } from '@/utils/auth';
import Link from 'next/link';
import { Button } from '../components/ui';

export default async function page() {
  const session = await getServerAuthSession();
  return (
    <main className='flex h-full min-h-screen flex-col items-center gap-10 bg-slate-200 py-12 dark:bg-slate-700'>
      <div className='relative h-[9.5rem] w-[11.625rem] sm:h-[16.25rem] sm:w-[16.25rem]'>
        <Image src={'/images/not-found.svg'} alt='Pagina no encontrada' fill />
      </div>
      <h1 className='text-4xl font-bold text-slate-800 dark:text-white'>
        Pagina no encontrada
      </h1>
      <p className='text-lg font-semibold text-slate-800 dark:text-white'>
        {' '}
        Lo sentimos! La pagina que buscas no existe o no esta disponible.
      </p>
      <span className='flex flex-col gap-4'>
        {!!session && (
          <Link href='/dashboard'>
            <Button variant='base' link>
              Ir al Dashboard
            </Button>
          </Link>
        )}

        <Link href='/'>
          <Button variant='base' link>
            Ir al Inicio
          </Button>
        </Link>
      </span>
    </main>
  );
}
