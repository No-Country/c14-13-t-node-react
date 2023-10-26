import { NextResponse } from "next/server";
import { getAllVehicles, createVehicle} from '@/server/services/vehicles';
import { handleCommonError } from '@/server/errorHandlers';
import { VehicleCreationSchema as NewVehicleSchema } from '@/schemas/VehicleSchema';


export async function GET(request: Request) {
    try {
      const vehicles = await getAllVehicles();
      return NextResponse.json({ vehicles }, { status: 200 });
    } catch (error) {
      return handleCommonError(error);
    }
  }

  export async function POST(request: Request) {
    try {
      const body = await request.json();
      const NewVehicle = NewVehicleSchema.parse(body);
      const vehicle = await createVehicle(NewVehicle);
      return NextResponse.json({ vehicle }, { status: 200 });
    } catch (error) {
      return handleCommonError(error);
    }
  }