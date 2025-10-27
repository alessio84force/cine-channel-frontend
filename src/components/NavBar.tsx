import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { UI, type L } from "@/lib/ui";

export default function NavBar({ locale }: { locale: L }) {
  const t = UI[locale] ?? UI.es;
  const langs: L[] = ["es","en","fr","it","de","pt","ar"];
  const signin =
    t.nav?.signin ?? { es:"Iniciar sesión", en:"Sign in", fr:"Se connecter",
      it:"Accedi", de:"Anmelden", pt:"Entrar", ar:"تسجيل الدخول" }[locale];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Wordmark locale={locale} href={`/${locale}`} />
        <nav className="ml-auto flex items-center gap-3">
          <Link href={`/${locale}/explore`} className="px-3 py-1.5 rounded hover:bg-white/10">
            {t.nav?.explore ?? "Explore"}
          </Link>
          <Link href={`/${locale}/creator/onboarding`} className="px-3 py-1.5 rounded bg-white text-black hover:opacity-90">
            {t.nav?.create ?? "Create channel"}
          </Link>
          <div className="h-5 w-px bg-white/20 mx-1" />
          <div className="flex items-center gap-1">
            {langs.map(lc => (
              <Link key={lc} href={`/${lc}`}
                className={"px-2 py-1 rounded text-xs "+(lc===locale?"bg-white text-black":"hover:bg-white/10 text-white/80")}>
                {lc.toUpperCase()}
              </Link>
            ))}
          </div>
          <Link href={`/signin?callbackUrl=/${locale}`} className="px-3 py-1.5 rounded border border-white/20 hover:bg-white/10">
            {signin}
          </Link>
        </nav>
      </div>
    </header>
  );
}
