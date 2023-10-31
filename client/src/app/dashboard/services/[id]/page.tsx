import { WorkshopServiceDetails } from '@/components/DetailsPages';

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <WorkshopServiceDetails id={parseInt(params.id)} />
    </div>
  );
}
