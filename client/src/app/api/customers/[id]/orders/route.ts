import { NextResponse } from 'next/server';
import { getCustomerOrders } from '@/server/services/customers';
import { handleCommonError } from '@/server/errorHandlers';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const orders = await getCustomerOrders(parseInt(params.id));
    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}
