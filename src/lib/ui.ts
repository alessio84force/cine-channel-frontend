// src/lib/ui.ts
export type L = 'es'|'en'|'fr'|'it'|'de'|'pt'

export const UI: Record<L, {
  brand: string
  trending: string
  nav: { explore: string, create: string }
  footer: { rights: string, privacy: string, contact: string, terms: string }
}> = {
  es: {
    brand: 'CINE-CHANNEL',
    trending: 'Contenido en tendencia',
    nav: { explore: 'Explorar', create: 'Crear canal' },
    footer: { rights: 'Todos los derechos reservados.', privacy: 'Privacidad', contact: 'Contacto', terms: 'Términos' },
  },
  en: {
    brand: 'CINE-CHANNEL',
    trending: 'Trending content',
    nav: { explore: 'Explore', create: 'Create channel' },
    footer: { rights: 'All rights reserved.', privacy: 'Privacy', contact: 'Contact', terms: 'Terms' },
  },
  fr: {
    brand: 'CINE-CHANNEL',
    trending: 'Contenu tendance',
    nav: { explore: 'Explorer', create: 'Créer une chaîne' },
    footer: { rights: 'Tous droits réservés.', privacy: 'Confidentialité', contact: 'Contact', terms: 'Conditions' },
  },
  it: {
    brand: 'CINE-CHANNEL',
    trending: 'Contenuti in tendenza',
    nav: { explore: 'Esplora', create: 'Crea canale' },
    footer: { rights: 'Tutti i diritti riservati.', privacy: 'Privacy', contact: 'Contatti', terms: 'Termini' },
  },
  de: {
    brand: 'CINE-CHANNEL',
    trending: 'Trend-Inhalte',
    nav: { explore: 'Entdecken', create: 'Kanal erstellen' },
    footer: { rights: 'Alle Rechte vorbehalten.', privacy: 'Datenschutz', contact: 'Kontakt', terms: 'Nutzungsbedingungen' },
  },
  pt: {
    brand: 'CINE-CHANNEL',
    trending: 'Conteúdo em alta',
    nav: { explore: 'Explorar', create: 'Criar canal' },
    footer: { rights: 'Todos os direitos reservados.', privacy: 'Privacidade', contact: 'Contato', terms: 'Termos' },
  },
}
