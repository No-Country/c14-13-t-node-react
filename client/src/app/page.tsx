import Image from 'next/image';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <main className='flex min-h-screen w-full flex-col justify-between bg-slate-300 transition-colors duration-200 dark:bg-slate-800'>
      <div className='flex h-10 w-full items-center justify-end bg-blue-200 pr-10 transition-colors duration-200 dark:bg-blue-900'>
        <ThemeToggle />
      </div>
      <div className='flex min-h-[50vh] w-full flex-col items-center justify-center gap-8'>
        <div className='relative h-60 w-60 overflow-hidden rounded-full'>
          <Image src={'/images/pandas.png'} alt='pandas' fill />
        </div>
        <h1 className='mb-8'>Pagina en Construcción</h1>
      </div>
    </main>
  );
}
