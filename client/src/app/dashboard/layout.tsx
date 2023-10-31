import { Sidebar } from '@/components';

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex min-h-[calc(100vh-3.5rem)] w-full overflow-hidden bg-gray-300 transition-colors duration-300  dark:bg-primary-background'>
      <Sidebar />
      <section className='flex h-full min-h-[calc(100vh-3.03rem)] w-full flex-col items-center overflow-auto px-2 pb-10 pt-4 transition-colors duration-200 sm:px-8'>
        {children}
      </section>
    </main>
  );
}
