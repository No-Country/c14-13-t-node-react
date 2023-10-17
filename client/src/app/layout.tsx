import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider, QueryProvider } from './_Providers';
import localFont from 'next/font/local';
import { Toaster } from 'sonner';
import { Navbar } from '@/components';

const tauz = localFont({ src: '../assets/TauzSerif/tautz.ttf', display: 'swap' });

export const metadata: Metadata = {
  title: 'GarageGuest',
  description: 'Sistema de Manejo de Taller',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={tauz.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <QueryProvider>
            <Toaster position='top-center' richColors />
            <Navbar />
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
