import { HomeIcon, Users, Car, type LucideIcon } from 'lucide-react';
type AccordionItem = {
  Icon: LucideIcon;
  title: string;
  routes: route[];
};
type route = {
  name: string;
  path: string;
  adminOnly?: boolean;
};
export const sidebarData: AccordionItem[] = [
  {
    Icon: HomeIcon,
    title: 'Dashboard',
    routes: [
      {
        name: 'Dashboard',
        path: '/dashboard',
      },
    ],
  },
  {
    Icon: Users,
    title: 'Clientes',
    routes: [
      {
        name: 'Añadir Cliente',
        path: '/dashboard/add-customer',
      },
      {
        name: 'Lista de Clientes',
        path: '/dashboard/customers-list',
      },
      {
        name: 'Detalles de Cliente',
        path: '/dashboard/customer',
      },
    ],
  },
  {
    Icon: Users,
    title: 'Empleados',
    routes: [
      {
        name: 'Añadir Empleado',
        path: '/dashboard/add-customer',
      },
      {
        name: 'Actualizar Empleado',
        path: '/dashboard/update-customer',
      },
      {
        name: 'Borrar Empleado',
        path: '/dashboard/delete-customer',
      },
      {
        name: 'Lista de Empleados',
        path: '/dashboard/customers-list',
      },
    ],
  },
  {
    Icon: Users,
    title: 'Usuarios',
    routes: [{ name: 'Lista de usuarios', path: '/dashboard/users-list', adminOnly: true }],
  },
  {
    Icon: Car,
    title: 'Vehículos',
    routes: [
      {
        name: 'Añadir Vehículo',
        path: '/dashboard/add-customer',
      },
      {
        name: 'Actualizar Vehículo',
        path: '/dashboard/update-customer',
      },
      {
        name: 'Borrar Vehículo',
        path: '/dashboard/delete-customer',
      },
      {
        name: 'Lista de Vehículos',
        path: '/dashboard/customers-list',
      },
    ],
  },
];
