import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Award, Users, Leaf } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ValueCard } from "@/components/site/ValueCard";
import { Gallery } from "@/components/site/Gallery";
import { CTASection } from "@/components/site/CTASection";
import { history, mission, vision, values, commitments } from "@/data/company";
import heroCampos from "@/assets/hero-campos.jpg";
import nosotrosCampo from "@/assets/nosotros-campo.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes Somos — Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Conoce nuestra empresa de aguaymanto peruano: historia, misión, visión, valores y compromiso con la calidad.",
      },
      { property: "og:title", content: "Quiénes Somos — Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Una empresa con raíces en el campo peruano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const commitmentIcons = [Award, Users, Leaf];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa con raíces en el campo peruano"
        text="Producimos y comercializamos aguaymanto con compromiso, responsabilidad y visión de crecimiento."
        image={heroCampos}
        imageAlt="Valle andino con plantaciones de aguaymanto"
      />

      {/* Nuestra empresa */}
      <section id="empresa" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <SectionTitle eyebrow="Nuestra empresa" title="Del campo peruano a la mesa de nuestros clientes">
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Somos una empresa peruana dedicada a la producción y comercialización de aguaymanto.
                Ofrecemos aguaymanto fresco seleccionado y presentaciones orientadas a clientes
                comerciales.
              </p>
              <p>
                Atendemos a clientes particulares, restaurantes, hoteles, tiendas, distribuidores y
                compradores mayoristas, con atención personalizada y cuidado en cada pedido.
              </p>
              <p>
                Nos diferencia nuestro compromiso con la calidad: seleccionamos el fruto, cuidamos su
                presentación y buscamos relaciones comerciales duraderas.
              </p>
            </div>
          </SectionTitle>
          <Reveal>
            <img
              src={nosotrosCampo}
              alt="Productor de aguaymanto en el campo con fruta recién cosechada"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className="bg-muted/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Trayectoria" title="Nuestra historia" align="center" />
          <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
            <span
              className="absolute top-6 right-0 left-0 hidden h-px bg-gold/50 md:block"
              aria-hidden="true"
            />
            {history.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 120} className="relative">
                <span className="relative z-10 grid size-12 place-items-center rounded-full bg-[image:var(--gradient-gold)] font-display text-base font-semibold text-accent-foreground shadow-[var(--shadow-gold)]">
                  {item.step}
                </span>
                <h3 className="mt-6 font-display text-xl text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <article id="mision" className="surface-field h-full rounded-2xl p-10 shadow-lift lg:p-12">
              <Target className="size-10 text-gold" aria-hidden="true" />
              <h2 className="mt-6 text-3xl text-primary-foreground">Nuestra Misión</h2>
              <p className="mt-5 text-base leading-relaxed text-primary-foreground/85 lg:text-lg">
                {mission}
              </p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article
              id="vision"
              className="h-full rounded-2xl border border-gold/40 bg-card p-10 shadow-card lg:p-12"
            >
              <Eye className="size-10 text-accent" aria-hidden="true" />
              <h2 className="mt-6 text-3xl text-primary">Nuestra Visión</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="bg-muted/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Lo que nos guía" title="Nuestros valores" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <ValueCard key={value.name} name={value.name} text={value.text} delay={i * 70} />
            ))}
          </ul>
        </div>
      </section>

      {/* Compromiso */}
      <section id="compromiso" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Responsabilidad" title="Nuestro compromiso" align="center" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {commitments.map((c, i) => {
              const Icon = commitmentIcons[i]!;
              return (
                <Reveal key={c.title} delay={i * 100}>
                  <div className="text-center">
                    <span className="mx-auto grid size-16 place-items-center rounded-full bg-muted text-secondary">
                      <Icon className="size-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-xl text-primary">{c.title}</h3>
                    <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {c.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Galería" title="Así trabajamos" />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <CTASection title="¿Quieres trabajar con nosotros?" />
    </>
  );
}
