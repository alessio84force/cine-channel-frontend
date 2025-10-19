"use client";
import Image from 'next/image';
import Link from 'next/link';

const shimmer = (w:number,h:number)=>`data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg width='${w}' height='${h}' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='g'><stop stop-color='#222'/><stop offset='0.5' stop-color='#444'/><stop offset='1' stop-color='#222'/></linearGradient></defs><rect width='${w}' height='${h}' fill='#111'/><rect id='r' width='${w}' height='${h}' fill='url(#g)'/><animate xlink:href='#r' attributeName='x' from='-${w}' to='${w}' dur='1.2s' repeatCount='indefinite'/></svg>`
)}`;

const cards = [
  { href: '/es/explore?cat=gamers',        title: 'Gamers',        img: '/categories/gamers.jpeg' },
  { href: '/es/explore?cat=streamers',     title: 'Streamers',     img: '/categories/streamers.jpeg' },
  { href: '/es/explore?cat=videobloggers', title: 'Videobloggers', img: '/categories/videobloggers.jpeg' },
  { href: '/es/explore?cat=cineastas',     title: 'Cineastas',     img: '/categories/cineastas.jpeg' },
  { href: '/es/explore',                   title: 'Todos',         img: '/categories/tutti.jpeg' },
];

export default function CategoryGrid() {
  return (
    <section className="px-6 py-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c)=>(
          <Link key={c.title} href={c.href} className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <div className="relative aspect-[16/9]">
              <Image
                src={c.img}
                alt={c.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={shimmer(700,394)}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={c.title === 'Gamers'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
              <div className="absolute bottom-3 left-3 text-xl font-bold">{c.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
