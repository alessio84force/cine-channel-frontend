export type Locale = 'es'|'en'|'fr'|'it'|'de'|'pt'|'ar'|'ru'|'zh'|'ko';
export const LOCALES: Locale[] = ['es','en','fr','it','de','pt','ar','ru','zh','ko'];
export const FLAGS: Record<Locale,string> = {
  es:'🇪🇸', en:'🇬🇧', fr:'🇫🇷', it:'🇮🇹', de:'🇩🇪', pt:'🇵🇹', ar:'🇸🇦'

  , ru:'🇷🇺', zh:'🇨🇳', ko:'🇰🇷'
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
  ru: {
    navbar:{explore:"Исследовать", create:"Создать канал"},
    hero:{headline_top:"Платформа для геймеров, стримеров, видеоблогеров и кинематографистов", headline_premium:"Ощутите премиум-опыт"},
    trending:{title:"В тренде", desc:"Исследуйте, что выделяется сейчас. Когда вы создадите канал, здесь появятся ваши изображения и видео.", cta:"Создать канал", soon:"Скоро"}
  }
  zh: {
    navbar:{explore:"探索", create:"创建频道"},
    hero:{headline_top:"为玩家、主播、视频博主和电影创作者打造的平台", headline_premium:"畅享高级体验"},
    trending:{title:"热门内容", desc:"探索当前热点。创建频道后，你的图片和视频会显示在这里。", cta:"创建频道", soon:"敬请期待"}
  }
  ko: {
    navbar:{explore:"탐색", create:"채널 만들기"},
    hero:{headline_top:"게이머, 스트리머, 비디오 블로거, 영화 창작자를 위한 플랫폼", headline_premium:"프리미엄 경험을 누려보세요"},
    trending:{title:"트렌딩 콘텐츠", desc:"지금 주목받는 것을 살펴보세요. 채널을 만들면 여기에 이미지와 동영상이 표시됩니다.", cta:"채널 만들기", soon:"곧 공개"}
  }
};
