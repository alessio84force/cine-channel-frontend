'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';

const DICT = {
  es: {
    heroTitle: 'CINE-CHANNEL',
    heroSubtitle: '¡La plataforma para gamers, streamers, videobloggers y cineastas!',
    heroTagline: '¡Únete a la revolución del streaming!',
    ctas: { create: 'Crear canal', explore: 'Explorar' },
    catsTitle: 'Categorías',
    cats: { all:'Todos', gamers:'Gamers', streamers:'Streamers', vloggers:'Videobloggers', filmmakers:'Cineastas' }
  },
  en: {
    heroTitle: 'CINE-CHANNEL',
    heroSubtitle: 'The platform for gamers, streamers, videobloggers and filmmakers!',
    heroTagline: 'Join the streaming revolution!',
    ctas: { create: 'Create channel', explore: 'Explore' },
    catsTitle: 'Categories',
    cats: { all:'All', gamers:'Gamers', streamers:'Streamers', vloggers:'Videobloggers', filmmakers:'Filmmakers' }
  },
  fr: {
    heroTitle: 'CINE-CHANNEL',
    heroSubtitle: 'La plateforme pour gamers, streamers, vidéoblogueurs et cinéastes !',
    heroTagline: 'Rejoignez la révolution du streaming !',
    ctas: { create: 'Créer une chaîne', explore: 'Explorer' },
    catsTitle: 'Catégories',
    cats: { all:'Tous', gamers:'Gamers', streamers:'Streamers', vloggers:'Vidéoblogueurs', filmmakers:'Cinéastes' }
  }
} as const;

const LOCALES = ['es','en','fr','en-us'] as const;

export default function HomePage() {
  const pathname = usePathname() || '/en';
  const seg = pathname.split('/').filter(Boolean)[0];
  const locale = (LOCALES.includes(seg as any) ? (seg as any) : 'en');
  const key = (locale==='en-us' ? 'en' : (locale as keyof typeof DICT));
  const t = (DICT as any)[key];
  

  const [filter, setFilter] = useState<'all'|'gamers'|'streamers'|'vloggers'|'filmmakers'>('all');

  const cards = useMemo(() => ([
    { key:'gamers', label:t.cats.gamers, img:'/categories/gamers.jpeg', href:`/${locale}/explore?cat=gamers` },
    { key:'streamers', label:t.cats.streamers, img:'/categories/streamers.jpeg', href:`/${locale}/explore?cat=streamers` },
    { key:'vloggers', label:t.cats.vloggers, img:'/categories/videobloggers.jpeg', href:`/${locale}/explore?cat=videobloggers` },
    { key:'filmmakers', label:t.cats.filmmakers, img:'/categories/cineastas.jpeg', href:`/${locale}/explore?cat=cineastas` },
  ]),[t, locale]);

  const btns = [
    {key:'all', label:t.cats.all},
    {key:'gamers', label:t.cats.gamers},
    {key:'streamers', label:t.cats.streamers},
    {key:'vloggers', label:t.cats.vloggers},
    {key:'filmmakers', label:t.cats.filmmakers},
  ] as const;

  return (
    <main className="px-6 py-10 max-w-7xl mx-auto">
      <section className="text-center">
        <h1 className="text-5xl font-black bg-gradient-to-r from-amber-300 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
          {t.heroTitle}
        </h1>
        <p className="mt-3 text-white/80">{t.heroSubtitle}</p>
        <p className="mt-1 text-amber-300 font-semibold">{t.heroTagline}</p>
        <div className="mt-5 flex justify-center gap-3">
          <Link href={`/${locale}/creator/onboarding`} className="rounded-full px-4 py-2 bg-white text-neutral-900 hover:opacity-90">
            {t.ctas.create}
          </Link>
          <Link href={`/${locale}/explore`} className="rounded-full px-4 py-2 ring-1 ring-white/10 hover:bg-white/10">
            {t.ctas.explore}
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{t.catsTitle}</h2>
          <div className="flex gap-2">
            {btns.map((btn) => (
              <button
                key={btn.key}
                type="button"
                onClick={() => setFilter(btn.key as any)}
                className={`px-3 py-1.5 rounded-full text-sm ${filter===btn.key ? 'bg-white/10 ring-1 ring-white/10' : 'text-white/70 hover:text-white'}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards
            .filter(c => filter==='all' ? true : c.key===filter)
            .map(c => (
            <Link key={c.key} href={c.href} className="group block rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20">
              <div className="relative aspect-[4/5]">
                <Image src={c.img} alt={c.label} fill className="object-cover" />
              </div>
              <div className="p-3">
                <h3 className="font-semibold group-hover:text-white">{c.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
