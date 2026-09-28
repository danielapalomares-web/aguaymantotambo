import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import heroEmpaque from "@/assets/hero-empaque.jpg";
import galeriaSeleccion from "@/assets/galeria-seleccion.jpg";

/**
 * CATÁLOGO DE PRODUCTOS (editable)
 * Añade nuevos productos agregando objetos a este arreglo. Los campos
 * opcionales aparecen automáticamente en la ficha del producto.
 */
export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  presentation?: string;
  weight?: string;
  availability?: string;
  price?: string;
  features?: string[];
  datasheet?: string;
};

export const products: Product[] = [
  {
    id: "aguaymanto-fresco",
    name: "Aguaymanto fresco",
    description:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    image: heroAguaymanto,
    imageAlt: "Aguaymanto fresco peruano con cáliz abierto en una canasta de mimbre",
    ctaLabel: "Solicitar información",
    presentation: "[PRESENTACIÓN]",
    weight: "[PESO]",
    availability: "[DISPONIBILIDAD]",
    price: "[PRECIO]",
    features: ["Selección manual del fruto", "Cuidado en el manejo y traslado", "Presentación uniforme"],
  },
  {
    id: "aguaymanto-distribucion",
    name: "Aguaymanto para distribución",
    description: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    image: heroEmpaque,
    imageAlt: "Aguaymanto empacado en envases y cajas para distribución comercial",
    ctaLabel: "Consultar",
    presentation: "[PRESENTACIÓN]",
    weight: "[PESO]",
    availability: "[DISPONIBILIDAD]",
    price: "[PRECIO]",
    features: ["Volúmenes comerciales", "Coordinación de entregas", "Atención a distribuidores"],
  },
  {
    id: "presentaciones-especiales",
    name: "Presentaciones especiales",
    description: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    image: galeriaSeleccion,
    imageAlt: "Personal seleccionando aguaymanto sobre una mesa de trabajo",
    ctaLabel: "Consultar presentación",
    presentation: "[PRESENTACIÓN]",
    weight: "[PESO]",
    availability: "[DISPONIBILIDAD]",
    price: "[PRECIO]",
    features: ["Evaluación de requerimientos", "Empaque según necesidad", "Asesoría comercial"],
  },
];
