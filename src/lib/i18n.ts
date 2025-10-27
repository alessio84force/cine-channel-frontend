export type Locale = 'es' | 'en' | 'fr'
export const LOCALES: Locale[] = ['es','en','fr','it','de','pt','ar']

const dict = {
  es: {
    nav: { explore: 'Explorar', create: 'Crear canal' },
    explore: {
      title: 'Explorar',
      empty: 'No hay canales todavía.',
      createFirst: 'Crea el primero',
      view: 'Ver canal',
      subscribe: 'Suscribirse',
      views: 'vistas',
      subscribers: 'suscriptores',
    },
    channel: {
      videos: 'Vídeos',
      subscribedOK: '¡Suscripción preparada! (placeholder)',
      descriptionFallback: 'Sin descripción',
    },
    onboarding: {
      title: 'Crear canal',
      intro: 'Completa los campos para abrir tu canal.',
      nameLabel: 'Nombre del canal *',
      descriptionLabel: 'Descripción',
      submit: 'Crear canal',
      creating: 'Creando…',
      namePlaceholder: 'p.ej. Cine Clásico',
      descPlaceholder: '¿De qué va tu canal…?',
    },
    titles: { contact: 'Contacto', pricing: 'Precios', upload: 'Subir', search: 'Buscar', videos: 'Vídeos' },
  },
  en: {
    nav: { explore: 'Explore', create: 'Create channel' },
    explore: {
      title: 'Explore',
      empty: 'No channels yet.',
      createFirst: 'Create the first',
      view: 'View channel',
      subscribe: 'Subscribe',
      views: 'views',
      subscribers: 'subscribers',
    },
    channel: {
      videos: 'Videos',
      subscribedOK: 'Subscription ready! (placeholder)',
      descriptionFallback: 'No description',
    },
    onboarding: {
      title: 'Create channel',
      intro: 'Fill in the fields to open your channel.',
      nameLabel: 'Channel name *',
      descriptionLabel: 'Description',
      submit: 'Create channel',
      creating: 'Creating…',
      namePlaceholder: 'e.g. Classic Cinema',
      descPlaceholder: 'What is your channel about…?',
    },
    titles: { contact: 'Contact', pricing: 'Pricing', upload: 'Upload', search: 'Search', videos: 'Videos' },
  },
  fr: {
    nav: { explore: 'Explorer', create: 'Créer une chaîne' },
    explore: {
      title: 'Explorer',
      empty: 'Pas encore de chaînes.',
      createFirst: 'Créez la première',
      view: 'Voir la chaîne',
      subscribe: "S'abonner",
      views: 'vues',
      subscribers: 'abonnés',
    },
    channel: {
      videos: 'Vidéos',
      subscribedOK: 'Abonnement prêt ! (placeholder)',
      descriptionFallback: 'Sans description',
    },
    onboarding: {
      title: 'Créer une chaîne',
      intro: 'Remplissez les champs pour ouvrir votre chaîne.',
      nameLabel: 'Nom de la chaîne *',
      descriptionLabel: 'Description',
      submit: 'Créer la chaîne',
      creating: 'Création…',
      namePlaceholder: 'ex. Cinéma Classique',
      descPlaceholder: 'De quoi parle votre chaîne… ?',
    },
    titles: { contact: 'Contact', pricing: 'Tarifs', upload: 'Téléverser', search: 'Rechercher', videos: 'Vidéos' },
  },
} as const

export function t(locale: Locale) {
  return (dict as any)[locale] ?? dict.es
}

export function fmtNumber(n: number | undefined, locale: Locale) {
  const v = typeof n === 'number' ? n : 0
  return new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: 1 }).format(v)
}
