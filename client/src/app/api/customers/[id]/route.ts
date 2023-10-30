import { NextResponse } from 'next/server';
import { deleteCustomer, getCustomerById, updateCustomer } from '@/server/services/customers';
import { handleCommonError } from '@/server/errorHandlers';
import { CustomerUpdateSchema } from '@/schemas/CustomerSchema';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const customer = await getCustomerById(parseInt(params.id));
    if (!customer) {
      return NextResponse.json(
        {
          message: 'Customer not Found',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json({ customer }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const newData = CustomerUpdateSchema.parse(body);
    const customer = await updateCustomer(parseInt(params.id), newData);
    if (!customer) {
      return NextResponse.json(
        {
          message: 'El Cliente existe',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json({ customer }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const customer = await deleteCustomer(parseInt(params.id));
    if (!customer) {
      return NextResponse.json(
        {
          message: 'El cliente no existe',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(
      { customer, message: 'Cliente borrado exitosamente' },
      { status: 200 },
    );
  } catch (error) {
    return handleCommonError(error);
  }
}
