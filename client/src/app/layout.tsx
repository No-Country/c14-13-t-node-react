import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider, QueryProvider, NextAuthProvider } from './_Providers';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GarageGuest',
  description: 'Sistema de Manejo de Taller',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <NextAuthProvider>
            <QueryProvider>
              <Toaster position='top-center' richColors />
              <Navbar />
              {children}
            </QueryProvider>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
