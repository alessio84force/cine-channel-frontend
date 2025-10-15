import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  // TODO: valida firma del provider (Mux / Cloudflare Stream)
  const event = await req.json().catch(()=>null)
  // TODO: idempotency (dedup)
  // TODO: aggiorna DB: processing/ready/failed + asset URLs
  console.log('stream webhook:', event?.type || 'unknown')
  return NextResponse.json({ ok: true })
}
