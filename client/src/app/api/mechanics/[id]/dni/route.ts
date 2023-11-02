import { NextResponse, NextRequest } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import { getMechanicByDni } from '@/server/services/mechanics';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const dni = url.searchParams.get('dni');

  if (dni) {
    try {
      const mechanic = await getMechanicByDni(dni);
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
  return NextResponse.json(
    {
      message: 'Into Valid Parameter (dni)',
    },
    {
      status: 400,
    },
  );
}
