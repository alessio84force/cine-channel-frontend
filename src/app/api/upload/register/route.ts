import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { addOrUpdate } from '@/lib/videosStore'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const b = await req.json()
    const { key, filename, size, contentType } = b || {}
    if (!key || !filename || typeof size !== 'number' || !contentType) {
      return NextResponse.json({ error: 'Bad request' }, { status: 400 })
    }
    const id = randomUUID()
    const createdAt = new Date().toISOString()
    const posterUrl = '/posters/placeholder.svg' // segnaposto
    const v = await addOrUpdate({ id, key, filename, size, contentType, status: 'uploading', createdAt, posterUrl })
    return NextResponse.json({ ok: true, video: v })
  } catch (e:any) {
    return NextResponse.json({ error: e?.message || 'Error' }, { status: 500 })
  }
}
