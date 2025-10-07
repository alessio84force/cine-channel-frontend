'use client';
import Link from "next/link";

type Item = { id: number; title: string; date: string; img: string };

export default function HomePage() {
  const items: Item[] = [
    { id: 1, title: "Cine of Channel",        date: "10.24", img: "/posters/1.jpg" },
    { id: 2, title: "Crestamlog Resstlanca",  date: "10.24", img: "/posters/2.jpg" },
    { id: 3, title: "Cine-Cha-Channel",       date: "10.22", img: "/posters/3.jpg" },
    { id: 4, title: "Ciras alldaharcd",       date: "10.24", img: "/posters/4.jpg" },
    { id: 5, title: "Cine cof Palantel",      date: "10.23", img: "/posters/5.jpg" },
    { id: 6, title: "Citeramfriel Picinto",   date: "10.22", img: "/posters/6.jpg" },
    { id: 7, title: "Citeramfília Pateln",    date: "10.24", img: "/posters/7.jpg" },
    { id: 8, title: "Cine coatida Palenis",   date: "10.20", img: "/posters/8.jpg" }
  ];

  return (
    <main className="min-h-[100dvh] bg-neutral-950 text-white flex items-start justify-center p-4">
      <div className="w-full max-w-6xl mx-auto bg-gradient-to-b from-black/60 to-black/40 rounded-3xl shadow-2xl ring-1 ring-white/10 overflow-hidden">
        {/* HERO */}
        <section className="px-8 md:px-14 pt-14 pb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">
              Cine-Channel
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/80">
            la plataforma para gamer, streamers e cineastas!
          </p>
          <p className="mt-2 text-base md:text-lg text-white/70">
            Únete a la revolución del streaming exclusivo.<br className="hidden sm:block" />
            Crea, comparte y gana con tu contenido.
          </p>

          <div className="mt-7">
            <Link
              href="/es/explore"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-red-600 hover:bg-red-500 active:bg-red-700 transition shadow-lg"
            >
              Entra ahora y descubre Cine-Channel
            </Link>
          </div>
        </section>

        {/* GRID */}
        <section className="px-6 md:px-10 pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {items.map((it) => (
              <article
                key={it.id}
                className="group rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      if (t.dataset.fallback) return;
                      t.dataset.fallback = "1";
                      t.src = "/posters/placeholder.svg";
                    }}
                    className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold leading-snug line-clamp-1">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">{it.date}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
