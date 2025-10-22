"use client";
import Link from "next/link";
export default function SafeNavBar(){
  return (
    <nav className="h-14 px-4 flex items-center justify-between border-b border-white/10">
      <Link href="/es" className="font-semibold">Cine Channel</Link>
      <div className="flex items-center gap-3">
        <Link href="/es/explore" className="text-white/80 hover:text-white">Explorar</Link>
        <Link href="/es/creator/onboarding" className="rounded-md bg-white text-neutral-900 px-3 py-1.5 hover:opacity-90">
          Crear canal
        </Link>
      </div>
    </nav>
  );
}
