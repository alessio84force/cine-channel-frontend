"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const sp = useSearchParams();
  const callbackUrl = sp.get("callbackUrl") || "/es"; // redirect dopo login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null); setBusy(true);
    const res = await signIn("credentials", { email, password, redirect: true, callbackUrl });
    // con redirect:true non torniamo qui; se qualcosa va storto:
    if (!res) setErr("Login fallito");
    setBusy(false);
  };

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <form onSubmit={submit} className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-6 grid gap-4">
        <h1 className="text-xl font-semibold">Accedi</h1>
        {err && <p className="text-red-400 text-sm">{err}</p>}
        <label className="grid gap-1">
          <span className="text-sm text-white/70">Email</span>
          <input
            type="email"
            required
            className="px-3 py-2 rounded-lg bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-white/70">Password</span>
          <input
            type="password"
            required
            className="px-3 py-2 rounded-lg bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            value={password} onChange={e=>setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </label>
        <button
          type="submit"
          disabled={busy}
          className="mt-2 rounded-xl bg-white text-black px-4 py-2 font-medium hover:opacity-90 disabled:opacity-50"
        >
          {busy ? "Accesso..." : "Entra"}
        </button>
        <p className="text-xs text-white/50">Per test: qualsiasi email + password funzionano in sviluppo.</p>
      </form>
    </main>
  );
}
