"use client";

import Link from 'next/link'
import { useLocale } from '@/lib/locale-client'
import { UI, L } from '@/lib/ui'

export default function Footer() {
  const loc = (useLocale() as L) || 'es'
  const T = UI[loc]

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* top: legal lists */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-white/80">{T.legal.title}</h3>
            <ul className="mt-3 space-y-2">
              {T.legal.items.map((it: any) => (
                <li key={it.slug}>
                  <Link className="text-white/70 hover:text-white" href={`/${loc}/legal/${it.slug}`}>
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div />
          <div className="sm:text-right">
            <Link href="mailto:support@cine-channel.com" className="text-white/80 hover:text-white">
              {T.support}
            </Link>
          </div>
        </div>

        {/* bottom: centered brand + rights */}
        <div className="mt-10 flex items-center justify-center">
          <div className="text-white/80 text-sm">
            <span className="font-semibold tracking-wide">{T.brand}</span><sup>®</sup> — {T.rights}
          </div>
        </div>
      </div>
    </footer>
  )
}
