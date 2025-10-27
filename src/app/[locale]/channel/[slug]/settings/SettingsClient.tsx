"use client";
import React, { useState } from "react";
import Image from "next/image";
import { UI, type L } from "@/lib/ui";

export default function SettingsClient({ locale, slug }: { locale: L; slug: string }) {
  const t = UI[locale];
  const [logo, setLogo] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(2.5);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>, setFn: (v: string) => void) => {
    const file = e.target.files?.[0];
    if (file) setFn(URL.createObjectURL(file));
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold mb-4">{t.channel.settingsTitle || "Configuración del canal"}</h1>

      <section className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold">{t.channel.logo || "Logo del canal"}</label>
          <input type="file" accept="image/*" onChange={(e) => handleFile(e, (v)=>setLogo(v))} />
          {logo && <Image src={logo} alt="Logo" width={100} height={100} className="rounded-full mt-3" />}
        </div>

        <div>
          <label className="block mb-2 font-semibold">{t.channel.banner || "Imagen de portada"}</label>
          <input type="file" accept="image/*" onChange={(e) => handleFile(e, (v)=>setBanner(v))} />
          {banner && <Image src={banner} alt="Banner" width={600} height={200} className="rounded-lg mt-3" />}
        </div>

        <div>
          <label className="block mb-2 font-semibold">{t.channel.description || "Descripción del canal"}</label>
          <textarea className="w-full rounded-xl p-3 bg-neutral-900/40 border border-white/10" rows={5}></textarea>
        </div>

        <div>
          <label className="block mb-2 font-semibold">{t.channel.price || "Precio mensual (€)"}</label>
          <input
            type="number"
            min={2.5}
            step={0.1}
            value={price}
            onChange={(e)=>setPrice(parseFloat(e.target.value))}
            className="w-32 bg-neutral-900/40 border border-white/10 rounded-xl px-3 py-2"
          />
          <p className="text-xs text-white/60 mt-2">{t.onboarding?.priceHintMin || "Precio mínimo 2,50 € (incluye comisión de la plataforma)."}</p>
        </div>

        <button className="bg-white text-neutral-900 rounded-xl px-4 py-2 hover:opacity-90">
          {t.channel.save || "Guardar cambios"}
        </button>
      </section>

      <hr className="border-white/10" />
      <section>
        <h2 className="text-2xl font-semibold mb-3">{t.channel.payments || "Pagos y conexión"} — {slug}</h2>
        <button className="bg-green-400 text-black px-4 py-2 rounded-xl hover:opacity-90">
          {t.channel.connectStripe || "Conectar con Stripe"}
        </button>
      </section>
    </main>
  );
}
