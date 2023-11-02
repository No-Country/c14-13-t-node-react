import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import { getCustomerById, updateCustomer, removeCustomer } from '@/server/services/customers';
import { CustomerCreationSchema } from '@/schemas/CustomerSchema';

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
    const newData = CustomerCreationSchema.parse(body);
    const customer = await updateCustomer(parseInt(params.id), newData);
    if (!customer) {
      return NextResponse.json(
        {
          message: 'Dont Customer Update',
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
    const customer = await removeCustomer(parseInt(params.id));
    if (!customer) {
      return NextResponse.json(
        {
          message: 'No Customer Delete',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(
      {
        customer,
        message: 'Succefull Delete',
      },
      { status: 200 },
    );
  } catch (error) {
    return handleCommonError(error);
  }
}
