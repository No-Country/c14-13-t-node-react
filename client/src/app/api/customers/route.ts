import { NextResponse } from 'next/server';
import { createCustomer, getCustomers } from '@/server/services/customers';
import { handleCommonError } from '@/server/errorHandlers';
import { CustomerCreationSchema as NewCustomerSchema } from '@/schemas/CustomerSchema';

export async function GET(request: Request) {
  try {
    const customers = await getCustomers();
    return NextResponse.json({ customers }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const NewCustomer = NewCustomerSchema.parse(body);
    const customer = await createCustomer(NewCustomer);
    return NextResponse.json({ customer }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}
