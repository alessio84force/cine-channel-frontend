import Image from 'next/image';
import Link from 'next/link';

function Tabs({ base }: { base: string }) {
  const items = [
    { href: `${base}`, label: 'Vídeos', seg: '' },
    { href: `${base}/about`, label: 'Sobre', seg: 'about' },
    { href: `${base}/community`, label: 'Comunidad', seg: 'community' },
  ];
  // Semplice match dell'URL corrente sul client per aria-current
  return (
    <nav className="flex gap-6 border-b border-white/10 px-6" aria-label="Secciones del canal">
      {items.map(it => (
        <Link key={it.href} href={it.href} prefetch className="py-2 text-white/70 data-[active=true]:text-white data-[active=true]:border-b-2 data-[active=true]:border-white"
          data-active={undefined /* verrà impostato nel client via CSS :has() in futuro */}>
          {it.label}
        </Link>
      ))}
    </nav>
  );
}

export default async function ChannelLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const title = slug.replace(/-/g,' ');
  const base = `/${locale}/channel/${slug}`;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
        <div className="absolute inset-0 opacity-20">
          <Image src="/categories/tutti.jpeg" alt="" fill className="object-cover" priority />
        </div>
      </section>

      {/* Header canal */}
      <section className="px-6 -mt-12 relative z-10">
        <div className="flex items-end gap-4">
          <div className="h-24 w-24 rounded-full ring-2 ring-white/20 overflow-hidden bg-neutral-700">
            <Image src="/icon.svg" alt="Avatar del canal" width={96} height={96} className="object-contain p-2" />
          </div>
          <div className="pb-2">
            <h1 className="text-3xl font-extrabold capitalize">{title}</h1>
            <div className="mt-1 flex items-center gap-2 text-xs text-white/70">
              <span className="rounded-full px-2 py-0.5 bg-white/10">Categoría</span>
              <span className="rounded-full px-2 py-0.5 bg-white/10">España</span>
            </div>
          </div>
          <div className="ml-auto pb-2">
            <button disabled className="rounded-full px-4 py-2 bg-white text-neutral-900 opacity-80 cursor-not-allowed">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <Tabs base={base} />

      {/* Contenido */}
      {children}
    </div>
  );
}
