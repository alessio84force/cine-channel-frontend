"use client";
import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function AnalyticsOnConsent() {
  useEffect(() => {
    if (!GA_ID) return
    const ok = typeof window !== 'undefined' && localStorage.getItem('cc_cookie_choice') === 'all'
    if (!ok) return

    // inietta gtag se non presente
    if (!document.querySelector('script[data-gtag]')) {
      const s1 = document.createElement('script')
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      s1.async = true
      s1.setAttribute('data-gtag', '1')
      document.head.appendChild(s1)

      const s2 = document.createElement('script')
      s2.setAttribute('data-gtag', '1')
      s2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { anonymize_ip: true });
      `
      document.head.appendChild(s2)
    }
  }, [])

  return null
}
