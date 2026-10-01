import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones — Aguaymanto Perú" },
      { name: "description", content: "Términos y condiciones de uso del sitio web." },
      { property: "og:title", content: "Términos y condiciones — Aguaymanto Perú" },
      { property: "og:description", content: "Condiciones de uso del sitio y de las cotizaciones." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-3xl px-4 pt-40 pb-24 sm:px-6">
      <h1 className="text-4xl text-primary">Términos y condiciones</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
        <p>
          [TEXTO PROVISIONAL] El uso de este sitio web implica la aceptación de los presentes
          términos. La información de productos, presentaciones y disponibilidad es referencial y
          se confirma en cada cotización emitida por {site.legalName}.
        </p>
        <p>Este texto debe ser reemplazado por los términos oficiales de la empresa.</p>
      </div>
    </section>
  ),
});
