import { NextResponse } from "next/server";

function clearCookies() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("cc_user_email", "", { httpOnly: true, path: "/", sameSite: "lax", maxAge: 0 });
  res.cookies.set("cc_user_name",  "", { httpOnly: true, path: "/", sameSite: "lax", maxAge: 0 });
  res.headers.set("Cache-Control","no-store");
  return res;
}

export async function POST() { return clearCookies(); }
export async function GET()  { return clearCookies(); }
