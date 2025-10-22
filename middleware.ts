import { NextResponse, type NextRequest } from 'next/server';

const LOCALES = new Set(['es','en','fr','it','de','pt']);
const ASSET_EXT = /\.(?:png|jpe?g|gif|webp|svg|ico|txt|xml|webmanifest|css|js|map|mp4|woff2?)$/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // BYPASS: asset statici, _next, api e file di root
  if (
    ASSET_EXT.test(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/manifest.webmanifest'
  ) {
    return NextResponse.next();
  }

  // i18n minimale: se manca il prefisso locale, manda su /es (default)
  const seg = pathname.split('/')[1];
  if (!LOCALES.has(seg)) {
    const url = request.nextUrl.clone();
    url.pathname = `/es${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
