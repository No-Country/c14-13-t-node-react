import { Text, Button } from '@/components/ui';
import Link from 'next/link';

export const Banner = () => {
  return (
    <section className='w-full max-w-[80rem] px-6'>
      <div className='mx-auto flex h-[70vh] w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-primary-lightBlue'>
        <Text variant='homeTitle' className='px-4 text-center text-white'>
          Comienza Ya con Garage Guest
        </Text>
        <Text variant='body' className='mb-10 px-4 text-[1rem] text-white lg:text-[1.2rem]'>
          Impulsa el crecimiento de tu negocio con nosotros
        </Text>
        <Link href='/dashboard'>
          <Button
            variant='base'
            className='bg-white text-primary-lightBlue hover:bg-gray-200'
            link
          >
            Ir al Dashboard
          </Button>
        </Link>
      </div>
    </section>
  );
};
