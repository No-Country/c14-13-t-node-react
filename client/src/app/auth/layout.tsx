import Image from 'next/image';
import { Text } from '@/components/ui';

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex min-h-screen w-full bg-white'>
      <section className='hidden w-1/2 items-center justify-center bg-slate-400 md:flex'>
        <div className='relative h-5/6 w-5/6'>
          <Image alt='Workshop' src='/images/car.svg' fill />
          <Text variant='title' className='mt-4 text-center text-[3rem] text-orange-500'>
            GarageGest
          </Text>
        </div>
      </section>
      <section className='flex w-full items-center justify-center md:w-1/2'>
        {children}
      </section>
    </main>
  );
}
