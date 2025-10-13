'use client'

import { useEffect, useState, useRef } from 'react'
import StarLogo from '@/components/StarLogo'

type Phase = 'hidden' | 'in' | 'hold' | 'out'

export default function SplashIntro() {
  const [show, setShow] = useState(false)
  const [phase, setPhase] = useState<Phase>('hidden')
  const audioPlayed = useRef(false)

  // --- Heartbeat sintetico via Web Audio (no file necessario) ---
  const playHeartbeat = async () => {
    if (audioPlayed.current) return
    audioPlayed.current = true
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext
      const ctx = new AudioCtx()
      const gain = ctx.createGain()
      gain.gain.value = 0
      gain.connect(ctx.destination)

      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = 60 // Hz (basso)
      osc.connect(gain)
      osc.start()

      const now = ctx.currentTime
      const thump = (t: number) => {
        // inviluppo veloce: attacco rapido, decadimento breve → "boom"
        gain.gain.cancelScheduledValues(t)
        gain.gain.setValueAtTime(0.0001, t)
        gain.gain.exponentialRampToValueAtTime(0.9, t + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18)
      }

      // doppio colpo: tum-tum
      thump(now + 0.02)
      thump(now + 0.26)

      // stop dopo ~0.6s
      osc.stop(now + 0.7)
      osc.onended = () => ctx.close()
    } catch {
      // Se fallisce (permessi audio): silenziosamente ignora
    }
  }

  // Mostra una sola volta per sessione
  useEffect(() => {
    if (typeof window === 'undefined') return
    const has = sessionStorage.getItem('cineSplashDone') === '1'
    if (has) return

    setShow(true)
    setPhase('in')
    const t1 = setTimeout(() => setPhase('hold'), 500)
    const t2 = setTimeout(() => setPhase('out'), 1100)
    const t3 = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('cineSplashDone', '1')
    }, 1800)

    // prova a suonare subito; se il browser blocca, riprova al primo click/tap
    playHeartbeat()
    const onInteract = () => playHeartbeat()
    window.addEventListener('pointerdown', onInteract, { once: true })
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      window.removeEventListener('pointerdown', onInteract)
    }
  }, [])

  if (!show) return null

  // Stili per le fasi (usiamo transition per evitare mismatch SSR)
  const style: React.CSSProperties = {
    transition: 'transform 600ms ease, opacity 500ms ease',
    animation: phase === 'in' ? 'splash-pop 450ms ease-out' as any : undefined,
    transform:
      phase === 'in'  ? 'scale(1.0)' :
      phase === 'hold'? 'scale(1.0)' :
      phase === 'out' ? 'scale(0.2)' : 'scale(1.0)',
    opacity:
      phase === 'in'  ? 1 :
      phase === 'hold'? 1 :
      phase === 'out' ? 0 : 1,
    willChange: 'transform, opacity',
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div style={style} aria-label="Intro Cine-Channel">
        {/* Stella grande: usa il tuo StarLogo */}
        <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
          <StarLogo />
        </div>
      </div>
    </div>
  )
}
