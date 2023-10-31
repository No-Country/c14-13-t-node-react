import { StatisticsCardProps } from './StatisticsCard';
import { Users, BadgeDollarSign } from 'lucide-react';

export const data: StatisticsCardProps[] = [
  {
    description: 'Clientes',
    value: 100,
    Icon: Users,
    iconColor: 'text-blue-500',
    currency: false,
  },
  {
    description: 'Total de Ventas',
    value: 3200,
    Icon: BadgeDollarSign,
    iconColor: 'text-green-500',
    currency: true,
  },
];
