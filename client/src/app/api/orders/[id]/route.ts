import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import { getOrderById, updateOrder, removeOrder } from '@/server/services/orders';
import { OrderCreationSchema } from '@/schemas/OrderSchema';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const order = await getOrderById(parseInt(params.id));
    if (!order) {
      return NextResponse.json(
        {
          message: 'Order not Found',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const newData = OrderCreationSchema.parse(body);
    const order = await updateOrder(parseInt(params.id), newData);
    if (!order) {
      return NextResponse.json(
        {
          message: 'Not Order Update',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const order = await removeOrder(parseInt(params.id));
    if (!order) {
      return NextResponse.json(
        {
          message: 'No Order Delete',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(
      {
        order,
        message: 'Succefull Delete',
      },
      { status: 200 },
    );
  } catch (error) {
    return handleCommonError(error);
  }
}
