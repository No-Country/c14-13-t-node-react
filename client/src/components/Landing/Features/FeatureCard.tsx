import { type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}
export const FeatureCard = ({ title, Icon, description }: FeatureCardProps) => {
  return (
    <article className='flex h-72 w-72 flex-col items-center gap-4 rounded-3xl bg-white p-3 pt-10 shadow-primary-lightBlue dark:bg-primary-lightBackground'>
      <Icon size={50} className='text-primary-lightBlue' />
      <h3 className='text-center text-lg font-semibold text-gray-900 dark:text-gray-200'>
        {title}
      </h3>
      <p className='text-center text-base font-medium text-gray-900 dark:text-gray-200'>
        {description}
      </p>
    </article>
  );
};
