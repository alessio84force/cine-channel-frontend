"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
type L = "es"|"en"|"fr"|"it"|"de"|"pt"|"ar"|"ru"|"zh"|"ko";
export default function OnboardingPage(){
  const { locale } = useParams<{ locale: L }>();
  const lang = (locale || "es") as L;
  const router = useRouter();
  const [ok, setOk] = useState<null | boolean>(null);
  useEffect(() => { (async () => { try { const r = await fetch("/api/session", { cache: "no-store" }); const j = await r.json(); setOk(!!j?.user); } catch { setOk(false); } })(); }, []);
useEffect(()=>{ (async()=>{
    try{ const r = await fetch("/api/session",{cache:"no-store"}); const j=await r.json(); setOk(!!j?.user); }
    catch{ setOk(false); }
  })(); },[]);return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-4">Crear canal — Onboarding</h1>
      <p className="text-white/70">Si sei loggato correttamente vedrai qui il modulo dati/fatturazione.</p>
    </main>
  );
}
