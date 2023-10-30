import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getBaseUrl } from '@/utils/getUrl';

const protectedApiRoutes = ['/api/customers', '/api/vehicles', '/api/statistics'];
const onlyAdminApiRoutes = ['/api/data'];
const onlyAdminRoutes = ['/dashboard/users-list'];
const baseUrl = getBaseUrl();

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAdmin = token?.user?.role === 'admin';
  const isUsersApiRoute = req.nextUrl.pathname.includes('/api/users');
  const isProtectedApiRoute = protectedApiRoutes.some((route) =>
    req.nextUrl.pathname.includes(route),
  );
  const isOnlyAdminApiRoute = onlyAdminApiRoutes.some((route) =>
    req.nextUrl.pathname.includes(route),
  );
  const isOnlyAdminRoute = onlyAdminRoutes.some((route) =>
    req.nextUrl.pathname.includes(route),
  );
  /**
   * API Routes:
   */
  if (!token && isUsersApiRoute && req.method !== 'POST' && req.method !== 'GET') {
    return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
  }
  if (!isAdmin && isUsersApiRoute && req.method === 'GET') {
    return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
  }
  if (!isAdmin && isOnlyAdminApiRoute) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
  }
  if (!token && isProtectedApiRoute) {
    return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
  }

  /**
   * Routes or Pages:
   */
  if (!token && req.nextUrl.pathname.includes('/dashboard')) {
    return NextResponse.redirect(`${baseUrl}/auth/sign-in`);
  }
  if (token && !isAdmin && isOnlyAdminRoute) {
    return NextResponse.redirect(`${baseUrl}/dashboard`);
  }
}
