"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { dict, LOCALES, type Locale } from "@/i18n/dict";

export default function Page(){
  const params = useParams<{ locale?: string }>();
  const locale = ((params?.locale as Locale) && LOCALES.includes(params?.locale as Locale) ? params?.locale as Locale : "es");
  const t = dict[locale] || dict.es;
  const A = (t as any).auth || (dict.es as any).auth;

  const [mode, setMode] = useState<"signin"|"signup">("signin");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState<string>("");
  const router = useRouter();

  async function submit(e:React.FormEvent){
    e.preventDefault();
    setMsg("");
    const url = mode==="signin" ? "/api/auth/login" : "/api/auth/register";
    const res = await fetch(url, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if(!res.ok){ setMsg(data?.error || A.error); return; }
    if(mode==="signin"){ router.push(`/${locale}`) } else { setMsg(A.success); setMode("signin"); }
  }
  async function logout(){
    await fetch("/api/auth/logout",{method:"POST"});
    router.refresh();
  }

  return (
    <main className="max-w-md mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">{mode==="signin" ? A.titleSignIn : A.titleSignUp}</h1>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">{A.email}</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required className="w-full rounded-md bg-neutral-900 border border-white/15 px-3 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm mb-1">{A.password}</label>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required minLength={6} className="w-full rounded-md bg-neutral-900 border border-white/15 px-3 py-2" placeholder="••••••••" />
        </div>
        {msg && <p className="text-sm text-red-400">{msg}</p>}
        <button type="submit" className="w-full rounded-md bg-white text-neutral-900 font-medium px-4 py-2">
          {mode==="signin" ? A.signIn : A.signUp}
        </button>
      </form>

      <div className="mt-4 text-sm flex items-center justify-between">
        <button onClick={()=>setMode(mode==="signin"?"signup":"signin")} className="underline">
          {mode==="signin" ? A.noAccount+" "+A.signUp : A.haveAccount+" "+A.signIn}
        </button>
        <button onClick={logout} className="text-white/70 hover:underline">{A.logout}</button>
      </div>
    </main>
  );
}
