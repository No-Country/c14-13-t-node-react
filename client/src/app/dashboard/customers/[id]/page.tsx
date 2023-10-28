import { ClientDetails } from '@/components/CustomerDetails/CustomerDetails';

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <ClientDetails id={parseInt(params.id)} />
    </div>
  );
}
