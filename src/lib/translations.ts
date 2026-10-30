export type Language = "ar" | "en";

export interface Translations {
  nav: {
    links: { id: string; name: string; href: string }[];
    cta: string;
    langButton: string;
  };
  hero: {
    kicker: string;
    titleLead: string;
    brand: string;
    titleTail: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge1Num: string;
    badge1Label: string;
    badge2Num: string;
    badge2Label: string;
    badge3Num: string;
    badge3Label: string;
  };
  about: {
    kicker: string;
    heading: string;
    paragraph: string;
    sloganBadge: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    artworkBadge: string;
  };
  integrations: {
    heading: string;
    platforms: { name: string; category: string }[];
  };
  services: {
    kicker: string;
    heading: string;
    subtitle: string;
    cta: string;
    pill: string;
    readMore: string;
    modalKicker: string;
    modalIncludes: string;
    modalWaCta: string;
    modalClose: string;
    items: {
      id: number;
      title: string;
      description: string;
      details: string[];
    }[];
  };
  aiEcosystem: {
    kicker: string;
    heading: string;
    subtitle: string;
    nodes: { title: string; desc: string }[];
  };
  features: {
    heading: string;
    subtitle: string;
    items: { num: string; title: string; desc: string }[];
  };
  metrics: {
    card1: {
      title: string;
      subtitle: string;
      stat: string;
    };
    card2: {
      title: string;
      subtitle: string;
      stat: string;
    };
    card3: {
      title: string;
      subtitle: string;
      stat: string;
    };
  };
  faq: {
    kicker: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  contact: {
    kicker: string;
    heading: string;
    subtitle: string;
    egypt: {
      title: string;
      badge: string;
      address: string;
      callBtn: string;
      waBtn: string;
    };
    saudi: {
      title: string;
      badge: string;
      address: string;
      callBtn: string;
      waBtn: string;
    };
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    globeEgypt: {
      name: string;
      city: string;
    };
    globeSaudi: {
      name: string;
      city: string;
    };
    callAction: string;
    waAction: string;
  };
  consultation: {
    kicker: string;
    heading: string;
    subtitle: string;
    placeholder: string;
    btn: string;
    success: string;
  };
  footer: {
    sloganPart1: string;
    sloganPart2: string;
    tagline: string;
    desc: string;
    quickLinksTitle: string;
    servicesTitle: string;
    servicesList: string[];
    socialTitle: string;
    socialDesc: string;
    backToTop: string;
    rights: string;
    rightsEnd: string;
    privacy: string;
    terms: string;
  };
  floatingWhatsApp: {
    title: string;
    egyptBranch: string;
    saudiBranch: string;
    ariaLabel: string;
    closeLabel: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      links: [
        { name: "الرئيسية", href: "#top", id: "top" },
        { name: "من نحن", href: "#about", id: "about" },
        { name: "الخدمات", href: "#services", id: "services" },
        { name: "الأسئلة الشائعة", href: "#faq", id: "faq" },
        { name: "تواصل معنا", href: "#contact", id: "contact" },
      ],
      cta: "ابدأ مسارك الآن",
      langButton: "English",
    },
    hero: {
      kicker: "من المتابعة إلى المبيعات",
      titleLead: "في",
      brand: "Duck",
      titleTail: "نصنع محتوى وإعلانات تبني حضور قوي لعلامتك وتوصلك للعملاء الصح وتحوّل الاهتمام إلى نتائج حقيقية",
      subtitle: "نحلل سلوك جمهورك، نصمم هويتك، وندير حملاتك الذكية لتحقيق أعلى عائد استثماري ونمو متواصل لمبيعاتك.",
      ctaPrimary: "خُد خطوتك الأولى معانا",
      ctaSecondary: "شاهد ما صنعناه",
      badge1Num: "+380%",
      badge1Label: "متوسط نمو مبيعات عملائنا",
      badge2Num: "100% مخصص",
      badge2Label: "استراتيجيات بدون قوالب جاهزة",
      badge3Num: "مصر والسعودية",
      badge3Label: "خبرة عميقة بأسواق المنطقة",
    },
    about: {
      kicker: "رؤيتنا ومنهجنا",
      heading: "من نحن؟",
      paragraph: "Duck شركة دعاية وتسويق تقدم حلولاً متكاملة للشركات والمشاهير والأفراد، تبدأ من بناء الهوية البصرية وإدارة الصفحات على السوشيال ميديا، وحتى المونتاج والتصميم وباقات الخدمات الجاهزة. كما تقدم الشركة أكاديمية تعليمية متخصصة.",
      sloganBadge: "للرؤية أثر — شريكك الإبداعي لصناعة أثر حقيقي لعلامتك التجارية",
      val1Title: "استراتيجيات مبنية على بيانات",
      val1Desc: "قرارات تسويقية تستند لأرقام حقيقية وسلوك الجمهور المستهدف.",
      val2Title: "تركيز كامل على العائد (ROI)",
      val2Desc: "كل قرش يُنفق في الإعلانات محسوب بهدف مضاعفة الأرباح.",
      artworkBadge: "المسار الصحيح لنمو علامتك التجارية",
    },
    integrations: {
      heading: "ندعم تكاملك مع منصات التجارة الإلكترونية وأدوات الإدارة الذكية، كل ما تحتاجه في مسار واحد",
      platforms: [
        { name: "Shopify", category: "متجر إلكتروني عالمي" },
        { name: "WordPress", category: "مواقع ومتاجر متطورة" },
        { name: "Salla", category: "منصة سلة السعودية" },
        { name: "Zid", category: "منصة زد للتجارة" },
        { name: "Meta", category: "إعلانات فيسبوك وإنستغرام" },
        { name: "TikTok", category: "إعلانات تيك توك التفاعلية" },
        { name: "Google Ads", category: "إعلانات بحث ويوتيوب" },
        { name: "Snapchat", category: "إعلانات سناب شات المستهدفة" },
      ],
    },
    services: {
      kicker: "حوّل ميزانيتك إلى نمو",
      heading: "في عالم التسويق الرقمي، نكون الشريك الذي يبدأ معك من الفكرة الأولى، لا من مرحلة التنفيذ فقط",
      subtitle: "حيث نبدأ بفهم لطبيعة نشاطك والسوق السعودي وجمهورك المستهدف، لنرسم لك اتجاهًا واضحًا نحو النمو المستدام.",
      cta: "خُذ خطوتك الأولى معنا",
      pill: "خـــــــــــدمـــــــــــــــــــة",
      readMore: "اقرأ المزيد",
      modalKicker: "تفاصيل الخدمة",
      modalIncludes: "ماذا يشمل تنفيذ الخدمة؟",
      modalWaCta: "طلب الخدمة عبر واتساب",
      modalClose: "إغلاق",
      items: [
        {
          id: 1,
          title: "إنشاء المتاجر الإلكترونية",
          description: "نصمم متجرك باحترافية لعرض منتجاتك بطريقة جذابة وسهلة الاستخدام، مع ربط بوابات الدفع والشحن.",
          details: [
            "تصميم متوافق 100% مع الجوال والتابلت",
            "تكامل مع سلة، زد، وشوبيفاي و WooCommerce",
            "ربط بوابات الدفع الإلكتروني وشركات الشحن",
            "تحسين سرعة التصفح وتجربة الشراء السريعة",
          ],
        },
        {
          id: 2,
          title: "تصميم واجهة موقع",
          description: "واجهات عصرية وتجربة مستخدم سلسة تحوّل الزائر لعميل، بتصاميم حديثة ومدروسة سيكولوجياً.",
          details: [
            "دراسة سلوك المستخدم (UX Research)",
            "تصميم واجهات تفاعلية مبهجة (UI Design)",
            "تصاميم نماذج أولية تفاعلية على Figma",
            "مراعاة أعلى معايير سهولة الاستخدام والوصول",
          ],
        },
        {
          id: 3,
          title: "التطبيقات الإلكترونية",
          description: "نطوّر تطبيقات ذكية ومتجاوبة تناسب احتياجات عملك وتصل لعملائك بسهولة وسرعة فائقة.",
          details: [
            "تطوير لتطبيقات iOS و Android",
            "لوحة تحكم ذكية لإدارة الطلبات والبيانات",
            "إشعارات فورية لزيادة تفاعل وإعادة شراء العملاء",
            "دعم فني وصيانة دورية وأمان عالي",
          ],
        },
        {
          id: 4,
          title: "إدارة الحملات الإعلانية",
          description: "ندير حملاتك باحترافية للوصول لجمهورك المستهدف بأفضل نتيجة وبأعلى عائد استثماري ممكن.",
          details: [
            "إعلانات Meta (فيسبوك وإنستغرام)",
            "إعلانات TikTok و Snapchat و Google Ads",
            "إعادة استهداف ذكية لزوار المتجر",
            "تقارير دورية وشفافة توضح العائد والمبيعات",
          ],
        },
        {
          id: 5,
          title: "تحسين محركات البحث (SEO)",
          description: "يظهر نشاطك أمام العملاء اللي بيدوّروا على خدماتك، ونرتقي بترتيبه للصفحات الأولى في جوجل.",
          details: [
            "دراسة الكلمات المفتاحية الأكثر ربحية ونية شراء",
            "تحسين البنية التقنية للموقع والسرعة (Technical SEO)",
            "بناء روابط خلفية قوية وموثوقة (Backlinks)",
            "تحسين محركات البحث المحلية (Local SEO)",
          ],
        },
        {
          id: 6,
          title: "تصميم الهوية البصرية",
          description: "نصمّم لك هوية مميزة تعكس شخصية علامتك وتجذب جمهورك وترسخ في أذهانهم لفترة طويلة.",
          details: [
            "تصميم الشعار وتطبيقاته المختلفة",
            "دليل استخدام الهوية البصرية (Brand Guidelines)",
            "تصاميم السوشيال ميديا والمطبوعات الإعلانية",
            "نبرة الصوت والرسائل التسويقية للعلامة",
          ],
        },
      ],
    },
    aiEcosystem: {
      kicker: "من يتبنّاه اليوم، يقود السوق غدًا",
      heading: "مستقبل التسويق يبدأ بالذكاء الاصطناعي",
      subtitle: "الذكاء الاصطناعي لم يعد اختيارًا بل ضرورة: تحليل سلوك العملاء، تخصيص المحتوى، وتحسين الحملات لزيادة المبيعات بأقل تكلفة ممكنة.",
      nodes: [
        { title: "السوشيال", desc: "أتمتة النشر والتفاعل" },
        { title: "الإعلانات", desc: "تحسين الميزانيات الذكي" },
        { title: "الفيديو", desc: "توليد نصوص ومونتاج سريع" },
        { title: "الهوية", desc: "توليد تصاميم وأفكار بصرية" },
        { title: "المواقع", desc: "تخصيص تجربة كل زائر" },
        { title: "المحتوى", desc: "تحليل نبرة الصوت والمشاعر" },
      ],
    },
    features: {
      heading: "مميزات تصنع الفرق",
      subtitle: "نحوّل أفكارك إلى مشاريع ناجحة بخدمات احترافية تجمع بين الإبداع الفني والتقنية المتطورة والاستراتيجية المدروسة.",
      items: [
        {
          num: "01",
          title: "حلول مبتكرة",
          desc: "خدمات رقمية حديثة تناسب احتياجات السوق وتواكب التطور السريع لأدوات التسويق.",
        },
        {
          num: "02",
          title: "جودة عالية",
          desc: "تنفيذ بأعلى معايير الجودة لتجربة مستخدم ممتعة ونتائج إعلانية متفوقة.",
        },
        {
          num: "03",
          title: "دعم مستمر وشراكة حقيقية",
          desc: "متابعة وتقارير وتحسين دائم لضمان استمرار نجاح مشروعك ونموه على المدى الطويل.",
        },
      ],
    },
    metrics: {
      card1: {
        title: "الميزانيات المدارة",
        subtitle: "ذروة المواسم البيعية لتحقيق أقصى ربح",
        stat: "8.4M",
      },
      card2: {
        title: "حجم المبيعات المباشرة",
        subtitle: "التصاعد الربحي السنوي لعملائنا",
        stat: "99.99%",
      },
      card3: {
        title: "العائد على الإنفاق (ROAS)",
        subtitle: "معدلات كفاءة الإعلانات",
        stat: "98.7%",
      },
    },
    faq: {
      kicker: "الأسئلة الشائعة",
      heading: "الأسئلة الأكثر شيوعاً",
      items: [
        {
          q: "كيف تختلف Duck Agency عن أي وكالة تسويق أخرى؟",
          a: "نحن لا نعتمد حلولاً جاهزة أو قوالب معلبة. نبدأ بدراسة عميقة لنشاطك التجاري ومنافسيك وسلوك جمهورك الحقيقي، ثم نصمم استراتيجية نمو مخصصة بالكامل تركز على تحقيق أعلى عائد استثماري (ROI).",
        },
        {
          q: "كم يستغرق إطلاق الحملة الإعلانية أو المتجر الإلكتروني؟",
          a: "يعتمد على حجم المشروع؛ فالحملات الإعلانية السريعة تبدأ خلال 48 إلى 72 ساعة بعد إعداد البنية التحتية والتحليلات. أما المتاجر الإلكترونية المتكاملة فتستغرق عادة بين 7 إلى 14 يوم عمل مع الاختبارات الكاملة.",
        },
        {
          q: "هل تدعمون العملاء خارج مصر والمملكة العربية السعودية؟",
          a: "نعم بكل تأكيد! نحن ندير حملات ومشاريع لعملاء في مصر، السعودية، الإمارات، والكويت وقطر، ونفهم الطبيعة الاستهلاكية لكل سوق عربي بعناية.",
        },
        {
          q: "كيف أضمن متابعة نتائج الإعلانات والمبيعات؟",
          a: "نوفر لوحات تحكم تفاعلية وتقارير دورية شفافة توضح كل دولار أُنفق، عدد الزيارات، تكلفة الاكتساب (CPA)، والمبيعات المباشرة المحققة.",
        },
      ],
    },
    contact: {
      kicker: "تواصل مباشر",
      heading: "أينما كان نشاطك، نحن قريبون منك",
      subtitle: "فروعنا الرسمية في مصر والمملكة العربية السعودية لتقديم حلول الدعاية والتسويق المتكاملة.",
      egypt: {
        title: "فرع جمهورية مصر العربية",
        badge: "الفرع الرئيسي",
        address: "مدينة 6 أكتوبر - الحصري، مصر",
        callBtn: "اتصال سريع",
        waBtn: "واتساب مصر",
      },
      saudi: {
        title: "فرع المملكة العربية السعودية",
        badge: "فرع السعودية",
        address: "الرياض، المملكة العربية السعودية",
        callBtn: "اتصال سريع",
        waBtn: "واتساب السعودية",
      },
      addressLabel: "العنوان:",
      phoneLabel: "رقم الهاتف:",
      emailLabel: "البريد الإلكتروني:",
      globeEgypt: {
        name: "فرع جمهورية مصر العربية",
        city: "مدينة 6 أكتوبر - الحصري",
      },
      globeSaudi: {
        name: "فرع المملكة العربية السعودية",
        city: "الرياض، المملكة العربية السعودية",
      },
      callAction: "اتصال",
      waAction: "واتساب",
    },
    consultation: {
      kicker: "استشارة مجانية",
      heading: "ابدأ مشروعك الآن",
      subtitle: "احصل على استشارة تسويقية مجانية وحوّل أفكارك إلى واقع رقمي مربح. ادخل بريدك الإلكتروني وسيتواصل معك خبراؤنا خلال 24 ساعة.",
      placeholder: "أدخل بريدك الإلكتروني...",
      btn: "سجّل الآن",
      success: "شكراً لتسجيلك! سيتواصل معك فريق Duck Agency قريباً.",
    },
    footer: {
      sloganPart1: "للرؤية",
      sloganPart2: "أثر",
      tagline: "DIGITAL MEDIA AGENCY",
      desc: "شركة دعاية وتسويق تقدم حلولاً متكاملة للشركات والمشاهير والأفراد، تبدأ من بناء الهوية وإدارة السوشيال ميديا وحتى المونتاج والتصميم والكورسات.",
      quickLinksTitle: "روابط سريعة",
      servicesTitle: "خدماتنا",
      servicesList: [
        "إنشاء المتاجر الإلكترونية",
        "إدارة الحملات الإعلانية",
        "تحسين محركات البحث (SEO)",
        "تصميم وتطوير المواقع والتطبيقات",
        "الهوية البصرية والموشن جرافيك",
      ],
      socialTitle: "وسائل التواصل",
      socialDesc: "تابعنا على منصات التواصل الاجتماعي لمشاهدة آخر أعمالنا الإبداعية.",
      backToTop: "العودة للأعلى",
      rights: "جميع الحقوق محفوظة ©",
      rightsEnd: "للرؤية أثر.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
    },
    floatingWhatsApp: {
      title: "تواصل مباشر",
      egyptBranch: "فرع مصر",
      saudiBranch: "فرع السعودية",
      ariaLabel: "محادثة واتساب والاتصال السريع",
      closeLabel: "إغلاق النافذة",
    },
  },

  en: {
    nav: {
      links: [
        { name: "Home", href: "#top", id: "top" },
        { name: "About Us", href: "#about", id: "about" },
        { name: "Services", href: "#services", id: "services" },
        { name: "FAQ", href: "#faq", id: "faq" },
        { name: "Contact Us", href: "#contact", id: "contact" },
      ],
      cta: "Start Your Journey",
      langButton: "العربية",
    },
    hero: {
      kicker: "From Attention to Conversions",
      titleLead: "At",
      brand: "Duck",
      titleTail: "we craft content & campaigns that build commanding brand presence, reach ideal customers, and drive measurable revenue",
      subtitle: "We analyze audience intent, sculpt your identity, and engineer high-performance campaigns to maximize your ROI and fuel sustainable business growth.",
      ctaPrimary: "Take Your First Step",
      ctaSecondary: "Explore Our Work",
      badge1Num: "+380%",
      badge1Label: "Average Client Revenue Growth",
      badge2Num: "100% Bespoke",
      badge2Label: "Tailored Strategies, Zero Templates",
      badge3Num: "Egypt & KSA",
      badge3Label: "Deep Regional Market Expertise",
    },
    about: {
      kicker: "Our Vision & Methodology",
      heading: "Who We Are",
      paragraph: "Duck is an integrated advertising and marketing powerhouse providing full-spectrum digital solutions for enterprises, public figures, and emerging brands. From brand identity development and social media management to production, design, and turnkey growth solutions, backed by a specialized training academy.",
      sloganBadge: "Impact Through Vision — Your Creative Partner in Building Lasting Value",
      val1Title: "Data-Driven Strategies",
      val1Desc: "Marketing decisions fueled by genuine audience intelligence and real analytics.",
      val2Title: "Laser Focus on ROI",
      val2Desc: "Every advertising dollar is strictly optimized with one priority: multiplying returns.",
      artworkBadge: "The Clear Pathway to Scaling Your Brand",
    },
    integrations: {
      heading: "Seamlessly connected with world-class e-commerce engines & smart management stacks",
      platforms: [
        { name: "Shopify", category: "Global E-Commerce Engine" },
        { name: "WordPress", category: "Enterprise Web Platforms" },
        { name: "Salla", category: "Leading Saudi Platform" },
        { name: "Zid", category: "Modern Retail Platform" },
        { name: "Meta", category: "Facebook & Instagram Ads" },
        { name: "TikTok", category: "Viral Performance Ads" },
        { name: "Google Ads", category: "Intent Search & YouTube" },
        { name: "Snapchat", category: "High-Engagement Audience Ads" },
      ],
    },
    services: {
      kicker: "Transform Ad Spend into Profit",
      heading: "In modern marketing, we partner with you from the initial spark, not just the execution phase",
      subtitle: "We begin by deconstructing your business model, regional market nuances, and target buyer persona to chart an unmistakable trajectory toward enduring growth.",
      cta: "Take Your First Step",
      pill: "SERVICE",
      readMore: "Read More",
      modalKicker: "Service Overview",
      modalIncludes: "What does this service include?",
      modalWaCta: "Request via WhatsApp",
      modalClose: "Close",
      items: [
        {
          id: 1,
          title: "E-Commerce Development",
          description: "We architect high-converting online storefronts that showcase your catalog effortlessly, fully equipped with localized payments and shipping gateways.",
          details: [
            "100% responsive, lightning-fast mobile-first design",
            "Native integration with Salla, Zid, Shopify & WooCommerce",
            "Frictionless checkout, multiple payment & carrier APIs",
            "Engineered for sub-second speeds and maximum conversion rate",
          ],
        },
        {
          id: 2,
          title: "UI / UX Design",
          description: "Sleek, human-centered digital experiences scientifically designed to captivate visitors and convert them into loyal repeat customers.",
          details: [
            "Deep UX user journey & behavior research",
            "Bespoke interactive high-fidelity UI design",
            "Clickable prototypes & design systems in Figma",
            "Adherence to top accessibility and usability standards",
          ],
        },
        {
          id: 3,
          title: "Web & Mobile Applications",
          description: "Scalable, resilient native and cross-platform apps that streamline customer interactions and bring your operations to user fingertips.",
          details: [
            "Native & cross-platform iOS and Android builds",
            "Intuitive management dashboards for orders & analytics",
            "Instant push notifications to drive re-engagement & LTV",
            "Rigorous security audits, ongoing SLA support & cloud hosting",
          ],
        },
        {
          id: 4,
          title: "Paid Advertising Management",
          description: "We orchestrate omni-channel media buying to capture high-intent buyers and deliver superior ROAS across all major platforms.",
          details: [
            "Meta Ads (Facebook & Instagram conversion campaigns)",
            "TikTok, Snapchat & Google Ads scaling strategies",
            "Intelligent dynamic retargeting & funnel segmentation",
            "Transparent live dashboards reporting CPA, ROAS, and bottom-line revenue",
          ],
        },
        {
          id: 5,
          title: "Search Engine Optimization (SEO)",
          description: "We position your brand at the summit of Google search results right when your prospective buyers are actively looking for your solutions.",
          details: [
            "High-intent commercial keyword mapping & competitor analysis",
            "Technical site architecture & Core Web Vitals optimization",
            "High-authority contextual link building (Backlinks)",
            "Hyper-localized Local SEO for Egypt & GCC markets",
          ],
        },
        {
          id: 6,
          title: "Brand Identity Design",
          description: "Distinctive, memorable visual brand ecosystems that reflect your core ethos and command market authority.",
          details: [
            "Logo creation, marks, and versatile visual applications",
            "Comprehensive brand guidelines book (Typography, Palette, Grid)",
            "Social media design collateral & marketing print kits",
            "Verbal identity, brand voice, and messaging architecture",
          ],
        },
      ],
    },
    aiEcosystem: {
      kicker: "Adopt Today, Lead Tomorrow",
      heading: "The Future of Marketing Starts with AI",
      subtitle: "Artificial intelligence is no longer optional—it's essential: decoding customer behavior, personalizing journeys, and optimizing spend for peak profitability.",
      nodes: [
        { title: "Social", desc: "Automated posting & smart engagement" },
        { title: "Advertising", desc: "Predictive budget optimization" },
        { title: "Video", desc: "AI scripting & accelerated editing" },
        { title: "Identity", desc: "Generative visual concepting" },
        { title: "Websites", desc: "Hyper-personalized visitor flows" },
        { title: "Content", desc: "Tone analysis & sentiment mapping" },
      ],
    },
    features: {
      heading: "Features That Drive Real Advantage",
      subtitle: "Transforming vision into market triumphs through professional execution marrying artistic creativity, cutting-edge technology, and proven strategy.",
      items: [
        {
          num: "01",
          title: "Innovative Solutions",
          desc: "Modern digital approaches tailored to fast-evolving regional consumer behaviors.",
        },
        {
          num: "02",
          title: "Uncompromising Quality",
          desc: "World-class execution standards delivering frictionless UX and exceptional ad performance.",
        },
        {
          num: "03",
          title: "Continuous Support & True Partnership",
          desc: "Dedicated account management, bi-weekly strategic reviews, and proactive growth iteration.",
        },
      ],
    },
    metrics: {
      card1: {
        title: "Managed Budgets",
        subtitle: "Maximized across peak buying seasons",
        stat: "$8.4M",
      },
      card2: {
        title: "Direct Sales Volume",
        subtitle: "Annual compounding profit for our clients",
        stat: "99.99%",
      },
      card3: {
        title: "Return on Ad Spend (ROAS)",
        subtitle: "Top-tier campaign efficiency rates",
        stat: "15X",
      },
    },
    faq: {
      kicker: "Frequently Asked Questions",
      heading: "Answers to Your Most Common Questions",
      items: [
        {
          q: "How does Duck Agency differ from typical marketing agencies?",
          a: "We never deploy recycled templates or cookie-cutter tactics. We initiate every engagement with a rigorous diagnostic of your market position, competitors, and true customer journey, engineering a bespoke growth engine built strictly to multiply your ROI.",
        },
        {
          q: "How fast can an ad campaign or e-commerce store launch?",
          a: "Performance campaigns typically launch within 48 to 72 hours following infrastructure and analytics validation. Full-scale e-commerce stores take between 7 to 14 business days, complete with end-to-end QA testing.",
        },
        {
          q: "Do you serve clients outside Egypt and Saudi Arabia?",
          a: "Absolutely. We actively orchestrate campaigns and digital products for clients across Egypt, Saudi Arabia, the UAE, Kuwait, and Qatar, with nuanced understanding of regional purchasing habits.",
        },
        {
          q: "How do I monitor advertising performance and sales metrics?",
          a: "You receive transparent real-time dashboards detailing every currency unit spent, traffic quality, customer acquisition cost (CAC), and direct verified revenue.",
        },
      ],
    },
    contact: {
      kicker: "Direct Contact",
      heading: "Wherever Your Business Operates, We Are Nearby",
      subtitle: "Our official regional hubs in Egypt and Saudi Arabia provide seamless, integrated marketing and creative solutions.",
      egypt: {
        title: "Arab Republic of Egypt Branch",
        badge: "Main Headquarters",
        address: "6th of October City - El Hosary, Egypt",
        callBtn: "Quick Call",
        waBtn: "Egypt WhatsApp",
      },
      saudi: {
        title: "Kingdom of Saudi Arabia Branch",
        badge: "KSA Branch",
        address: "Riyadh, Kingdom of Saudi Arabia",
        callBtn: "Quick Call",
        waBtn: "KSA WhatsApp",
      },
      addressLabel: "Address:",
      phoneLabel: "Phone:",
      emailLabel: "Email:",
      globeEgypt: {
        name: "Egypt Branch",
        city: "6th of October City - El Hosary",
      },
      globeSaudi: {
        name: "Saudi Arabia Branch",
        city: "Riyadh, Saudi Arabia",
      },
      callAction: "Call",
      waAction: "WhatsApp",
    },
    consultation: {
      kicker: "Free Consultation",
      heading: "Launch Your Project Today",
      subtitle: "Claim your complimentary strategic consultation. Enter your email and our senior strategists will connect with you within 24 hours.",
      placeholder: "Enter your email address...",
      btn: "Get Started",
      success: "Thank you for registering! The Duck Agency team will reach out shortly.",
    },
    footer: {
      sloganPart1: "Impact Through",
      sloganPart2: "Vision",
      tagline: "DIGITAL MEDIA AGENCY",
      desc: "An integrated advertising and marketing powerhouse providing end-to-end digital solutions for enterprises, celebrities, and individuals—from identity to social media, video production, design, and academy courses.",
      quickLinksTitle: "Quick Links",
      servicesTitle: "Services",
      servicesList: [
        "E-Commerce Development",
        "Paid Advertising Campaigns",
        "Search Engine Optimization (SEO)",
        "Web & App Development",
        "Brand Identity & Motion Graphics",
      ],
      socialTitle: "Connect With Us",
      socialDesc: "Follow our social channels to explore our latest creative projects and client case studies.",
      backToTop: "Back to Top",
      rights: "All rights reserved ©",
      rightsEnd: "Impact Through Vision.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    floatingWhatsApp: {
      title: "Direct Chat",
      egyptBranch: "Egypt Branch",
      saudiBranch: "Saudi Branch",
      ariaLabel: "WhatsApp chat and direct phone call",
      closeLabel: "Close window",
    },
  },
};
