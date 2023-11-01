import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

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
          lightBlue: 'hsl(var(--light-blue))',
          darkBlue: 'hsl(var(--dark-blue))',
          lighterBlue: 'hsl(var(--lighter-blue))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        abril: ['var(--font-abril-fatface)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.4,0,0.6,1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0px)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
          '100%': {
            opacity: '1',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
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
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      pulse: 'pulse 2s ease-in-out infinite',
      fadeIn: 'fadeIn 0.4s ease-in-out',
      fadeOut: 'fadeOut 0.4s ease-in-out',
    },
    boxShadow: {
      right: '10px 0 15px -3px rgba(0, 0, 0, 0.12), 4px 0 6px -2px rgba(0, 0, 0, 0.08)',
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.shadow-button': {
          boxShadow: 'inset 0 0 2px 0 rgba(0, 0, 0, 0.5), 0 0 7px 0 hsla(39, 34%, 89%, 0.7)',
        },
      });
    }),
  ],
};
export default config;
