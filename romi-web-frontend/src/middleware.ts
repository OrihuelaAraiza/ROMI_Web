import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  getPathLocale,
  internalizePath,
  localeCookie,
  localeFromAcceptLanguage,
  localizePath,
  type Locale,
} from '@/i18n/routing';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value || req.headers.get('authorization');
  const { pathname } = req.nextUrl;

  // Rutas legacy estáticas - EXCLUIR completamente del middleware
  // El matcher ya las excluye, pero por seguridad también las verificamos aquí
  const legacySites = [
    '/Edu',
    '/efysia',
    '/NutriSnap',
    '/OncoPro',
    '/RejuvIA',
    '/ROMIMED',
    '/edu',
    '/nutri',
    '/oncopro',
    '/rejuvia',
    '/romimed',
    '/efysia-app',
  ];
  
  for (const site of legacySites) {
    if (pathname === site || pathname === `${site}/` || pathname.startsWith(`${site}/`)) {
      return NextResponse.next();
    }
  }

  const pathLocale = getPathLocale(pathname);
  const preferred = req.cookies.get(localeCookie)?.value;
  const locale: Locale = pathLocale ?? (preferred === 'en' || preferred === 'es'
    ? preferred
    : localeFromAcceptLanguage(req.headers.get('accept-language')));

  if (!pathLocale) {
    const url = req.nextUrl.clone();
    url.pathname = localizePath(pathname, locale);
    const response = NextResponse.redirect(url);
    response.cookies.set(localeCookie, locale, { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', path: '/' });
    return response;
  }

  const internalPath = internalizePath(pathname, locale);
  const protectedPrefixes = ['/appointments', '/dashboard', '/chat', '/doctor', '/patient', '/Seguimiento'];

  if (protectedPrefixes.some(p => internalPath === p || internalPath.startsWith(`${p}/`)) && !token) {
    const url = req.nextUrl.clone();
    url.pathname = localizePath('/Auth/Login', locale);
    url.search = `?next=${encodeURIComponent(pathname)}`;
    const response = NextResponse.redirect(url);
    response.cookies.set(localeCookie, locale, { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', path: '/' });
    return response;
  }

  const headers = new Headers(req.headers);
  headers.set('x-romi-locale', locale);
  headers.set('x-romi-internal-path', internalPath);
  const url = req.nextUrl.clone();
  url.pathname = internalPath;
  const response = NextResponse.rewrite(url, { request: { headers } });
  response.cookies.set(localeCookie, locale, { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', path: '/' });
  return response;
}

// Configurar matcher para evitar interferir con archivos estáticos y rutas legacy
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - files with extensions (images, css, js, etc.)
     * - legacy static sites (excluidos explícitamente)
     */
    '/((?!api|auth|api-romi|_next/static|_next/image|favicon.ico|Edu(?:/|$)|efysia(?:/|$)|NutriSnap(?:/|$)|OncoPro(?:/|$)|RejuvIA(?:/|$)|ROMIMED(?:/|$)|edu(?:/|$)|nutri(?:/|$)|oncopro(?:/|$)|rejuvia(?:/|$)|romimed(?:/|$)|efysia-app(?:/|$)|.*\\..*).*)',
  ],
};
