import { Link } from "@tanstack/react-router";
import {
  ShoppingBasket,
  Truck,
  UtensilsCrossed,
  Store,
  ClipboardList,
  Headset,
  ArrowRight,
} from "lucide-react";
import type { Service } from "@/data/services";
import { Reveal } from "./Reveal";

const icons = { ShoppingBasket, Truck, UtensilsCrossed, Store, ClipboardList, Headset };

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const Icon = icons[service.icon];
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lift">
        <span
          className="grid size-13 place-items-center rounded-lg bg-muted text-primary transition-colors duration-500 group-hover:bg-[image:var(--gradient-gold)]"
          aria-hidden="true"
        >
          <Icon className="size-6" />
        </span>
        <h3 className="mt-6 font-display text-lg text-primary">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <Link
          to="/contacto"
          hash="cotizacion"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-accent"
        >
          Consultar
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Reveal>
  );
}
