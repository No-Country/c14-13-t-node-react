import { prisma } from '@/server/db';

export const getCounters = async () => {
  const clientsCount = await prisma.customer.count();
  const ordersCount = await prisma.order.count();
  const servicesCount = await prisma.service.count();
  const vehiclesCount = await prisma.vehicle.count();
  const usersCount = await prisma.user.count();

  return {
    clientsCount,
    ordersCount,
    servicesCount,
    vehiclesCount,
    usersCount,
  };
};

export const getTotalSales = async () => {
  const totalSales = await prisma.order.aggregate({
    _sum: {
      cost: true,
    },
  });
  return totalSales._sum.cost ?? 3000;
};

export const getMostSoldServices = async () => {
  const orderServices = await prisma.orderService.findMany({
    include: {
      service: true,
    },
  });
  if (orderServices.length === 0)
    return {
      topServices: [
        {
          serviceName: 'Service 1',
          count: 8,
          total: 1200,
        },
        {
          serviceName: 'Service 2',
          count: 6,
          total: 1000,
        },
      ],
      otherServices: [
        {
          serviceName: 'Service 3',
          count: 3,
          total: 500,
        },
        {
          serviceName: 'Service 4',
          count: 2,
          total: 300,
        },
      ],
    };
  const serviceCounts: Record<string, { count: number; total: number }> = orderServices.reduce(
    (counts: Record<string, { count: number; total: number }>, orderService) => {
      const serviceName = orderService.service.service;
      if (!counts[serviceName]) {
        counts[serviceName] = { count: 0, total: 0 };
      }
      counts[serviceName].count += 1;
      counts[serviceName].total += orderService.service.servicePrice;
      return counts;
    },
    {},
  );

  const sortedServices = Object.entries(serviceCounts)
    .sort(([, a], [, b]) => b.total - a.total)
    .map(([serviceName, { count, total }]) => ({ serviceName, count, total }));

  const topServices = sortedServices.slice(0, 3);
  const otherServices = sortedServices.slice(3);
  return {
    topServices,
    otherServices,
  };
};

export const getNewCustomers = async (count: number) => {
  const recentCustomers = await prisma.customer.findMany({
    // orderBy: {
    //   createdAt: 'desc',
    // },
    take: count,
  });
  return recentCustomers;
};
export const lastOrders = async () => {
  const newOrders = await prisma.order.findMany({
    orderBy: {
      departureDate: 'desc',
    },
    take: 5,
    select: {
      id: true,
      entryDate: true,
      departureDate: true,
      deadline: true,
      cost: true,
      workshopId: true,
      mechanicId: true,
      vehicleId: true,
      employeeId: true,
      vehicle: {
        select: {
          plate: true,
          customer: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      },
      orderServices: {
        select: {
          serviceId: true,
          service: {
            select: {
              serviceCode: true,
              service: true,
            },
          },
        },
      },
      workshop: {
        select: {
          name: true,
        },
      },
      employees: {
        select: {
          name: true,
        },
      },
      mechanic: {
        select: {
          name: true,
        },
      },
    },
  });

  return newOrders;
};
