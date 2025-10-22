import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Escludi asset, build, file statici e webhooks critici
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/assets') ||
    pathname.startsWith('/api/stripe/webhook') ||
    pathname.startsWith('/api/stream/webhook') ||
    pathname === '/manifest.webmanifest' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next()
  }

  // Redirect base: "/" -> "/es"
  if (pathname === '/') {
    const url = req.nextUrl.clone()
    url.pathname = '/es'
    return NextResponse.redirect(url)
  }

  // Altrimenti lascia passare TUTTO senza leggere auth/cookie custom
  return NextResponse.next()
}

// Applica il middleware solo dove serve, evitando file statici
export const config = {
  matcher: [
    // tutto tranne _next, file con estensione e alcune api
    '/((?!_next/|.*\\..*|api/stripe/webhook|api/stream/webhook).*)',
  ],
}
