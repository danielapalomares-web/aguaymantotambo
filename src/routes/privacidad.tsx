import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Aguaymanto Perú" },
      { name: "description", content: "Política de privacidad y tratamiento de datos personales." },
      { property: "og:title", content: "Política de privacidad — Aguaymanto Perú" },
      { property: "og:description", content: "Cómo tratamos tus datos personales." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-3xl px-4 pt-40 pb-24 sm:px-6">
      <h1 className="text-4xl text-primary">Política de privacidad</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
        <p>
          [TEXTO PROVISIONAL] {site.legalName} trata los datos personales enviados a través de este
          sitio únicamente para atender consultas, cotizaciones y pedidos.
        </p>
        <p>
          Este texto debe ser reemplazado por la política de privacidad oficial de la empresa,
          conforme a la Ley N.° 29733 de Protección de Datos Personales del Perú.
        </p>
        <p>Para consultas sobre tus datos escribe a {site.contact.email}.</p>
      </div>
    </section>
  ),
});
