import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET() {
  const c = await cookies();
  const email = c.get("cc_user_email")?.value || "";
  const name  = c.get("cc_user_name")?.value  || "";
  if (email || name) return NextResponse.json({ ok:true, user:{ email, name } }, { status:200 });
  return NextResponse.json({ ok:false }, { status:200 });
}
