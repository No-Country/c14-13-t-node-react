'use client';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { StatisticsCard, StatisticsCardProps } from './StatisticsCard';
import { Spinner } from '../ui';
import { getStatistics } from '@/services/statisticsService';
import { Users, BadgeDollarSign, BookOpenCheck, CarFront, Wrench } from 'lucide-react';
import NewstOrdersTable from './NewstOrdersTable';

export const StatisticsBoard = () => {
  const [ChartComponent, setChartComponent] = useState<React.ReactNode | null>(null);
  const {
    data: statistics,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['statistics'],
    queryFn: getStatistics,
    // refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (!!statistics) {
      const chartLabels = statistics.popularServices.topServices.map(
        (service) => service.serviceName,
      );
      const chartData = statistics.popularServices.topServices.map((service) => service.total);
      const restTotal = statistics.popularServices.otherServices.reduce(
        (acc, curr) => acc + curr.total,
        0,
      );
      const ApexChart = require('react-apexcharts').default;
      setChartComponent(
        <ApexChart
          type='donut'
          width={430}
          options={{
            chart: {
              type: 'donut',
            },
            legend: {
              fontSize: '13px',
              fontWeight: 600,
            },
            labels: [...chartLabels, 'Otros'],
          }}
          series={[...chartData, restTotal]}
        />,
      );
    }
  }, [statistics]);
  if (isLoading) {
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <Spinner className='h-10 w-10' />
      </div>
    );
  }
  if (isError) {
    console.log(error);
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <p>Ha ocurrido un error!</p>
      </div>
    );
  }

  const data: StatisticsCardProps[] = [
    {
      description: 'Clientes',
      Icon: Users,
      value: statistics?.counters.clientsCount || 0,
      currency: false,
      iconColor: 'text-blue-700',
    },
    {
      description: 'Total de Ventas',
      Icon: BadgeDollarSign,
      value: statistics?.totalSales || 0,
      currency: true,
      iconColor: 'text-green-700',
    },
    {
      description: 'Total de Ordenes',
      Icon: BookOpenCheck,
      value: statistics?.counters.ordersCount || 0,
      currency: false,
      iconColor: 'text-purple-400',
    },
    {
      description: 'Vehículos',
      Icon: CarFront,
      value: statistics?.counters.vehiclesCount || 0,
      currency: false,
      iconColor: 'text-gray-400',
    },
    {
      description: 'Servicios',
      Icon: Wrench,
      value: statistics?.counters.servicesCount || 0,
      currency: false,
      iconColor: 'text-gray-400',
    },
  ];

  return (
    <>
      <div className='flex h-full w-full min-w-[24.5rem] flex-wrap gap-4 lg:grid lg:grid-cols-3'>
        {data.slice(0, 3).map((item) => (
          <StatisticsCard key={item.description} {...item} />
        ))}
        <div className='relative col-span-2 row-span-2 flex h-[19rem] w-full items-center justify-center rounded-3xl bg-white p-3 pl-2 pt-8 dark:bg-primary-lightBackground dark:text-white'>
          <span className='absolute left-[15%] top-[11%] text-2xl font-semibold text-gray-700 dark:text-gray-200'>
            Servicios mas Populares
          </span>
          {ChartComponent}
        </div>
        {data.slice(3).map((item) => (
          <StatisticsCard key={item.description} {...item} />
        ))}
      </div>
      <div className='flex h-full w-full min-w-[24.5rem]'>
        <NewstOrdersTable orders={statistics.newOrders} />
      </div>
    </>
  );
};
