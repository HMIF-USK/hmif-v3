import { NextResponse, type NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { APP_SESSION_COOKIE_KEY } from '@/configs/cookies.config';

const key = new TextEncoder().encode(process.env.AUTH_SECRET_KEY);

async function hasValidSession(req: NextRequest) {
  const token = req.cookies.get(APP_SESSION_COOKIE_KEY)?.value;

  if (!token) return false;

  try {
    await jwtVerify(token, key, { algorithms: ['HS256'] });
    return true;
  } catch {
    return false;
  }
}

/**
 * Gerbang sesi di edge: menghasilkan redirect HTTP 307 sebelum halaman dirender,
 * bukan render-lalu-redirect di sisi klien.
 */
export default async function proxy(req: NextRequest) {
  const isLoggedIn = await hasValidSession(req);
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin') && !isLoggedIn) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('next', pathname);

    return NextResponse.redirect(url);
  }

  if (pathname === '/login' && isLoggedIn) {
    const url = req.nextUrl.clone();
    url.pathname = '/admin';
    url.search = '';

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
