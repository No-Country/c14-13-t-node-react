import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import { getWorkshopById, updateWorkshop, removeWorkshop } from '@/server/services/workshops';
import { WorkshopCreationSchema } from '@/schemas/WorkshopSchema';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const workshop = await getWorkshopById(parseInt(params.id));
    if (!workshop) {
      return NextResponse.json(
        {
          message: 'Workshop not Found',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json({ workshop }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const newData = WorkshopCreationSchema.parse(body);
    const workshop = await updateWorkshop(parseInt(params.id), newData);
    if (!workshop) {
      return NextResponse.json(
        {
          message: 'Not Workshop Update',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json({ workshop }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const workshop = await removeWorkshop(parseInt(params.id));
    if (!workshop) {
      return NextResponse.json(
        {
          message: 'No Workshop Delete',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(
      {
        workshop,
        message: 'Succefull Delete',
      },
      { status: 200 },
    );
  } catch (error) {
    return handleCommonError(error);
  }
}
