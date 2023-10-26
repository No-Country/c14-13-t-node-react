import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
// import { getMechanicById, updateMechanic, removeMechanic } from '@/server/services/mechanics';
// import { MechanicCreationSchema as NewMechanicSchema } from '@/schemas/MechanicSchema';
import { Prisma } from '@prisma/client';
import { prisma } from '@/server/db';

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
          message: 'Mechanic not Found',
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
    const { dni, name, address, city, phone, isActive } = await request.json();
    const updateMechanic = await prisma.mechanic.update({
      where: {
        id: Number(params.id),
      },
      data: {
        dni,
        name,
        address,
        city,
        phone,
        isActive,
      },
    });
    if (!updateMechanic) {
      return NextResponse.json({ message: 'Not Mechanic Update' }, { status: 404 });
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
      return NextResponse.json({ message: 'No Mechanic Delete' }, { status: 404 });
    }
    return NextResponse.json(deleteMechanic);
  } catch (error) {
    return handleCommonError(error);
  }
}
