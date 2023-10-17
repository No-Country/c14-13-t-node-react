import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        primary: {
          background: 'hsl(230, 17%, 14%)',
          lightBackground: 'hsl(232, 19%, 19%)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        rotationBackwards: {
          '0%': {
            transform: 'rotate(45deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotate(0deg)',
            opacity: '1',
          },
        },
        rotationForward: {
          '0%': {
            transform: 'rotate(0deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotate(45deg)',
            opacity: '1',
          },
        },
        spin: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
    animation: {
      rotationForward: 'rotationForward 0.3s ease-in-out',
      rotationBackwards: 'rotationBackwards 0.3s ease-in-out',
      spin: 'spin 1s linear infinite',
    },
  },
  plugins: [],
};
export default config;
