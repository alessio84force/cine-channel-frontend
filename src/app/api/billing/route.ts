import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { z } from "zod";

const BillingSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(2),
  company: z.string().optional().nullable(),
  vat: z.string().optional().nullable(),
  address1: z.string().min(3),
  address2: z.string().optional().nullable(),
  city: z.string().min(2),
  zip: z.string().min(2),
  country: z.string().min(2),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email") || "";
  if (!email) return NextResponse.json({ error: "email required" }, { status: 400 });
  const profile = await prisma.billingProfile.findUnique({ where: { email } });
  return NextResponse.json({ ok: true, profile });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const data = BillingSchema.parse(body);
  const saved = await prisma.billingProfile.upsert({
    where: { email: data.email },
    create: data,
    update: data,
  });
  return NextResponse.json({ ok: true, profile: saved });
}
