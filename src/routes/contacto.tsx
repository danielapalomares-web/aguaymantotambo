import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { site, whatsappLink } from "@/config/site";
import heroEmpaque from "@/assets/hero-empaque.jpg";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y cotizaciones — Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Solicita una cotización de aguaymanto peruano o escríbenos por WhatsApp. Atendemos particulares, restaurantes, tiendas y distribuidores.",
      },
      { property: "og:title", content: "Contacto — Aguaymanto Perú" },
      { property: "og:description", content: "Estamos aquí para atenderte." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { Icon: MessageCircle, label: "WhatsApp", value: site.contact.whatsappDisplay, href: whatsappLink(), external: true },
  { Icon: Phone, label: "Teléfono", value: site.contact.phoneDisplay, href: site.contact.phoneHref },
  { Icon: Mail, label: "Correo electrónico", value: site.contact.email },
  { Icon: MapPin, label: "Dirección", value: `${site.contact.address}, ${site.contact.city}` },
  { Icon: Clock, label: "Horario de atención", value: site.contact.schedule },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos aquí para atenderte"
        text="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
        image={heroEmpaque}
        imageAlt="Aguaymanto empacado en presentaciones comerciales"
      />

      <section id="cotizacion" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
          <div>
            <SectionTitle eyebrow="Datos de contacto" title="Hablemos" />
            <ul className="mt-8 space-y-4">
              {channels.map(({ Icon, label, value, href, external }, i) => {
                const content = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-muted text-secondary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold tracking-wider text-muted-foreground uppercase">
                        {label}
                      </span>
                      <span className="mt-0.5 block font-semibold text-primary">{value}</span>
                    </span>
                  </>
                );
                return (
                  <Reveal as="li" key={label} delay={i * 60}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-gold/60"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                        {content}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </ul>
          </div>
          <Reveal>
            <h2 className="sr-only">Formulario de contacto</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/60 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionTitle eyebrow="Preguntas frecuentes" title="Antes de escribirnos" align="center" />
          <div className="mt-10">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
