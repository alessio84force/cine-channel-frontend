export type Locale = 'es'|'en'|'fr'|'it'|'de'|'pt'|'ar';
export const LOCALES: Locale[] = ['es','en','fr','it','de','pt','ar'];
export const FLAGS: Record<Locale,string> = {
  es:'🇪🇸', en:'🇬🇧', fr:'🇫🇷', it:'🇮🇹', de:'🇩🇪', pt:'🇵🇹', ar:'🇸🇦'
};

export const dict: Record<Locale, {
  nav: { explore: string; create: string; login: string; },
  hero: { headline1: string; headline2: string; },
  trending: { title: string; desc: string; comingSoon: string; }
}> = {
  es: {
    nav: { explore: 'Explorar', create: 'Crear canal', login: 'Iniciar sesión' },
    hero: {
      headline1: 'La plataforma para gamers, streamers, videobloggers e cineastas',
      headline2: 'Vive una experiencia premium',
    },
    trending: {
      title: 'Contenido de tendencia',
      desc: 'Explora lo que está destacando ahora. Cuando crees tu canal, aquí aparecerán tus imágenes y vídeos.',
      comingSoon: 'Próximamente',
    },
  },
  en: {
    nav: { explore: 'Explore', create: 'Create channel', login: 'Sign in' },
    hero: {
      headline1: 'The platform for gamers, streamers, vloggers and filmmakers',
      headline2: 'Live a premium experience',
    },
    trending: {
      title: 'Trending content',
      desc: 'Explore what’s hot right now. Once you create your channel, your images and videos will appear here.',
      comingSoon: 'Coming soon',
    },
  },
  fr: {
    nav: { explore: 'Explorer', create: 'Créer une chaîne', login: 'Se connecter' },
    hero: {
      headline1: 'La plateforme pour les gamers, streamers, vidéoblogueurs et cinéastes',
      headline2: 'Vivez une expérience premium',
    },
    trending: {
      title: 'Contenu tendance',
      desc: 'Découvrez ce qui fait le buzz. Une fois votre chaîne créée, vos images et vidéos apparaîtront ici.',
      comingSoon: 'Bientôt disponible',
    },
  },
  it: {
    nav: { explore: 'Esplora', create: 'Crea canale', login: 'Accedi' },
    hero: {
      headline1: 'La piattaforma per gamer, streamer, videoblogger e cineasti',
      headline2: 'Vivi un’esperienza premium',
    },
    trending: {
      title: 'Contenuti di tendenza',
      desc: 'Scopri ciò che è in evidenza adesso. Quando creerai il tuo canale, qui compariranno le tue immagini e i tuoi video.',
      comingSoon: 'In arrivo',
    },
  },
  de: {
    nav: { explore: 'Entdecken', create: 'Kanal erstellen', login: 'Anmelden' },
    hero: {
      headline1: 'Die Plattform für Gamer, Streamer, Videoblogger und Filmemacher',
      headline2: 'Erlebe ein Premium-Erlebnis',
    },
    trending: {
      title: 'Angesagte Inhalte',
      desc: 'Entdecke, was gerade im Trend liegt. Sobald du deinen Kanal erstellt hast, erscheinen hier deine Bilder und Videos.',
      comingSoon: 'Bald verfügbar',
    },
  },
  pt: {
    nav: { explore: 'Explorar', create: 'Criar canal', login: 'Iniciar sessão' },
    hero: {
      headline1: 'A plataforma para gamers, streamers, videobloggers e cineastas',
      headline2: 'Viva uma experiência premium',
    },
    trending: {
      title: 'Conteúdo em alta',
      desc: 'Explore o que está em destaque agora. Ao criar o seu canal, as suas imagens e vídeos aparecerão aqui.',
      comingSoon: 'Em breve',
    },
  },
  ar: {
    nav: { explore: 'استكشف', create: 'أنشئ قناة', login: 'تسجيل الدخول' },
    hero: {
      headline1: 'المنصة للاعبين والبث المباشر ومدوني الفيديو وصناع الأفلام',
      headline2: 'عِش تجربة مميزة',
    },
    trending: {
      title: 'المحتوى الرائج',
      desc: 'استكشف ما هو شائع الآن. عند إنشاء قناتك، ستظهر صورك ومقاطعك هنا.',
      comingSoon: 'قريبًا',
    },
  },
};
