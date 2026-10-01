import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { WholesaleSection } from "@/components/site/WholesaleSection";
import { CTASection } from "@/components/site/CTASection";
import { products } from "@/data/products";
import { qualityAttributes } from "@/data/company";
import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import galeriaSeleccion from "@/assets/galeria-seleccion.jpg";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos — Aguaymanto fresco y presentaciones | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Catálogo de aguaymanto peruano: aguaymanto fresco, presentaciones para distribución y pedidos especiales. Consulta disponibilidad.",
      },
      { property: "og:title", content: "Nuestros productos — Aguaymanto Perú" },
      { property: "og:description", content: "Aguaymanto fresco seleccionado y presentaciones comerciales." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros productos"
        title="Aguaymanto peruano, seleccionado con cuidado"
        text="Presentaciones para clientes particulares, negocios gastronómicos, tiendas y distribuidores."
        image={heroAguaymanto}
        imageAlt="Aguaymanto fresco con cáliz abierto"
      />

      <section id="catalogo" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Catálogo" title="Elige la presentación adecuada para ti" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <section id="calidad" className="bg-muted/60 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <img
              src={galeriaSeleccion}
              alt="Selección manual del aguaymanto antes del empaque"
              width={1200}
              height={912}
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <SectionTitle
              eyebrow="Calidad que se nota"
              title="Cuidamos cada etapa del producto"
            />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {qualityAttributes.map((attr, i) => (
                <Reveal as="li" key={attr.title} delay={i * 60}>
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <h3 className="font-display text-base text-primary">{attr.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{attr.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WholesaleSection />
      <CTASection title="¿Necesitas una presentación específica?" />
    </>
  );
}
