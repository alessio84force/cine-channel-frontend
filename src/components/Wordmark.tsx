"use client";
import StarLogo from '@/components/StarLogo'
import clsx from 'clsx'

type Size = 'sm'|'md'|'lg'

export default function Wordmark({ size='md', className='' }: { size?: Size; className?: string }) {
  const cfg = {
    sm: { icon:'w-5 h-5', text:'text-base', gap:'gap-1.5' },
    md: { icon:'w-7 h-7', text:'text-2xl',  gap:'gap-2'   },
    lg: { icon:'w-12 h-12', text:'text-5xl md:text-6xl', gap:'gap-3 md:gap-4' },
  }[size]

  return (
    <span className={clsx('inline-flex items-center', cfg.gap, className)}>
      <StarLogo className={cfg.icon} />
      <span className={clsx('font-extrabold tracking-widest gold-text gold-soft-glow', cfg.text)}>
        CINE-CHANNEL
      </span>
    </span>
  )
}
