import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider, QueryProvider, NextAuthProvider } from './_Providers';
import { Inter, Abril_Fatface } from 'next/font/google';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-abril-fatface',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GarageGuest',
  description: 'Sistema de Manejo de Taller',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={`${inter.variable} ${abrilFatface.variable}`}>
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
