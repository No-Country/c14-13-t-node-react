import { NextResponse } from 'next/server';
import { deleteCustomer, getCustomerById, updateCustomer } from '@/server/services/costumers';
import { handleCommonError } from '@/server/errorHandlers';
import { CustomerSchema } from '@/schemas/CustomerSchema';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const customer = await getCustomerById(parseInt(params.id));
    return NextResponse.json({ customer }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const newData = CustomerSchema.parse(body);
    const customer = await updateCustomer(parseInt(params.id), newData);
    return NextResponse.json({ customer }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const customer = await deleteCustomer(parseInt(params.id));
    return NextResponse.json(
      { customer, message: 'Cliente borrado exitosamente' },
      { status: 200 },
    );
  } catch (error) {
    return handleCommonError(error);
  }
}
