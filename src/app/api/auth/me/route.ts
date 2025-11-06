import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { JWT } from "@/lib/auth/jwt";

export async function GET() {
  const token = cookies().get(JWT.name)?.value;
  if (!token) return NextResponse.json({ user: null });
  const payload = await JWT.verify(token);
  return NextResponse.json({ user: payload ? { id: (payload as any).sub, email: (payload as any).email } : null });
}
