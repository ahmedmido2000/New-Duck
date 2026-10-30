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
  partners: {
    kicker: string;
    heading: string;
    headingHighlight: string;
    subtitle: string;
    filterAll: string;
    filterGov: string;
    filterCorp: string;
    filterConsumer: string;
    ctaButton: string;
    stats: {
      partnersCount: string;
      partnersCountLabel: string;
      satisfaction: string;
      satisfactionLabel: string;
      projects: string;
      projectsLabel: string;
      countries: string;
      countriesLabel: string;
    };
    marqueeLabel: string;
  };
  faq: {
    kicker: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  packages: {
    kicker: string;
    heading: string;
    subtitle: string;
    monthly: string;
    requestBtn: string;
    customInquiry: string;
    items: {
      id: string;
      tier: string;
      name: string;
      price: string;
      popular?: boolean;
      features: string[];
    }[];
    calculator: {
      title: string;
      subtitle: string;
      serviceTypeLabel: string;
      scopeLabel: string;
      timelineLabel: string;
      standard: string;
      fast: string;
      estimateTotal: string;
      sarApprox: string;
      egpApprox: string;
      bookBtn: string;
    };
  };
  academy: {
    kicker: string;
    heading: string;
    subtitle: string;
    enrollBtn: string;
    certifiedBadge: string;
    categories?: {
      all: string;
      design: string;
      tech: string;
      languages: string;
    };
    courses: {
      id: string;
      title: string;
      desc: string;
      oldPrice: string;
      price: string;
      discount: string;
      category?: string;
      features: string[];
    }[];
    features: { title: string; desc: string }[];
  };
  booking: {
    kicker: string;
    heading: string;
    subtitle: string;
    studySystem: {
      title: string;
      badge: string;
      points: string[];
    };
    bankTransfer: {
      title: string;
      badge: string;
      holderLabel: string;
      holderName: string;
      accountLabel: string;
      accountNumber: string;
      copyBtn: string;
      copiedBtn: string;
      instruction: string;
    };
    receiptUpload: {
      title: string;
      badge: string;
      subtitle: string;
      dropzoneText: string;
      dropzoneHint: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      courseLabel: string;
      submitBtn: string;
      note: string;
      successTitle: string;
      successDesc: string;
      waConfirmBtn: string;
    };
  };
  portfolio: {
    kicker: string;
    heading: string;
    headingHighlight: string;
    subtitle: string;
    filterAll: string;
    filterSocial: string;
    filterVideo: string;
    filterDesign: string;
    filterBranding: string;
    filterCelebrity: string;
    filterWeb: string;
    viewProjectBtn: string;
    ctaButton: string;
    items: {
      id: string;
      title: string;
      category: string;
      client: string;
      metric: string;
      metricLabel: string;
      desc: string;
      tags: string[];
    }[];
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
        { name: "الرئيسية", href: "/", id: "home" },
        { name: "من نحن", href: "/about", id: "about" },
        { name: "الخدمات", href: "/services", id: "services" },
        { name: "أعمالنا", href: "/portfolio", id: "portfolio" },
        { name: "الباقات", href: "/packages", id: "packages" },
        { name: "الأكاديمية", href: "/academy", id: "academy" },
        { name: "الحجز والدفع", href: "/booking", id: "booking" },
        { name: "شركاء النجاح", href: "/partners", id: "partners" },
        { name: "تواصل معنا", href: "/contact", id: "contact" },
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
      pill: "خدمة",
      readMore: "اقرأ المزيد",
      modalKicker: "تفاصيل الخدمة",
      modalIncludes: "ماذا يشمل تنفيذ الخدمة؟",
      modalWaCta: "طلب الخدمة عبر واتساب",
      modalClose: "إغلاق",
      items: [
        {
          id: 1,
          title: "إدارة السوشيال ميديا وصفحات الشركات",
          description: "إدارة متكاملة للحسابات، خطة المحتوى، النشر الدوري، التصاميم، التفاعل وتقارير الأداء الاحترافية.",
          details: [
            "بناء خطة واستراتيجية محتوى شهرية مخصصة ومدروسة",
            "جدولة ونشر المحتوى في أوقات الذروة التفاعلية",
            "تصميم بوستات وستوريات ورسومات جذابة ومبتكرة",
            "إدارة الردود والرسائل وخدمة العملاء ورفع تقارير أداء دورية",
          ],
        },
        {
          id: 2,
          title: "خدمات المونتاج وصناعة الفيديو",
          description: "مونتاج فيديوهات الريلز، الإعلانات، المحتوى الترويجي، واليوتيوب بأعلى تقنيات المونتاج والمؤثرات.",
          details: [
            "مونتاج احترافي لفيديوهات Reels و TikTok و Shorts الخاطفة",
            "إنتاج وتعديل الإعلانات الترويجية عالية معدلات التحويل",
            "مونتاج حلقات بودكاست ويوتيوب وفيديوهات وثائقية بدقة 4K",
            "إضافة المؤثرات الصوتية (Sound Design) وموشن جرافيك جذاب",
          ],
        },
        {
          id: 3,
          title: "خدمات التصميم الإبداعي",
          description: "تصميمات السوشيال ميديا، الإعلانات، المطبوعات والبوسترات بلمسة إبداعية احترافية تبهر جمهورك.",
          details: [
            "تصميم بوستات ومنشورات الحملات التسويقية المتنوعة",
            "تصميم بنرات وإعلانات رقمية تحقق أعلى نسبة نقر (CTR)",
            "تصميم المطبوعات والبروشورات والفلايرات والكتالوجات",
            "تصميم البوسترات الإعلانية ومواد المعارض والفعاليات",
          ],
        },
        {
          id: 4,
          title: "إنشاء الهوية البصرية للشركات",
          description: "الشعار، الألوان، الخطوط، وكتيب الهوية (Brand Guidelines) لترسيخ مكانة علامتك التجارية بالسوق.",
          details: [
            "تصميم الشعار الأساسي والبدائل بأفكار إبداعية فريدة",
            "تحديد فلسفة الألوان ونبرة الخطوط الرسمية للعلامة",
            "تصميم المطبوعات المؤسسية (Business Cards, Letterhead)",
            "كتيب متكامل لدليل الهوية البصرية (Brand Guidelines)",
          ],
        },
        {
          id: 5,
          title: "إدارة صفحات المشاهير وصناع المحتوى",
          description: "إدارة احترافية لحسابات المشاهير وصناع المحتوى وبناء وتوسيع حضورهم الرقمي وتنسيق الشراكات.",
          details: [
            "استراتيجية بناء وتعزيز البراند الشخصي (Personal Branding)",
            "إعداد الأفكار والسيناريوهات لمحتوى يومي يجذب الملايين",
            "إدارة وتنسيق الرعايات والإعلانات والتعاونات التجارية",
            "حماية الحسابات ومتابعة التفاعل وإدارة الأزمات الرقمية",
          ],
        },
        {
          id: 6,
          title: "خدمات الباكدجات (الباقات الجاهزة)",
          description: "باقات شهرية جاهزة تجمع عدة خدمات بأسعار مناسبة توفر التكاليف وتضمن نمواً متواصلاً لشركتك.",
          details: [
            "دمج خدمات إدارة السوشيال مع المونتاج والتصميم في باقة واحدة",
            "باقات مرنة (أساسية، متوسطة، متقدمة) تناسب حجم عملك",
            "توفير كبير في التكلفة مع التزام بمواعيد تسليم دقيقة",
            "مدير حساب مخصص وتقارير تحليلية ومتابعة مستمرة للنتائج",
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
    partners: {
      kicker: "شركاء المسيرة والنجاح",
      heading: "عملاؤنا وشركاؤنا،",
      headingHighlight: "نجاحنا المشترك",
      subtitle: "نفتخر بشراكتنا الراسخة مع كبرى المنظمات والهيئات والشركات في مصر والسعودية والإمارات، مقدمين حلولاً هندسية وإنتاجاً رقمياً يصنع الفارق.",
      filterAll: "جميع الشركاء",
      filterGov: "جهات حكومية ومؤسسية",
      filterCorp: "شركات كبرى وصناعية",
      filterConsumer: "علامات تجارية واستثمارية",
      ctaButton: "انضم إلى شركاء النجاح",
      stats: {
        partnersCount: "+13",
        partnersCountLabel: "شريك استراتيجي",
        satisfaction: "98%",
        satisfactionLabel: "نسبة رضا واستمرارية",
        projects: "+150",
        projectsLabel: "مشروع نوعي منجز",
        countries: "3",
        countriesLabel: "دول إقليمية (مصر • السعودية • الإمارات)",
      },
      marqueeLabel: "شريط الشركاء التفاعلي (مرر الماوس للتوقف أو الفحص)",
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
    packages: {
      kicker: "حلول نمو مرنة",
      heading: "باقات التسويق والنمو المتكاملة",
      subtitle: "اختر الباقة المناسبة لحجم ونشاط شركتك مع إمكانية التخصيص الكامل لتحقيق أعلى عائد استثماري.",
      monthly: "/ شهرياً",
      requestBtn: "طلب الباقة الآن",
      customInquiry: "أو احسب تكلفة مشروعك بدقة عبر الحاسبة الذكية أدناه",
      items: [
        {
          id: "basic",
          tier: "الشركات الناشئة والمتاجر",
          name: "الباقة الأساسية Basic",
          price: "$490",
          features: [
            "إدارة منصتين للتواصل الاجتماعي",
            "12 تصميماً جرافيكياً احترافياً مخصصاً",
            "إدارة وضبط حملتين إعلانيتين ممولتين",
            "كتابة محتوى إبداعي وجذاب",
            "تقرير شهري مفصل بالأرقام والتحليلات",
          ],
        },
        {
          id: "advanced",
          tier: "الشركات المتنامية والعلامات التجارية",
          name: "باقة النمو الاحترافية Pro",
          price: "$890",
          popular: true,
          features: [
            "إدارة 4 منصات تواصل اجتماعي",
            "24 تصميماً جرافيكياً وموشن جرافيك",
            "إنتاج ومونتاج 4 فيديوهات Reels / TikTok",
            "إدارة حملات إعلانية متقدمة على Meta و Google و TikTok",
            "تحسين مستمر لمعدل التحويل (CRO) وتتبع البكسل",
            "دعم فني واستشاري مخصص 24/7",
          ],
        },
        {
          id: "enterprise",
          tier: "المؤسسات والبراندات الكبرى",
          name: "الباقة المؤسسية الشاملة Enterprise",
          price: "$1,690",
          features: [
            "إدارة شاملة لجميع المنصات الرقمية",
            "إنتاج فيديو إعلاني سينمائي بدقة 4K",
            "استراتيجية تسويق كاملة وخطة نمو ربع سنوية",
            "حملات إعادة استهداف ذكية وبناء قمع مبيعات (Funnel)",
            "مدير حسابات تنفيذي مخصص ومباشر",
            "تقارير أسبوعية حية ولوحة تحكم تفاعلية",
          ],
        },
      ],
      calculator: {
        title: "الحاسبة التقديرية لتكلفة المشاريع",
        subtitle: "حدد نوع الخدمة ونطاق العمل لتحصل على تسعير فوري وتقديري لمشروعك مع إمكانية الحجز المباشر.",
        serviceTypeLabel: "نوع المشروع الأساسي:",
        scopeLabel: "نطاق وحجم العمل المطلوب:",
        timelineLabel: "سرعة التنفيذ المطلوبة:",
        standard: "تنفيذ قياسي (طبيعي)",
        fast: "تنفيذ سريع فائق الأولوية (+30%)",
        estimateTotal: "التكلفة التقديرية للاستثمار:",
        sarApprox: "ريال سعودي تقريباً",
        egpApprox: "جنيه مصري تقريباً",
        bookBtn: "تأكيد وبدء التنفيذ عبر واتساب",
      },
    },
    academy: {
      kicker: "بناء الكفاءات والمهارات الاحترافية",
      heading: "أكاديمية Duck للتعليم والتدريب الرقمي",
      subtitle: "برامج تدريبية متخصصة ومكثفة معتمدة دولياً تؤهلك لسوق العمل الحر والشركات الإقليمية الكبرى.",
      enrollBtn: "الالتحاق بالبرنامج الآن",
      certifiedBadge: "شهادة معتمدة مع تدريب عملي حي",
      categories: {
        all: "جميع الكورسات",
        design: "التصميم الجرافيكي",
        tech: "البرمجة وتصميم المواقع",
        languages: "كورسات اللغات",
      },
      courses: [
        {
          id: "graphic-design",
          category: "design",
          title: "دبلوم التصميم الجرافيكي الاحترافي",
          desc: "إتقان الفوتوشوب والإليستريتور وتصميم الهويات البصرية للشركات وإعلانات السوشيال ميديا.",
          oldPrice: "$465",
          price: "$130",
          discount: "خصم 72%",
          features: [
            "إتقان Photoshop & Illustrator بالكامل من الصفر حتى الاحتراف",
            "تصميم إعلانات السوشيال ميديا وبوسترات الحملات الإعلانية",
            "بناء الهويات البصرية والكتيب الإرشادي للعلامات التجارية",
            "مشاريع تطبيقية حية مع بناء بورتفوليو مهني متميز",
          ],
        },
        {
          id: "web-design",
          category: "tech",
          title: "تصميم مواقع الويب — Web Design",
          desc: "احتراف تصميم واجهات مواقع الويب الحديثة وتجربة المستخدم مع تطبيق المعايير العالمية.",
          oldPrice: "$344",
          price: "$155",
          discount: "خصم 55%",
          features: [
            "احتراف أداة Figma وتصميم النماذج التفاعلية المتقدمة",
            "مبادئ التصميم المتجاوب Responsive لجميع الشاشات والهواتف",
            "هندسة تجربة التصفح وتحويل الزائر إلى عميل حقيقي",
            "تسليم الملفات للمطورين وتجهيز الأصول البرمجية",
          ],
        },
        {
          id: "web-development",
          category: "tech",
          title: "تطوير مواقع الويب — Web Development",
          desc: "برمجة وتطوير مواقع الويب التفاعلية الحديثة والمتاجر الإلكترونية من الصفر.",
          oldPrice: "$200",
          price: "$150",
          discount: "خصم 25%",
          features: [
            "إتقان HTML5, CSS3, JavaScript الحديث (ES6+)",
            "بناء تطبيقات الويب التفاعلية وربط الـ APIs",
            "تطوير مواقع ومتاجر إلكترونية متكاملة مع قواعد البيانات",
            "استضافة ونشر المشاريع على السحابة والتحسين لمحركات البحث",
          ],
        },
        {
          id: "ui-ux",
          category: "tech",
          title: "تصميم واجهات وتجربة المستخدم — UI/UX Design",
          desc: "أبحاث سلوك المستخدم، رحلة العميل، النماذج التفاعلية، وبناء أنظمة التصميم الشاملة.",
          oldPrice: "$160",
          price: "$120",
          discount: "خصم 25%",
          features: [
            "أبحاث المستخدم (User Research) ورسم خرائط الرحلة (User Journeys)",
            "رسم الهياكل السلكية Wireframes واختبارات قابلية الاستخدام",
            "بناء وإدارة مكتبات أنظمة التصميم الموحدة (Design Systems)",
            "تصميم واجهات تفاعلية عالية الدقة ونماذج Micro-Interactions",
          ],
        },
        {
          id: "english",
          category: "languages",
          title: "كورس اللغة الإنجليزية التفاعلي — English Language",
          desc: "تطوير مهارات التحدث بطلاقة وإتقان إنجليزية الأعمال والتسويق الدولي عبر جلسات تفاعلية مباشرة.",
          oldPrice: "$60",
          price: "$30",
          discount: "30 دولار للمستوى",
          features: [
            "جلسات محادثة تفاعلية مباشرة عبر Zoom Meeting",
            "مصطلحات بيئة العمل والتسويق الرقمي وإجراء المقابلات",
            "إتقان النطق السليم (Pronunciation) والتغلب على حاجز الخوف",
            "متابعة دورية للمستوى واختبارات قياس تقدم معتمدة",
          ],
        },
        {
          id: "german",
          category: "languages",
          title: "كورس اللغة الألمانية — German Language (Deutsch)",
          desc: "تعلم اللغة الألمانية من الصفر وحتى المستويات المتقدمة (A1 - B2) للسفر والعمل والدراسة.",
          oldPrice: "$70",
          price: "$35",
          discount: "35 دولار للمستوى",
          features: [
            "تغطية شاملة للقواعد والمحادثة من مستوى A1 إلى B2",
            "تدريب على نماذج امتحانات معهد غوته (Goethe-Zertifikat)",
            "فصول أونلاين حية عبر Zoom مع تسجيلات دائمة للمراجعة",
            "تأهيل شامل للسفر وسوق العمل الألماني والمحادثة اليومية",
          ],
        },
        {
          id: "chinese",
          category: "languages",
          title: "كورس اللغة الصينية — Chinese Language (Mandarin)",
          desc: "تعلم أساسيات لغة المندرين الصينية ومصطلحات التجارة والاستيراد والتواصل مع الموردين.",
          oldPrice: "$100",
          price: "$50",
          discount: "50 دولار للمستوى",
          features: [
            "أساسيات النطق الصيني والـ Pinyin ونظام الكتابة",
            "مصطلحات التجارة والاستيراد والتفاوض مع المصانع الصينية",
            "محاضرات تفاعلية عبر Zoom مع مدربين خبراء",
            "تطبيقات عملية للمحادثة في المعارض التجارية والسفر إلى الصين",
          ],
        },
      ],
      features: [
        {
          title: "شهادات تدريبية معتمدة",
          desc: "شهادة موثقة تثبت كفاءتك وخبرتك العملية للتقديم في كبرى الشركات.",
        },
        {
          title: "تطبيق عملي على مشاريع واقعية",
          desc: "لن تدرس نظرياً فقط؛ بل ستبني مشاريع فعلية تضعها في معرض أعمالك من اليوم الأول.",
        },
        {
          title: "إرشاد ومتابعة مباشرة مع خبراء Duck",
          desc: "جلسات مراجعة وتقييم دوري لأعمالك للإجابة على جميع استفساراتك وتوجيهك المهني.",
        },
      ],
    },
    booking: {
      kicker: "الدراسة والحجز والدفع",
      heading: "طرق الحجز والدفع المعتمدة",
      subtitle: "نظام دراسة مرن أونلاين عبر Zoom مع دفع بنكي مباشر ورفع إيصال التحويل لتأكيد حجزك فوراً.",
      studySystem: {
        title: "نظام الدراسة بالأكاديمية",
        badge: "تجربة تعليمية متكاملة",
        points: [
          "جميع الكورسات أونلاين من خلال Zoom Meeting تفاعلي ومباشر.",
          "الحصول على المحتوى التعليمي أثناء الكورس وبعد انتهائه مدى الحياة.",
          "متابعة مستمرة للطلاب ودعم فني وإرشادي خلال رحلة التعلم.",
          "إمكانية الرجوع إلى المحتوى للاستفادة منه ومراجعته بعد انتهاء الكورس في أي وقت.",
        ],
      },
      bankTransfer: {
        title: "طرق الدفع — التحويل البنكي",
        badge: "حساب بنكي رسمي",
        holderLabel: "اسم صاحب الحساب:",
        holderName: "إسلام محمد عبدالمحسن محمد",
        accountLabel: "رقم الحساب البنكي:",
        accountNumber: "4133012119700900016",
        copyBtn: "نسخ رقم الحساب",
        copiedBtn: "تم النسخ بنجاح!",
        instruction: "يرجى تحويل رسوم الكورس إلى الحساب البنكي الموضح أعلاه، ثم إرسال صورة واضحة من إيصال التحويل لتأكيد الدفع والحجز.",
      },
      receiptUpload: {
        title: "إرفاق إثبات الدفع وتأكيد الحجز",
        badge: "خطوة التحقق السريع",
        subtitle: "صورة إيصال التحويل البنكي (Screenshot)",
        dropzoneText: "اسحب صورة إيصال التحويل هنا أو انقر لاختيارها",
        dropzoneHint: "نقبل صيغ JPG, PNG, WebP أو PDF (حتى 10MB)",
        nameLabel: "الاسم الكامل للطالب:",
        namePlaceholder: "اكتب اسمك الثلاثي كما ترغب بظهوره بالشهادة...",
        phoneLabel: "رقم الواتساب للتواصل:",
        phonePlaceholder: "مثال: 01012345678 أو 0501234567",
        courseLabel: "الكورس أو الباقة المطلوب حجزها:",
        submitBtn: "إرسال إثبات الدفع وتأكيد الحجز",
        note: "بعد إرسال إثبات الدفع، تتم مراجعة التحويل وتأكيد الحجز فوراً من فريق Duck.",
        successTitle: "تم استلام إثبات الدفع بنجاح!",
        successDesc: "شكراً لك! سيقوم فريق Duck بمراجعة التحويل البنكي وتأكيد حجزك وإرسال بيانات القاعة والمحاضرات عبر الواتساب خلال دقائق.",
        waConfirmBtn: "تأكيد فوري عبر واتساب الفرع",
      },
    },
    portfolio: {
      kicker: "أعمالنا وإنجازاتنا",
      heading: "معرض أعمال",
      headingHighlight: "Duck Agency",
      subtitle: "استكشف كيف ساعدنا كبرى الشركات والبراندات والمشاهير على التميز وصناعة أثر حقيقي لعلاماتهم.",
      filterAll: "جميع الأعمال",
      filterSocial: "سوشيال ميديا",
      filterVideo: "مونتاج وفيديو",
      filterDesign: "تصميم إبداعي",
      filterBranding: "هوية بصرية",
      filterCelebrity: "صفحات المشاهير",
      filterWeb: "مواقع ومتاجر",
      viewProjectBtn: "عرض تفاصيل المشروع",
      ctaButton: "ابدأ مشروعك معنا الآن",
      items: [
        {
          id: "brand-1",
          title: "الهوية البصرية الشاملة لشركة ألفا الهندسية",
          category: "branding",
          client: "مجموعة ألفا للاستشارات الهندسية",
          metric: "+240%",
          metricLabel: "نمو في صفقات التعاقد المؤسسي",
          desc: "تصميم شعار فريد، دليل إرشادات الهوية (Brand Guidelines)، المطبوعات الرسمية ومواد المؤتمرات.",
          tags: ["هوية بصرية", "شعار", "دليل العلامة", "مطبوعات"],
        },
        {
          id: "social-1",
          title: "إدارة وتنمية صفحات براند لاكشري فاشون بالسعودية",
          category: "social",
          client: "علامة راية للأزياء الراقية (الرياض)",
          metric: "+4.2M",
          metricLabel: "مشاهدات حقيقية ووصول للمستهدفين",
          desc: "خطة محتوى شهرية، إدارة التفاعل اليومي، تصاميم سوشيال ميديا مبهجة، وحملات تحويل مبيعات ناجحة.",
          tags: ["سوشيال ميديا", "إنستغرام", "تيك توك", "إدارة محتوى"],
        },
        {
          id: "video-1",
          title: "إنتاج ومونتاج سلسلة ريلز إعلانية لمنتج تقني مبتكر",
          category: "video",
          client: "تطبيق زاد الذكي للخدمات اللوجستية",
          metric: "8.5x",
          metricLabel: "عائد على الإنفاق الإعلاني (ROAS)",
          desc: "مونتاج خاطف لفيديوهات Reels و Shorts، مؤثرات صوتية وبصرية جذابة، وسيناريوهات تصوير تحفيزية للشراء.",
          tags: ["مونتاج ريلز", "فيديو إعلاني", "مؤثرات صوتية", "Shorts"],
        },
        {
          id: "design-1",
          title: "حملة إعلانية ومطبوعات لمعرض العقارات الدولي",
          category: "design",
          client: "سيتي إيدج للاستثمار العقاري",
          metric: "+680",
          metricLabel: "عميل محتمل مسجل بالمعرض",
          desc: "تصميم بنرات رقمية للحملات الممولة، بوسترات المعرض، كتالوجات المشاريع، واللافتات التفاعلية.",
          tags: ["تصميم إعلانات", "مطبوعات", "بوسترات", "كتالوجات"],
        },
        {
          id: "celeb-1",
          title: "بناء الحضور الرقمي وإدارة صفحات صانع محتوى أعمال",
          category: "celebrity",
          client: "شخصية ريادية وصانع محتوى في دبي ومصر",
          metric: "+850K",
          metricLabel: "متابع جديد في 6 أشهر فقط",
          desc: "استراتيجية Personal Branding، تنظيم جدول النشر والتفاعل، وتنسيق الرعايات مع كبرى المنصات والشركات.",
          tags: ["صفحات المشاهير", "براند شخصي", "رعايات", "صناعة محتوى"],
        },
        {
          id: "web-1",
          title: "تصميم وتطوير متجر نكست الإلكتروني السحابي",
          category: "web",
          client: "سلسلة متاجر لومينوس العالمية",
          metric: "+320%",
          metricLabel: "زيادة بمعدل تحويل الزوار (CRO)",
          desc: "تصميم واجهات UI/UX عصرية على Figma، وبرمجة سريعة متوافقة مع جميع بوابات الدفع والشحن بالسعودية ومصر.",
          tags: ["متاجر إلكترونية", "UI/UX", "Next.js", "تكامل الدفع"],
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
        "إدارة السوشيال ميديا وصفحات الشركات",
        "خدمات المونتاج وصناعة الفيديو والريلز",
        "خدمات التصميم الإبداعي والمطبوعات",
        "إنشاء الهوية البصرية وكتيب العلامة",
        "إدارة صفحات المشاهير وصناع المحتوى",
        "خدمات الباكدجات والباقات الشهرية الجاهزة",
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
        { name: "Home", href: "/", id: "home" },
        { name: "About Us", href: "/about", id: "about" },
        { name: "Services", href: "/services", id: "services" },
        { name: "Portfolio", href: "/portfolio", id: "portfolio" },
        { name: "Packages", href: "/packages", id: "packages" },
        { name: "Academy", href: "/academy", id: "academy" },
        { name: "Booking & Pay", href: "/booking", id: "booking" },
        { name: "Partners", href: "/partners", id: "partners" },
        { name: "Contact Us", href: "/contact", id: "contact" },
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
          title: "Social Media & Corporate Account Management",
          description: "End-to-end account management, strategic content calendar, scheduled publishing, creative designs, audience engagement, and performance reporting.",
          details: [
            "Tailored monthly content strategy and editorial calendar",
            "Peak-engagement scheduling across Meta, TikTok, X, and LinkedIn",
            "High-impact social creatives and interactive carousel graphics",
            "Community management, inbox SLA moderation, and bi-weekly growth reports",
          ],
        },
        {
          id: 2,
          title: "Video Editing & Production (Reels & Commercials)",
          description: "High-octane Reels, TikToks, YouTube long-form, and promotional commercials engineered for viral retention and conversion.",
          details: [
            "Fast-paced, hook-driven Reels, TikToks & YouTube Shorts editing",
            "High-converting paid video ad creatives and motion design",
            "4K YouTube video editing, podcasts, and corporate brand documentaries",
            "Cinematic sound design, color grading, and dynamic kinetic typography",
          ],
        },
        {
          id: 3,
          title: "Creative Graphic Design & Marketing Collateral",
          description: "Social media visual campaigns, high-CTR performance ad banners, posters, and premium commercial print materials.",
          details: [
            "High-converting multi-platform ad banners and graphic campaigns",
            "Social media post templates and branded story sets",
            "Commercial print collateral: brochures, flyers, and enterprise catalogs",
            "Exhibition backdrops, conference roll-ups, and outdoor billboards",
          ],
        },
        {
          id: 4,
          title: "Corporate Brand Identity & Guidelines",
          description: "Distinctive logo design, typography, color harmony, and a full Brand Guidelines manual to cement market authority.",
          details: [
            "Bespoke primary logo and adaptive responsive variations",
            "Strategic color psychology and corporate typography pairing",
            "Executive stationery suite: business cards, letterheads, and envelopes",
            "Comprehensive Brand Guidelines manual defining usage standards",
          ],
        },
        {
          id: 5,
          title: "Celebrity & Influencer Page Management",
          description: "Elite digital management for creators and public figures—building personal branding, multiplying reach, and managing sponsors.",
          details: [
            "Strategic Personal Branding roadmap and viral voice discovery",
            "Daily content ideation and production workflows reaching millions",
            "Brand sponsorship, commercial collaborations, and PR coordination",
            "Verified account security, community moderation, and crisis mitigation",
          ],
        },
        {
          id: 6,
          title: "Turnkey Growth Packages & Bundles",
          description: "Curated monthly service bundles combining social media, video editing, and design at cost-efficient rates for maximum ROI.",
          details: [
            "Synergized bundles combining social management, video, and design",
            "Tiered plans (Basic, Growth Pro, Enterprise) tailored to your operational scale",
            "Significant cost savings compared to contracting isolated services",
            "Dedicated senior account manager and transparent bi-weekly analytics",
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
    partners: {
      kicker: "Partners in Success & Journey",
      heading: "Our Clients & Partners,",
      headingHighlight: "Our Shared Success",
      subtitle: "We take immense pride in our established partnerships with leading institutions, authorities, and corporations across Egypt, Saudi Arabia, and the UAE, delivering digital solutions that redefine impact.",
      filterAll: "All Partners",
      filterGov: "Gov & Enterprise",
      filterCorp: "Corporate & Industry",
      filterConsumer: "Consumer & Investment Brands",
      ctaButton: "Join Our Success Network",
      stats: {
        partnersCount: "13+",
        partnersCountLabel: "Strategic Partners",
        satisfaction: "98%",
        satisfactionLabel: "Client Satisfaction Rate",
        projects: "150+",
        projectsLabel: "Milestones Delivered",
        countries: "3",
        countriesLabel: "Regional Hubs (Egypt • KSA • UAE)",
      },
      marqueeLabel: "Interactive Partners Stream (Hover to pause or inspect)",
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
    packages: {
      kicker: "Flexible Scaling Solutions",
      heading: "Integrated Marketing & Growth Packages",
      subtitle: "Select the ideal tier engineered for your organization's stage with full modular customization to maximize ROI.",
      monthly: "/ monthly",
      requestBtn: "Request This Package",
      customInquiry: "Or calculate your bespoke project investment via our live calculator below",
      items: [
        {
          id: "basic",
          tier: "Startups & Emerging Stores",
          name: "Basic Growth Tier",
          price: "$490",
          features: [
            "Management of 2 social media platforms",
            "12 custom brand graphics & creatives",
            "2 managed & optimized paid advertising campaigns",
            "Compelling copywriting & audience engagement",
            "Comprehensive monthly performance analytics report",
          ],
        },
        {
          id: "advanced",
          tier: "Scaling Brands & Businesses",
          name: "Professional Pro Tier",
          price: "$890",
          popular: true,
          features: [
            "Management of 4 social media platforms",
            "24 high-converting graphics & motion assets",
            "4 edited high-impact Reels / TikTok video productions",
            "Omnichannel ad management across Meta, Google & TikTok",
            "Conversion rate optimization (CRO) & pixel tracking",
            "Dedicated 24/7 strategic account support",
          ],
        },
        {
          id: "enterprise",
          tier: "Enterprises & Leading Brands",
          name: "Enterprise Mastery Tier",
          price: "$1,690",
          features: [
            "Full-spectrum digital presence management",
            "Bespoke 4K cinematic commercial video production",
            "Quarterly omni-channel growth strategy & funnel architecture",
            "Smart retargeting & lifetime customer value optimization",
            "Dedicated senior executive account director",
            "Live real-time dashboards & bi-weekly executive reviews",
          ],
        },
      ],
      calculator: {
        title: "Dynamic Project Cost Calculator",
        subtitle: "Select your project core requirements and scope to compute an instant transparent estimate with direct reservation.",
        serviceTypeLabel: "Core Project Domain:",
        scopeLabel: "Scope & Deliverable Magnitude:",
        timelineLabel: "Delivery Priority Velocity:",
        standard: "Standard Quality Delivery",
        fast: "Priority Fast-Track (+30%)",
        estimateTotal: "Estimated Investment Benchmark:",
        sarApprox: "SAR approx.",
        egpApprox: "EGP approx.",
        bookBtn: "Confirm & Initiate on WhatsApp",
      },
    },
    academy: {
      kicker: "Cultivating Elite Digital Talent",
      heading: "Duck Academy for Digital Excellence",
      subtitle: "Industry-accredited, intensive training programs preparing you for top-tier agency roles and high-earning freelance careers.",
      enrollBtn: "Enroll in Program Now",
      certifiedBadge: "Accredited Certificate with Real Client Practicums",
      categories: {
        all: "All Courses",
        design: "Graphic Design",
        tech: "Web & UI/UX Design",
        languages: "Language Courses",
      },
      courses: [
        {
          id: "graphic-design",
          category: "design",
          title: "Professional Graphic Design Diploma",
          desc: "Mastery of Photoshop, Illustrator, corporate brand identity, and high-impact social media creatives.",
          oldPrice: "$465",
          price: "$130",
          discount: "72% OFF",
          features: [
            "Complete Photoshop & Illustrator mastery from novice to expert",
            "High-conversion performance ad creative and poster design",
            "Brand identity systems & comprehensive Brand Guidelines crafting",
            "Hands-on real client practicums building a stellar portfolio",
          ],
        },
        {
          id: "web-design",
          category: "tech",
          title: "Modern Web Design — Web Design",
          desc: "Mastering modern website interface design and UX architecture adhering to international standards.",
          oldPrice: "$344",
          price: "$155",
          discount: "55% OFF",
          features: [
            "Advanced interactive prototyping in Figma & component auto-layout",
            "Responsive design principles across all mobile and desktop viewports",
            "Conversion rate optimization (CRO) & customer journey architecture",
            "Developer handoff documentation and SVG/code asset export",
          ],
        },
        {
          id: "web-development",
          category: "tech",
          title: "Full-Stack Web Engineering — Web Development",
          desc: "Engineering modern interactive web applications and e-commerce stores from ground zero.",
          oldPrice: "$200",
          price: "$150",
          discount: "25% OFF",
          features: [
            "Mastery of HTML5, modern CSS3, and modern JavaScript (ES6+)",
            "Building dynamic interactive web applications & connecting APIs",
            "Complete e-commerce stores with database and payment architectures",
            "Cloud production deployments and performance SEO optimization",
          ],
        },
        {
          id: "ui-ux",
          category: "tech",
          title: "UI/UX Product Experience — UI/UX Design",
          desc: "User behavioral research, wireframing, high-fidelity prototypes, and comprehensive design systems.",
          oldPrice: "$160",
          price: "$120",
          discount: "25% OFF",
          features: [
            "User behavior research, empathy mapping, and user journeys",
            "Wireframing, usability benchmarking, and accessibility standards",
            "Architecting and governing unified design systems in Figma",
            "Micro-interactions, state logic, and clickable executive prototypes",
          ],
        },
        {
          id: "english",
          category: "languages",
          title: "Interactive English Language Course",
          desc: "Accelerated spoken English fluency, business vocabulary, and global marketing communication via live Zoom sessions.",
          oldPrice: "$60",
          price: "$30",
          discount: "$30 / Level",
          features: [
            "Live interactive spoken conversational sessions via Zoom",
            "Business communication, digital marketing terminology & interviews",
            "Accent reduction, phonetics, and building confidence in speaking",
            "Continuous level assessments and accredited performance metrics",
          ],
        },
        {
          id: "german",
          category: "languages",
          title: "German Language Course (Deutsch)",
          desc: "Comprehensive German language training from A1 through B2 tailored for international career and study opportunities.",
          oldPrice: "$70",
          price: "$35",
          discount: "$35 / Level",
          features: [
            "Full grammar and conversational mastery from A1 to B2 level",
            "Exam preparation for official Goethe-Zertifikat certifications",
            "Interactive live Zoom classrooms with permanent session recordings",
            "Equipping you for European employment, relocation, and daily dialogue",
          ],
        },
        {
          id: "chinese",
          category: "languages",
          title: "Mandarin Chinese Language Course",
          desc: "Learn conversational Mandarin Chinese, business terminology, and factory negotiation for trade and import.",
          oldPrice: "$100",
          price: "$50",
          discount: "$50 / Level",
          features: [
            "Chinese phonetics, Pinyin pronunciation, and basic character logic",
            "Commercial trade vocabulary for negotiating with Chinese suppliers",
            "Engaging live Zoom instruction with seasoned native-fluent tutors",
            "Practical conversational drills for international trade exhibitions",
          ],
        },
      ],
      features: [
        {
          title: "Accredited Professional Credentials",
          desc: "Verified certifications demonstrating proven competence to premier regional employers.",
        },
        {
          title: "100% Real-World Project Practicums",
          desc: "You graduate with a live portfolio of verified client projects, not dry theoretical slides.",
        },
        {
          title: "Direct Mentorship from Senior Duck Specialists",
          desc: "One-on-one code and design reviews with the actual creative directors behind Duck's campaigns.",
        },
      ],
    },
    booking: {
      kicker: "Study System, Booking & Payment",
      heading: "Official Registration & Payment Hub",
      subtitle: "Flexible live Zoom interactive learning with direct bank transfer and instant receipt confirmation.",
      studySystem: {
        title: "Academy Learning Experience",
        badge: "Accredited Virtual Campus",
        points: [
          "All courses are conducted 100% live and interactive via Zoom Meeting.",
          "Lifetime access to curriculum recordings, source assets, and student portals.",
          "Continuous instructor support and technical mentorship throughout your journey.",
          "Permanent review privileges to revisit lectures and update skills anytime.",
        ],
      },
      bankTransfer: {
        title: "Official Payment Methods — Bank Wire",
        badge: "Verified Corporate Account",
        holderLabel: "Account Holder Name:",
        holderName: "Islam Mohamed Abdelmohsen Mohamed",
        accountLabel: "Bank Account Number:",
        accountNumber: "4133012119700900016",
        copyBtn: "Copy Account Number",
        copiedBtn: "Copied Successfully!",
        instruction: "Please wire course fees to the designated corporate bank account above, then upload a clear receipt screenshot below to immediately verify your enrollment.",
      },
      receiptUpload: {
        title: "Submit Payment Proof & Confirm Enrollment",
        badge: "Fast-Track Verification",
        subtitle: "Bank Transfer Screenshot or Wire Confirmation",
        dropzoneText: "Drag and drop your payment receipt here, or click to browse",
        dropzoneHint: "Supports JPG, PNG, WebP or PDF (up to 10MB)",
        nameLabel: "Full Student Name:",
        namePlaceholder: "Enter your legal name as it should appear on your certificate...",
        phoneLabel: "WhatsApp Contact Number:",
        phonePlaceholder: "e.g. +201064544080 or +966579398098",
        courseLabel: "Select Course or Package Track:",
        submitBtn: "Submit Payment Receipt & Reserve Seat",
        note: "Upon receipt submission, the Duck academic admissions team immediately validates the transaction and provisions your student access.",
        successTitle: "Payment Proof Received Successfully!",
        successDesc: "Thank you for joining Duck Academy! Our admissions team is validating your bank transfer and will send your live Zoom credentials via WhatsApp within minutes.",
        waConfirmBtn: "Instant WhatsApp Confirmation",
      },
    },
    portfolio: {
      kicker: "Portfolio & Case Studies",
      heading: "Featured Work by",
      headingHighlight: "Duck Agency",
      subtitle: "Discover how we engineered decisive market impact for leading organizations, celebrities, and hyper-growth brands.",
      filterAll: "All Projects",
      filterSocial: "Social Media",
      filterVideo: "Video & Reels",
      filterDesign: "Graphic Design",
      filterBranding: "Brand Identity",
      filterCelebrity: "Celebrity Pages",
      filterWeb: "Websites & Stores",
      viewProjectBtn: "View Project Blueprint",
      ctaButton: "Scale Your Brand With Us",
      items: [
        {
          id: "brand-1",
          title: "Comprehensive Corporate Brand Identity for Alpha Engineering",
          category: "branding",
          client: "Alpha Engineering & Infrastructure Consortium",
          metric: "+240%",
          metricLabel: "B2B Contract Acquisition Rate",
          desc: "Architected primary brand insignia, multi-variant mark, full Brand Guidelines manual, stationery suite, and conference collateral.",
          tags: ["Brand Identity", "Logo Architecture", "Guidelines", "Stationery"],
        },
        {
          id: "social-1",
          title: "Scaling Social Presence for Luxury Riyadh Fashion Label",
          category: "social",
          client: "Raya Haute Couture (Riyadh, KSA)",
          metric: "+4.2M",
          metricLabel: "High-Intent Regional Reach",
          desc: "Full-funnel monthly content calendar, active community engagement, cinematic carousel designs, and conversion campaign scaling.",
          tags: ["Social Media", "Instagram", "TikTok", "Content Strategy"],
        },
        {
          id: "video-1",
          title: "High-Octane Commercial Reels Series for Smart Logistics App",
          category: "video",
          client: "Zaad Express Logistics Platform",
          metric: "8.5x",
          metricLabel: "Return on Advertising Spend (ROAS)",
          desc: "High-retention video Reels, dynamic sound design, kinetic typography, and high-CTR visual hooks optimized for mobile screens.",
          tags: ["Commercial Video", "Reels", "Sound Design", "Performance Ads"],
        },
        {
          id: "design-1",
          title: "Integrated Visual Campaigns for International Real Estate Expo",
          category: "design",
          client: "City Edge Real Estate Investment",
          metric: "+680",
          metricLabel: "Qualified In-Person Inquiries",
          desc: "Engineered multi-channel digital ad suites, large-format event backdrops, project catalogs, and VIP investor invitations.",
          tags: ["Ad Design", "Event Collateral", "Catalogs", "Brochures"],
        },
        {
          id: "celeb-1",
          title: "Personal Brand Scaling & Representation for Tech Creator",
          category: "celebrity",
          client: "Prominent Business & Tech Influencer (Cairo / Dubai)",
          metric: "+850K",
          metricLabel: "Verified New Followers in 6 Months",
          desc: "Formulated viral personal brand architecture, daily production pipelines, sponsor negotiations, and proactive PR moderation.",
          tags: ["Personal Branding", "Public Figures", "Sponsorships", "PR"],
        },
        {
          id: "web-1",
          title: "Next.js High-Speed Cloud Storefront for Global Retailer",
          category: "web",
          client: "Luminous International Retail Group",
          metric: "+320%",
          metricLabel: "Checkout Conversion Rate (CRO)",
          desc: "Human-centered UI/UX prototyping in Figma coupled with sub-second Next.js architecture integrated with localized GCC/Egypt payment gateways.",
          tags: ["E-Commerce", "UI/UX", "Next.js", "Payment Gateways"],
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
        "Social Media & Corporate Pages",
        "Video Editing & Commercial Reels",
        "Creative Graphic Design & Print",
        "Corporate Brand Identity & Guidelines",
        "Celebrity & Influencer Management",
        "Turnkey Monthly Growth Packages",
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
