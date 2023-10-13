import Image from 'next/image';
import { Text } from '@/components/ui';

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex min-h-[calc(100vh-3rem)] w-full bg-white transition-colors duration-300 dark:bg-primary-background'>
      <section className='hidden w-1/2 items-center justify-center bg-slate-400 md:flex'>
        <div className='relative h-5/6 w-5/6'>
          <Image alt='Workshop' src='/images/car.svg' fill />
          <Text variant='title' className='mt-4 text-center text-[3rem] text-orange-500'>
            GarageGuest
          </Text>
        </div>
      </section>
      <section className='flex w-full items-center justify-center transition-colors duration-300 md:w-1/2'>
        {children}
      </section>
    </main>
  );
}
