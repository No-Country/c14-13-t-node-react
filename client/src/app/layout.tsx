import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider, QueryProvider } from './_Providers';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { Navbar } from '@/components';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GarageGuest',
  description: 'Sistema de Manejo de Taller',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
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
