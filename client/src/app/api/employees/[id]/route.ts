import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import { getEmployeeById, updateEmployee, removeEmployee } from '@/server/services/employees';
import { EmployeeUpdateSchema } from '@/schemas/EmployeeSchema';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const employee = await getEmployeeById(parseInt(params.id));
    if (!employee) {
      return NextResponse.json(
        {
          message: 'Empleado no encontrado',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(employee, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const newData = EmployeeUpdateSchema.parse(body);
    const employee = await updateEmployee(parseInt(params.id), newData);
    if (!employee) {
      return NextResponse.json(
        {
          message: 'No se pudo actualizar el empleado, empleado no encontrado',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(employee, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const employee = await removeEmployee(parseInt(params.id));
    if (!employee) {
      return NextResponse.json(
        {
          message: 'No Employee Delete',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(
      {
        employee,
        message: 'Succefull Delete',
      },
      { status: 200 },
    );
  } catch (error) {
    return handleCommonError(error);
  }
}
