import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/config/site";

export function CTASection({
  title = "Conversemos sobre tu próximo pedido",
  text = "Cuéntanos qué presentación y qué cantidad necesitas. Te responderemos con una propuesta clara.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-gold/40 bg-card p-8 shadow-card sm:p-12">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-balance-title text-2xl leading-tight text-primary sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contacto" hash="cotizacion">
                    Solicitar cotización
                  </Link>
                </Button>
                <Button asChild variant="field" size="lg">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Consultar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
