'use client'
import SplashGate from '@/components/SplashGate'

export default function SplashGateClient() {
  // Se vuoi poterlo spegnere via env, scommenta sotto:
  // if (process.env.NEXT_PUBLIC_ENABLE_SPLASH === 'false') return null
  return <SplashGate />
}
