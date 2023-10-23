import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { Text, Button } from '@/components/ui';

const OautButtons = () => {
  return (
    <div className='pb-6'>
      <div className='my-5 flex items-center gap-3 text-center'>
        <div className='h-[0.0625rem] w-full bg-slate-400'></div>
        <Text variant='body'>o</Text>
        <div className='h-[0.0625rem] w-full bg-slate-400'></div>
      </div>
      <div className='flex flex-col gap-2'>
        <Button
          variant='OauthButton'
          onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' })}
        >
          <Image
            src='/images/logos/google-logo.svg'
            width={20}
            height={20}
            alt='Google Logo'
          />
          Continuar con Google
        </Button>
        <Button
          variant='OauthButton'
          onClick={() => signIn('discord', { callbackUrl: 'http://localhost:3000/dashboard' })}
        >
          <Image
            src='/images/logos/discord-logo.svg'
            width={20}
            height={20}
            alt='Discord Logo'
          />
          Continuar con Discord
        </Button>
      </div>
    </div>
  );
};

export default OautButtons;
