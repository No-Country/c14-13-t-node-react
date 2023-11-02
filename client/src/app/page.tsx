import { Hero, Features, WorkshopRelevance, Banner, Footer } from '../components/Landing';

export default function Home() {
  return (
    <main className='relative flex h-auto min-h-screen w-full flex-col items-center overflow-auto bg-gray-200 transition-colors duration-300 dark:bg-primary-background'>
      <Hero />
      <Features />
      <WorkshopRelevance />
      <Banner />
      <Footer />
    </main>
  );
}
