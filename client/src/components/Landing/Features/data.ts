import { type LucideIcon, Car, Users, Briefcase, Wrench, Shield, Cloud } from 'lucide-react';

export const data: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    Icon: Car,
    title: 'Gestión de vehículos',
    description:
      'Mantén un registro detallado de todos los vehículos que ingresan a tu taller.',
  },
  {
    Icon: Users,
    title: 'Administración de clientes',
    description: 'Crea y gestiona un perfil para cada uno de tus clientes.',
  },
  {
    Icon: Briefcase,
    title: 'Gestión de empleados y mecánicos',
    description: 'Administra a tu equipo de manera eficiente.',
  },
  {
    Icon: Wrench,
    title: 'Seguimiento de servicios y órdenes',
    description:
      'Nuestro dashboard te permite crear y seguir el progreso de cada servicio y orden de trabajo.',
  },
  {
    Icon: Shield,
    title: 'Autenticación segura',
    description: 'Protege la información de tu taller con nuestro sistema de autenticación.',
  },
  {
    Icon: Cloud,
    title: 'Almacenamiento en la nube',
    description:
      'Todos los datos se guardan de forma segura en la nube, accede desde cualquier lugar y en cualquier momento.',
  },
];
