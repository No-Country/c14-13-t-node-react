import { getServerAuthSession } from '@/utils/auth';
import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  // const session = await getServerAuthSession();
  // if (!session) {
  //   return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
  // }

  return NextResponse.json({ message: 'Hello world' }, { status: 200 });
}
