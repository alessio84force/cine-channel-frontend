import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/api/auth/signin" },
});

export const config = {
  matcher: [
    "/((?!_next|api/auth|api/stripe|api/payments|favicon.ico|robots.txt|sitemap.xml).*)/creator/:path*",
    "/((?!_next|api/auth|api/stripe|api/payments|favicon.ico|robots.txt|sitemap.xml).*)/upload/:path*",
  ],
};
