import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import { getMechanicByDni } from '@/server/services/mechanics';


export async function GET(request: Request, { params }: { params: { dni: string } }) {
    try {
      const mechanic = await getMechanicByDni(params.dni);
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
      return NextResponse.json({ mechanic }, { status: 200 });
    } catch (error) {
      return handleCommonError(error);
    }
  }