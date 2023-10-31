import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import { prisma } from '@/server/db';
import { MechanicUpdateSchema } from '@/schemas/MechanicSchema';

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const mechanic = await prisma.mechanic.findFirst({
      where: {
        id: Number(params.id),
      },
    });
    if (!mechanic) {
      return NextResponse.json(
        {
          message: 'Mecánico no encontrado',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(mechanic);
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function PATCH(request: Request, { params }: Params) {
  try {
    const body = await request.json();
    const newData = MechanicUpdateSchema.parse(body);
    const updateMechanic = await prisma.mechanic.update({
      where: {
        id: Number(params.id),
      },
      data: newData,
    });
    if (!updateMechanic) {
      return NextResponse.json(
        { message: 'No se pudo actualizar, mecánico no encontrado' },
        { status: 404 },
      );
    }
    return NextResponse.json(updateMechanic);
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deleteMechanic = await prisma.mechanic.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!deleteMechanic) {
      return NextResponse.json({ message: 'El mecánico no existe' }, { status: 404 });
    }
    return NextResponse.json(deleteMechanic);
  } catch (error) {
    return handleCommonError(error);
  }
}
