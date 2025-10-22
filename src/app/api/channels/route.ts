export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { getAllChannels } from '@/lib/channel-store'

export async function GET() {
  try {
    const channels = await getAllChannels()
    return NextResponse.json({
      ok: true,
      channels: channels.map(c => ({
        id: c.id,
        slug: c.slug,
        name: c.name,
        description: c.description ?? '',
        coverUrl: c.coverUrl ?? '',
        viewCount: c.viewCount ?? 0,
        subscriberCount: c.subscriberCount ?? 0,
        language: c.language,
        createdAt: c.createdAt,
      })),
    })
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: 'INTERNAL' }, { status: 500 })
  }
}
