'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname() || '/es';
  const samePath = (loc: string) => {
    const parts = pathname.split('/');
    parts[1] = loc;
    return parts.join('/') || `/${loc}`;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 ring-1 ring-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/es" className="inline-flex items-center gap-2">
          <img src="/logo.svg" alt="Cine-Channel" className="h-8 w-auto" />
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/es/explore" className="rounded-full px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition">
            Explora
          </Link>

          <Link href="/es/creator/onboarding" className="rounded-full px-3 py-1.5 text-sm bg-red-600 hover:bg-red-500 active:bg-red-700 transition shadow">
            Crea canale
          </Link>

          <span className="mx-1 h-5 w-px bg-white/10" />
          <Link href={samePath('es')} className="rounded-full px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition">ES</Link>
          <Link href={samePath('en')} className="rounded-full px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition">EN</Link>
          <Link href={samePath('fr')} className="rounded-full px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition">FR</Link>
        </div>
      </nav>
    </header>
  );
}
