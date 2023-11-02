import { NextResponse } from 'next/dist/server/web/spec-extension/response';
import { handleCommonError } from '@/server/errorHandlers';
import {
  getAllWorkshopServices,
  createWorkshopService,
} from '@/server/services/workshopServices';
import { WorkshopServiceCreationSchema as NewWorkshopServicesSchema } from '@/schemas/WorkshopServicesSchema';

export async function GET(request: Request) {
  try {
    const workshopServices = await getAllWorkshopServices();
    return NextResponse.json({ workshopServices }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const NewWorkshopService = NewWorkshopServicesSchema.parse(body);
    const workshopService = await createWorkshopService(NewWorkshopService);
    return NextResponse.json({ workshopService }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}
