import { NextResponse } from 'next/server';
import { handleCommonError } from '@/server/errorHandlers';

export async function GET(request: Request) {
  try {
    return NextResponse.json({ message: 'Buscas ordenes? no hay' }, { status: 200 });
  } catch (error) {
    return handleCommonError(error);
  }
}
