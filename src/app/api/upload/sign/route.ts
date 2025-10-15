import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { createSignedPutUrl } from '@/lib/storage'

export const runtime = 'nodejs' // firma via aws-sdk; edge non necessario qui

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { filename, contentType, contentLength } = body || {}
    if (!filename || !contentType || typeof contentLength !== 'number') {
      return NextResponse.json({ error: 'Bad request' }, { status: 400 })
    }

    // key canonicale (es. user/uuid.ext) — qui semplice UUID
    const ext = (filename.split('.').pop() || 'bin').toLowerCase()
    const key = `raw/${randomUUID()}.${ext}`

    const { url, headers } = await createSignedPutUrl({
      key, contentType, contentLength
    })

    return NextResponse.json({ key, url, headers, ttl: Number(process.env.UPLOAD_URL_TTL_SECONDS || 900) })
  } catch (err:any) {
    const status = err?.status || 500
    return NextResponse.json({ error: err?.message || 'Error' }, { status })
  }
}
