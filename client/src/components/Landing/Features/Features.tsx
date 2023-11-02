import React from 'react';
import { Text } from '../../ui';
import { data } from './data';
import { FeatureCard } from './FeatureCard';

export const Features = () => {
  return (
    <section className='mt-10 flex w-full max-w-[80rem] flex-col items-center justify-center pt-6'>
      <Text
        variant='homeTitle'
        className='mb-10 px-4 text-center text-primary-lightBlue dark:text-primary-lightBlue'
      >
        ¿Que consigues con Garage Guest?
      </Text>
      <div className='flex flex-wrap justify-center gap-8'>
        {data.map(({ title, description, Icon }) => (
          <FeatureCard key={title} title={title} Icon={Icon} description={description} />
        ))}
      </div>
    </section>
  );
};
