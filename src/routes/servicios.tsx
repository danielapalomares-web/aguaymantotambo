import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ServiceCard } from "@/components/site/ServiceCard";
import { WholesaleSection } from "@/components/site/WholesaleSection";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/data/services";
import noticiaMercados from "@/assets/noticia-mercados.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Venta de aguaymanto al por mayor | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Venta de aguaymanto, venta al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      },
      { property: "og:title", content: "Nuestros servicios — Aguaymanto Perú" },
      { property: "og:description", content: "Proveedor de aguaymanto para particulares y empresas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Soluciones comerciales alrededor del aguaymanto"
        text="Te acompañamos desde la consulta hasta la entrega, según el volumen y la presentación que necesitas."
        image={noticiaMercados}
        imageAlt="Cajas de aguaymanto listas para su distribución"
      />
      <section id="servicios" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Qué ofrecemos" title="Atención para cada tipo de cliente" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
      <WholesaleSection />
      <CTASection />
    </>
  );
}
