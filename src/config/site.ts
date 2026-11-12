/**
 * CONFIGURACIÓN CENTRAL DEL SITIO
 * Edita aquí los datos de la empresa. Los textos entre [CORCHETES] son
 * placeholders provisionales y deben reemplazarse por la información real.
 */

export const site = {
  brandName: "AGUAYMANTO PERÚ",
  legalName: "[NOMBRE DE LA EMPRESA]",
  tagline: "Calidad y compromiso desde el campo peruano.",
  shortDescription:
    "Producción y comercialización de aguaymanto peruano seleccionado para clientes particulares, restaurantes, tiendas, distribuidores y compradores mayoristas.",

  contact: {
    phoneDisplay: "+51 980437076",
    phoneHref: "tel:+51980437076",
    whatsappDisplay: "+51 980437076",
    /** Solo dígitos, con código de país. Cambia este número para todo el sitio. */
    whatsappNumber: "51980437076",
    email: "contactos@aguaymantotambo.com",
    address: "Sauceda Alta S/N Limatambo -Anta -Cusco",
    city: "",
    schedule: "Lunes a viernes 9:00 am a 1:00pm -2:00pm a 5:00pm",
  },

  whatsapp: {
    floatingLabel: "¿Necesitas información?",
    defaultMessage:
      "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
  },

  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    linkedin: "#",
  },
} as const;

export function whatsappLink(message: string = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const mainNav = [
  { label: "Inicio", to: "/" },
  {
    label: "Quiénes Somos",
    to: "/quienes-somos",
    children: [
      { label: "Nuestra empresa", to: "/quienes-somos", hash: "empresa" },
      { label: "Nuestra historia", to: "/quienes-somos", hash: "historia" },
      { label: "Misión", to: "/quienes-somos", hash: "mision" },
      { label: "Visión", to: "/quienes-somos", hash: "vision" },
      { label: "Valores", to: "/quienes-somos", hash: "valores" },
      { label: "Nuestro compromiso", to: "/quienes-somos", hash: "compromiso" },
    ],
  },
  {
    label: "Productos",
    to: "/productos",
    children: [
      { label: "Aguaymanto fresco", to: "/productos", hash: "catalogo" },
      { label: "Presentaciones", to: "/productos", hash: "catalogo" },
      { label: "Calidad", to: "/productos", hash: "calidad" },
      { label: "Pedidos mayoristas", to: "/productos", hash: "mayoristas" },
    ],
  },
  {
    label: "Servicios",
    to: "/servicios",
    children: [
      { label: "Venta", to: "/servicios", hash: "servicios" },
      { label: "Venta mayorista", to: "/servicios", hash: "servicios" },
      { label: "Atención a restaurantes", to: "/servicios", hash: "servicios" },
      { label: "Tiendas y distribuidores", to: "/servicios", hash: "servicios" },
      { label: "Pedidos personalizados", to: "/servicios", hash: "servicios" },
      { label: "Atención comercial", to: "/servicios", hash: "servicios" },
    ],
  },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;
