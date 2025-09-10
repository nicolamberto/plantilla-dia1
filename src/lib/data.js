// src/lib/data.js
export const site = {
  name: "DIMITRI",
  tagline: "Cielorrasos de calidad que transforman tus espacios",
  cta: { label: "Agendá tu visita hoy", href: "#contact" },
};

export const navbar = {
  logoAlt: "LOGO",
  links: [
    { label: "Inicio", href: "#hero" },
    { label: "Nosotros", href: "#about" },
    { label: "¿Por qué elegirnos?", href: "#why-us" },
    { label: "Proyectos", href: "#works" },
    { label: "Clientes", href: "#clients" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contacto", href: "#contact" },
  ],
};

export const hero = {
  eyebrow: "",
  titleLine1: "Cielorrasos de calidad",
  titleLine2: "que transforman tus ",
  word: 'espacios',
  desc1: "Instalamos cielorrasos modernos, resistentes y a medida.",
  desc2: "Con una visita técnica te damos un presupuesto exacto y sin sorpresas.",
  ctaPrimary: { label: "AGENDÁ TU VISITA HOY", href: "#contact" },
  imagePlaceholder: true, // hay imagen en el diseño desktop
};

export const about = {
  title: "Sobre nosotros",
  subtitle: "Experiencia, confianza y atención personalizada",
  body: [
    "Somos especialistas en cielorrasos, con años de trayectoria en obras residenciales y comerciales.",
    "Nuestro diferencial es la atención cercana: entendemos tus necesidades, visitamos tu espacio y diseñamos la mejor solución.",
    "Miles de clientes ya confiaron en nosotros por nuestra rapidez, calidad y compromiso.",
  ],
  imagePlaceholder: true, // 'imagen del equipo'
};



export const whyUs = {
  title: "¿Por qué elegirnos?",
  items: [
    {
      title: "Rapidez",
      desc: "Agendamos tu visita en 24 h y entregamos presupuesto sin vueltas.",
      image: "/images/whyus/rapidezwhy.webp",
    },
    {
      title: "Resistencia",
      desc: "Materiales certificados y terminaciones que soportan el uso diario.",
      image: "/images/whyus/resistenciawhy.webp",
    },
    {
      title: "Presupuesto personalizado",
      desc: "Te proponemos la mejor opción según tu espacio y tu inversión.",
      image: "/images/whyus/presupuestowhy.webp",
    },
    {
      title: "Instalación",
      desc: "Equipo propio, obra limpia y fechas claras de inicio y fin.",
      image: "/images/whyus/instalacionwhy.webp",
    },
  ],
};


export const works = {
  title: "Nuestros trabajos",
  subtitle: "Cada proyecto que realizamos es distinto, porque cada espacio tiene sus propias necesidades. En esta galería vas a encontrar ejemplos reales de cielorrasos instalados tanto en hogares como en empresas, mostrando la variedad de estilos, materiales y terminaciones que podemos lograr.",
  subtitle2: "Nos enfocamos en que cada instalación no solo sea estéticamente atractiva, sino también funcional, resistente y adaptada al uso del lugar.",
  featured: { title: "Trabajo destacado", image: "/images/works/work1.webp" },
  items: [
    { title: "Trabajo 2", image: "/images/works/work2.webp" },
    { title: "Trabajo 3", image: "/images/works/work3.webp" },
    { title: "Trabajo 4", image: "/images/works/work4.webp" },
    { title: "Trabajo 5", image: "/images/works/work5.webp" },
  ],
  cta: { label: "Agendá tu visita técnica", href: "#contact" },
};

export const clients = {
  title: "Clientes que confiaron",
  assets: {
    avatar: "/images/clients/user.webp",
    stars: "/images/clients/estrellas.webp",
  },
  testimonials: [
    {
      author: "Cliente 1",
      quote:
        "Excelente atención y muy prolijos. La visita técnica fue clave para definir el trabajo sin sorpresas.",
    },
    {
      author: "Cliente 2",
      quote:
        "Cumplieron en tiempo y forma. El cielorraso quedó perfecto y el presupuesto fue el que acordamos.",
    },
    {
      author: "Cliente 3",
      quote:
        "Muy buenos materiales y terminaciones. Recomendados para obras residenciales y locales comerciales.",
    },
    {
      author: "Cliente 4",
      quote:
        "Desde el primer contacto todo claro. La instalación fue rápida y dejaron todo limpio.",
    },
    {
      author: "Cliente 5",
      quote:
        "Gran equipo y atención cercana. Volvería a contratarlos para futuras reformas.",
    },
  ],
};

export const faqs = {
  title: "Preguntas frecuentes",
  items: [
    {
      q: "¿La visita técnica tiene costo?",
      a: "No, la visita es totalmente gratuita y sin compromiso.",
      id: 1
    },
    { q: "¿En qué zonas trabajan?", a: "No, la visita es totalmente gratuita y sin compromiso.", id: 2 },
    { q: "¿Cuánto demora la instalación?", a: "No, la visita es totalmente gratuita y sin compromiso.", id: 3 },
    { q: "¿Qué materiales utilizan?", a: "No, la visita es totalmente gratuita y sin compromiso.", id: 4 },
  ],
};

export const contactInfo = {
  title: "Contacto",
  subtitle:
    "RESERVÁ TU VISITA TÉCNICA · COMPLETÁ EL FORMULARIO Y TE CONTACTAMOS EN MENOS DE 24HS",
  items: [
    { type: "email", label: "Email", value: "contacto@dimitri.com" },
    { type: "phone", label: "Teléfono", value: "+34 600 000 000" },
    { type: "address", label: "Dirección", value: "Barcelona, España" },
  ],
};

export const contactForm = {
  title: "Reservá tu visita técnica",
  fields: [
    { name: "name", label: "Nombre completo", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Teléfono", type: "tel", required: true },
    {
      name: "address",
      label: "Dirección donde hacer la visita",
      type: "text",
      required: true,
    },
    { name: "message", label: "Mensaje", type: "textarea", required: false },
  ],
  submitLabel: "Agendar visita técnica",
  successMessage: "¡Gracias! Te contactaremos en menos de 24 hs.",
  errorMessage: "Ocurrió un error. Intentá nuevamente.",
};

export const footer = {
  smallprint: "© TuMarca. Todos los derechos reservados.",
};


export const socials = [
  { type: "instagram", label: "Instagram", href: "https://instagram.com/tu_cuenta" },
  { type: "facebook",  label: "Facebook",  href: "https://facebook.com/tu_cuenta" },
  { type: "linkedin",  label: "LinkedIn",  href: "https://linkedin.com/company/tu_cuenta" },
  { type: "youtube",   label: "YouTube",   href: "https://youtube.com/@tu_cuenta" },
];


// ===================
// SEO SITE-WIDE (HEAD)
// ===================
export const seo = {
  siteUrl: "https://plantilla-1-gray.vercel.app/",             // cámbialo
  defaultTitle: "DIMITRI — Cielorrasos en Barcelona",
  titleTemplate: "%s | DIMITRI",
  description:
    "Instalación de cielorrasos modernos y resistentes en Barcelona. Visita técnica sin costo y presupuesto exacto en menos de 24h.",
  keywords: [
    "cielorrasos", "cielorraso Barcelona", "instalación cielorrasos",
    "techos falsos", "obras residenciales", "obras comerciales"
  ],
  locale: "es_ES",
  themeColor: "#ffffff",
  openGraph: {
    type: "website",
    url: "https://tudominio.com",
    title: "DIMITRI — Cielorrasos de calidad que transforman tus espacios",
    description:
      "Especialistas en cielorrasos: rapidez, precisión y obra limpia. Reserva tu visita técnica sin costo.",
    siteName: "DIMITRI",
    images: [
      {
        url: "https://tudominio.com/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "DIMITRI — Cielorrasos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tu_usuario",    // opcional
    creator: "@tu_usuario", // opcional
  },
  alternates: {
    canonical: "https://tudominio.com",
    languages: { "es-ES": "https://tudominio.com" },
  },
};

// ===================
// ORGANIZATION / LOCAL
// ===================
export const business = {
  name: "DIMITRI",
  legalName: "DIMITRI Reformas S.L.",
  url: "https://tudominio.com",
  logo: "https://tudominio.com/og/logo.png",
  phone: "+34 600 000 000",
  email: "contacto@dimitri.com",
  address: {
    streetAddress: "Carrer Ejemplo 123",
    addressLocality: "Barcelona",
    postalCode: "08001",
    addressCountry: "ES",
  },
  areaServed: ["Barcelona", "Cataluña"],
  sameAs: [
    "https://instagram.com/tu_cuenta",
    "https://www.facebook.com/tu_cuenta",
    "https://www.linkedin.com/company/tu_cuenta",
    "https://www.youtube.com/@tu_cuenta",
  ],
  rating: { value: 4.9, count: 120 }, // ajusta si tienes datos reales
};

// ===================
// SECTION METADATA + SCHEMA
// ===================
export const sectionMeta = {
  layout: {
    title: "DIMITRI — Cielorrasos en Barcelona",
    description:
      "Cielorrasos a medida con visita técnica gratuita y presupuestos sin sorpresas.",
  },
  hero: {
    title: "Cielorrasos de calidad que transforman tus espacios",
    description:
      "Instalamos cielorrasos modernos y resistentes. Agenda tu visita técnica sin costo.",
    ogImage: "https://tudominio.com/og/hero.jpg",
  },
  about: {
    title: "Sobre nosotros",
    description:
      "Años de experiencia en obras residenciales y comerciales. Atención cercana y obra limpia.",
  },
  whyUs: {
    title: "¿Por qué elegirnos?",
    description:
      "Rapidez, materiales resistentes, presupuesto personalizado e instalación profesional.",
  },
  works: {
    title: "Nuestros trabajos",
    description:
      "Galería de proyectos reales en hogares y empresas con distintos materiales y terminaciones.",
  },
  clients: {
    title: "Reseñas de clientes",
    description:
      "Opiniones reales sobre nuestra atención, plazos de obra y acabados.",
  },
  faqs: {
    title: "Preguntas frecuentes",
    description:
      "Resolvemos dudas sobre zonas de trabajo, plazos de instalación y materiales.",
  },
  contactInfo: {
    title: "Contacto",
    description:
      "Reserva tu visita técnica y recibe presupuesto en menos de 24h.",
  },
  contactForm: {
    title: "Reservá tu visita técnica",
    description:
      "Deja tus datos para coordinar una visita sin costo y un presupuesto exacto.",
  },
  footer: {
    title: "Información legal y enlaces",
    description: "FAQs, contacto y redes sociales.",
  },
};

// ===================
// JSON-LD HELPERS POR SECCIÓN
// ===================
export const schema = {
  organization(biz = business) {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: biz.name,
      legalName: biz.legalName,
      url: biz.url,
      logo: biz.logo,
      sameAs: biz.sameAs,
      contactPoint: [{
        "@type": "ContactPoint",
        telephone: biz.phone,
        contactType: "customer service",
        email: biz.email,
        areaServed: biz.areaServed,
        availableLanguage: ["es"],
      }],
    };
  },
  localBusiness(biz = business) {
    // Usa el subtipo más específico si aplica: "HomeAndConstructionBusiness", "Contractor", etc.
    return {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: biz.name,
      image: [seo.openGraph.images?.[0]?.url],
      url: biz.url,
      telephone: biz.phone,
      address: {
        "@type": "PostalAddress",
        ...biz.address,
      },
      areaServed: biz.areaServed,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(biz.rating.value),
        reviewCount: String(biz.rating.count),
      },
    };
  },
  itemListWorks(works) {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Galería de proyectos",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: works.featured.title },
        ...works.items.map((w, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: w.title,
        })),
      ],
    };
  },
  reviews(testimonials, biz = business) {
    return {
      "@context": "https://schema.org",
      "@type": "Product", // o Service si prefieres
      name: `${biz.name} — Cielorrasos`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(biz.rating.value),
        reviewCount: String(biz.rating.count),
      },
      review: testimonials.map((t) => ({
        "@type": "Review",
        author: { "@type": "Person", name: t.author },
        reviewBody: t.quote,
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      })),
    };
  },
  faq(faqs) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
  },
};
