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
    <header className="text-2xl md:text-3xl align-middle">
      <div className="text-2xl md:text-3xl align-middle">
        <a href={`/${locale}`} className="text-2xl md:text-3xl align-middle" aria-label="Home"><Wordmark withStars  withStars  className="w-[96px] md:w-[120px] h-auto align-middle" /></a>
        <nav className="text-2xl md:text-3xl align-middle">
          <Link href={`/${locale}/explore`} className="text-2xl md:text-3xl align-middle">
            {t.nav?.explore ?? "Explore"}
          </Link>
          <Link href={`/${locale}/creator/onboarding`} className="text-2xl md:text-3xl align-middle">
            {t.nav?.create ?? "Create channel"}
          </Link>
          <div className="text-2xl md:text-3xl align-middle" />
          <div className="text-2xl md:text-3xl align-middle">
            {langs.map(lc => (
              <Link key={lc} href={`/${lc}`}
                className={"px-2 py-1 rounded text-xs "+(lc===locale?"bg-white text-black":"hover:bg-white/10 text-white/80")}>
                {lc.toUpperCase()}
              </Link>
            ))}
          </div>
          <Link href={`/signin?callbackUrl=/${locale}`} className="text-2xl md:text-3xl align-middle">
            {signin}
          </Link>
        </nav>
      </div>
    </header>
  );
}
