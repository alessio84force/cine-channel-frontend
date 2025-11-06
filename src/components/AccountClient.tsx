"use client";
import { useEffect, useState } from "react";

export default function AccountClient() {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    fetch("/api/session", { cache: "no-store" })
      .then(r => r.json())
      .then(d => setEmail(d?.user?.email || ""))
      .catch(() => setEmail(""));
  }, []);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.replace("/");
  };

  if (!email) {
    return <div className="text-white/70">No hay sesión activa.</div>;
  }

  const first4 = email.split("@")[0].slice(0,4).toUpperCase();

  return (
    <div className="space-y-4">
      <div className="text-sm text-white/60">Sesión iniciada como:</div>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3 py-1 text-sm">
        <span className="font-mono">{first4}</span>
        <span className="text-white/60">({email})</span>
      </div>
      <div>
        <button onClick={logout} className="rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium hover:opacity-90">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
