import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import {
  getWorkshopServiceById,
  updateWorkshopService,
  removeWorkshopService,
} from '@/server/services/workshopServices';
import { WorkshopServiceCreationSchema } from '@/schemas/WorkshopServicesSchema';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const workshopService = await getWorkshopServiceById(parseInt(params.id));
    if (!workshopService) {
      return NextResponse.json(
        {
          message: 'Service not Found',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json({ workshopService }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const newData = WorkshopServiceCreationSchema.parse(body);
    const workshopService = await updateWorkshopService(parseInt(params.id), newData);
    if (!workshopService) {
      return NextResponse.json(
        {
          message: 'Not Service Update',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json({ workshopService }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const workshopService = await removeWorkshopService(parseInt(params.id));
    if (!workshopService) {
      return NextResponse.json(
        {
          message: 'No Service Delete',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(
      {
        workshopService,
        message: 'Succefull Delete',
      },
      { status: 200 },
    );
  } catch (error) {
    return handleCommonError(error);
  }
}
