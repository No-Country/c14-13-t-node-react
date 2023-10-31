import { EmployeeDetails } from '@/components/DetailsPages';

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <EmployeeDetails id={parseInt(params.id)} />
    </div>
  );
}
