import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import { getEmployeeById, updateEmployee, removeEmployee } from '@/server/services/employees';
import { EmployeeSchema, NewEmployeeCreationSchema } from '@/schemas/EmployeeSchema';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const employee = await getEmployeeById(parseInt(params.id));
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

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const newData = NewEmployeeCreationSchema.parse(body);
    const employee = await updateEmployee(parseInt(params.id), newData);
    // if (!updateEmployee) {
    //   return NextResponse.json(
    //     {
    //       message: 'Not Employee Update',
    //     },
    //     {
    //       status: 404,
    //     },
    //   );
    // }
    return NextResponse.json({ employee }, { status: 200 });
  } catch (error) {
    // return handleCommonError(error);
    console.error(error);
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
