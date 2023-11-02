import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';
import { prisma } from '@/server/db';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const user = await prisma.user.delete({ where: { id: params.id } });
    if (!user) {
      return NextResponse.json(
        {
          message: 'El Usuario no existe',
        },
        {
          status: 404,
        },
      );
    }
    return NextResponse.json(
      { user, message: 'Usuario borrado exitosamente' },
      { status: 200 },
    );
  } catch (error) {
    return handleCommonError(error);
  }
}
