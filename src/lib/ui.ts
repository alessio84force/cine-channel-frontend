// src/lib/ui.ts
export type L = 'es'|'en'|'fr'

export const UI: Record<L, any> = {
  es: {
    brand: 'CINE-CHANNEL',
    rights: 'Todos los derechos reservados.',
    trending: 'Contenido en tendencia',
    explore_title: 'Explorar canales',
    create_channel: 'Crear canal',
    explore: 'Explorar',
    support: 'Soporte',
    legal: {
      title: 'Legal',
      items: [
        { slug: 'privacidad', label: 'Privacidad' },
        { slug: 'cookies', label: 'Cookies' },
        { slug: 'aviso-legal', label: 'Aviso legal' },
        { slug: 'copyright', label: 'Copyright' },
        { slug: 'dsa', label: 'DSA' },
        { slug: 'reportar', label: 'Reportar' },
      ]
    },
    views: 'vistas',
    onboarding: {
      title: 'Crea tu canal',
      name: 'Nombre del canal',
      slug: 'URL (slug)',
      category: 'Categoría',
      description: 'Descripción',
      price: 'Precio mensual (€)',
      continue: 'Continuar',
      cancel: 'Cancelar'
    }
  },
  en: {
    brand: 'CINE-CHANNEL',
    rights: 'All rights reserved.',
    trending: 'Trending content',
    explore_title: 'Explore channels',
    create_channel: 'Create channel',
    explore: 'Explore',
    support: 'Support',
    legal: {
      title: 'Legal',
      items: [
        { slug: 'privacy', label: 'Privacy' },
        { slug: 'cookies', label: 'Cookies' },
        { slug: 'legal-notice', label: 'Legal notice' },
        { slug: 'copyright', label: 'Copyright' },
        { slug: 'dsa', label: 'DSA' },
        { slug: 'report', label: 'Report' },
      ]
    },
    views: 'views',
    onboarding: {
      title: 'Create your channel',
      name: 'Channel name',
      slug: 'URL (slug)',
      category: 'Category',
      description: 'Description',
      price: 'Monthly price (€)',
      continue: 'Continue',
      cancel: 'Cancel'
    }
  },
  fr: {
    brand: 'CINE-CHANNEL',
    rights: 'Tous droits réservés.',
    trending: 'Contenu tendance',
    explore_title: 'Explorer les chaînes',
    create_channel: 'Créer une chaîne',
    explore: 'Explorer',
    support: 'Support',
    legal: {
      title: 'Mentions légales',
      items: [
        { slug: 'confidentialite', label: 'Confidentialité' },
        { slug: 'cookies', label: 'Cookies' },
        { slug: 'mentions-legales', label: 'Mentions légales' },
        { slug: 'copyright', label: 'Copyright' },
        { slug: 'dsa', label: 'DSA' },
        { slug: 'signaler', label: 'Signaler' },
      ]
    },
    views: 'vues',
    onboarding: {
      title: 'Crée ta chaîne',
      name: 'Nom de la chaîne',
      slug: 'URL (slug)',
      category: 'Catégorie',
      description: 'Description',
      price: 'Prix mensuel (€)',
      continue: 'Continuer',
      cancel: 'Annuler'
    }
  }
}
