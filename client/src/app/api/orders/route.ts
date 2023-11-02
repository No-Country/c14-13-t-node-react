import { NextResponse } from 'next/server';
import { getAllOrders, createOrder, getOrders } from '@/server/services/orders';
import { handleCommonError } from '@/server/errorHandlers';
import { OrderCreationSchema as NewOrderSchema } from '@/schemas/OrderSchema';

export async function GET(request: Request) {
  try {
    const orders = await getOrders();
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const NewOrder = NewOrderSchema.parse(body);
    const order = await createOrder(NewOrder);
    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}
