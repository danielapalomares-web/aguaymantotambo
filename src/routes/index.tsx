import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartHandshake, Leaf, Sprout, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { ServiceCard } from "@/components/site/ServiceCard";
import { NewsCard } from "@/components/site/NewsCard";
import { Gallery } from "@/components/site/Gallery";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { WholesaleSection } from "@/components/site/WholesaleSection";
import { CTASection } from "@/components/site/CTASection";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { news } from "@/data/news";
import { reasons } from "@/data/company";
import nosotrosCampo from "@/assets/nosotros-campo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aguaymanto Perú — Aguaymanto peruano fresco y al por mayor" },
      {
        name: "description",
        content:
          "Proveedor de aguaymanto peruano: producción, venta de aguaymanto fresco y atención a restaurantes, tiendas y distribuidores. Solicita tu cotización.",
      },
      { property: "og:title", content: "Aguaymanto Perú — Calidad que nace en nuestra tierra" },
      {
        property: "og:description",
        content: "Producción y comercialización de aguaymanto peruano seleccionado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reasonIcons = [Sprout, Award, HeartHandshake, Leaf, MapPin];

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Introducción */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal className="relative">
            <img
              src={nosotrosCampo}
              alt="Productor peruano mostrando aguaymanto recién cosechado en el campo"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-lift"
            />
            <div className="absolute -right-4 -bottom-6 hidden rounded-xl bg-[image:var(--gradient-gold)] px-6 py-5 shadow-[var(--shadow-gold)] sm:block">
              <p className="font-display text-lg font-semibold text-accent-foreground">
                Origen peruano
              </p>
              <p className="text-xs font-semibold text-accent-foreground/80">Del campo a tu negocio</p>
            </div>
          </Reveal>
          <SectionTitle
            eyebrow="Sobre nosotros"
            title="Comprometidos con la calidad del aguaymanto peruano"
            text="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
          >
            <Button asChild variant="field" size="lg" className="mt-8">
              <Link to="/quienes-somos">Conoce quiénes somos</Link>
            </Button>
          </SectionTitle>
        </div>
      </section>

      {/* Productos */}
      <section className="bg-muted/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionTitle
              eyebrow="Nuestros productos"
              title="Aguaymanto seleccionado para cada tipo de cliente"
            />
            <Button asChild variant="soft" size="lg">
              <Link to="/productos">Ver todos los productos</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="¿Por qué elegirnos?" title="Razones para confiar en nosotros" align="center" />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason, i) => {
              const Icon = reasonIcons[i % reasonIcons.length];
              return (
                <Reveal as="li" key={reason.title} delay={i * 80}>
                  <div className="h-full border-t-2 border-gold pt-6">
                    <Icon className="size-7 text-secondary" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-lg text-primary">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-muted/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionTitle
              eyebrow="Nuestros servicios"
              title="Atención comercial para particulares y empresas"
            />
            <Button asChild variant="soft" size="lg">
              <Link to="/servicios">Conocer nuestros servicios</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <WholesaleSection />

      {/* Galería */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Galería"
            title="Nuestro campo, nuestro producto"
            text="Campos, cosecha, selección y empaque: así trabajamos el aguaymanto."
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="bg-muted/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionTitle eyebrow="Noticias" title="Novedades y actualidad" />
            <Button asChild variant="soft" size="lg">
              <Link to="/noticias">Ver todas las noticias</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((post, i) => (
              <NewsCard key={post.slug} post={post} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            text="Si no encuentras la respuesta que buscas, escríbenos y te atenderemos personalmente."
          >
            <Button asChild variant="field" size="lg" className="mt-8">
              <Link to="/contacto">Contactarnos</Link>
            </Button>
          </SectionTitle>
          <Reveal>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
