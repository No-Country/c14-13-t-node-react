import { NextResponse } from 'next/server';
import { getAllEmployees, createEmployee } from '@/server/services/employees';
import { handleCommonError } from '@/server/errorHandlers';
import { EmployeeCreationSchema as NewEmployeeSchema } from '@/schemas/EmployeeSchema';

export async function GET(request: Request) {
  try {
    const employees = await getAllEmployees();
    return NextResponse.json({ employees }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const NewEmployee = NewEmployeeSchema.parse(body);
    const customer = await createEmployee(NewEmployee);
    return NextResponse.json({ customer }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}
