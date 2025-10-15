import { NextResponse } from 'next/server';
import { getPublicBySlug, upsertPublicChannel, type PublicChannel } from '@/lib/publicStore';
import { SAMPLE_ITEMS } from '@/lib/data';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug') || '';
  if (!slug) return NextResponse.json({ error: 'slug required' }, { status: 400 });

  const pub = await getPublicBySlug(slug);
  if (pub) return NextResponse.json(pub);

  // fallback: cerca nei SAMPLE_ITEMS (solo demo)
  const fromSample = SAMPLE_ITEMS.find(i =>
    i.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') === slug
  );
  if (fromSample) {
    const demo: PublicChannel = {
      slug,
      name: fromSample.title,
      category: fromSample.category,
      description: 'Canal de demostración en Cine-Channel.',
      priceMonthly: 2.5,
      avatarUrl: '/icon.svg',
      bannerUrl: fromSample.thumb,
      views: fromSample.views
    };
    return NextResponse.json(demo);
  }

  return NextResponse.json({ error: 'not found' }, { status: 404 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { slug, name, category } = body || {};
    if (!slug || !name || !category) {
      return NextResponse.json({ error: 'slug, name, category are required' }, { status: 400 });
    }
    const saved = await upsertPublicChannel({
      slug,
      name,
      category,
      description: body.description ?? '',
      priceMonthly: typeof body.priceMonthly === 'number' ? body.priceMonthly : undefined,
      avatarUrl: body.avatarUrl || '/icon.svg',
      bannerUrl: body.bannerUrl || '/categories/tutti.jpeg',
    });
    return NextResponse.json({ ok: true, channel: saved });
  } catch (e) {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 });
  }
}
