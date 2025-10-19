export function formatDate(locale: 'es'|'en'|'fr', v: string | Date): string {
  try {
    const d = (typeof v === 'string') ? new Date(v) : v
    if (Number.isNaN(+d)) return ''
    const opt: Intl.DateTimeFormatOptions = { year:'numeric', month:'numeric', day:'numeric' }
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : locale === 'fr' ? 'fr-FR' : 'es-ES', opt).format(d)
  } catch { return '' }
}

export function formatViews(locale: 'es'|'en'|'fr', n: number): string {
  try {
    return new Intl.NumberFormat(locale === 'en' ? 'en-US' : locale === 'fr' ? 'fr-FR' : 'es-ES', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(n)
  } catch { return String(n ?? '') }
}
