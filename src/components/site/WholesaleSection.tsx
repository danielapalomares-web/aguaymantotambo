import { Link } from "@tanstack/react-router";
import { Boxes, HandHeart, Package, Truck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import heroCampos from "@/assets/hero-campos.jpg";

const items = [
  { Icon: Boxes, label: "Pedidos por volumen" },
  { Icon: HandHeart, label: "Atención personalizada" },
  { Icon: Package, label: "Presentaciones comerciales" },
  { Icon: Truck, label: "Coordinación de entregas" },
  { Icon: FileText, label: "Cotizaciones" },
];

export function WholesaleSection() {
  return (
    <section id="mayoristas" className="relative overflow-hidden bg-primary-deep py-20 lg:py-28">
      <img
        src={heroCampos}
        alt="Plantación de aguaymanto en el campo peruano"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-field)] opacity-85" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow text-gold-soft">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              Clientes mayoristas
            </span>
            <h2 className="text-balance-title mt-5 text-3xl leading-tight text-primary-foreground sm:text-4xl lg:text-[2.75rem]">
              ¿Buscas un proveedor de aguaymanto?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y
              otros negocios que requieren aguaymanto.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/contacto" hash="cotizacion">
                Solicitar cotización
              </Link>
            </Button>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map(({ Icon, label }, i) => (
              <Reveal as="li" key={label} delay={i * 80}>
                <div className="flex h-full items-center gap-4 rounded-xl border border-primary-foreground/15 bg-primary-foreground/8 p-5 backdrop-blur-sm">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-gold)] text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-primary-foreground">{label}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
