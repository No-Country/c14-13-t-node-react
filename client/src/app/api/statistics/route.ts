import { NextResponse } from 'next/server';
import {
  getCounters,
  getMostSoldServices,
  getTotalSales,
  lastOrders,
} from '@/server/services/statistics';
import { handleCommonError } from '@/server/errorHandlers';
//statistics

export async function GET(request: Request) {
  try {
    const counters = await getCounters();
    const totalSales = await getTotalSales();
    const mostSoldServices = await getMostSoldServices();
    const newOrders = await lastOrders();
    return NextResponse.json(
      { counters, totalSales, popularServices: mostSoldServices, newOrders },
      { status: 200 },
    );
  } catch (error) {
    return handleCommonError(error);
  }
}
