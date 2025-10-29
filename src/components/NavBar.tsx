import Link from "next/link";
import Wordmark from "@/components/Wordmark";

export default function NavBar({ locale = "es" }: { locale?: string }) {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center gap-4">
        {/* Sinistra: Logo/Home (più grande) */}
        <Link href={`/${locale}`} aria-label="Home" className="shrink-0">
          <Wordmark withStars className="w-[156px] md:w-[180px]" />
        </Link>

        {/* Centro: nav con bottoni veri */}
        <nav className="mx-auto flex items-center gap-3">
          <Link
            href={`/${locale}/explore`}
            className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-neutral-900 font-medium hover:opacity-90"
          >
            Explorar
          </Link>
          <Link
            href={`/${locale}/creator/onboarding`}
            className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-neutral-900 font-medium hover:opacity-90"
          >
            Crear canal
          </Link>
        </nav>

        {/* Destra: lingue + login */}
        <div className="ml-auto flex items-center gap-2 text-xs">
          <Link href="/es" className="px-2 py-1 rounded bg-white text-black">ES</Link>
          <Link href="/en" className="px-2 py-1 rounded hover:bg-white/10 text-white/80">EN</Link>
          <Link href="/fr" className="px-2 py-1 rounded hover:bg-white/10 text-white/80">FR</Link>
          <Link href="/it" className="px-2 py-1 rounded hover:bg-white/10 text-white/80">IT</Link>
          <Link href="/de" className="px-2 py-1 rounded hover:bg-white/10 text-white/80">DE</Link>
          <Link href="/pt" className="px-2 py-1 rounded hover:bg-white/10 text-white/80">PT</Link>

          <div className="w-px h-4 bg-white/15 mx-1" />

          <Link
            href={`/${locale === "es" ? "es" : locale }/signin?callbackUrl=/${locale}`}
            className="text-sm hover:underline"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </header>
  );
}
