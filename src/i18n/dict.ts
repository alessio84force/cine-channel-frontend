export type Locale = 'es'|'en'|'fr'|'it'|'de'|'pt'|'ar';
export const LOCALES: Locale[] = ['es','en','fr','it','de','pt','ar'];
export const FLAGS: Record<Locale,string> = {
  es:'🇪🇸', en:'🇬🇧', fr:'🇫🇷', it:'🇮🇹', de:'🇩🇪', pt:'🇵🇹', ar:'🇸🇦'
};

export const dict: Record<Locale, {
  nav: { explore: string; create: string; login: string; },
  hero: { headline1: string; headline2: string; },
}> = {
  es: {
    nav: { explore: 'Explorar', create: 'Crear canal', login: 'Iniciar sesión' },
    hero: {
      headline1: 'La plataforma para gamers, streamers, videobloggers e cineastas',
      headline2: 'Vive una experiencia premium',
    },
  },
  en: {
    nav: { explore: 'Explore', create: 'Create channel', login: 'Sign in' },
    hero: {
      headline1: 'The platform for gamers, streamers, vloggers and filmmakers',
      headline2: 'Live a premium experience',
    },
  },
  fr: {
    nav: { explore: 'Explorer', create: 'Créer une chaîne', login: 'Se connecter' },
    hero: {
      headline1: 'La plateforme pour les gamers, streamers, vidéoblogueurs et cinéastes',
      headline2: 'Vivez une expérience premium',
    },
  },
  it: {
    nav: { explore: 'Esplora', create: 'Crea canale', login: 'Accedi' },
    hero: {
      headline1: 'La piattaforma per gamer, streamer, videoblogger e cineasti',
      headline2: 'Vivi un’esperienza premium',
    },
  },
  de: {
    nav: { explore: 'Entdecken', create: 'Kanal erstellen', login: 'Anmelden' },
    hero: {
      headline1: 'Die Plattform für Gamer, Streamer, Videoblogger und Filmemacher',
      headline2: 'Erlebe ein Premium-Erlebnis',
    },
  },
  pt: {
    nav: { explore: 'Explorar', create: 'Criar canal', login: 'Iniciar sessão' },
    hero: {
      headline1: 'A plataforma para gamers, streamers, videobloggers e cineastas',
      headline2: 'Viva uma experiência premium',
    },
  },
  ar: {
    nav: { explore: 'استكشف', create: 'أنشئ قناة', login: 'تسجيل الدخول' },
    hero: {
      headline1: 'المنصة للاعبين والبث المباشر ومدوني الفيديو وصناع الأفلام',
      headline2: 'عِش تجربة مميزة',
    },
  },
};
