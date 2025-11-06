import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const m = pathname.match(/^\/(es|en|fr|it|de|pt|ar|ru|zh|ko)\/(creator|dashboard)(\/|$)/);
  if (!m) return NextResponse.next();
  const lang = m[1];
  const email = req.cookies.get("cc_user_email")?.value || "";
  if (!email) {
    const url = req.nextUrl.clone();
    url.pathname = `/${lang}/signin`;
    url.searchParams.set("callbackUrl", pathname + (search || ""));
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/(es|en|fr|it|de|pt|ar|ru|zh|ko)/creator/:path*", "/(es|en|fr|it|de|pt|ar|ru|zh|ko)/dashboard"] };
