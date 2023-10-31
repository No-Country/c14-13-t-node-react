import { NextResponse } from 'next/dist/server/web/spec-extension/response';
import { handleCommonError } from '@/server/errorHandlers';
import { getAllWorkshops, createWorkshop } from '@/server/services/workshops';
import { WorkshopCreationSchema as NewWorkshopSchema } from '@/schemas/WorkshopSchema';

export async function GET(request: Request) {
  try {
    const workshops = await getAllWorkshops();
    return NextResponse.json({ workshops }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const NewWorkshop = NewWorkshopSchema.parse(body);
    const workshop = await createWorkshop(NewWorkshop);
    return NextResponse.json({ workshop }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}
