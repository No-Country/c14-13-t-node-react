import {
  HomeIcon,
  Users,
  Car,
  type LucideIcon,
  Store,
  Briefcase,
  FileText,
  HardHat,
  Wrench,
  User,
} from 'lucide-react';
type AccordionItem = {
  Icon: LucideIcon;
  title: string;
  adminOnly?: boolean;
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
        name: 'Resumen General',
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
        path: '/dashboard/customers/add-customer',
      },
      {
        name: 'Lista de Clientes',
        path: '/dashboard/customers/customers-list',
      },
    ],
  },
  {
    Icon: Car,
    title: 'Vehículos',
    routes: [
      {
        name: 'Lista de Vehículos',
        path: '/dashboard/vehicles/vehicles-list',
      },
    ],
  },
  {
    Icon: FileText,
    title: 'Ordenes',
    routes: [
      {
        name: 'Lista de Ordenes',
        path: '/dashboard/orders/orders-list',
      },
    ],
  },
  {
    Icon: Wrench,
    title: 'Servicios',
    routes: [
      { name: 'Añadir servicios', path: '/dashboard/services/add-service' },
      { name: 'Lista de servicios', path: '/dashboard/services/services-list' },
    ],
  },
  {
    Icon: HardHat,
    title: 'Mecánicos',
    routes: [
      {
        name: 'Añadir Mecánico',
        path: '/dashboard/mechanics/add-mechanic',
      },
      {
        name: 'Lista de Mecánicos',
        path: '/dashboard/mechanics/mechanics-list',
      },
    ],
  },
  {
    Icon: Briefcase,
    title: 'Empleados',
    routes: [
      {
        name: 'Añadir Empleado',
        path: '/dashboard/employees/add-employee',
      },
      {
        name: 'Lista de Empleados',
        path: '/dashboard/employees/employees-list',
      },
    ],
  },
  {
    Icon: User,
    title: 'Usuarios',
    adminOnly: true,
    routes: [
      { name: 'Lista de usuarios', path: '/dashboard/users/users-list', adminOnly: true },
    ],
  },
  {
    Icon: Store,
    title: 'Taller',
    adminOnly: true,
    routes: [
      {
        name: 'Datos del Taller',
        path: '/dashboard/workshop',
        adminOnly: true,
      },
    ],
  },
];
