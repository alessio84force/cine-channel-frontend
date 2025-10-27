export type L = 'es'|'en'|'fr'|'it'|'de'|'pt'|'ar';

type Dict = {
  brand: string;
  nav: { explore: string; create: string; };
  onboarding: {
    title: string; subtitle: string;
    name: string; slug: string; description: string; category: string;
    priceMonthly: string;            // prezzo mensile
    priceHintMin: string;            // hint prezzo minimo
    platformFeeNotice: string;       // avviso commissione piattaforma
    create: string; cancel: string;
    myConnections: string;
    connectStripe: string; dashboardStripe: string; disconnectStripe: string;
    success: string; error: string;
    availability: { label: string; checking: string; available: string; taken: string; help: string; };
  };
  footer: {
    rights: string; privacy: string; terms: string; cookies: string; legalNotice: string; contact: string; legalBlockTitle: string;
  };
  home: { tagline: string; trendingTitle: string; trendingSubtitle: string; ctaCreate: string; };
  categories: string[];
  actions: { viewChannel: string; subscribe: string; subscribed: string; unsubscribe: string; };
};

export const UI: Record<L, Dict> = {
  es: {
    onboarding: {
      payment: { title: 'Paso 1: Paga la cuota de creación (9,99 €)', cta: 'Pagar ahora', waiting: 'Redirigiendo a Stripe…', required: 'Debes completar el pago antes de crear el canal.' }
    },
    brand: 'CINE-CHANNEL',
    nav: { explore: 'Explorar', create: 'Crear canal' , signin: 'Iniciar sesión'},
  channel: {
    settingsTitle: "Configuración del canal",
    logo: "Logo del canal",
    banner: "Imagen de portada",
    description: "Descripción del canal",
    price: "Precio mensual (€)",
    save: "Guardar cambios",
    payments: "Pagos y conexión",
    connectStripe: "Conectar con Stripe",
    videos: "Gestión de videos",
    videoHint: "Sube tus videos, trailers o contenido premium aquí."
  },
    onboarding: {
      title: 'Crear canal',
      subtitle: 'Configura tu canal y conecta tus herramientas.',
      name: 'Nombre del canal',
      slug: 'Slug (URL)',
      description: 'Descripción',
      category: 'Categoría',
      priceMonthly: 'Precio mensual (€)',
      priceHintMin: 'Precio mínimo 2,50 € (incluye comisión de plataforma)',
    priceTooLow: 'El precio mínimo es 2,50 € por la comisión de plataforma (2 € por seguidor/mes).',
      platformFeeNotice: 'La comisión de plataforma es de 2 € por seguidor al mes.',
      create: 'Crear canal',
      cancel: 'Cancelar',
      myConnections: 'Mis conexiones',
      connectStripe: 'Conectar con Stripe',
      dashboardStripe: 'Panel de Stripe',
      disconnectStripe: 'Desconectar Stripe',
      success: '¡Canal creado correctamente!',
      error: 'Algo salió mal. Inténtalo de nuevo.',
      availability: { label: 'Disponibilidad', checking: 'Verificando…', available: 'Disponible', taken: 'No disponible', help: 'Puedes editar el slug abajo' },
    },
    footer: { rights: 'Todos los derechos reservados.', privacy: 'Privacidad', terms: 'Términos', cookies: 'Cookies', legalNotice: 'Aviso legal', contact: 'Contacto', legalBlockTitle: 'Legal' },
    home: { tagline: 'La plataforma para gamers, streamers, videobloggers y cineastas.', trendingTitle: 'Contenido de tendencia', trendingSubtitle: 'Explora lo que está destacando ahora. Cuando crees tu canal, aquí aparecerán tus imágenes y vídeos.', ctaCreate: 'Crear canal' },
    categories: ['Cine','Gaming','Streaming','Vlogging','Animación','Documental','Música','Tecnología'],
    actions: { viewChannel: 'Ver canal', subscribe: 'Suscribirse', subscribed: 'Suscrito', unsubscribe: 'Cancelar suscripción' },

  },
  en: {
    brand: 'CINE-CHANNEL',
    nav: { explore: 'Explore', create: 'Create channel' , signin: 'Sign in'},
    onboarding: {
      payment: {
        title: 'Step 1: Pay the channel creation fee (€9.99)',
        cta: 'Pay now',
        waiting: 'Redirecting to Stripe…',
        required: 'You must complete the payment before creating the channel.'
      },
      title: 'Create channel',
      subtitle: 'Set up your channel and connect your tools.',
      name: 'Channel name',
      slug: 'Slug (URL)',
      description: 'Description',
      category: 'Category',
      priceMonthly: 'Monthly price (€)',
      priceHintMin: 'Minimum price €2.50 (includes platform commission)',
      platformFeeNotice: 'Platform fee is €2 per follower per month.',
      create: 'Create channel',
      cancel: 'Cancel',
      myConnections: 'My connections',
      connectStripe: 'Connect Stripe',
      dashboardStripe: 'Stripe Dashboard',
      disconnectStripe: 'Disconnect Stripe',
      success: 'Channel created successfully!',
      error: 'Something went wrong. Please try again.',
      availability: { label: 'Availability', checking: 'Checking…', available: 'Available', taken: 'Not available', help: 'You can edit the URL slug below' },
    },
    footer: { rights: 'All rights reserved.', privacy: 'Privacy', terms: 'Terms', cookies: 'Cookies', legalNotice: 'Legal notice', contact: 'Contact', legalBlockTitle: 'Legal' },
    home: { tagline: 'The platform for gamers, streamers, video bloggers and filmmakers.', trendingTitle: 'Trending content', trendingSubtitle: 'See what’s hot right now. Once you create a channel, your images and videos will appear here.', ctaCreate: 'Create channel' },
    categories: ['Cinema','Gaming','Streaming','Vlogging','Animation','Documentary','Music','Technology'],
    actions: { viewChannel: 'View channel', subscribe: 'Subscribe', subscribed: 'Subscribed', unsubscribe: 'Unsubscribe' },

  },
  fr: {
    brand: 'CINE-CHANNEL',
    nav: { explore: 'Explorer', create: 'Créer une chaîne' , signin: 'Se connecter'},
    onboarding: {
      payment: {
        title: 'Étape 1 : Payer les frais de création (9,99 €)',
        cta: 'Payer maintenant',
        waiting: 'Redirection vers Stripe…',
        required: 'Vous devez effectuer le paiement avant de créer la chaîne.'
      },
      title: 'Créer une chaîne',
      subtitle: 'Configurez votre chaîne et connectez vos outils.',
      name: 'Nom de la chaîne',
      slug: 'Slug (URL)',
      description: 'Description',
      category: 'Catégorie',
      priceMonthly: 'Prix mensuel (€)',
      priceHintMin: 'Prix minimum 2,50 € (inclut la commission plateforme)',
    priceTooLow: 'Le prix minimum est de 2,50 € en raison de la commission plateforme (2 € par abonné/mois).',
      platformFeeNotice: 'La commission de la plateforme est de 2 € par abonné et par mois.',
      create: 'Créer la chaîne',
      cancel: 'Annuler',
      myConnections: 'Mes connexions',
      connectStripe: 'Connecter Stripe',
      dashboardStripe: 'Tableau de bord Stripe',
      disconnectStripe: 'Déconnecter Stripe',
      success: 'Chaîne créée avec succès !',
      error: 'Un problème est survenu. Réessayez.',
      availability: { label: 'Disponibilité', checking: 'Vérification…', available: 'Disponible', taken: 'Indisponible', help: 'Vous pouvez modifier le slug ci-dessous' },
    },
    footer: { rights: 'Tous droits réservés.', privacy: 'Confidentialité', terms: 'Conditions', cookies: 'Cookies', legalNotice: 'Mentions légales', contact: 'Contact', legalBlockTitle: 'Mentions' },
    home: { tagline: 'La plateforme pour les gamers, streamers, vidéoblogueurs et cinéastes.', trendingTitle: 'Contenu tendance', trendingSubtitle: 'Découvrez ce qui fait l’actualité. Lorsque vous créez votre chaîne, vos images et vidéos apparaîtront ici.', ctaCreate: 'Créer une chaîne' },
    categories: ['Cinéma','Jeux vidéo','Streaming','Vlogging','Animation','Documentaire','Musique','Technologie'],
    actions: { viewChannel: 'Voir la chaîne', subscribe: 'S’abonner', subscribed: 'Abonné', unsubscribe: 'Se désabonner' },

  },
  it: {
    brand: 'CINE-CHANNEL',
    nav: { explore: 'Esplora', create: 'Crea canale' , signin: 'Accedi'},
    onboarding: {
      payment: {
        title: 'Passo 1: Paga la quota di creazione (9,99 €)',
        cta: 'Paga ora',
        waiting: 'Reindirizzamento a Stripe…',
        required: 'Devi completare il pagamento prima di creare il canale.'
      },
      title: 'Crea canale',
      subtitle: 'Configura il tuo canale e collega i tuoi strumenti.',
      name: 'Nome canale',
      slug: 'Slug (URL)',
      description: 'Descrizione',
      category: 'Categoria',
      priceMonthly: 'Prezzo mensile (€)',
      priceHintMin: 'Prezzo minimo €2,50 (include commissione piattaforma)',
    priceTooLow: 'Il prezzo minimo è €2,50 per via della commissione piattaforma (€2 per follower/mese).',
      platformFeeNotice: 'La commissione della piattaforma è di €2 per follower al mese.',
      create: 'Crea canale',
      cancel: 'Annulla',
      myConnections: 'Le mie connessioni',
      connectStripe: 'Connetti Stripe',
      dashboardStripe: 'Dashboard Stripe',
      disconnectStripe: 'Disconnetti Stripe',
      success: 'Canale creato con successo!',
      error: 'Qualcosa è andato storto. Riprova.',
      availability: { label: 'Disponibilità', checking: 'Verifica…', available: 'Disponibile', taken: 'Non disponibile', help: 'Puoi modificare lo slug qui sotto' },
    },
    footer: { rights: 'Tutti i diritti riservati.', privacy: 'Privacy', terms: 'Termini', cookies: 'Cookie', legalNotice: 'Note legali', contact: 'Contatti', legalBlockTitle: 'Legale' },
    home: { tagline: 'La piattaforma per gamer, streamer, videoblogger e cineasti.', trendingTitle: 'Contenuti di tendenza', trendingSubtitle: 'Scopri cosa è in evidenza ora. Quando creerai il tuo canale, qui compariranno le tue immagini e i tuoi video.', ctaCreate: 'Crea canale' },
    categories: ['Cinema','Gaming','Streaming','Vlogging','Animazione','Documentario','Musica','Tecnologia'],
    actions: { viewChannel: 'Vedi canale', subscribe: 'Abbonati', subscribed: 'Abbonato', unsubscribe: 'Disdici' },

  },
  de: {
    brand: 'CINE-CHANNEL',
    nav: { explore: 'Entdecken', create: 'Kanal erstellen' , signin: 'Anmelden'},
    onboarding: {
      payment: {
        title: 'Schritt 1: Erstellen-Gebühr bezahlen (9,99 €)',
        cta: 'Jetzt bezahlen',
        waiting: 'Weiterleitung zu Stripe…',
        required: 'Sie müssen vor dem Erstellen des Kanals bezahlen.'
      },
      title: 'Kanal erstellen',
      subtitle: 'Richte deinen Kanal ein und verbinde deine Tools.',
      name: 'Kanalname',
      slug: 'Slug (URL)',
      description: 'Beschreibung',
      category: 'Kategorie',
      priceMonthly: 'Monatspreis (€)',
      priceHintMin: 'Mindestpreis 2,50 € (inkl. Plattformgebühr)',
    priceTooLow: 'Mindestpreis ist 2,50 € wegen der Plattformgebühr (2 € pro Follower/Monat).',
      platformFeeNotice: 'Plattformgebühr: 2 € pro Follower und Monat.',
      create: 'Kanal erstellen',
      cancel: 'Abbrechen',
      myConnections: 'Meine Verbindungen',
      connectStripe: 'Stripe verbinden',
      dashboardStripe: 'Stripe-Dashboard',
      disconnectStripe: 'Stripe trennen',
      success: 'Kanal erfolgreich erstellt!',
      error: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
      availability: { label: 'Verfügbarkeit', checking: 'Wird geprüft…', available: 'Verfügbar', taken: 'Nicht verfügbar', help: 'Du kannst den Slug unten anpassen' },
    },
    footer: { rights: 'Alle Rechte vorbehalten.', privacy: 'Datenschutz', terms: 'AGB', cookies: 'Cookies', legalNotice: 'Impressum', contact: 'Kontakt', legalBlockTitle: 'Rechtliches' },
    home: { tagline: 'Die Plattform für Gamer, Streamer, Videoblogger und Filmemacher.', trendingTitle: 'Trend-Inhalte', trendingSubtitle: 'Sieh dir an, was gerade angesagt ist. Sobald du einen Kanal erstellst, erscheinen hier deine Bilder und Videos.', ctaCreate: 'Kanal erstellen' },
    categories: ['Kino','Gaming','Streaming','Vlogging','Animation','Dokumentation','Musik','Technologie'],
    actions: { viewChannel: 'Kanal ansehen', subscribe: 'Abonnieren', subscribed: 'Abonniert', unsubscribe: 'Abo beenden' },

  },
  pt: {
    brand: 'CINE-CHANNEL',
    nav: { explore: 'Explorar', create: 'Criar canal' , signin: 'Entrar'},
    onboarding: {
      payment: {
        title: 'Passo 1: Pagar a taxa de criação (€9,99)',
        cta: 'Pagar agora',
        waiting: 'Redirecionando para Stripe…',
        required: 'Você deve concluir o pagamento antes de criar o canal.'
      },
      title: 'Criar canal',
      subtitle: 'Configure o seu canal e conecte as suas ferramentas.',
      name: 'Nome do canal',
      slug: 'Slug (URL)',
      description: 'Descrição',
      category: 'Categoria',
      priceMonthly: 'Preço mensal (€)',
      priceHintMin: 'Preço mínimo €2,50 (inclui comissão da plataforma)',
    priceTooLow: 'O preço mínimo é €2,50 devido à comissão da plataforma (€2 por seguidor/mês).',
      platformFeeNotice: 'A comissão da plataforma é de €2 por seguidor por mês.',
      create: 'Criar canal',
      cancel: 'Cancelar',
      myConnections: 'Minhas conexões',
      connectStripe: 'Conectar ao Stripe',
      dashboardStripe: 'Painel do Stripe',
      disconnectStripe: 'Desconectar Stripe',
      success: 'Canal criado com sucesso!',
      error: 'Algo deu errado. Tente novamente.',
      availability: { label: 'Disponibilidade', checking: 'Verificando…', available: 'Disponível', taken: 'Indisponível', help: 'Você pode editar o slug abaixo' },
    },
    footer: { rights: 'Todos os direitos reservados.', privacy: 'Privacidade', terms: 'Termos', cookies: 'Cookies', legalNotice: 'Aviso legal', contact: 'Contato', legalBlockTitle: 'Legal' },
    home: { tagline: 'A plataforma para gamers, streamers, videobloggers e cineastas.', trendingTitle: 'Conteúdo em alta', trendingSubtitle: 'Veja o que está bombando agora. Ao criar o seu canal, suas imagens e vídeos aparecerão aqui.', ctaCreate: 'Criar canal' },
    categories: ['Cinema','Jogos','Streaming','Vlogging','Animação','Documentário','Música','Tecnologia'],
    actions: { viewChannel: 'Ver canal', subscribe: 'Subscrever', subscribed: 'Subscrito', unsubscribe: 'Cancelar' },

  },
  ar: {
    brand: 'CINE-CHANNEL',
    nav: { explore: 'استكشاف', create: 'إنشاء قناة' , signin: 'تسجيل الدخول'},
    onboarding: {
      payment: {
        title: 'الخطوة 1: ادفع رسوم إنشاء القناة (9.99€)',
        cta: 'ادفع الآن',
        waiting: 'جارٍ التحويل إلى سترايب…',
        required: 'يجب إكمال الدفع قبل إنشاء القناة.'
      },
      title: 'إنشاء قناة',
      subtitle: 'اضبط قناتك واتصل بأدواتك.',
      name: 'اسم القناة',
      slug: 'المعرّف (URL)',
      description: 'الوصف',
      category: 'الفئة',
      priceMonthly: 'السعر الشهري (€)',
      priceHintMin: 'الحد الأدنى للسعر 2.50€ (يشمل عمولة المنصة)',
    priceTooLow: 'الحد الأدنى للسعر هو ‎€2.50‎ بسبب عمولة المنصة (‏2€ لكل متابع شهريًا).',
      platformFeeNotice: 'عمولة المنصة هي 2€ لكل متابع شهريًا.',
      create: 'إنشاء القناة',
      cancel: 'إلغاء',
      myConnections: 'اتصالاتي',
      connectStripe: 'الاتصال بـ Stripe',
      dashboardStripe: 'لوحة Stripe',
      disconnectStripe: 'قطع الاتصال بـ Stripe',
      success: 'تم إنشاء القناة بنجاح!',
      error: 'حدث خطأ. حاول مرة أخرى.',
      availability: { label: 'التوفر', checking: 'جارٍ التحقق…', available: 'متاح', taken: 'غير متاح', help: 'يمكنك تعديل المعرّف أدناه' },
    },
    footer: { rights: 'جميع الحقوق محفوظة.', privacy: 'الخصوصية', terms: 'الشروط', cookies: 'الكوكيز', legalNotice: 'إشعار قانوني', contact: 'اتصل بنا', legalBlockTitle: 'قانوني' },
    home: { tagline: 'المنصّة لصنّاع الألعاب والبثّ والمدونين وصنّاع الأفلام.', trendingTitle: 'محتوى رائج', trendingSubtitle: 'اكتشف ما يلمع الآن. بعد إنشاء قناتك ستظهر صورك وفيديوهاتك هنا.', ctaCreate: 'أنشئ قناة' },
    categories: ['سينما','ألعاب','بث مباشر','فلوغ','رسوم متحركة','وثائقي','موسيقى','تقنية'],
    actions: { viewChannel: 'عرض القناة', subscribe: 'اشترك', subscribed: 'تم الاشتراك', unsubscribe: 'إلغاء الاشتراك' },

  },
};
