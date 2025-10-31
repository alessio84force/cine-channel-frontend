import type { Locale } from "@/i18n/dict";

type Section = { h: string; p: string; };
type LegalDoc = { title: string; updated: string; sections: Section[]; };
type LegalBundle = {
  terms: LegalDoc; privacy: LegalDoc; cookies: LegalDoc; dmca: LegalDoc; about: LegalDoc; contact: LegalDoc;
};

const U = "31/10/2025";
export const LEGAL: Record<Locale, LegalBundle> = {
  es: {
    terms: { title:"Términos del Servicio", updated:U, sections:[
      {h:"Resumen", p:"Estos Términos regulan el uso de Cine-Channel. Al crear una cuenta o usar la plataforma, aceptas estas condiciones."},
      {h:"Elegibilidad y Cuenta", p:"Debes tener edad legal en tu país o permiso paterno. Mantén tus credenciales seguras y notifícanos accesos no autorizados."},
      {h:"Contenido e IP", p:"Retienes derechos sobre tu contenido, pero nos concedes una licencia mundial para alojarlo y mostrarlo. No subas contenido ilegal o que infrinja derechos."},
      {h:"Uso Aceptable", p:"Prohibido: acoso, malware, scraping no autorizado, evasión de medidas técnicas y cualquier actividad ilícita."},
      {h:"Pagos", p:"Las comisiones, impuestos y reembolsos se rigen por las políticas de pagos vigentes que podrán actualizarse."},
      {h:"Terminación", p:"Podemos suspender cuentas que violen estos Términos. Puedes cerrar tu cuenta en cualquier momento."},
      {h:"Descargos y Responsabilidad", p:"El servicio se ofrece 'tal cual'. En la medida permitida por ley, nuestra responsabilidad es limitada."},
      {h:"Ley Aplicable", p:"Si no se indica lo contrario por normativa imperativa local, se aplica la ley española."},
      {h:"Contacto", p:"Para dudas legales: legal@cine-channel.example"}
    ]},
    privacy: { title:"Política de Privacidad", updated:U, sections:[
      {h:"Responsable", p:"Cine-Channel trata datos para gestionar cuentas, seguridad, pagos y recomendaciones."},
      {h:"Datos que tratamos", p:"Identificadores de cuenta, uso, diagnóstico, contenido subido, datos de pago (a través de proveedor) y cookies."},
      {h:"Base legal", p:"Ejecución de contrato, interés legítimo (seguridad y mejora), cumplimiento legal y consentimiento cuando proceda."},
      {h:"Conservación", p:"Guardamos datos mientras exista la cuenta y según requisitos legales/fiscales."},
      {h:"Compartición", p:"Proveedores de infraestructura, pagos y analítica bajo acuerdos de tratamiento."},
      {h:"Transferencias", p:"Podrán existir transferencias internacionales con garantías adecuadas (p.ej. SCCs)."},
      {h:"Tus derechos", p:"Acceso, rectificación, supresión, oposición, limitación y portabilidad. Escríbenos para ejercerlos."},
      {h:"Seguridad", p:"Medidas técnicas y organizativas razonables para proteger tus datos."},
      {h:"Cambios", p:"Publicaremos actualizaciones con nueva fecha de vigencia."}
    ]},
    cookies: { title:"Política de Cookies", updated:U, sections:[
      {h:"Qué son", p:"Pequeños archivos para recordar preferencias y mejorar el servicio."},
      {h:"Tipos", p:"Esenciales, analítica, rendimiento y publicidad (cuando aplique)."},
      {h:"Gestión", p:"Puedes gestionar cookies desde el banner y ajustes del navegador."}
    ]},
    dmca: { title:"DMCA / Notificación de infracción", updated:U, sections:[
      {h:"Aviso", p:"Envía una notificación con URL específica, prueba de titularidad y declaración bajo juramento a dmca@cine-channel.example."},
      {h:"Contra-Notificación", p:"Si crees que fue un error, envía contra-notificación con tus datos y consentimiento de jurisdicción."},
      {h:"Reincidencia", p:"Las cuentas reincidentes podrán ser suspendidas."}
    ]},
    about: { title:"Sobre Cine-Channel", updated:U, sections:[
      {h:"Misión", p:"Una plataforma para gamers, streamers, videobloggers y cineastas, con experiencia premium."}
    ]},
    contact: { title:"Contacto", updated:U, sections:[
      {h:"Soporte", p:"Escríbenos a support@cine-channel.example. Asuntos legales: legal@cine-channel.example."}
    ]},
  },

  en: {
    terms:{ title:"Terms of Service", updated:U, sections:[
      {h:"Overview", p:"These Terms govern your use of Cine-Channel. By using the platform you agree to them."},
      {h:"Eligibility & Account", p:"You must be of legal age or have parental consent. Keep credentials secure and report unauthorized access."},
      {h:"Content & IP", p:"You keep your rights. You grant us a worldwide license to host and display your content. Don’t upload unlawful or infringing content."},
      {h:"Acceptable Use", p:"No harassment, malware, unauthorized scraping, circumvention of technical measures, or illegal activity."},
      {h:"Payments", p:"Fees, taxes and refunds follow our payments policy, which may be updated."},
      {h:"Termination", p:"We may suspend accounts that violate these Terms. You may close your account anytime."},
      {h:"Disclaimers & Liability", p:"Service is provided “as is”. To the extent permitted by law, our liability is limited."},
      {h:"Governing Law", p:"Unless mandatory local law applies, Spanish law governs."},
      {h:"Contact", p:"Legal inquiries: legal@cine-channel.example"}
    ]},
    privacy:{ title:"Privacy Policy", updated:U, sections:[
      {h:"Controller", p:"Cine-Channel processes data to manage accounts, security, payments and recommendations."},
      {h:"Data We Process", p:"Account identifiers, usage, diagnostics, uploaded content, payment data (via provider), and cookies."},
      {h:"Legal Bases", p:"Contract, legitimate interests (security/improvement), legal obligation, and consent where required."},
      {h:"Retention", p:"We keep data while the account exists and per legal/tax requirements."},
      {h:"Sharing", p:"Infrastructure, payments, and analytics providers under data-processing agreements."},
      {h:"Transfers", p:"International transfers may occur under appropriate safeguards (e.g., SCCs)."},
      {h:"Your Rights", p:"Access, rectification, erasure, objection, restriction and portability. Contact us to exercise them."},
      {h:"Security", p:"Reasonable technical and organizational measures protect your data."},
      {h:"Changes", p:"We will post updates with a new effective date."}
    ]},
    cookies:{ title:"Cookie Policy", updated:U, sections:[
      {h:"What Are Cookies", p:"Small files to remember preferences and improve service."},
      {h:"Types", p:"Essential, analytics, performance and advertising (where applicable)."},
      {h:"Managing", p:"Use the cookie banner and your browser settings to manage cookies."}
    ]},
    dmca:{ title:"DMCA / Copyright Notice", updated:U, sections:[
      {h:"Notice", p:"Send a notice with specific URLs, proof of ownership, and sworn statement to dmca@cine-channel.example."},
      {h:"Counter-Notice", p:"If you believe removal was a mistake, send a counter-notice with your details and jurisdiction consent."},
      {h:"Repeat Infringers", p:"Accounts with repeat infringement may be suspended."}
    ]},
    about:{ title:"About Cine-Channel", updated:U, sections:[
      {h:"Mission", p:"A platform for gamers, streamers, videobloggers and filmmakers, with a premium experience."}
    ]},
    contact:{ title:"Contact", updated:U, sections:[
      {h:"Support", p:"Email support@cine-channel.example. Legal: legal@cine-channel.example."}
    ]},
  },

  fr:{ terms:{title:"Conditions d’Utilisation",updated:U,sections:[
    {h:"Aperçu",p:"Ces Conditions régissent l’utilisation de Cine-Channel."},
    {h:"Compte",p:"Âge légal ou consentement parental. Protégez vos identifiants."},
    {h:"Contenu & PI",p:"Vous conservez vos droits et nous accordez une licence mondiale pour l’hébergement et l’affichage."},
    {h:"Usage Acceptable",p:"Interdits: harcèlement, malware, scraping non autorisé, contournement de mesures techniques, activités illicites."},
    {h:"Paiements",p:"Frais, taxes et remboursements selon la politique de paiement."},
    {h:"Résiliation",p:"Suspension en cas de violation. Vous pouvez fermer votre compte."},
    {h:"Responsabilité",p:"Service « en l’état ». Responsabilité limitée dans les limites de la loi."},
    {h:"Droit Applicable",p:"Droit espagnol sauf dispositions impératives locales."},
    {h:"Contact",p:"legal@cine-channel.example"}
  ]},
  privacy:{title:"Politique de Confidentialité",updated:U,sections:[
    {h:"Responsable",p:"Cine-Channel traite des données pour les comptes, la sécurité et les paiements."},
    {h:"Données",p:"Identifiants, usage, diagnostic, contenus, paiement (via prestataire), cookies."},
    {h:"Bases Légales",p:"Contrat, intérêt légitime, obligation légale et consentement."},
    {h:"Conservation",p:"Durée du compte et obligations légales/fiscales."},
    {h:"Partage",p:"Fournisseurs d’infrastructure, paiement et analytique sous accords."},
    {h:"Transferts",p:"Transferts internationaux avec garanties appropriées."},
    {h:"Droits",p:"Accès, rectification, effacement, opposition, limitation, portabilité."},
    {h:"Sécurité",p:"Mesures techniques et organisationnelles raisonnables."},
    {h:"Modifications",p:"Mises à jour avec nouvelle date d’effet."}
  ]},
  cookies:{title:"Politique de Cookies",updated:U,sections:[
    {h:"Définition",p:"Petits fichiers mémorisant vos préférences."},
    {h:"Types",p:"Essentiels, analytique, performance, publicité."},
    {h:"Gestion",p:"Bannière cookies et paramètres navigateur."}
  ]},
  dmca:{title:"DMCA / Notification",updated:U,sections:[
    {h:"Notification",p:"Envoyez les URL, preuve de titularité et déclaration sous serment à dmca@cine-channel.example."},
    {h:"Contre-notification",p:"Envoyez vos détails et consentement de juridiction si retrait erroné."},
    {h:"Récidive",p:"Suspension des comptes récidivistes."}
  ]},
  about:{title:"À propos de Cine-Channel",updated:U,sections:[{h:"Mission",p:"Plateforme pour gamers, streamers, vidéastes et cinéastes."}]},
  contact:{title:"Contact",updated:U,sections:[{h:"Support",p:"support@cine-channel.example"}]},
  },

  it:{ terms:{title:"Termini di Servizio",updated:U,sections:[
    {h:"Panoramica",p:"Questi Termini regolano l’uso di Cine-Channel."},
    {h:"Idoneità e Account",p:"Maggiorenni o consenso dei genitori. Custodisci le credenziali."},
    {h:"Contenuti & IP",p:"Conservi i diritti e concedi licenza mondiale di hosting e visualizzazione."},
    {h:"Uso Consentito",p:"Vietati molestie, malware, scraping non autorizzato, aggiramento misure tecniche, attività illecite."},
    {h:"Pagamenti",p:"Commissioni, tasse e rimborsi secondo policy pagamenti."},
    {h:"Chiusura",p:"Possiamo sospendere in caso di violazioni. Puoi chiudere l’account."},
    {h:"Responsabilità",p:"Servizio fornito “così com’è”. Responsabilità limitata nei limiti di legge."},
    {h:"Legge Applicabile",p:"Diritto spagnolo salvo norme imperative locali."},
    {h:"Contatti",p:"legal@cine-channel.example"}
  ]},
  privacy:{title:"Informativa Privacy",updated:U,sections:[
    {h:"Titolare",p:"Cine-Channel tratta dati per account, sicurezza, pagamenti e raccomandazioni."},
    {h:"Dati",p:"Identificativi, utilizzo, diagnosi, contenuti, pagamenti (via provider) e cookie."},
    {h:"Basi giuridiche",p:"Contratto, legittimo interesse, obbligo legale e consenso ove richiesto."},
    {h:"Conservazione",p:"Per la durata dell’account e adempimenti di legge/fiscali."},
    {h:"Condivisione",p:"Fornitori infrastruttura, pagamenti, analitica con accordi di trattamento."},
    {h:"Trasferimenti",p:"Possibili verso paesi terzi con garanzie adeguate."},
    {h:"Diritti",p:"Accesso, rettifica, cancellazione, opposizione, limitazione, portabilità."},
    {h:"Sicurezza",p:"Misure tecniche e organizzative ragionevoli."},
    {h:"Modifiche",p:"Aggiornamenti pubblicati con nuova data."}
  ]},
  cookies:{title:"Cookie Policy",updated:U,sections:[
    {h:"Cosa sono",p:"File che memorizzano preferenze e migliorano il servizio."},
    {h:"Tipi",p:"Essenziali, analitici, prestazioni, pubblicità."},
    {h:"Gestione",p:"Banner cookie e impostazioni del browser."}
  ]},
  dmca:{title:"DMCA / Segnalazioni",updated:U,sections:[
    {h:"Notifica",p:"Invia URL specifiche, prova di titolarità e dichiarazione a dmca@cine-channel.example."},
    {h:"Contro-notifica",p:"Se ritieni l’errore, invia contro-notifica con dati e consenso giurisdizione."},
    {h:"Reiterazione",p:"Sospensione per recidivi."}
  ]},
  about:{title:"Chi siamo",updated:U,sections:[{h:"Missione",p:"Piattaforma per gamers, streamer, videoblogger e cineasti."}]},
  contact:{title:"Contatti",updated:U,sections:[{h:"Supporto",p:"support@cine-channel.example"}]},
  },

  de:{ terms:{title:"Nutzungsbedingungen",updated:U,sections:[
    {h:"Überblick",p:"Diese Bedingungen regeln die Nutzung von Cine-Channel."},
    {h:"Konto",p:"Volljährig oder elterliche Zustimmung. Zugangsdaten schützen."},
    {h:"Inhalte & IP",p:"Rechte verbleiben bei dir; du gewährst uns eine weltweite Lizenz zum Hosten/Anzeigen."},
    {h:"Zulässige Nutzung",p:"Kein Mobbing, Malware, unbefugtes Scraping, Umgehung technischer Maßnahmen oder illegale Aktivitäten."},
    {h:"Zahlungen",p:"Gebühren/Steuern/Erstattungen gemäß Zahlungsrichtlinie."},
    {h:"Kündigung",p:"Sperre bei Verstößen; Konto kann jederzeit geschlossen werden."},
    {h:"Haftung",p:"Dienst „wie besehen“. Haftung im gesetzlich zulässigen Rahmen begrenzt."},
    {h:"Recht",p:"Spanisches Recht, sofern keine zwingenden lokalen Normen gelten."},
    {h:"Kontakt",p:"legal@cine-channel.example"}
  ]},
  privacy:{title:"Datenschutzerklärung",updated:U,sections:[
    {h:"Verantwortlicher",p:"Cine-Channel verarbeitet Daten für Konten, Sicherheit, Zahlungen und Empfehlungen."},
    {h:"Daten",p:"Kontodaten, Nutzung, Diagnose, hochgeladene Inhalte, Zahlungsdaten (über Anbieter), Cookies."},
    {h:"Rechtsgrundlagen",p:"Vertrag, berechtigtes Interesse, rechtliche Pflicht und Einwilligung."},
    {h:"Speicherung",p:"Solange das Konto besteht sowie gesetzlich/tax erforderlich."},
    {h:"Weitergabe",p:"Infrastruktur-, Zahlungs- und Analyseanbieter mit Auftragsverarbeitung."},
    {h:"Übermittlungen",p:"Internationale Übermittlungen mit geeigneten Garantien."},
    {h:"Rechte",p:"Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung, Übertragbarkeit."},
    {h:"Sicherheit",p:"Angemessene technische/organisatorische Maßnahmen."},
    {h:"Änderungen",p:"Aktualisierungen mit neuem Datum."}
  ]},
  cookies:{title:"Cookie-Richtlinie",updated:U,sections:[
    {h:"Was sind Cookies",p:"Kleine Dateien für Präferenzen und Service-Verbesserung."},
    {h:"Typen",p:"Essentiell, Analytik, Performance, Werbung."},
    {h:"Verwaltung",p:"Cookie-Banner und Browser-Einstellungen."}
  ]},
  dmca:{title:"DMCA / Urheberrecht",updated:U,sections:[
    {h:"Meldung",p:"Sende URLs, Nachweis der Inhaberschaft und eidesstattliche Erklärung an dmca@cine-channel.example."},
    {h:"Gegenanzeige",p:"Bei Irrtum: Gegenanzeige mit Daten und Gerichtsstandszustimmung."},
    {h:"Wiederholungen",p:"Sperre bei wiederholten Verstößen."}
  ]},
  about:{title:"Über Cine-Channel",updated:U,sections:[{h:"Mission",p:"Plattform für Gamer, Streamer, Videoblogger und Filmschaffende."}]},
  contact:{title:"Kontakt",updated:U,sections:[{h:"Support",p:"support@cine-channel.example"}]},
  },

  pt:{ terms:{title:"Termos de Serviço",updated:U,sections:[
    {h:"Visão Geral",p:"Estes Termos regem o uso do Cine-Channel."},
    {h:"Conta",p:"Maioridade ou consentimento dos pais. Proteja suas credenciais."},
    {h:"Conteúdo & PI",p:"Você mantém direitos e concede licença mundial para hospedagem e exibição."},
    {h:"Uso Aceitável",p:"Proibido assédio, malware, scraping não autorizado, burlar medidas técnicas ou atividades ilegais."},
    {h:"Pagamentos",p:"Taxas, impostos e reembolsos conforme política de pagamentos."},
    {h:"Encerramento",p:"Podemos suspender contas que violem estes Termos. Você pode encerrar a conta a qualquer momento."},
    {h:"Responsabilidade",p:"Serviço 'no estado em que se encontra'. Responsabilidade limitada conforme a lei."},
    {h:"Lei Aplicável",p:"Direito espanhol, salvo normas locais obrigatórias."},
    {h:"Contato",p:"legal@cine-channel.example"}
  ]},
  privacy:{title:"Política de Privacidade",updated:U,sections:[
    {h:"Controlador",p:"Cine-Channel processa dados para contas, segurança, pagamentos e recomendações."},
    {h:"Dados",p:"Identificadores, uso, diagnóstico, conteúdo enviado, dados de pagamento (via provedor) e cookies."},
    {h:"Bases legais",p:"Contrato, interesses legítimos, obrigação legal e consentimento quando aplicável."},
    {h:"Retenção",p:"Enquanto a conta existir e conforme exigências legais/fiscais."},
    {h:"Compartilhamento",p:"Provedores de infraestrutura, pagamentos e analytics com acordos."},
    {h:"Transferências",p:"Internacionais com salvaguardas adequadas."},
    {h:"Direitos",p:"Acesso, retificação, exclusão, oposição, limitação e portabilidade."},
    {h:"Segurança",p:"Medidas técnicas e organizacionais razoáveis."},
    {h:"Alterações",p:"Publicaremos atualizações com nova data."}
  ]},
  cookies:{title:"Política de Cookies",updated:U,sections:[
    {h:"O que são",p:"Arquivos que lembram preferências e melhoram o serviço."},
    {h:"Tipos",p:"Essenciais, analíticos, desempenho, publicidade."},
    {h:"Gestão",p:"Banner de cookies e configurações do navegador."}
  ]},
  dmca:{title:"DMCA / Aviso",updated:U,sections:[
    {h:"Aviso",p:"Envie URLs, prova de titularidade e declaração para dmca@cine-channel.example."},
    {h:"Contra-aviso",p:"Se foi um erro, envie contra-aviso com dados e consentimento de jurisdição."},
    {h:"Reincidência",p:"Contas reincidentes podem ser suspensas."}
  ]},
  about:{title:"Sobre",updated:U,sections:[{h:"Missão",p:"Plataforma para gamers, streamers, videobloggers e cineastas."}]},
  contact:{title:"Contato",updated:U,sections:[{h:"Suporte",p:"support@cine-channel.example"}]},
  },

  ar:{ terms:{title:"شروط الخدمة",updated:U,sections:[
    {h:"نظرة عامة",p:"تحكم هذه الشروط استخدامك لـ Cine-Channel."},
    {h:"الحساب والأهلية",p:"السن القانوني أو موافقة الوالدين. احفظ بيانات الدخول."},
    {h:"المحتوى والملكية الفكرية",p:"تحتفظ بحقوقك وتمنحنا ترخيصًا عالميًا للاستضافة والعرض."},
    {h:"الاستخدام المقبول",p:"يُحظر التحرش والبرمجيات الخبيثة والاستخراج غير المصرح به والأنشطة غير القانونية."},
    {h:"المدفوعات",p:"الرسوم والضرائب والاستردادات وفق سياسة المدفوعات."},
    {h:"إنهاء الخدمة",p:"قد نعلق الحسابات المخالفة. يمكنك إغلاق حسابك في أي وقت."},
    {h:"المسؤولية",p:"الخدمة كما هي. المسؤولية محدودة حسب القانون."},
    {h:"القانون الواجب التطبيق",p:"القانون الإسباني ما لم تُطبق قواعد محلية إلزامية."},
    {h:"الاتصال",p:"legal@cine-channel.example"}
  ]},
  privacy:{title:"سياسة الخصوصية",updated:U,sections:[
    {h:"المتحكم",p:"نعالج البيانات لإدارة الحسابات والأمان والمدفوعات والتوصيات."},
    {h:"البيانات المعالجة",p:"معرفات الحساب والاستخدام والتشخيص والمحتوى المرفوع وبيانات الدفع (عبر مزود) وملفات الارتباط."},
    {h:"الأسس القانونية",p:"العقد والمصلحة المشروعة والالتزام القانوني والموافقة."},
    {h:"الاحتفاظ",p:"نحتفظ بالبيانات طوال فترة الحساب ووفق المتطلبات القانونية."},
    {h:"المشاركة",p:"مزودو البنية والمدفوعات والتحليلات بموجب اتفاقيات."},
    {h:"النقل الدولي",p:"قد تحدث تحويلات بضمانات مناسبة."},
    {h:"حقوقك",p:"الاطلاع والتصحيح والحذف والاعتراض والتقييد وقابلية النقل."},
    {h:"الأمان",p:"تدابير تقنية وتنظيمية معقولة."},
    {h:"التغييرات",p:"سننشر التحديثات مع تاريخ جديد."}
  ]},
  cookies:{title:"سياسة ملفات الارتباط",updated:U,sections:[
    {h:"ما هي",p:"ملفات صغيرة لتذكر التفضيلات وتحسين الخدمة."},
    {h:"الأنواع",p:"أساسية وتحليلات وأداء وإعلانات."},
    {h:"الإدارة",p:"من خلال لافتة ملفات الارتباط وإعدادات المتصفح."}
  ]},
  dmca:{title:"إشعارات حقوق النشر (DMCA)",updated:U,sections:[
    {h:"إشعار",p:"أرسل الروابط وإثبات الملكية وإقرارًا إلى dmca@cine-channel.example."},
    {h:"إشعار مضاد",p:"إذا حدث خطأ، أرسل إشعارًا مضادًا مع بياناتك وموافقة الاختصاص."},
    {h:"تكرار المخالفات",p:"قد نعلق الحسابات المتكررة المخالفة."}
  ]},
  about:{title:"نبذة عن Cine-Channel",updated:U,sections:[{h:"المهمة",p:"منصة للاعبين وصانعي الفيديو وصناع الأفلام."}]},
  contact:{title:"اتصال",updated:U,sections:[{h:"الدعم",p:"support@cine-channel.example"}]},
  },

  ru:{ terms:{title:"Условия использования",updated:U,sections:[
    {h:"Обзор",p:"Эти условия регулируют использование Cine-Channel."},
    {h:"Аккаунт",p:"Совершеннолетие или согласие родителей. Храните пароли в секрете."},
    {h:"Контент и ПИ",p:"Вы сохраняете права и предоставляете нам мировую лицензию на хостинг и показ."},
    {h:"Допустимое использование",p:"Запрещены домогательства, вредоносное ПО, несанкционированный скрейпинг и незаконная деятельность."},
    {h:"Платежи",p:"Комиссии, налоги и возвраты по нашей платежной политике."},
    {h:"Прекращение",p:"Мы можем приостановить учетные записи при нарушениях."},
    {h:"Ответственность",p:"Сервис предоставляется «как есть». Ответственность ограничена законом."},
    {h:"Применимое право",p:"Испанское право, если иное не предписано локальными нормами."},
    {h:"Контакты",p:"legal@cine-channel.example"}
  ]},
  privacy:{title:"Политика конфиденциальности",updated:U,sections:[
    {h:"Оператор",p:"Обрабатываем данные для аккаунтов, безопасности, платежей и рекомендаций."},
    {h:"Данные",p:"Идентификаторы, использование, диагностика, загруженный контент, платежные данные (через провайдера), cookies."},
    {h:"Правовые основания",p:"Договор, законные интересы, юридическая обязанность, согласие."},
    {h:"Хранение",p:"Пока существует аккаунт и согласно требованиям закона."},
    {h:"Передача",p:"Провайдерам инфраструктуры, платежей и аналитики по договорам."},
    {h:"Трансграничная передача",p:"С использованием надлежащих гарантий."},
    {h:"Права",p:"Доступ, исправление, удаление, возражение, ограничение, переносимость."},
    {h:"Безопасность",p:"Разумные технические и организационные меры."},
    {h:"Изменения",p:"Публикуем обновления с новой датой."}
  ]},
  cookies:{title:"Политика Cookies",updated:U,sections:[
    {h:"Что это",p:"Небольшие файлы для запоминания предпочтений и улучшения сервиса."},
    {h:"Типы",p:"Необходимые, аналитические, производительные, рекламные."},
    {h:"Управление",p:"Через баннер и настройки браузера."}
  ]},
  dmca:{title:"DMCA / Уведомление",updated:U,sections:[
    {h:"Уведомление",p:"Отправьте URL, доказательства прав и заявление на dmca@cine-channel.example."},
    {h:"Возражение",p:"При ошибке отправьте встречное уведомление с данными и согласием юрисдикции."},
    {h:"Повторные нарушения",p:"Возможна блокировка аккаунта."}
  ]},
  about:{title:"О Cine-Channel",updated:U,sections:[{h:"Миссия",p:"Платформа для геймеров, стримеров, видеоблогеров и кинематографистов."}]},
  contact:{title:"Контакты",updated:U,sections:[{h:"Поддержка",p:"support@cine-channel.example"}]},
  },

  zh:{ terms:{title:"服务条款",updated:U,sections:[
    {h:"概述",p:"本条款规范你对 Cine-Channel 的使用。"},
    {h:"账户与资格",p:"需达到法定年龄或经监护人同意。请妥善保管账户信息。"},
    {h:"内容与知识产权",p:"你保留权利，并授予我们全球许可用于托管和展示。"},
    {h:"可接受使用",p:"禁止骚扰、恶意软件、未授权抓取、绕过技术措施及任何非法活动。"},
    {h:"支付",p:"费用、税费及退款以我们的支付政策为准。"},
    {h:"终止",p:"违规账户可能被暂停。你可随时关闭账户。"},
    {h:"免责声明与责任",p:"服务按“现状”提供，在法律允许范围内我们责任受限。"},
    {h:"适用法律",p:"除强制性本地法律外，适用西班牙法律。"},
    {h:"联系",p:"legal@cine-channel.example"}
  ]},
  privacy:{title:"隐私政策",updated:U,sections:[
    {h:"控制者",p:"为账户管理、安全、支付与推荐处理数据。"},
    {h:"数据类别",p:"账户标识、使用与诊断、上传内容、支付数据（经服务商）与 Cookies。"},
    {h:"法律依据",p:"合同、合法权益、法律义务与必要时的同意。"},
    {h:"保存期限",p:"账户存在期间及符合法律/税务要求。"},
    {h:"共享",p:"与基础设施、支付与分析服务商在数据处理协议下共享。"},
    {h:"跨境传输",p:"在适当保障下进行。"},
    {h:"你的权利",p:"访问、更正、删除、反对、限制与可携权。"},
    {h:"安全",p:"采取合理的技术与组织措施。"},
    {h:"变更",p:"更新时会公布新的生效日期。"}
  ]},
  cookies:{title:"Cookie 政策",updated:U,sections:[
    {h:"什么是 Cookie",p:"用于记住偏好并改进服务的小文件。"},
    {h:"类型",p:"必要、分析、性能与广告类。"},
    {h:"管理",p:"通过横幅与浏览器设置管理。"}
  ]},
  dmca:{title:"DMCA / 版权通知",updated:U,sections:[
    {h:"通知",p:"将具体链接、权属证明与声明发送至 dmca@cine-channel.example。"},
    {h:"反通知",p:"如属误删，请提交反通知并同意相关司法管辖。"},
    {h:"重复侵权",p:"多次侵权的账户可能被暂停。"}
  ]},
  about:{title:"关于 Cine-Channel",updated:U,sections:[{h:"使命",p:"为玩家、主播、视频博主与电影创作者打造的平台。"}]},
  contact:{title:"联系",updated:U,sections:[{h:"支持",p:"support@cine-channel.example"}]},
  },

  ko:{ terms:{title:"서비스 이용약관",updated:U,sections:[
    {h:"개요",p:"본 약관은 Cine-Channel 이용을 규정합니다."},
    {h:"자격 및 계정",p:"성년이거나 보호자 동의가 필요합니다. 자격 증명을 안전하게 보관하세요."},
    {h:"콘텐츠 및 IP",p:"권리는 사용자에게 있고, 당사는 전 세계적 라이선스를 부여받습니다."},
    {h:"허용 사용",p:"괴롭힘, 악성코드, 무단 스크래핑, 기술적 조치 우회, 불법행위는 금지됩니다."},
    {h:"결제",p:"수수료·세금·환불은 결제 정책을 따릅니다."},
    {h:"해지",p:"약관 위반 시 계정을 정지할 수 있습니다. 사용자는 언제든 해지 가능."},
    {h:"면책 및 책임",p:"서비스는 ‘있는 그대로’ 제공되며 법이 허용하는 범위에서 책임이 제한됩니다."},
    {h:"준거법",p:"강행규정이 없는 한 스페인 법을 따릅니다."},
    {h:"문의",p:"legal@cine-channel.example"}
  ]},
  privacy:{title:"개인정보 처리방침",updated:U,sections:[
    {h:"개인정보 처리자",p:"계정 관리, 보안, 결제, 추천을 위해 데이터를 처리합니다."},
    {h:"처리 데이터",p:"계정 식별자, 사용/진단 정보, 업로드 콘텐츠, 결제 데이터(제공사 경유), 쿠키."},
    {h:"법적 근거",p:"계약, 정당한 이익, 법적 의무, 필요한 경우 동의."},
    {h:"보관기간",p:"계정 유지 기간 및 법/세무 요건에 따름."},
    {h:"공유",p:"인프라·결제·분석 제공사와의 처리계약 하에 공유."},
    {h:"국외 이전",p:"적절한 보호조치 하에 국외 이전 가능."},
    {h:"권리",p:"열람·정정·삭제·반대·제한·이동권."},
    {h:"보안",p:"합리적인 기술적·관리적 보호조치."},
    {h:"변경",p:"변경 시 새로운 발효일을 공지."}
  ]},
  cookies:{title:"쿠키 정책",updated:U,sections:[
    {h:"쿠키란",p:"환경설정을 기억하고 서비스를 개선하는 작은 파일."},
    {h:"유형",p:"필수, 분석, 성능, 광고."},
    {h:"관리",p:"배너와 브라우저 설정으로 관리."}
  ]},
  dmca:{title:"DMCA / 저작권 공지",updated:U,sections:[
    {h:"공지",p:"URL, 권리 증빙, 진술서를 dmca@cine-channel.example 로 송부."},
    {h:"이의제기",p:"오류라고 판단될 시 관할 동의와 함께 반대 통지 제출."},
    {h:"상습 위반",p:"반복 위반 계정은 정지될 수 있음."}
  ]},
  about:{title:"Cine-Channel 소개",updated:U,sections:[{h:"미션",p:"게이머·스트리머·비디오블로거·영화 창작자를 위한 플랫폼."}]},
  contact:{title:"문의",updated:U,sections:[{h:"지원",p:"support@cine-channel.example"}]},
  },
};
