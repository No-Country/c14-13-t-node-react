import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCustomerVehicles, getCustomerOrders } from '@/services/customerService';
import { Spinner } from '../ui';
import { CustomersOrders } from './CustomersOrders';
import { CustomersVehicles } from './CustomersVehicles';

export const Resumen = ({ customerId }: { customerId: number }) => {
  const {
    data: vehicles,
    isLoading: vehiclesIsLoading,
    isError: vehiclesIsError,
    error: vehiclesError,
  } = useQuery({
    queryKey: ['customers-vehicles', customerId],
    queryFn: () => getCustomerVehicles(customerId),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['customers-orders', customerId],
    queryFn: () => getCustomerOrders(customerId),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (vehiclesIsLoading || isLoading)
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <Spinner className='h-8 w-8' />
      </div>
    );
  if (vehiclesIsError || isError)
    return <div className='h-full w-full'>Error: {String(vehiclesError || error)}</div>;

  return (
    <div className='flex h-full w-[80%] flex-col justify-center gap-4'>
      <CustomersVehicles vehicles={vehicles.vehicles} />
      <CustomersOrders orders={orders.orders} />
    </div>
  );
};
