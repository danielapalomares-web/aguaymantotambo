import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { Reveal } from "./Reveal";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={product.image}
            alt={product.imageAlt}
            width={1200}
            height={900}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-display text-xl text-primary">{product.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          <dl className="mt-5 space-y-2 text-sm">
            {[
              ["Presentación", product.presentation],
              ["Peso", product.weight],
              ["Disponibilidad", product.availability],
              ["Precio", product.price],
            ]
              .filter(([, value]) => Boolean(value))
              .map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-b border-border/70 pb-2">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="font-semibold text-primary">{value}</dd>
                </div>
              ))}
          </dl>

          {product.features?.length ? (
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          ) : null}

          <Button asChild variant="field" size="lg" className="mt-7 w-full">
            <Link to="/contacto" hash="cotizacion" search={{ producto: product.name }}>
              {product.ctaLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
