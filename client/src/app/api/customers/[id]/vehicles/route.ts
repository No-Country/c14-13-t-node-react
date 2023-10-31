import { NextResponse } from 'next/server';
import { getCustomerVehicles } from '@/server/services/customers';
import { handleCommonError } from '@/server/errorHandlers';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const vehicles = await getCustomerVehicles(parseInt(params.id));
    return NextResponse.json({ vehicles }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}
