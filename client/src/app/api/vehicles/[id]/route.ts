import { NextResponse } from 'next/server';
import { prisma } from '@/server/db';
import { VehicleUpdateSchema } from '@/schemas/VehicleSchema';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const vehicle = await prisma.vehicle.findUnique({ where: { id: parseInt(id) } });

  return NextResponse.json(vehicle, { status: 200 });
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  // const { brand, model, comments, vehicleType, mileage, year, color, doors } =
  //   await request.json();
  const body = await request.json();
  const vehicleData = VehicleUpdateSchema.parse(body);
  const vehicle = await prisma.vehicle.update({
    where: {
      id: parseInt(id),
    },
    data: vehicleData,
    // {
    //   brand: brand,
    //   model: model,
    //   comments: comments,
    //   vehicleType: vehicleType,
    //   mileage: mileage,
    //   year: year,
    //   color: color,
    //   doors: doors,
    // },
  });

  return NextResponse.json(vehicle, { status: 200 });
}

export async function DELETE(request: Request, { params }: any) {
  const { id } = params;
  const vehicle = await prisma.vehicle.delete({ where: { id: parseInt(id) } });

  return NextResponse.json(vehicle, { status: 200 });
}
