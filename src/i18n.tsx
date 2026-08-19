import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";
export type Dir = "ltr" | "rtl";

const en = {
  brand: { name: "SANAD", sub: "BUSINESS SOLUTIONS", tagline: "The support your business stands on." },
  nav: { home: "Home", services: "Services", about: "About Us", contact: "Contact", cta: "Start a Project" },
  hero: {
    eyebrow: "Riyadh · Jeddah · Dammam — Kingdom of Saudi Arabia",
    titleA: "We carry the",
    titleB: "operational weight,",
    titleC: "so you carry the vision.",
    lede: "SANAD integrates logistics, fleet management, customs clearance, receivables collection, BPO and corporate support under one accountable partner — built for the Saudi market, fluent in its platforms and regulations.",
    ctaPrimary: "Explore Our Services",
    ctaSecondary: "Talk on WhatsApp",
    chips: ["CR & VAT registered", "Bilingual EN / AR team", "HQ — Olaya, Riyadh"],
    cardShipment: "Shipment SAN-2481",
    cardShipmentStatus: "Cleared — Jeddah Islamic Port",
    cardFleet: "Fleet on duty",
    cardFleetStatus: "vehicles under GPS — live",
    cardAr: "Collections batch",
    cardArStatus: "collected this week",
    mapCaption: "Live coverage across the Kingdom",
    scrollCue: "Scroll",
  },
  stats: [
    { value: 6, suffix: "", label: "Integrated service lines" },
    { value: 12, suffix: "+", label: "Cities & ports covered" },
    { value: 4, suffix: "h", label: "Average response time" },
    { value: 24, suffix: "/7", label: "Shipment visibility" },
  ],
  ticker: [
    "Logistics",
    "Fleet Management",
    "Customs Clearance",
    "Receivables & Collection",
    "Business Outsourcing",
    "Corporate Support",
  ],
  util: {
    cities: "Riyadh · Jeddah · Dammam",
    hours: "Sun–Thu · 8:00 – 17:00 KSA",
    requestQuote: "Request a Proposal",
  },
  systems: {
    eyebrow: "Compliance by design",
    title: "Built inside the Kingdom's official systems",
    note: "Every workflow runs through Saudi government platforms — no shortcuts, no grey areas, full audit trail.",
    items: [
      { title: "FASAH", lines: "Customs & port operations" },
      { title: "ZATCA", lines: "E-invoicing Phase 2 ready" },
      { title: "Qiwa · Mudad", lines: "Workforce & wage compliance" },
      { title: "Muqeem", lines: "Iqama & visa administration" },
      { title: "PDPL", lines: "Data privacy by design" },
    ],
  },
  clients: {
    eyebrow: "Trusted by operations teams across the Kingdom",
    names: [
      "Najd Foods Co.",
      "Al Waha Retail Group",
      "Gulf Steel Industries",
      "Oasis Pharma",
      "Riyadh Build Contracting",
      "Sahara Auto Distribution",
      "Madinah Cold Chain",
      "Dammam Marine Supplies",
    ],
    more: "…and growing partnerships across food, retail, construction, pharma and industry.",
  },
  servicesIntro: {
    eyebrow: "What we do",
    title: "Six disciplines. One accountable partner.",
    lede: "Every service below runs on the same operating discipline: clear ownership, documented SLAs and reporting you can actually read. Pick one — or bundle them into a single contract.",
    scope: "scope items",
    explore: "View full scope",
  },
  services: [
    {
      id: "logistics",
      name: "Logistics Services",
      short: "End-to-end movement of goods — planned, tracked and reported.",
      intro: "From first mile to final delivery, we plan, execute and report on the movement of your goods. One logistics desk that owns the carriers, the warehouse and the paperwork — and answers for the result.",
      items: [
        "Transportation & distribution management",
        "Domestic & international shipment coordination",
        "Warehouse & inventory management",
        "Shipment tracking until final delivery",
        "Supplier & carrier management",
        "Distribution route planning & optimization",
        "Logistics performance reporting",
        "Returns management",
      ],
      meta: ["Nationwide coverage", "Live tracking", "KPI reporting"],
    },
    {
      id: "fleet",
      name: "Fleet & Vehicle Management",
      short: "Your fleet, fully administered — registration to fuel reports.",
      intro: "We run the full lifecycle of your vehicles: government procedures, insurance, inspection, maintenance and fuel — wrapped in utilization and consumption reports that show exactly where every riyal goes.",
      items: [
        "Full fleet management",
        "Vehicle registration issuance & renewal",
        "Vehicle insurance renewal",
        "Periodic vehicle inspection management",
        "Preventive maintenance scheduling",
        "Fuel management",
        "Traffic violation monitoring",
        "Lease & fleet rental management",
        "GPS vehicle tracking",
        "Vehicle utilization & fuel consumption reporting",
      ],
      meta: ["Government procedures", "GPS tracking", "Cost control"],
    },
    {
      id: "customs",
      name: "Customs Clearance Services",
      short: "Imports and exports cleared fast, documented right.",
      intro: "Our clearance team prepares the documentation, calculates duties and taxes, and follows every shipment through to customs release — representing you before the authorities at ports, airports and land crossings.",
      items: [
        "Managing import & export clearance procedures",
        "Preparing customs documentation",
        "Coordinating with customs authorities, ports & airports",
        "Issuing Certificates of Origin",
        "Customs release follow-up",
        "Customs duties & tax calculations",
        "Representing clients before customs authorities",
        "Coordinating with freight forwarders & customs brokers",
      ],
      meta: ["All KSA ports", "FASAH-fluent", "Duty optimization"],
    },
    {
      id: "collections",
      name: "Accounts Receivable & Collection",
      short: "Outstanding invoices pursued professionally, relationships intact.",
      intro: "We chase what you are owed with firm professionalism: structured reminders, negotiated payment plans, reconciliation and aging reports that give management a clear picture of every overdue riyal.",
      items: [
        "Collecting outstanding customer payments",
        "Monitoring overdue invoices",
        "Sending payment reminders",
        "Preparing Accounts Receivable Aging Reports",
        "Communicating with customers",
        "Developing payment plans",
        "Account reconciliation",
        "Monitoring cheques & bank transfers",
        "Periodic management reports",
      ],
      meta: ["Aging reports", "Payment plans", "Reconciliation"],
    },
    {
      id: "bpo",
      name: "Business Outsourcing (BPO)",
      short: "Back-office operations, run by our teams under your standards.",
      intro: "Hand us the repetitive engine room of your business — customer service, contracts, correspondence, data and documents — and our trained teams run it under your standards, at a fraction of the fixed cost.",
      items: [
        "Contract management",
        "Customer service operations",
        "Administrative correspondence management",
        "Executive secretarial services",
        "Data entry services",
        "Electronic document management & archiving",
        "Administrative support services",
      ],
      meta: ["Trained teams", "Quality SLAs", "Scale on demand"],
    },
    {
      id: "corporate",
      name: "Corporate Support Services",
      short: "Licenses, government platforms and official paperwork — handled.",
      intro: "From commercial registrations to Iqamas and government tenders, we manage your presence on every official platform and prepare the correspondence that keeps your entity in perfect standing.",
      items: [
        "Issuing & renewing business licenses",
        "Managing government platforms",
        "Residence permit (Iqama) & visa administration",
        "Preparing official correspondence",
        "Government contract administration",
        "Supplier & client relationship management",
      ],
      meta: ["Qiwa · Mudad · Muqeem", "License renewals", "Tender support"],
    },
  ],
  why: {
    eyebrow: "Why SANAD",
    title: "A partner built to be leaned on.",
    lede: "SANAD exists for one reason: Saudi businesses lose too many hours to operations that should be someone else's job. We are that someone — structured, measurable and accountable.",
    cta: "Meet the team behind it",
    points: [
      {
        title: "One accountable partner",
        text: "A single contract and one operations desk covering six disciplines. No finger-pointing between vendors — the buck stops with us.",
      },
      {
        title: "Deep local fluency",
        text: "Born in the Saudi market. We speak the language of Qiwa, Mudad, Muqeem, FASAH and ZATCA — and we move inside them daily.",
      },
      {
        title: "Visibility by default",
        text: "GPS-tracked fleets, live shipment status and dashboards you can open anytime. You always know where your business stands.",
      },
      {
        title: "Compliance by design",
        text: "Every procedure is built around current Saudi regulations, so renewals, clearances and filings happen before deadlines — not after fines.",
      },
      {
        title: "Scale without rebuild",
        text: "From five vehicles to five hundred, from one warehouse to a national network — our operating model scales with you.",
      },
      {
        title: "Reporting you can act on",
        text: "Monthly KPI packs, aging reports and cost analytics in plain language — decisions get made, not postponed.",
      },
    ],
    platforms: "Government platforms we operate daily:",
  },
  process: {
    eyebrow: "How we engage",
    title: "From first call to steady operations.",
    steps: [
      { title: "Discover", text: "We audit your current operations, volumes and pain points — free of charge." },
      { title: "Design", text: "A tailored scope, SLA matrix and pricing model, agreed before anything starts." },
      { title: "Operate", text: "Our teams take over, with a named account manager as your single point of contact." },
      { title: "Report", text: "Monthly KPI reviews and continuous optimization, in Arabic or English." },
    ],
  },
  testimonial: {
    quote: "We handed SANAD our fleet, our clearing and our collections in one quarter. For the first time, I see one report that tells me the truth about our operations.",
    author: "Chief Financial Officer",
    company: "FMCG distribution group — Riyadh",
    quote2: "Their aging reports changed how our board reads receivables. Collections doubled in two quarters — without losing a single customer.",
    author2: "Finance Director",
    company2: "Contracting group — Jeddah",
    sectorsTitle: "Trusted by operators across sectors",
  },
  sectors: [
    "Retail & E-commerce",
    "FMCG & Distribution",
    "Construction & Contracting",
    "Healthcare & Pharma",
    "Manufacturing",
    "Importers & Traders",
    "Hospitality & Catering",
    "Services & Consulting",
  ],
  ctaBand: {
    title: "Ready to set the weight down?",
    text: "Tell us what is slowing you down. We will come back within one business day with a clear point of view.",
    primary: "Request a Consultation",
    secondary: "WhatsApp us now",
  },
  about: {
    openerEyebrow: "About SANAD",
    openerTitle: "Sanad. The one you lean on.",
    openerLede: "In Arabic, sanad (سند) is more than support — it is the person or pillar that holds you up when the weight grows. That is not our slogan. It is our job description.",
    meaningTitle: "What a name carries",
    meaningText: "We chose our name before we chose our services. In Saudi business culture, your sanad is who you call when a shipment is stuck at the port, when thirty vehicles need renewal in the same month, when a government letter must be answered today. SANAD Business Solutions was founded to be that call — for companies that would rather grow than chase paperwork.",
    meaningWord: "سند",
    meaningDef: "sanad — noun: support, backing; the one who holds you up.",
    missionTitle: "Our mission",
    missionText: "To give Saudi businesses one trusted partner that carries the operational weight — logistics, fleet, compliance, money and paperwork — with the discipline of a large enterprise and the responsiveness of a founder-led team.",
    visionTitle: "Our vision",
    visionText: "To become the operating backbone of choice for mid-market companies across the Kingdom, contributing — service by service — to the ambitions of Vision 2030.",
    valuesEyebrow: "What we stand on",
    valuesTitle: "Four commitments, kept daily.",
    values: [
      { title: "Reliability", text: "Deadlines are promises. We staff, system and double-check so they are kept." },
      { title: "Ownership", text: "If it carries your name, it carries ours. We fix problems, we do not forward them." },
      { title: "Transparency", text: "One honest report beats ten polished ones. You see what we see — costs, delays and all." },
      { title: "Agility", text: "Regulations change, volumes spike, plans shift. Our teams are built to pivot within hours, not weeks." },
    ],
    numbersTitle: "SANAD in numbers",
    numbers: [
      { value: 25, suffix: "+", label: "Operations & clearance specialists" },
      { value: 6, suffix: "", label: "Service lines under one roof" },
      { value: 4, suffix: "", label: "Operational hubs: Riyadh · Jeddah · Dammam · North" },
      { value: 2, suffix: "", label: "Working languages: Arabic & English" },
    ],
    journeyEyebrow: "Our journey",
    journeyTitle: "Young company, old discipline.",
    journey: [
      { year: "2024", title: "Founded in Riyadh", text: "SANAD launches from Olaya with logistics and corporate support as its first two desks." },
      { year: "2024", title: "Inside the official systems", text: "FASAH, ZATCA, Qiwa and Mudad workflows go live — every engagement runs on government platforms from day one." },
      { year: "2025", title: "Fleet & clearance scale-up", text: "The fleet desk passes fifty vehicles under full management; customs clearance opens at Jeddah Islamic Port and Dammam." },
      { year: "2025", title: "Three operational hubs", text: "Jeddah and Dammam offices open, covering the Western and Eastern corridors end to end." },
      { year: "2026", title: "BPO & collections desk", text: "Accounts receivable and business outsourcing join the portfolio — six lines, one contract." },
    ],
    whyEyebrow: "Why choose us",
    whyTitle: "Six reasons companies switch to SANAD.",
    whyLede: "Not because we are the biggest — because we are the most accountable.",
    closingTitle: "The best way to know your sanad is to test it.",
    closingText: "Start with one service line. Judge the reporting, the responsiveness, the calm. Most clients add the rest within a year.",
    closingCta: "Start the conversation",
  },
  servicesPage: {
    openerEyebrow: "Our Services",
    openerTitle: "Everything behind your business, handled.",
    openerLede: "Six integrated practices. Engage any one of them alone — or bundle them into one contract with one account manager and one monthly report.",
    indexTitle: "In this page",
    fullScope: "Full scope",
    collapse: "Close",
    discuss: "Discuss this service",
    closingTitle: "Not sure where to start?",
    closingText: "Describe your operation in one call. We will map which of the six lines removes the most weight — free of charge.",
    closingCta: "Book a free assessment",
  },
  contact: {
    openerEyebrow: "Contact",
    openerTitle: "Let's take the weight off.",
    openerLede: "One call or one message is enough. We respond within one business day — usually faster.",
    formTitle: "Send us a brief",
    formText: "Tell us what is slowing you down and we will reply with a point of view, not a sales pitch.",
    name: "Full name",
    namePh: "e.g. Mohammed Al-Otaibi",
    company: "Company",
    companyPh: "Company / establishment name",
    email: "Email",
    emailPh: "name@company.sa",
    phone: "Phone (optional)",
    phonePh: "05XXXXXXXX",
    service: "Service of interest",
    serviceAny: "Not sure yet — general inquiry",
    message: "How can we help?",
    messagePh: "Describe your current setup and what you would like us to carry…",
    submit: "Send Message",
    sending: "Sending…",
    or: "or send the same brief via",
    waSend: "Send via WhatsApp",
    successTitle: "Received — thank you.",
    successText: "Your reference is {ref}. Our team will contact you within one business day.",
    successAgain: "Send another message",
    errName: "Please enter your name.",
    errEmail: "Please enter a valid email address.",
    errMsg: "Please tell us briefly how we can help.",
    channelsTitle: "Direct channels",
    callUs: "Call us",
    mailUs: "Email us",
    whatsapp: "WhatsApp",
    waAvailable: "Sun–Thu, 8:00–18:00 (KSA)",
    hq: "Headquarters",
    hqAddr: "Olaya District, King Fahd Road, Riyadh, Kingdom of Saudi Arabia",
    hours: "Working hours",
    hoursValue: "Sunday – Thursday · 8:00 – 18:00",
    mapTitle: "Find us in Riyadh",
    mapNote: "Interactive map launches with our website's next release — until then, our team will happily share live directions.",
    coords: "24.7136° N · 46.6753° E",
    officesTitle: "Three hubs, one standard",
    offices: [
      { city: "Riyadh", role: "Headquarters", addr: "Olaya District, King Fahd Road", phone: "+966 55 000 0000" },
      { city: "Jeddah", role: "Western Region Office", addr: "Al Salamah District, Prince Sultan Road", phone: "+966 55 000 0001" },
      { city: "Dammam", role: "Eastern Region Desk", addr: "Al Faisaliyah District, King Saud Road", phone: "+966 55 000 0002" },
    ],
    legalTitle: "Registered entity",
    legalText: "SANAD Business Solutions — Commercial Registration 1010XXXXXX · VAT 3XXXXXXXXXXX0003 · Riyadh, KSA. Final numbers are issued at launch and updated here.",
    faqTitle: "Before you write — quick answers",
    faq: [
      {
        q: "How does an engagement typically start?",
        a: "With a free operational assessment. We review your volumes, current vendors and pain points, then propose a scoped agreement with clear SLAs before anything begins.",
      },
      {
        q: "Can we bundle several services under one contract?",
        a: "Yes — that is our preferred model. A bundled engagement means one account manager, one monthly KPI report and priority scheduling across all service lines.",
      },
      {
        q: "Do you cover all regions of Saudi Arabia?",
        a: "Our hubs are in Riyadh, Jeddah and Dammam, and we operate through vetted carrier and agent networks across the Kingdom's main cities, ports and land crossings.",
      },
      {
        q: "Is your team bilingual?",
        a: "Fully. All reporting, correspondence and government-platform work is delivered in Arabic and English, and you choose the language of every meeting.",
      },
    ],
  },
  footer: {
    desc: "Integrated business services from the heart of Riyadh — logistics, fleet, customs, collections, BPO and corporate support under one accountable partner.",
    quickTitle: "Quick Links",
    servicesTitle: "Services",
    contactTitle: "Contact",
    followTitle: "Follow us",
    rights: "All rights reserved.",
    cr: "CR 1010XXXXXX · VAT 3XXXXXXXXXXXX03",
    vision: "Proudly contributing to Saudi Vision 2030",
    madeIn: "Built in Riyadh",
  },
  waFloat: "Chat with SANAD on WhatsApp",
  waText: "Hello SANAD 👋 — I would like to know more about your services.",
};

const ar: typeof en = {
  brand: { name: "سند", sub: "لحلول الأعمال", tagline: "السند الذي تعتمد عليه أعمالك." },
  nav: { home: "الرئيسية", services: "خدماتنا", about: "من نحن", contact: "اتصل بنا", cta: "ابدأ مشروعك" },
  hero: {
    eyebrow: "الرياض · جدة · الدمام — المملكة العربية السعودية",
    titleA: "نحمل عنك",
    titleB: "ثقل العمليات،",
    titleC: "لتحمل أنت الرؤية.",
    lede: "تجمع «سند» الخدمات اللوجستية وإدارة الأسطول والتخليص الجمركي وتحصيل الذمم وتعهيد الأعمال والدعم المؤسسي تحت مظلة شريك واحد مسؤول — وُلد في السوق السعودي ويتقن منصاته وأنظمته.",
    ctaPrimary: "استكشف خدماتنا",
    ctaSecondary: "تواصل عبر واتساب",
    chips: ["سجل تجاري وزكاة ودخل نشط", "فريق ثنائي اللغة", "المقر الرئيسي — العليا، الرياض"],
    cardShipment: "شحنة SAN-2481",
    cardShipmentStatus: "مُخلَّصة — ميناء جدة الإسلامي",
    cardFleet: "الأسطول في الخدمة",
    cardFleetStatus: "مركبة مُتبَّعة عبر GPS — مباشر",
    cardAr: "دفعة تحصيل",
    cardArStatus: "تم تحصيلها هذا الأسبوع",
    mapCaption: "تغطية حيّة في أنحاء المملكة",
    scrollCue: "مرّر للأسفل",
  },
  stats: [
    { value: 6, suffix: "", label: "خطوط خدمية متكاملة" },
    { value: 12, suffix: "+", label: "مدينة وميناء مشمولة بالتغطية" },
    { value: 4, suffix: " س", label: "متوسط زمن الاستجابة" },
    { value: 24, suffix: "/7", label: "متابعة الشحنات على مدار الساعة" },
  ],
  ticker: [
    "الخدمات اللوجستية",
    "إدارة الأسطول",
    "التخليص الجمركي",
    "الذمم والتحصيل",
    "تعهيد الأعمال",
    "الدعم المؤسسي",
  ],
  util: {
    cities: "الرياض · جدة · الدمام",
    hours: "الأحد–الخميس · 8:00 – 17:00 بتوقيت السعودية",
    requestQuote: "اطلب عرض سعر",
  },
  systems: {
    eyebrow: "الامتثال منذ التصميم",
    title: "مبنيون داخل الأنظمة الرسمية للمملكة",
    note: "كل إجراء يمر عبر المنصات الحكومية السعودية — بلا اختصارات ولا مناطق رمادية، وبسجل تدقيق كامل.",
    items: [
      { title: "فسح", lines: "عمليات الجمارك والموانئ" },
      { title: "زاتكا", lines: "الجاهزية للفوترة الإلكترونية" },
      { title: "قوى · مدد", lines: "التزامات القوى العاملة والأجور" },
      { title: "مقيم", lines: "إدارة الإقامات والتأشيرات" },
      { title: "PDPL", lines: "خصوصية البيانات منذ التصميم" },
    ],
  },
  clients: {
    eyebrow: "ثقة فرق التشغيل في مختلف أنحاء المملكة",
    names: [
      "شركة نجد للأغذية",
      "مجموعة الواحة للتجزئة",
      "الخليج للصناعات الحديدية",
      "واحة فارما",
      "الرياض للمقاولات",
      "صحارى لتوزيع السيارات",
      "المدينة للسلسلة الباردة",
      "الدمام للتوريدات البحرية",
    ],
    more: "…وشراكات تتوسع في الأغذية والتجزئة والإنشاءات والأدوية والصناعة.",
  },
  servicesIntro: {
    eyebrow: "ماذا نقدم",
    title: "ستة تخصصات. شريك واحد مسؤول.",
    lede: "كل خدمة أدناه تعمل بالانضباط نفسه: ملكية واضحة، اتفاقيات مستوى خدمة موثّقة، وتقارير تستطيع قراءتها فعلًا. اختر خدمة واحدة — أو اجمعها كلها في عقد واحد.",
    scope: "بند تشغيلي",
    explore: "عرض النطاق الكامل",
  },
  services: [
    {
      id: "logistics",
      name: "الخدمات اللوجستية",
      short: "حركة بضائعك من البداية إلى التسليم — مخططة ومُتبَّعة وموثّقة.",
      intro: "من الميل الأول إلى التسليم النهائي، نخطط وننفذ ونرفع تقارير حركة بضائعك. مكتب لوجستي واحد يملك إدارة الناقلين والمستودعات والمستندات — ويتحمل مسؤولية النتيجة.",
      items: [
        "إدارة النقل والتوزيع",
        "تنسيق الشحنات المحلية والدولية",
        "إدارة المستودعات والمخزون",
        "تتبّع الشحنات حتى التسليم النهائي",
        "إدارة الموردين والناقلين",
        "تخطيط مسارات التوزيع وتحسينها",
        "تقارير الأداء اللوجستي",
        "إدارة المرتجعات",
      ],
      meta: ["تغطية على مستوى المملكة", "تتبّع مباشر", "تقارير مؤشرات أداء"],
    },
    {
      id: "fleet",
      name: "إدارة الأسطول والمركبات",
      short: "أسطولك مُدار بالكامل — من الاستمارة إلى تقارير الوقود.",
      intro: "ندير دورة حياة مركباتك كاملة: الإجراءات الحكومية، التأمين، الفحص الدوري، الصيانة والوقود — ضمن تقارير استخدام واستهلاك تُظهر أين يذهب كل ريال بدقة.",
      items: [
        "الإدارة الشاملة للأسطول",
        "إصدار وتجديد استمارات المركبات",
        "تجديد تأمين المركبات",
        "إدارة الفحص الدوري للمركبات",
        "جدولة الصيانة الوقائية",
        "إدارة الوقود",
        "متابعة المخالفات المرورية",
        "إدارة التأجير وتأجير الأساطيل",
        "تتبّع المركبات عبر الأقمار الصناعية (GPS)",
        "تقارير استخدام المركبات واستهلاك الوقود",
      ],
      meta: ["إجراءات حكومية", "تتبّع GPS", "ضبط التكاليف"],
    },
    {
      id: "customs",
      name: "خدمات التخليص الجمركي",
      short: "استيرادك وتصديرك يخلَص بسرعة، وبأوراق سليمة.",
      intro: "فريق التخليص لدينا يُعدّ المستندات ويحتسب الرسوم والضرائب ويتابع كل شحنة حتى الإفراج الجمركي — ويمثلك أمام الجهات المعنية في الموانئ والمطارات والمنافذ البرية.",
      items: [
        "إدارة إجراءات التخليص للاستيراد والتصدير",
        "إعداد المستندات الجمركية",
        "التنسيق مع الجهات الجمركية والموانئ والمطارات",
        "إصدار شهادات المنشأ",
        "متابعة الإفراج الجمركي",
        "احتساب الرسوم الجمركية والضرائب",
        "تمثيل العملاء أمام الجهات الجمركية",
        "التنسيق مع وكلاء الشحن والمخلصين الجمركيين",
      ],
      meta: ["جميع منافذ المملكة", "إتقان منصة فسح", "تحسين الرسوم"],
    },
    {
      id: "collections",
      name: "الذمم المدينة والتحصيل",
      short: "ملاحقة مستحقاتك باحترافية — وعلاقاتك سليمة.",
      intro: "نطالب بمستحقاتك بحزم واحتراف: تذكيرات منظمة، خطط سداد مُتفاوض عليها، مطابقات وتقارير أعمار ذمم تمنح الإدارة صورة واضحة عن كل ريال متأخر.",
      items: [
        "تحصيل المدفوعات المستحقة من العملاء",
        "متابعة الفواتير المتأخرة",
        "إرسال تذكيرات السداد",
        "إعداد تقارير أعمار الذمم المدينة",
        "التواصل مع العملاء",
        "وضع خطط السداد",
        "مطابقة الحسابات",
        "متابعة الشيكات والتحويلات البنكية",
        "تقارير إدارية دورية",
      ],
      meta: ["تقارير أعمار الذمم", "خطط سداد", "مطابقة حسابات"],
    },
    {
      id: "bpo",
      name: "تعهيد الأعمال (BPO)",
      short: "عملياتك المساندة يديرها فريقنا وفق معاييرك.",
      intro: "سلّمنا غرفة المحركات المتكررة في أعمالك — خدمة العملاء، العقود، المراسلات، البيانات والوثائق — لتديرها فرق مدرَّبة وفق معاييرك وبتكلفة تشغيلية أقل بكثير.",
      items: [
        "إدارة العقود",
        "تشغيل خدمات العملاء",
        "إدارة المراسلات الإدارية",
        "خدمات السكرتارية التنفيذية",
        "خدمات إدخال البيانات",
        "إدارة الوثائق الإلكترونية وأرشفتها",
        "خدمات الدعم الإداري",
      ],
      meta: ["فرق مدرَّبة", "اتفاقيات جودة", "توسّع عند الطلب"],
    },
    {
      id: "corporate",
      name: "خدمات الدعم المؤسسي",
      short: "التراخيص والمنصات الحكومية والمكاتبات الرسمية — مُنجزة.",
      intro: "من السجل التجاري إلى الإقامات والمناقصات الحكومية، ندير حضورك على كل منصة رسمية ونُعدّ المكاتبات التي تبقي منشأتك في وضع نظامي سليم دائمًا.",
      items: [
        "إصدار وتجديد التراخيص التجارية",
        "إدارة منصات الحكومة الإلكترونية",
        "إدارة الإقامات والتأشيرات",
        "إعداد المراسلات الرسمية",
        "إدارة العقود الحكومية",
        "إدارة علاقات الموردين والعملاء",
      ],
      meta: ["قوى · مدد · مقيم", "تجديد التراخيص", "دعم المناقصات"],
    },
  ],
  why: {
    eyebrow: "لماذا سند؟",
    title: "شريك خُلق ليكون سندًا.",
    lede: "وُجدت «سند» لسبب واحد: الشركات السعودية تهدر ساعات طويلة في تشغيليات يفترض أن تكون مهمة طرف آخر. نحن ذلك الطرف — بهيكل واضح، وقياس دقيق، ومساءلة كاملة.",
    cta: "تعرّف على الفريق",
    points: [
      {
        title: "شريك واحد مسؤول",
        text: "عقد واحد ومكتب تشغيل واحد يغطي ستة تخصصات. لا تبادل للاتهامات بين الموردين — المسؤولية تنتهي عندنا.",
      },
      {
        title: "إلمام عميق بالسوق المحلي",
        text: "وُلدنا في السوق السعودي. نتحدث لغة «قوى» و«مدد» و«مقيم» و«فسح» و«زاتكا» — ونتحرك داخلها يوميًا.",
      },
      {
        title: "وضوح كامل بشكل افتراضي",
        text: "أساطيل مُتبَّعة عبر GPS، وحالة شحنات مباشرة، ولوحات متابعة تفتحها في أي وقت. تعرف دائمًا أين تقف أعمالك.",
      },
      {
        title: "الامتثال جزء من التصميم",
        text: "كل إجراء مبني على الأنظمة السعودية السارية، فتتم التجديدات والتخليصات قبل المواعيد النهائية — لا بعد الغرامات.",
      },
      {
        title: "توسّع دون إعادة بناء",
        text: "من خمس مركبات إلى خمسمئة، ومن مستودع واحد إلى شبكة وطنية — نموذجنا التشغيلي يتوسع معك.",
      },
      {
        title: "تقارير تدفعك للقرار",
        text: "حزم مؤشرات أداء شهرية وتقارير أعمار ذمم وتحليلات تكاليف بلغة واضحة — فتُتخذ القرارات ولا تُؤجل.",
      },
    ],
    platforms: "منصات حكومية نعمل عليها يوميًا:",
  },
  process: {
    eyebrow: "كيف نعمل معك",
    title: "من أول اتصال إلى تشغيل مستقر.",
    steps: [
      { title: "الاكتشاف", text: "ندقق عملياتك الحالية وأحجامك ونقاط الألم لديك — دون أي رسوم." },
      { title: "التصميم", text: "نطاق مخصص ومصفوفة مؤشرات أداء ونموذج تسعير، يُتفق عليها قبل البدء." },
      { title: "التشغيل", text: "تتسلم فرقنا العمل، مع مدير حساب مسمى يكون نقطة تواصلك الوحيدة." },
      { title: "التقارير", text: "مراجعات مؤشرات أداء شهرية وتحسين مستمر — بالعربية أو الإنجليزية." },
    ],
  },
  testimonial: {
    quote: "سلّمنا «سند» أسطولنا وتخليصنا وتحصيلنا في ربع واحد. لأول مرة أرى تقريرًا واحدًا يقول الحقيقة عن عملياتنا.",
    author: "المدير المالي",
    company: "مجموعة توزيع سلع استهلاكية — الرياض",
    quote2: "تقارير أعمار الذمم غيّرت طريقة قراءة مجلس الإدارة للمستحقات. تضاعف التحصيل في ربعين — دون أن نخسر عميلًا واحدًا.",
    author2: "مدير مالي",
    company2: "مجموعة مقاولات — جدة",
    sectorsTitle: "ثقة مشغّلين من قطاعات مختلفة",
  },
  sectors: [
    "التجزئة والتجارة الإلكترونية",
    "السلع الاستهلاكية والتوزيع",
    "المقاولات والإنشاءات",
    "الرعاية الصحية والأدوية",
    "التصنيع",
    "الاستيراد والتجارة",
    "الضيافة والتموين",
    "الخدمات والاستشارات",
  ],
  ctaBand: {
    title: "جاهز لأن تضع الثقل عنا؟",
    text: "أخبرنا بما يعطّل نموّك، وسنعود إليك خلال يوم عمل واحد برؤية واضحة.",
    primary: "اطلب استشارة",
    secondary: "واتساب الآن",
  },
  about: {
    openerEyebrow: "من نحن",
    openerTitle: "سند. الذي تستند إليه.",
    openerLede: "في العربية، «السند» أكثر من دعم — إنه الشخص أو العمود الذي يمسك بك حين يثقل الحمل. هذه ليست شعاراتنا، بل وصفنا الوظيفي.",
    meaningTitle: "ما يحمله الاسم",
    meaningText: "اخترنا اسمنا قبل أن نختار خدماتنا. في ثقافة الأعمال السعودية، سندك هو من تتصل به حين تتعطل شحنة في الميناء، أو تحتاج ثلاثون مركبة إلى تجديد في الشهر نفسه، أو يجب الرد على خطاب حكومي اليوم قبل الغد. تأسست «سند لحلول الأعمال» لتكون تلك المكالمة — للشركات التي تفضل النمو على ملاحقة الأوراق.",
    meaningWord: "سند",
    meaningDef: "سند — اسم: الدعم والظهير؛ الذي يمسك بك.",
    missionTitle: "رسالتنا",
    missionText: "أن نمنح الشركات السعودية شريكًا واحدًا موثوقًا يحمل عنها ثقل التشغيل — لوجستيًا وأسطولًا وامتثالًا وتحصيلًا وأوراقًا — بانضباط المؤسسات الكبيرة واستجابة الفرق التي يقودها مؤسسوها.",
    visionTitle: "رؤيتنا",
    visionText: "أن نكون العمود التشغيلي المفضل للشركات المتوسطة في أنحاء المملكة، مسهمين — خدمةً خدمةً — في تحقيق مستهدفات رؤية 2030.",
    valuesEyebrow: "ما نقف عليه",
    valuesTitle: "أربعة التزامات نحفظها يوميًا.",
    values: [
      { title: "الموثوقية", text: "المواعيد وعود. نُجهّز الفرق والأنظمة والتدقيق المزدوج حتى تُحفظ." },
      { title: "المسؤولية", text: "ما يحمل اسمك يحمل اسمنا. نحل المشكلات ولا نمرّرها." },
      { title: "الشفافية", text: "تقرير صادق واحد خير من عشرة تقارير مُلمّعة. ترى ما نراه — التكاليف والتأخيرات وكل شيء." },
      { title: "المرونة", text: "الأنظمة تتغير والأحجام تقفز والخطط تنعطف. فرقنا مبنية لتغيّر الاتجاه خلال ساعات لا أسابيع." },
    ],
    numbersTitle: "سند بالأرقام",
    numbers: [
      { value: 25, suffix: "+", label: "أخصائي تشغيل وتخليص" },
      { value: 6, suffix: "", label: "خطوط خدمية تحت سقف واحد" },
      { value: 4, suffix: "", label: "مراكز تشغيل: الرياض · جدة · الدمام · الشمال" },
      { value: 2, suffix: "", label: "لغتا العمل: العربية والإنجليزية" },
    ],
    journeyEyebrow: "مسيرتنا",
    journeyTitle: "شركة فتية بانضباط عريق.",
    journey: [
      { year: "2024", title: "التأسيس في الرياض", text: "انطلقت سند من حي العليا بأول مكتبين: الخدمات اللوجستية والدعم المؤسسي." },
      { year: "2024", title: "داخل الأنظمة الرسمية", text: "تفعيل سير العمل على «فسح» و«زاتكا» و«قوى» و«مدد» — كل تعامل يمر عبر المنصات الحكومية من اليوم الأول." },
      { year: "2025", title: "توسّع الأسطول والتخليص", text: "تجاوز مكتب الأسطول خمسين مركبة تحت الإدارة الكاملة، وانفتح التخليص الجمركي على ميناء جدة الإسلامي والدمام." },
      { year: "2025", title: "ثلاثة محاور تشغيلية", text: "افتتاح مكتبي جدة والدمام لتغطية الممرين الغربي والشرقي من البداية إلى النهاية." },
      { year: "2026", title: "مكتبا التعهيد والتحصيل", text: "انضمام الذمم المدينة وخدمات التعهيد إلى المحفظة — ستة خطوط في عقد واحد." },
    ],
    whyEyebrow: "لماذا نحن",
    whyTitle: "ستة أسباب تجعل الشركات تنتقل إلى سند.",
    whyLede: "ليس لأننا الأكبر — بل لأننا الأكثر مساءلة.",
    closingTitle: "أفضل طريقة لمعرفة سندك هي أن تختبره.",
    closingText: "ابدأ بخط خدمي واحد. قيّم التقارير وسرعة الاستجابة والهدوء. غالبية عملائنا يضيفون البقية خلال عام.",
    closingCta: "ابدأ الحوار",
  },
  servicesPage: {
    openerEyebrow: "خدماتنا",
    openerTitle: "كل ما وراء أعمالك — مُدار.",
    openerLede: "ست ممارسات متكاملة. فعّل أيًا منها منفردة — أو اجمعها في عقد واحد مع مدير حساب واحد وتقرير شهري واحد.",
    indexTitle: "في هذه الصفحة",
    fullScope: "النطاق الكامل",
    collapse: "إغلاق",
    discuss: "ناقش هذه الخدمة",
    closingTitle: "غير متأكد من أين تبدأ؟",
    closingText: "صِف عملياتك في مكالمة واحدة، وسنحدد أي الخطوط الستة يرفع عنك الثقل الأكبر — دون رسوم.",
    closingCta: "احجز تقييمًا مجانيًا",
  },
  contact: {
    openerEyebrow: "تواصل معنا",
    openerTitle: "لنرفع الثقل عنك.",
    openerLede: "مكالمة واحدة أو رسالة واحدة تكفي. نرد خلال يوم عمل واحد — وغالبًا أسرع.",
    formTitle: "أرسل لنا موجزًا",
    formText: "أخبرنا بما يعطّلك وسنرد برؤية واضحة لا بعرض بيعي.",
    name: "الاسم الكامل",
    namePh: "مثال: محمد العتيبي",
    company: "الشركة",
    companyPh: "اسم الشركة / المؤسسة",
    email: "البريد الإلكتروني",
    emailPh: "name@company.sa",
    phone: "الجوال (اختياري)",
    phonePh: "05XXXXXXXX",
    service: "الخدمة المطلوبة",
    serviceAny: "لست متأكدًا — استفسار عام",
    message: "كيف يمكننا المساعدة؟",
    messagePh: "صِف وضعك الحالي وما تود أن نحمله عنك…",
    submit: "إرسال الرسالة",
    sending: "جارٍ الإرسال…",
    or: "أو أرسل الموجز نفسه عبر",
    waSend: "إرسال عبر واتساب",
    successTitle: "استلمنا رسالتك — شكرًا لك.",
    successText: "الرقم المرجعي لطلبك هو {ref}. سيتواصل معك فريقنا خلال يوم عمل واحد.",
    successAgain: "إرسال رسالة أخرى",
    errName: "فضلًا أدخل اسمك.",
    errEmail: "فضلًا أدخل بريدًا إلكترونيًا صحيحًا.",
    errMsg: "فضلًا أخبرنا باختصار كيف يمكننا المساعدة.",
    channelsTitle: "قنوات مباشرة",
    callUs: "اتصل بنا",
    mailUs: "راسلنا",
    whatsapp: "واتساب",
    waAvailable: "الأحد–الخميس، 8:00–18:00 (بتوقيت السعودية)",
    hq: "المقر الرئيسي",
    hqAddr: "حي العليا، طريق الملك فهد، الرياض، المملكة العربية السعودية",
    hours: "ساعات العمل",
    hoursValue: "الأحد – الخميس · 8:00 – 18:00",
    mapTitle: "موقعنا في الرياض",
    mapNote: "تُطلق الخريطة التفاعلية مع الإصدار القادم من الموقع — وحتى ذلك الحين يسعد فريقنا مشاركتك الاتجاهات مباشرة.",
    coords: "24.7136° ش · 46.6753° ق",
    officesTitle: "ثلاثة محاور، ومعيار واحد",
    offices: [
      { city: "الرياض", role: "المقر الرئيسي", addr: "حي العليا، طريق الملك فهد", phone: "+966 55 000 0000" },
      { city: "جدة", role: "مكتب المنطقة الغربية", addr: "حي السلامة، طريق الأمير سلطان", phone: "+966 55 000 0001" },
      { city: "الدمام", role: "مكتب المنطقة الشرقية", addr: "حي الفيصلية، طريق الملك سعود", phone: "+966 55 000 0002" },
    ],
    legalTitle: "كيان مسجل",
    legalText: "سند لحلول الأعمال — سجل تجاري 1010XXXXXX · رقم ضريبي 3XXXXXXXXXXX0003 · الرياض، السعودية. تُستكمل الأرقام النهائية عند الإطلاق وتُحدَّث هنا.",
    faqTitle: "قبل أن تكتب — إجابات سريعة",
    faq: [
      {
        q: "كيف يبدأ التعاقد عادةً؟",
        a: "بتقييم تشغيلي مجاني. نراجع أحجامك ومورديك الحاليين ونقاط الألم، ثم نقترح اتفاقية محددة النطاق بمؤشرات أداء واضحة قبل أي بدء.",
      },
      {
        q: "هل يمكن جمع عدة خدمات في عقد واحد؟",
        a: "نعم — وهذا نموذجنا المفضل. التعاقد المجمع يعني مدير حساب واحدًا وتقرير مؤشرات شهريًا واحدًا وأولوية جدولة عبر جميع الخطوط.",
      },
      {
        q: "هل تغطون جميع مناطق السعودية؟",
        a: "مراكزنا في الرياض وجدة والدمام، ونعمل عبر شبكات ناقلين ووكلاء معتمدين تغطي مدن المملكة الرئيسية وموانئها ومنافذها البرية.",
      },
      {
        q: "هل فريقكم ثنائي اللغة؟",
        a: "بالكامل. جميع التقارير والمراسلات وأعمال المنصات الحكومية تُسلَّم بالعربية والإنجليزية، ولك أن تختار لغة كل اجتماع.",
      },
    ],
  },
  footer: {
    desc: "خدمات أعمال متكاملة من قلب الرياض — لوجستيات وأساطيل وجمارك وتحصيل وتعهيد ودعم مؤسسي تحت مظلة شريك واحد مسؤول.",
    quickTitle: "روابط سريعة",
    servicesTitle: "خدماتنا",
    contactTitle: "تواصل",
    followTitle: "تابعنا",
    rights: "جميع الحقوق محفوظة.",
    cr: "س.ت 1010XXXXXX · الرقم الضريبي 3XXXXXXXXXXXX03",
    vision: "نفخر بالإسهام في رؤية السعودية 2030",
    madeIn: "صُنع في الرياض",
  },
  waFloat: "تحدث مع سند عبر واتساب",
  waText: "مرحبًا سند 👋 — أود معرفة المزيد عن خدماتكم.",
};

export const dicts = { en, ar };
export type Dict = typeof en;

interface LangCtx {
  lang: Lang;
  dir: Dir;
  t: Dict;
  toggle: () => void;
}

const Ctx = createContext<LangCtx>({ lang: "en", dir: "ltr", t: en, toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof localStorage !== "undefined" ? localStorage.getItem("sanad-lang") : null;
    return saved === "ar" ? "ar" : "en";
  });

  const dir: Dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("sanad-lang", lang);
  }, [lang, dir]);

  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return <Ctx.Provider value={{ lang, dir, t: dicts[lang], toggle }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}

/* ---------- tiny hash router ---------- */
export type Route = "home" | "services" | "about" | "contact";

export function parseHash(): { route: Route; param: string } {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const [head, param] = raw.split("/");
  const route: Route =
    head === "services" || head === "about" || head === "contact" ? head : "home";
  return { route, param: param ?? "" };
}

export function useHashRoute() {
  const [state, setState] = useState(parseHash);
  useEffect(() => {
    const onChange = () => setState(parseHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return state;
}

export function navigate(path: string) {
  const target = `#/${path}`.replace(/\/$/, "");
  if (window.location.hash === target) {
    window.scrollTo({ top: 0 });
    return;
  }
  window.location.hash = target;
}

export function href(path: string) {
  return `#/${path}`;
}
