"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type SessionUser = { email: string; name?: string | null };
type SessionResp = { ok: boolean; user: SessionUser | null };

export default function UserMenu({ locale }: { locale: string }) {
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await fetch("/api/session", { cache: "no-store" });
        const j: SessionResp = await r.json();
        if (alive) setUser(j.user);
      } catch {}
    })();
    return () => { alive = false; };
  }, []);

  if (!user) {
    return (
      <Link
        href={`/${locale}/signin?callbackUrl=/${locale}`}
        className="text-sm hover:underline"
      >
        Iniciar sesión
      </Link>
    );
  }

  const label =
    (user.name && user.name.trim()) ||
    (user.email ? user.email.split("@")[0].slice(0, 4) : "User");

  return (
    <div className="flex items-center gap-2">
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-neutral-900 text-sm font-semibold">
        {label}
      </div>
      <Link href={`/${locale}/account`} className="text-sm hover:underline">
        Mi cuenta
      </Link>
    </div>
  );
}
