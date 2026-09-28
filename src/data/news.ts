import noticiaMercados from "@/assets/noticia-mercados.jpg";
import noticiaCultivo from "@/assets/noticia-cultivo.jpg";
import galeriaSeleccion from "@/assets/galeria-seleccion.jpg";

/**
 * NOTICIAS DE DEMOSTRACIÓN (editable o eliminable)
 * Cada noticia genera su propia página en /noticias/{slug}.
 */
export type NewsPost = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  dateLabel: string;
  author: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  content: string[];
  gallery?: { src: string; alt: string }[];
};

export const news: NewsPost[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    title: "El aguaymanto peruano y su presencia en nuevos mercados",
    category: "Mercado",
    date: "2026-09-10",
    dateLabel: "10 de septiembre de 2026",
    author: "[AUTOR]",
    image: noticiaMercados,
    imageAlt: "Cajas de aguaymanto preparadas para su distribución comercial",
    excerpt:
      "El interés comercial por el aguaymanto continúa creciendo. Revisamos qué significa esta tendencia para los productores y comercializadores peruanos.",
    content: [
      "El aguaymanto es un fruto originario de los Andes que ha ganado atención en distintos mercados por su sabor característico y su versatilidad en la gastronomía.",
      "Para las empresas dedicadas a su producción y comercialización, este interés representa una oportunidad, pero también exige orden en los procesos: selección del fruto, manejo adecuado, empaque apropiado y coordinación de entregas.",
      "Este contenido es un texto de demostración y puede editarse o eliminarse. Aquí la empresa podrá publicar sus propias novedades, participación en ferias, nuevos clientes o avances de sus operaciones.",
    ],
    gallery: [
      { src: noticiaCultivo, alt: "Planta de aguaymanto con frutos en desarrollo" },
      { src: galeriaSeleccion, alt: "Selección manual de aguaymanto en mesa de trabajo" },
    ],
  },
  {
    slug: "conoce-el-cultivo-del-aguaymanto",
    title: "Conoce más sobre el cultivo del aguaymanto",
    category: "Agricultura",
    date: "2026-08-22",
    dateLabel: "22 de agosto de 2026",
    author: "[AUTOR]",
    image: noticiaCultivo,
    imageAlt: "Frutos de aguaymanto madurando en la planta dentro de una plantación",
    excerpt:
      "Del campo a la mesa: cómo crece el aguaymanto y por qué el cuidado durante la cosecha influye directamente en su calidad final.",
    content: [
      "El aguaymanto crece protegido por un cáliz que envuelve al fruto. Ese capuchón natural cumple un papel importante en su conservación y presentación.",
      "El momento de la cosecha y el cuidado en la manipulación influyen en la apariencia y la frescura con la que el producto llega al cliente.",
      "Este contenido es un texto de demostración y puede editarse o eliminarse según la información que la empresa desee compartir.",
    ],
  },
  {
    slug: "apuesta-por-la-calidad",
    title: "Nuestra apuesta por la calidad y la producción responsable",
    category: "Noticias de la empresa",
    date: "2026-07-15",
    dateLabel: "15 de julio de 2026",
    author: "[AUTOR]",
    image: galeriaSeleccion,
    imageAlt: "Equipo de trabajo seleccionando aguaymanto en instalaciones limpias",
    excerpt:
      "Compartimos cómo entendemos la calidad en nuestro trabajo diario y el compromiso que asumimos con nuestros clientes.",
    content: [
      "Entendemos la calidad como el resultado de decisiones pequeñas y constantes: revisar el fruto, cuidar el empaque y cumplir lo acordado con cada cliente.",
      "Nuestro compromiso también incluye a las personas que trabajan con nosotros y al entorno en el que se desarrollan nuestras actividades.",
      "Este contenido es un texto de demostración y puede editarse o eliminarse.",
    ],
  },
];

export const newsCategories = [
  "Noticias de la empresa",
  "Agricultura",
  "Aguaymanto",
  "Mercado",
  "Eventos",
  "Innovación",
  "Producción",
];

export function getPost(slug: string) {
  return news.find((n) => n.slug === slug);
}
