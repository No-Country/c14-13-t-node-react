import Image from 'next/image';
import { Text } from '@/components/ui';

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex min-h-[calc(100vh-3.5rem)] w-full overflow-hidden bg-white transition-colors duration-300 dark:bg-primary-background'>
      <section className='hidden h-auto w-1/2 items-center justify-center bg-slate-300/80 dark:bg-slate-900 md:flex'>
        <div className='relative flex h-5/6 w-5/6 flex-col items-center'>
          <Image alt='Workshop' src='/images/car.svg' fill />
          <Text variant='specialTitle' className='mt-1 text-center text-[3rem]'>
            GarageGuest
          </Text>
        </div>
      </section>
      <section className='flex h-full max-h-[calc(100vh-3.03rem)] min-h-[calc(100vh-3.03rem)] w-full justify-center overflow-y-auto pb-16 pt-10 transition-colors duration-300 md:w-1/2'>
        {children}
      </section>
    </main>
  );
}
