import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyUser } from "@/lib/auth";

const credSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  name: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { email, password, name } = credSchema.parse(body);
  const ok = await verifyUser(email, password);
  if (!ok) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const res = NextResponse.json({ ok: true }, { status: 200 });
  res.cookies.set("cc_user_email", email, { httpOnly: true, path: "/", maxAge: 60*60*24*30 });
  if (name) res.cookies.set("cc_user_name", name, { httpOnly: true, path: "/", maxAge: 60*60*24*30 });
  res.headers.set("Cache-Control", "no-store");
  return res;
}
