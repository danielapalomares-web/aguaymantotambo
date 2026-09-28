/** SERVICIOS (editable). Los iconos usan nombres de lucide-react. */
export type Service = {
  id: string;
  icon: "ShoppingBasket" | "Truck" | "UtensilsCrossed" | "Store" | "ClipboardList" | "Headset";
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "venta",
    icon: "ShoppingBasket",
    title: "Venta de aguaymanto",
    description: "Venta de producto para clientes particulares y comerciales.",
  },
  {
    id: "mayorista",
    icon: "Truck",
    title: "Venta al por mayor",
    description: "Atención de pedidos de mayor volumen.",
  },
  {
    id: "restaurantes",
    icon: "UtensilsCrossed",
    title: "Atención a restaurantes",
    description:
      "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
  },
  {
    id: "distribuidores",
    icon: "Store",
    title: "Atención a tiendas y distribuidores",
    description:
      "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
  },
  {
    id: "personalizados",
    icon: "ClipboardList",
    title: "Pedidos personalizados",
    description:
      "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
  },
  {
    id: "asesoria",
    icon: "Headset",
    title: "Asesoría comercial",
    description: "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
  },
];
