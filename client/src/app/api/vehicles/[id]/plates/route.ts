import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import { getVehicleByPlate } from '@/server/services/vehicles';


export async function GET(request: Request, { params }: { params: { plate: string } }) {
    try {
      const plate = await getVehicleByPlate(params.plate);
      if (!plate) {
        return NextResponse.json(
          {
            message: 'Vehicle not Found',
          },
          {
            status: 404,
          },
        );
      }
      return NextResponse.json({ plate }, { status: 200 });
    } catch (error) {
      return handleCommonError(error);
    }
  }