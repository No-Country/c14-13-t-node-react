'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  /**
   * Con esto el componente muestra el icono correcto, ya que, asi este
   * espera a estar montado para luego confirmar si hay o no un Theme en el
   * localStorage
   */
  useEffect(() => {
    setIsMounted(!isMounted);
  }, []); //En este caso ESlint esta equivocado

  const icon = theme === 'dark' ? 'moon' : 'sun';
  const handleThemeToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const rotationClass =
    theme === 'dark' ? 'animate-rotationBackwards' : 'animate-rotationForward';

  if (!isMounted) return null;
  return (
    <button
      title='Theme toggle'
      aria-label='Theme toggle'
      className='relative h-9 w-9 rounded-full p-1 ring-1 ring-slate-900/40 transition-all duration-300 ease-in-out dark:ring-slate-200/50'
      onClick={handleThemeToggle}
    >
      <Image
        alt='Theme'
        src={`/images/icons/${icon}.svg`}
        width={32}
        height={32}
        className={`${rotationClass}`}
      />
    </button>
  );
};
