import Image from 'next/image';
import { getPublicBySlug, readPublicMap } from '@/lib/publicStore';
import { SAMPLE_ITEMS } from '@/lib/data';
import ChannelOwnerToolbar from '@/components/ChannelOwnerToolbar';

type Params = { params: { locale: string; slug: string } };

export async function generateMetadata({ params }: Params) {
  const { slug } = params;
  const map = await readPublicMap();
  const pub = map[slug];
  const title = pub?.name || slug.replace(/-/g,' ');
  return {
    title: `${title} · Cine-Channel`,
    description: pub?.description || 'Canal en Cine-Channel',
  };
}

export default async function ChannelPage({ params }: Params) {
  const { locale, slug } = params;
  const pub = await getPublicBySlug(slug);
  const fallback = SAMPLE_ITEMS.find(i =>
    i.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') === slug
  );

  const name = pub?.name || fallback?.title || slug.replace(/-/g,' ');
  const category = pub?.category || fallback?.category || 'gamers';
  const desc = pub?.description || 'Bienvenido a mi canal en Cine-Channel.';
  const priceMonthly = pub?.priceMonthly ?? 2.5;
  const avatar = pub?.avatarUrl || '/icon.svg';
  const banner = pub?.bannerUrl || fallback?.thumb || '/categories/tutti.jpeg';

  return (
    <>
      <ChannelOwnerToolbar locale={locale} slug={slug} />

      <main id="content" className="pb-10">
        {/* Banner */}
        <div className="relative h-56 w-full">
          <Image src={banner} alt="Banner" fill priority className="object-cover brightness-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
        </div>

        {/* Header */}
        <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
          <div className="flex items-end gap-4">
            <div className="relative w-24 h-24 rounded-xl overflow-hidden ring-2 ring-white/40">
              <Image src={avatar} alt={name} fill className="object-cover" />
            </div>
            <div className="pb-2">
              <h1 className="text-3xl font-extrabold">{name}</h1>
              <div className="mt-1 text-sm">
                <span className="rounded-full px-2 py-0.5 bg-white/10 ring-1 ring-white/10 capitalize">{category}</span>
                <span className="ml-2 text-white/60">· {priceMonthly.toFixed(2)} €/mes</span>
              </div>
            </div>
            <div className="flex-1" />
            <a href={`/${locale}/pricing`} className="mb-2 rounded-full px-4 py-2 bg-white text-neutral-900 hover:opacity-90">
              Suscribirse
            </a>
          </div>

          <p className="mt-4 text-white/80 max-w-3xl">{desc}</p>

          {/* TODO: griglia contenuti del canale */}
          <div className="mt-8 text-white/60 text-sm">
            Contenido próximamente…
          </div>
        </div>
      </main>
    </>
  );
}
