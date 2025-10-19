export const STRINGS = {
  es: {
    footer: {
      legal: 'Legal',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      copyright: 'Copyright',
      dsa: 'DSA',
      report: 'Reportar',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados',
    },
  },
  en: {
    footer: {
      legal: 'Legal',
      privacy: 'Privacy',
      cookies: 'Cookies',
      copyright: 'Copyright',
      dsa: 'DSA',
      report: 'Report',
      contact: 'Contact',
      rights: 'All rights reserved',
    },
  },
  fr: {
    footer: {
      legal: 'Mentions légales',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      copyright: 'Droit d’auteur',
      dsa: 'DSA',
      report: 'Signaler',
      contact: 'Contact',
      rights: 'Tous droits réservés',
    },
  },
} as const
export type Locale = keyof typeof STRINGS
