import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const auth = request.cookies.get('auth');
  const { pathname } = request.nextUrl;

  const isLoginPage = pathname.startsWith('/login');

  if (!auth && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (auth && isLoginPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/companies/:path*',
    '/login',
  ],
};