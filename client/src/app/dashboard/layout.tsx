import Image from 'next/image';
import { Sidebar } from '@/components';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex min-h-[calc(100vh-3rem)] w-full bg-white transition-colors duration-300 dark:bg-primary-background'>
      <Sidebar />
      <section className='flex w-full items-center justify-center transition-colors duration-200'>
        {children}
      </section>
    </main>
  );
}
