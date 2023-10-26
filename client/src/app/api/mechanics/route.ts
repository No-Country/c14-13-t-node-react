import { NextResponse } from 'next/dist/server/web/spec-extension/response';
import { handleCommonError } from '@/server/errorHandlers';
import { getAllMechanics, createMechanic } from '@/server/services/mechanics';
import { MechanicCreationSchema as NewMechanicSchema } from '@/schemas/MechanicSchema';

export async function GET(request: Request) {
  try {
    const mechanics = await getAllMechanics();
    return NextResponse.json({ mechanics }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const NewMechanic = NewMechanicSchema.parse(body);
    const mechanic = await createMechanic(NewMechanic);
    return NextResponse.json({ mechanic }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}
