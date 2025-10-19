'use client'
import { useEffect, useMemo, useState } from 'react'
import SplashIntro from '@/components/SplashIntro'

export default function SplashGate() {
  const [show, setShow] = useState(false)

  const forceSplash = useMemo(() => {
    if (typeof window === 'undefined') return false
    try {
      const p = new URL(window.location.href)
      return p.searchParams.get('splash') === '1'
    } catch { return false }
  }, [])

  useEffect(() => {
    try {
      const KEY = 'splash_seen'
      const seen = sessionStorage.getItem(KEY) === '1'
      console.log('[SPLASH] session seen?', seen, 'force?', forceSplash)
      if (!seen || forceSplash) {
        setShow(true)
      }
    } catch (e) {
      console.log('[SPLASH] sessionStorage error', e)
      setShow(true)
    }
  }, [forceSplash])

  if (!show) return null
  console.log('[SPLASH] rendering SplashIntro overlay')
  return (
    <SplashIntro onDone={() => {
      try { sessionStorage.setItem('splash_seen', '1') } catch {}
      setShow(false)
      console.log('[SPLASH] hidden')
    }} />
  )
}
