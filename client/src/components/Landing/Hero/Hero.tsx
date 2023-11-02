import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';

export const Hero = () => {
  return (
    <section className='relative w-full pt-12'>
      <div className='absolute left-0 top-0 h-[90%] w-full'>
        <div className='absolute left-0 top-0 h-[98%] w-full bg-primary-lightBlue'></div>
        <div className='absolute bottom-0 left-0 mb-1 w-full pb-[6.2%] text-gray-200 dark:text-primary-background'>
          <svg
            className='absolute bottom-0 left-0 h-full w-full'
            viewBox='0 0 3000 185.4'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='currentColor'
              d='M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z'
            ></path>
          </svg>
        </div>
      </div>
      <div className='relative z-10 mt-6 pt-12 lg:mt-12'>
        <div className='flex justify-center pb-4 pt-2 text-center text-white'>
          <div className='flex w-5/6 flex-col items-center px-4 xl:w-3/4'>
            <span className='mb-5 rounded-full bg-primary-darkBlue p-2 px-4 text-sm font-semibold sm:mb-3'>
              Lleva tu taller al siguiente nivel
            </span>
            <h1 className='mb-6 text-[1.9rem] font-semibold leading-tight sm:text-[2.5rem] lg:text-[3.5rem]'>
              Un panel administrativo diseñado para impulsar tu taller
            </h1>
            <p className='mb-3 pb-6 text-base font-bold sm:text-lg lg:mb-5'>
              Comienza a utilizar Garage Guest totalmente gratis
            </p>
            <div className='mb-4 max-w-[12rem] lg:mb-6'>
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
          </div>
        </div>
        <div className='relative mx-auto h-[9rem] max-w-[21.25rem] overflow-hidden rounded-3xl bg-primary-lightBlue p-1 sm:h-[18rem] sm:max-w-[37.5rem] lg:h-[27.5rem] lg:max-w-[64.875rem]'>
          <Image priority src={'/images/example.png'} alt='Dashboard Example' fill />
        </div>
      </div>
    </section>
  );
};
