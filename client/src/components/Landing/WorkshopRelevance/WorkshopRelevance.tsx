import { Text } from '@/components/ui';
import Image from 'next/image';
import { Check } from 'lucide-react';

export const WorkshopRelevance = () => {
  return (
    <>
      <section className='my-4 flex w-full max-w-[80rem] flex-col items-center justify-evenly gap-6 py-6 md:flex-row md:gap-0'>
        <div className='flex w-[80%] flex-col items-center gap-4 px-10 md:w-1/2'>
          <Text variant='homeTitle' className='text-2xl lg:text-3xl'>
            Transforma tu taller mecánico en un negocio mas eficiente y productivo
          </Text>
          <Text variant='body' className='text-base font-medium lg:text-lg'>
            Con Garage Guest, puedes centrarte en lo que realmente importa: ofrecer un servicio
            de calidad a tus clientes.
          </Text>
        </div>
        <div className='relative h-[17rem] w-[21.5625rem] overflow-hidden rounded-3xl lg:h-[25.125rem] lg:w-[31.91rem]'>
          <Image src='/images/workshop-manager.jpg' alt='Taller' fill />
        </div>
      </section>
      <section className='my-4 flex w-full max-w-[80rem] flex-col items-center justify-evenly gap-4 px-4 py-2 md:gap-0 md:px-0 md:py-6 lg:flex-row'>
        <div className='relative h-[21rem] w-[60%] rounded-3xl px-4 min-[520px]:w-[50%] sm:h-[24rem] md:h-[28rem] md:w-1/2 lg:overflow-hidden'>
          <Image
            src='/images/graph-1.png'
            alt='Taller'
            width={298}
            height={248}
            className='absolute left-[30%] top-[28%] z-10 rounded-3xl bg-primary-lightBlue md:top-[20%] md:scale-100'
          />
          <Image
            src='/images/sales.png'
            alt='Taller'
            width={298}
            height={248}
            className='absolute left-1 top-4 z-0 rounded-3xl bg-primary-lightBlue md:scale-100'
          />
        </div>
        <div className='flex flex-col items-center rounded-3xl bg-white p-5 dark:bg-primary-lightBackground md:p-10'>
          <Text variant='homeTitle' className='mb-6 '>
            Análisis de Ventas
          </Text>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <Check size={20} className='text-primary-lightBlue' />
              <Text variant='body' className='text-lg font-medium'>
                Conoce el estado de tu negocio en tiempo real.
              </Text>
            </div>
            <div className='flex items-center gap-2'>
              <Check size={20} className='text-primary-lightBlue' />
              <Text variant='body' className='text-lg font-medium'>
                Seguimiento sencillo y eficiente de las ventas.
              </Text>
            </div>
            <div className='flex items-center gap-2'>
              <Check size={20} className='text-primary-lightBlue' />
              <Text variant='body' className='text-lg font-medium'>
                Fácil identificación de los servicios mas populares.
              </Text>
            </div>
            <div className='flex items-center gap-2'>
              <Check size={20} className='text-primary-lightBlue' />
              <Text variant='body' className='text-lg font-medium'>
                Gráficos personalizables para un mejor análisis.
              </Text>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
