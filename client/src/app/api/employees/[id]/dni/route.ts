import { NextResponse, NextRequest } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import { getEmployeeByDni } from '@/server/services/employees';

export async function GET(request: Request, { params }: { params: { dni: string } }) {
  try {
    const dni = params.dni;
    const employee = await getEmployeeByDni(dni);
    if (!employee) {
      return NextResponse.json(
        {
          message: 'Employee not Found',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json({ employee }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}
