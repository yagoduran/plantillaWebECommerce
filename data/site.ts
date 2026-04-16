import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CheckCircle2,
  Compass,
  Gem,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type HeroFloatingCard = {
  label: string;
  description: string;
  icon: LucideIcon;
};

export type LearnItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  label: string;
};

export type ResultsCard = {
  title: string;
  subtitle: string;
  value: string;
  bars: number[];
};

export type ResultsPanel = {
  windowDots: string[];
  headlineLabel: string;
  headlineValue: string;
  indicatorPrefix: string;
  indicators: number[];
  chartBars: number[];
  miniCards: number;
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  metric: string;
};

export type ComparisonBlock = {
  title: string;
  items: string[];
};

export type PricingPlan = {
  name: string;
  price: string;
  subtitle: string;
  highlighted: boolean;
  features: string[];
  cta: CtaLink;
  badge?: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  brand: {
    name: string;
    mark: string;
    eyebrow: string;
    metaTitle: string;
    metaDescription: string;
  };
  navbar: {
    supportingText: string;
    cta: CtaLink;
    mobileToggleLabelOpen: string;
    mobileToggleLabelClose: string;
  };
  nav: NavItem[];
  hero: {
    badge: string;
    titleStart: string;
    highlight: string;
    titleEnd: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    miniStats: HeroStat[];
    floatingCards: HeroFloatingCard[];
    featuredPanel: {
      eyebrow: string;
      title: string;
      progress: string;
    };
    sideBadge: {
      title: string;
      description: string;
    };
    miniMockCards: number;
  };
  videoShowcase: {
    eyebrow: string;
    title: string;
    description: string;
    chips: string[];
    ariaLabel: string;
    windowDots: string[];
    demoEyebrow: string;
    demoTitle: string;
    progress: string;
  };
  learnSection: {
    eyebrow: string;
    title: string;
    description: string;
    items: LearnItem[];
  };
  results: {
    eyebrow: string;
    title: string;
    description: string;
    panel: ResultsPanel;
    cards: ResultsCard[];
  };
  whoIsItFor: {
    id: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    points: string[];
    cta: CtaLink;
    visualCard: {
      title: string;
      description: string;
      badgeEyebrow: string;
      badgeTitle: string;
    };
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    previousLabel: string;
    nextLabel: string;
    storyLabel: string;
    showcaseCards: string[];
    items: TestimonialItem[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    positive: ComparisonBlock;
    negative: ComparisonBlock;
  };
  offer: {
    eyebrow: string;
    title: string;
    description: string;
    benefits: string[];
    cta: CtaLink;
    visual: {
      eyebrow: string;
      title: string;
      cardCount: number;
    };
  };
  pricing: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    plans: PricingPlan[];
  };
  trust: {
    eyebrow: string;
    title: string;
    bullets: string[];
    cta: CtaLink;
    visualCardCount: number;
  };
  faq: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    legalTitle: string;
    navTitle: string;
    copy: string;
    legal: FooterLink[];
    copyright: string;
  };
};

// Edita aquí el nombre, iniciales y metadatos base de la marca.
export const siteData: SiteContent = {
  brand: {
    name: "Studio Placeholder",
    mark: "SP",
    eyebrow: "+1.000 experiencias guiadas",
    metaTitle: "Landing Template Premium",
    metaDescription: "Plantilla reusable en Next.js para formación, mentoría, consultoría y servicios premium.",
  },
  // Edita aquí el texto secundario del header y el CTA principal del navbar.
  navbar: {
    supportingText: "Landing template system",
    cta: { label: "Empezar hoy", href: "#precio" },
    mobileToggleLabelOpen: "Abrir menu",
    mobileToggleLabelClose: "Cerrar menu",
  },
  // Edita aquí los enlaces principales de navegación.
  nav: [
    { label: "Qué incluye", href: "#que-aprenderas" },
    { label: "Para quién es", href: "#para-quien-es" },
    { label: "Planes", href: "#precio" },
    { label: "FAQs", href: "#faqs" },
  ],
  // Edita aquí el bloque principal del hero y sus CTAs.
  hero: {
    badge: "Plantilla premium para formación, servicios y propuestas de alto valor",
    titleStart: "Presenta tu oferta con una landing",
    highlight: "clara, elegante",
    titleEnd: "y lista para adaptarse a cualquier marca premium",
    description:
      "Una base visual pensada para vender confianza, ordenar la propuesta y dejar todo preparado para personalizar mensajes, beneficios, historias, precios y preguntas frecuentes.",
    primaryCta: { label: "Empezar hoy", href: "#precio" },
    secondaryCta: { label: "Ver estructura", href: "#que-aprenderas" },
    miniStats: [
      { label: "Bloques editables", value: "12+" },
      { label: "Secciones listas", value: "100%" },
      { label: "Adaptable a marca", value: "Flexible" },
    ],
    floatingCards: [
      { label: "Base modular", description: "Secciones listas para personalizar", icon: Rocket },
      { label: "Diseño premium", description: "Jerarquía visual cuidada", icon: Sparkles },
      { label: "Escalable", description: "Pensada para crecer con tu oferta", icon: Zap },
    ],
    featuredPanel: {
      eyebrow: "Propuesta principal",
      title: "Sistema visual para presentar posicionamiento, valor y conversión.",
      progress: "66%",
    },
    sideBadge: {
      title: "Oferta clara",
      description: "Bloques listos para editar",
    },
    miniMockCards: 3,
  },
  // Edita aquí el bloque de demo, chips y textos del mockup.
  videoShowcase: {
    eyebrow: "Vista previa del sistema",
    title: "Muestra una presentación, walkthrough o demo con una estética impecable",
    description:
      "Este bloque sirve como placeholder para vídeo, explicación visual o resumen rápido del servicio, programa o propuesta principal.",
    chips: ["Demo placeholder", "Sin backend", "Editable"],
    ariaLabel: "Reproducir presentación placeholder",
    windowDots: ["#ff7d7d", "#ffd36e", "#69dd98"],
    demoEyebrow: "Presentación demo",
    demoTitle: "Espacio visual para vídeo, walkthrough o presentación breve.",
    progress: "58%",
  },
  // Edita aquí las tarjetas del grid principal.
  learnSection: {
    eyebrow: "Qué incluye",
    title: "Una estructura pensada para explicar, convencer y convertir",
    description:
      "Seis bloques modulares para adaptar la página a formación, mentoría, consultoría, agencia o servicio premium sin rehacer la base visual.",
    items: [
      {
        title: "Posicionamiento claro",
        description: "Resume la propuesta central con mensajes cortos y una jerarquía visual muy limpia.",
        icon: Compass,
        accent: "from-mint-100 to-white",
        label: "Bloque 01",
      },
      {
        title: "Oferta empaquetada",
        description: "Presenta entregables, fases o servicios en tarjetas coherentes y fáciles de comparar.",
        icon: Gem,
        accent: "from-white to-[#eef6ff]",
        label: "Bloque 02",
      },
      {
        title: "Resultados visuales",
        description: "Explica impacto, rendimiento o progreso con recursos gráficos sencillos y elegantes.",
        icon: TrendingUp,
        accent: "from-[#eef7f3] to-[#f8fbff]",
        label: "Bloque 03",
      },
      {
        title: "Proceso aplicable",
        description: "Ordena pasos, metodología o acompañamiento en una narrativa que se entiende rápido.",
        icon: BookOpen,
        accent: "from-[#f6fbf9] to-[#eff5ff]",
        label: "Bloque 04",
      },
      {
        title: "Confianza de marca",
        description: "Refuerza percepción premium con tarjetas consistentes, aire visual y ritmo limpio.",
        icon: ShieldCheck,
        accent: "from-white to-[#eef7f4]",
        label: "Bloque 05",
      },
      {
        title: "Edición sencilla",
        description: "Todo el contenido visible puede ajustarse desde un único archivo de datos tipado.",
        icon: CheckCircle2,
        accent: "from-[#eef4ff] to-white",
        label: "Bloque 06",
      },
    ],
  },
  // Edita aquí títulos, métricas y barras del bloque de resultados.
  results: {
    eyebrow: "Resultados y métricas",
    title: "Diseñada para mostrar progreso, rendimiento o prueba visual con estilo premium",
    description:
      "Esta zona funciona como escaparate de métricas, paneles o ejemplos de transformación. Todo se puede adaptar a cualquier tipo de servicio o propuesta.",
    panel: {
      windowDots: ["#ff7d7d", "#ffd36e", "#69dd98"],
      headlineLabel: "Panel principal",
      headlineValue: "+240%",
      indicatorPrefix: "Indicador",
      indicators: [72, 54, 88],
      chartBars: [42, 68, 57, 85, 73, 96],
      miniCards: 4,
    },
    cards: [
      { title: "Vista de avance", subtitle: "Seguimiento editable", value: "84%", bars: [78, 64, 92, 81] },
      { title: "Escenario de impacto", subtitle: "Comparativa visual", value: "3.8x", bars: [35, 56, 74, 90] },
      { title: "Actividad resumida", subtitle: "Panel de ejemplo", value: "126", bars: [48, 66, 58, 88] },
    ],
  },
  // Edita aquí la sección de encaje del cliente ideal.
  whoIsItFor: {
    id: "para-quien-es",
    eyebrow: "Para quién es",
    title: "Una base elegante para negocios que necesitan presencia premium sin complicarse",
    paragraphs: [
      "La plantilla sirve como punto de partida para marcas personales, estudios, consultorías, agencias, mentorías o servicios de posicionamiento alto.",
      "Está pensada para ayudarte a presentar autoridad, ordenar el valor de la propuesta y dejar una estructura flexible que luego se personaliza con el mensaje definitivo.",
    ],
    points: [
      "Encaja bien con propuestas premium, servicios estratégicos y programas guiados.",
      "Permite cambiar textos, enlaces, precios, beneficios y FAQs desde una sola fuente de datos.",
      "Mantiene una experiencia clara en escritorio, tablet y móvil.",
    ],
    cta: { label: "Explorar la plantilla", href: "#precio" },
    visualCard: {
      title: "Bloque visual adaptable",
      description: "Foto, mockup o retrato placeholder",
      badgeEyebrow: "Autoridad",
      badgeTitle: "Confianza visual",
    },
  },
  // Edita aquí testimonios, flechas del carrusel y etiquetas del bloque destacado.
  testimonials: {
    eyebrow: "Historias y señales de confianza",
    title: "Prueba social reusable para comunicar credibilidad sin depender de casos reales",
    description:
      "Tarjetas con formato de comentario, mini historia y resumen visual para adaptar la sección a cualquier servicio, programa o propuesta consultiva.",
    previousLabel: "Ver testimonio anterior",
    nextLabel: "Ver siguiente testimonio",
    storyLabel: "Historia",
    showcaseCards: ["Mensaje", "Captura", "Resultado"],
    items: [
      {
        name: "Nombre Placeholder",
        role: "Cliente premium",
        quote: "La estructura transmite claridad y valor desde el primer vistazo, incluso antes de personalizar el mensaje final.",
        metric: "+claridad",
      },
      {
        name: "Perfil Demo",
        role: "Servicio estratégico",
        quote: "El diseño permite presentar una propuesta compleja de forma directa, visual y muy fácil de recorrer.",
        metric: "mejor foco",
      },
      {
        name: "Caso Base",
        role: "Programa guiado",
        quote: "Se siente acabada desde el principio y después solo requiere adaptar el contenido a la marca.",
        metric: "menos fricción",
      },
      {
        name: "Cliente Tipo",
        role: "Consultoría especializada",
        quote: "Ayuda a explicar valor, diferenciación y precio sin saturar la experiencia de la página.",
        metric: "+confianza",
      },
    ],
  },
  // Edita aquí la comparativa de encaje.
  comparison: {
    eyebrow: "Encaje y expectativas",
    title: "Una comparación clara para atraer mejor a la audiencia adecuada",
    description:
      "Dos bloques comparativos para alinear expectativas, dejar claro el tipo de cliente ideal y filtrar mejor la conversación comercial.",
    positive: {
      title: "Esto es para ti si",
      items: [
        "Quieres una landing premium y flexible para editar con rapidez.",
        "Necesitas una base elegante antes de cerrar el copy definitivo.",
        "Te importa el ritmo visual, la jerarquía y la claridad del scroll.",
        "Buscas un sistema fácil de ampliar con nuevas secciones o variantes.",
      ],
    },
    negative: {
      title: "Esto no es para ti si",
      items: [
        "Prefieres una página genérica sin trabajo visual fino.",
        "No quieres mantener el contenido centralizado en un archivo de datos.",
        "Necesitas backend, CMS o lógica compleja desde el primer día.",
        "Buscas replicar literalmente una marca o una web existente.",
      ],
    },
  },
  // Edita aquí beneficios, CTA y bloque visual de valor.
  offer: {
    eyebrow: "Oferta y beneficios",
    title: "Todo el valor visual empaquetado en una sola base reusable",
    description:
      "Incluye hero, demo, bloques explicativos, resultados, autoridad, testimonios, comparativas, pricing y FAQ. Cada sección está diseñada para verse acabada hoy y poder editarse mañana.",
    benefits: [
      "Sistema visual con tokens consistentes y paleta lista para iterar.",
      "Placeholders integrados sin depender de imágenes externas raras.",
      "Arquitectura modular fácil de mantener y de ampliar.",
      "Botones, acentos y tarjetas con una dirección visual clara y profesional.",
    ],
    cta: { label: "Usar esta base", href: "#precio" },
    visual: {
      eyebrow: "Value stack",
      title: "Bloque visual para reforzar percepción de valor, entregables o extras.",
      cardCount: 4,
    },
  },
  // Edita aquí planes, precios, CTAs y beneficios del pricing.
  pricing: {
    id: "precio",
    eyebrow: "Pricing",
    title: "Planes",
    description: "Dos opciones de ejemplo para adaptar la oferta a cualquier propuesta sin asumir precios definitivos.",
    plans: [
      {
        name: "Plan Base",
        price: "€XXX",
        subtitle: "Una opción de entrada clara para presentar el alcance principal de la propuesta.",
        highlighted: false,
        features: [
          "Acceso al bloque principal del servicio o programa",
          "Ruta de implementación editable",
          "Recursos introductorios placeholders",
          "Soporte descrito como contenido adaptable",
        ],
        cta: { label: "Elegir plan", href: "#" },
      },
      {
        name: "Plan Signature",
        price: "€XXXX",
        subtitle: "La versión destacada para reforzar la opción recomendada y aumentar valor percibido.",
        highlighted: true,
        badge: "Recomendado",
        features: [
          "Todo lo incluido en el plan base",
          "Entregables o extras visualmente destacados",
          "Mayor sensación premium en la comparación",
          "Espacio ideal para una oferta ancla o plan favorito",
        ],
        cta: { label: "Quiero la opción destacada", href: "#" },
      },
    ],
  },
  // Edita aquí el bloque de confianza y su CTA.
  trust: {
    eyebrow: "Transparencia y confianza",
    title: "Una plantilla honesta sobre lo que resuelve y cómo se personaliza",
    bullets: [
      "No sustituye la estrategia: aporta una base visual fuerte para construir encima.",
      "No usa branding final ni mensajes cerrados: todo queda abierto para editar.",
      "No depende de recursos complejos: los placeholders viven dentro del diseño.",
      "Está pensada para avanzar rápido sin perder claridad, ritmo ni presencia.",
    ],
    cta: { label: "Ver FAQs", href: "#faqs" },
    visualCardCount: 4,
  },
  // Edita aquí las preguntas y respuestas frecuentes.
  faq: {
    id: "faqs",
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    description: "Un acordeon limpio, accesible y facil de adaptar a cualquier oferta o programa.",
    items: [
      {
        question: "¿Puedo cambiar todos los textos desde un solo archivo?",
        answer:
          "Sí. Navegación, bloques, testimonios, beneficios, pricing, enlaces y FAQs salen de este archivo para facilitar la personalización.",
      },
      {
        question: "¿La plantilla incluye backend o CMS?",
        answer:
          "No. Está planteada como una landing estática premium con todos los contenidos editables desde datos tipados.",
      },
      {
        question: "¿Puedo reemplazar los placeholders por contenido real?",
        answer:
          "Sí. Puedes sustituir textos, métricas, precios, links, imágenes o mockups cuando el proyecto lo necesite.",
      },
      {
        question: "¿Sirve para servicios distintos al nicho actual?",
        answer:
          "Sí. La estructura es lo bastante neutra como para adaptarse a formación, mentoría, consultoría, agencia o servicio premium.",
      },
      {
        question: "¿Se puede ampliar con más secciones?",
        answer:
          "Sí. Los componentes están desacoplados para añadir nuevas variantes o módulos sin rehacer la página entera.",
      },
      {
        question: "¿La estética se puede cambiar fácilmente?",
        answer:
          "Sí. La paleta, radios, sombras y tipografía viven en tokens globales para iterar el look sin romper la base.",
      },
    ],
  },
  // Edita aquí el footer, enlaces legales y copy final.
  footer: {
    legalTitle: "Legal",
    navTitle: "Navegación",
    copy: "Plantilla de landing premium reutilizable para diferentes modelos de negocio.",
    legal: [
      { label: "Aviso legal", href: "#" },
      { label: "Política de privacidad", href: "#" },
      { label: "Cookies", href: "#" },
    ],
    copyright: "Placeholder reusable template.",
  },
};
