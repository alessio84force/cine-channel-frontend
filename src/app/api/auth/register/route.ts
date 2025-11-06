import { NextResponse } from "next/server";
import { z } from "zod";
import { registerUser } from "@/lib/auth";

const regSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  name: z.string().min(2),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { email, password, name } = regSchema.parse(body);
  const ok = await registerUser(email, password, name);
  if (!ok) return NextResponse.json({ error: "Register failed" }, { status: 400 });

  const res = NextResponse.json({ ok: true }, { status: 200 });
  res.cookies.set("cc_user_email", email, { httpOnly: true, path: "/", maxAge: 60*60*24*30 });
  res.cookies.set("cc_user_name", name, { httpOnly: true, path: "/", maxAge: 60*60*24*30 });
  res.headers.set("Cache-Control", "no-store");
  return res;
}
