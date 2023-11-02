import { Text } from '@/components/ui';

export const Footer = () => {
  return (
    <footer className='mb-4 mt-12 flex h-12 w-full max-w-[80rem] items-center justify-center py-5'>
      <Text variant='body' className='px-6 text-center text-base md:px-0 md:text-lg'>
        © Todos los derechos reservados. NoCountry C14-13-T
      </Text>
    </footer>
  );
};
