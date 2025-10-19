import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["es", "en", "fr"] as const;
const DEFAULT_LOCALE = "es";

function extractLocale(pathname: string) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg) ? seg : null;
}

export function middleware(req: NextRequest) {
  console.log("[MW] in:", req.nextUrl.pathname)
  console.log("[MW] in:", req.nextUrl.pathname)
  const { pathname } = req.nextUrl;

  // ignora asset statici e API
  if (pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  console.log("[MW] allow    ->", pathname)
  }

  const found = extractLocale(pathname);
  if (!found) {
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(url);
  console.log("[MW] redirect ->", url.pathname)
  }

  return NextResponse.next();
  console.log("[MW] allow    ->", pathname)
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
