export type Locale = 'es'|'en'|'fr'|'it'|'de'|'pt'|'ar'|'ru'|'zh'|'ko';
export const LOCALES: Locale[] = ['es','en','fr','it','de','pt','ar','ru','zh','ko'];
export const FLAGS: Record<Locale,string> = {
  es:'🇪🇸', en:'🇬🇧', fr:'🇫🇷', it:'🇮🇹', de:'🇩🇪', pt:'🇵🇹', ar:'🇸🇦', ru:'🇷🇺', zh:'🇨🇳', ko:'🇰🇷'
};

export const dict: Record<Locale, {
  navbar: { explore: string; create: string; login: string; },
  hero: { headline1?: string; headline2?: string; headline_top?: string; headline_premium?: string; },
  trending: { title: string; desc: string; comingSoon: string; },
  actions: { viewChannel: string; subscribe: string; },
  labels: { channel: string; },
  footer: {
    about: string; terms: string; privacy: string; cookies: string; copyright: string; dmca: string;
    help: string; careers: string; press: string; imprint: string; accessibility: string; rights: string;
  },
}> = {
  es: {
    navbar:{explore:"Explorar", create:"Crear canal", login:"Iniciar sesión"},
    hero:{headline1:"La plataforma para gamers, streamers, videobloggers e cineastas", headline2:"Vive una experiencia premium"},
    trending:{title:"Contenido de tendencia", desc:"Explora lo que está destacando ahora. Cuando crees tu canal, aquí aparecerán tus imágenes y vídeos.", comingSoon:"Próximamente"},
    actions:{viewChannel:"Ver canal", subscribe:"Suscribirse"},
    labels:{channel:"Canal"},
    footer:{
      about:"Sobre nosotros", terms:"Términos", privacy:"Privacidad", cookies:"Cookies", copyright:"Copyright",
      dmca:"DMCA", help:"Ayuda", careers:"Empleo", press:"Prensa", imprint:"Aviso legal", accessibility:"Accesibilidad",
      rights:"Todos los derechos reservados"
    }
  },
  en: {
    navbar:{explore:"Explore", create:"Create channel", login:"Sign in"},
    hero:{headline1:"The platform for gamers, streamers, videobloggers and filmmakers", headline2:"Enjoy a premium experience"},
    trending:{title:"Trending content", desc:"See what's hot right now. Once you create your channel, your images and videos will show up here.", comingSoon:"Coming soon"},
    actions:{viewChannel:"View channel", subscribe:"Subscribe"},
    labels:{channel:"Channel"},
    footer:{
      about:"About", terms:"Terms", privacy:"Privacy", cookies:"Cookies", copyright:"Copyright",
      dmca:"DMCA", help:"Help", careers:"Careers", press:"Press", imprint:"Imprint", accessibility:"Accessibility",
      rights:"All rights reserved"
    }
  },
  fr: {
    navbar:{explore:"Explorer", create:"Créer une chaîne", login:"Se connecter"},
    hero:{headline1:"La plateforme pour gamers, streamers, vidéoblogueurs et cinéastes", headline2:"Vivez une expérience premium"},
    trending:{title:"Contenu tendance", desc:"Découvrez ce qui fait l’actualité. Une fois votre chaîne créée, vos images et vidéos apparaîtront ici.", comingSoon:"Bientôt"},
    actions:{viewChannel:"Voir la chaîne", subscribe:"S’abonner"},
    labels:{channel:"Chaîne"},
    footer:{
      about:"À propos", terms:"Conditions", privacy:"Confidentialité", cookies:"Cookies", copyright:"Droits d’auteur",
      dmca:"DMCA", help:"Aide", careers:"Carrières", press:"Presse", imprint:"Mentions légales", accessibility:"Accessibilité",
      rights:"Tous droits réservés"
    }
  },
  it: {
    navbar:{explore:"Esplora", create:"Crea canale", login:"Accedi"},
    hero:{headline1:"La piattaforma per gamer, streamer, videoblogger e cineasti", headline2:"Vivi un’esperienza premium"},
    trending:{title:"Contenuti di tendenza", desc:"Scopri cosa è in evidenza ora. Quando crei il tuo canale, qui appariranno le tue immagini e i tuoi video.", comingSoon:"In arrivo"},
    actions:{viewChannel:"Vedi canale", subscribe:"Iscriviti"},
    labels:{channel:"Canale"},
    footer:{
      about:"Chi siamo", terms:"Termini", privacy:"Privacy", cookies:"Cookie", copyright:"Copyright",
      dmca:"DMCA", help:"Aiuto", careers:"Lavora con noi", press:"Stampa", imprint:"Imprint", accessibility:"Accessibilità",
      rights:"Tutti i diritti riservati"
    }
  },
  de: {
    navbar:{explore:"Entdecken", create:"Kanal erstellen", login:"Anmelden"},
    hero:{headline1:"Die Plattform für Gamer, Streamer, Videoblogger und Filmemacher", headline2:"Erlebe Premium"},
    trending:{title:"Angesagte Inhalte", desc:"Entdecke, was gerade im Trend liegt. Wenn du deinen Kanal erstellst, erscheinen hier deine Bilder und Videos.", comingSoon:"Demnächst"},
    actions:{viewChannel:"Kanal ansehen", subscribe:"Abonnieren"},
    labels:{channel:"Kanal"},
    footer:{
      about:"Über uns", terms:"Nutzungsbedingungen", privacy:"Datenschutz", cookies:"Cookies", copyright:"Urheberrecht",
      dmca:"DMCA", help:"Hilfe", careers:"Karriere", press:"Presse", imprint:"Impressum", accessibility:"Barrierefreiheit",
      rights:"Alle Rechte vorbehalten"
    }
  },
  pt: {
    navbar:{explore:"Explorar", create:"Criar canal", login:"Iniciar sessão"},
    hero:{headline1:"A plataforma para gamers, streamers, videobloggers e cineastas", headline2:"Viva uma experiência premium"},
    trending:{title:"Conteúdo em alta", desc:"Explore o que está em destaque. Ao criar o seu canal, as suas imagens e vídeos aparecerão aqui.", comingSoon:"Em breve"},
    actions:{viewChannel:"Ver canal", subscribe:"Subscrever"},
    labels:{channel:"Canal"},
    footer:{
      about:"Sobre", terms:"Termos", privacy:"Privacidade", cookies:"Cookies", copyright:"Direitos de autor",
      dmca:"DMCA", help:"Ajuda", careers:"Carreiras", press:"Imprensa", imprint:"Imprint", accessibility:"Acessibilidade",
      rights:"Todos os direitos reservados"
    }
  },
  ar: {
    navbar:{explore:"استكشف", create:"أنشئ قناة", login:"تسجيل الدخول"},
    hero:{headline1:"المنصة للاعبين والبث المباشر ومدوني الفيديو وصناع الأفلام", headline2:"عِش تجربة مميزة"},
    trending:{title:"المحتوى الرائج", desc:"اكتشف ما يتصدر الآن. عند إنشاء قناتك ستظهر صورك وفيديوهاتك هنا.", comingSoon:"قريباً"},
    actions:{viewChannel:"عرض القناة", subscribe:"اشترك"},
    labels:{channel:"قناة"},
    footer:{
      about:"من نحن", terms:"الشروط", privacy:"الخصوصية", cookies:"ملفات تعريف الارتباط", copyright:"حقوق النشر",
      dmca:"DMCA", help:"مساعدة", careers:"وظائف", press:"الصحافة", imprint:"بيان النشر", accessibility:"إمكانية الوصول",
      rights:"جميع الحقوق محفوظة"
    }
  },
  ru: {
    navbar:{explore:"Исследовать", create:"Создать канал", login:"Войти"},
    hero:{headline_top:"Платформа для геймеров, стримеров, видеоблогеров и кинематографистов", headline_premium:"Ощутите премиум-опыт"},
    trending:{title:"В тренде", desc:"Посмотрите, что популярно сейчас. После создания канала здесь появятся ваши изображения и видео.", comingSoon:"Скоро"},
    actions:{viewChannel:"Смотреть канал", subscribe:"Подписаться"},
    labels:{channel:"Канал"},
    footer:{
      about:"О нас", terms:"Условия", privacy:"Конфиденциальность", cookies:"Файлы cookie", copyright:"Авторское право",
      dmca:"DMCA", help:"Помощь", careers:"Вакансии", press:"Пресса", imprint:"Импресум", accessibility:"Доступность",
      rights:"Все права защищены"
    }
  },
  zh: {
    navbar:{explore:"探索", create:"创建频道", login:"登录"},
    hero:{headline_top:"为玩家、主播、视频博主和电影创作者打造的平台", headline_premium:"畅享高级体验"},
    trending:{title:"热门内容", desc:"探索当前热点。创建频道后，你的图片和视频会显示在这里。", comingSoon:"敬请期待"},
    actions:{viewChannel:"查看频道", subscribe:"订阅"},
    labels:{channel:"频道"},
    footer:{
      about:"关于我们", terms:"条款", privacy:"隐私", cookies:"Cookies", copyright:"版权",
      dmca:"DMCA", help:"帮助", careers:"招聘", press:"媒体", imprint:"出版信息", accessibility:"无障碍",
      rights:"版权所有"
    }
  },
  ko: {
    navbar:{explore:"탐색", create:"채널 만들기", login:"로그인"},
    hero:{headline_top:"게이머, 스트리머, 비디오 블로거, 영화 창작자를 위한 플랫폼", headline_premium:"프리미엄 경험을 누려보세요"},
    trending:{title:"트렌딩 콘텐츠", desc:"지금 주목받는 것을 살펴보세요. 채널을 만들면 여기에 이미지와 동영상이 표시됩니다.", comingSoon:"곧 공개"},
    actions:{viewChannel:"채널 보기", subscribe:"구독"},
    labels:{channel:"채널"},
    footer:{
      about:"소개", terms:"이용약관", privacy:"개인정보", cookies:"쿠키", copyright:"저작권",
      dmca:"DMCA", help:"도움말", careers:"채용", press:"보도자료", imprint:"발행정보", accessibility:"접근성",
      rights:"판권 소유"
    }
  }
};
