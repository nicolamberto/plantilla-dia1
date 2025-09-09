// src/lib/data.js
export const site = {
  name: "DIMITRI",
  tagline: "Cielorrasos de calidad que transforman tus espacios",
  cta: { label: "Agendá tu visita hoy", href: "#contact" },
};

export const navbar = {
  logoAlt: "DIMITRI",
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
    { title: "Rapidez", desc: "", image: '/images/whyus/rapidezwhy.webp' },
    { title: "Resistencia", desc: "", image: '/images/whyus/resistenciawhy.webp' },
    { title: "Presupuesto personalizado", desc: "", image: '/images/whyus/presupuestowhy.webp' },
    { title: "Instalación", desc: "", image: '/images/whyus/instalacionwhy.webp' },
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
  smallprint: "© DIMITRI. Todos los derechos reservados.",
};
