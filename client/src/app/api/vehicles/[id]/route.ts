import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//? estoy teniedo un error de tipos con el parametro plate OJOOOOOOOOOO

export async function GET(request: Request, { params }: { params: { id: number } }) {
  const { id } = params;

  const vehicle = await prisma.vehicle.findUnique({ where: { id: id } });

  return NextResponse.json(vehicle, { status: 200 });
}

export async function PATCH(request: Request, { params }: { params: { id: number } }) {
  const { id } = params;
  const { brand, model, comments, vehicleType, mileage, year, color, doors } =
    await request.json();
  const vehicle = await prisma.vehicle.update({
    where: {
      id: id,
    },
    data: {
      brand: brand,
      model: model,
      comments: comments,
      vehicleType: vehicleType,
      mileage: mileage,
      year: year,
      color: color,
      doors: doors,
    },
  });

  return NextResponse.json(vehicle, { status: 200 });
}

export async function DELETE(request: Request, { params }: any) {
  const { id } = params;
  const vehicle = await prisma.vehicle.delete({ where: { id: id } });

  return NextResponse.json(vehicle, { status: 200 });
}
