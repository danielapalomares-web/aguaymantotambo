import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import heroCampos from "@/assets/hero-campos.jpg";
import heroEmpaque from "@/assets/hero-empaque.jpg";

type Slide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  text?: string;
  actions: { label: string; to: "/" | "/productos" | "/quienes-somos" | "/contacto"; hash?: string; variant: "hero" | "onImage" }[];
};

const slides: Slide[] = [
  {
    image: heroAguaymanto,
    alt: "Aguaymanto peruano fresco recién cosechado en una canasta de mimbre",
    eyebrow: "Aguaymanto peruano",
    title: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    text: "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    actions: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "hero" },
      { label: "Solicitar cotización", to: "/contacto", hash: "cotizacion", variant: "onImage" },
    ],
  },
  {
    image: heroCampos,
    alt: "Plantaciones de aguaymanto en andenes de un valle andino del Perú",
    eyebrow: "Origen y campo",
    title: "Del campo peruano a nuevos mercados",
    text: "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    actions: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "hero" }],
  },
  {
    image: heroEmpaque,
    alt: "Aguaymanto fresco empacado en presentaciones comerciales",
    eyebrow: "Presentaciones comerciales",
    title: "Natural, versátil y de excelente calidad",
    actions: [{ label: "Ver productos", to: "/productos", hash: "catalogo", variant: "hero" }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      aria-label="Presentación de la empresa"
      aria-roledescription="carrusel"
      className="relative min-h-[88vh] overflow-hidden bg-primary-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "size-full object-cover transition-transform duration-[8000ms] ease-out",
              i === index ? "scale-105" : "scale-100",
            )}
          />
          <div
            className="absolute inset-0 bg-[image:var(--gradient-hero)]"
            aria-hidden="true"
          />
        </div>
      ))}

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className={cn(
              "max-w-3xl transition-all duration-700",
              i === index
                ? "translate-y-0 opacity-100"
                : "pointer-events-none absolute translate-y-6 opacity-0",
            )}
          >
            <span className="eyebrow text-gold-soft">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              {slide.eyebrow}
            </span>
            {i === 0 ? (
              <h1 className="text-balance-title mt-5 text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
            ) : (
              <p className="text-balance-title mt-5 font-display text-4xl leading-[1.08] font-semibold text-primary-foreground sm:text-5xl lg:text-6xl">
                {slide.title}
              </p>
            )}
            {slide.text ? (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                {slide.text}
              </p>
            ) : null}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {slide.actions.map((action) => (
                <Button key={action.label} asChild variant={action.variant} size="lg">
                  <Link to={action.to} {...(action.hash ? { hash: action.hash } : {})}>
                    {action.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 flex items-center gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Elegir presentación">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir a la imagen ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index
                    ? "w-10 bg-gold"
                    : "w-5 bg-primary-foreground/40 hover:bg-primary-foreground/70",
                )}
              />
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Imagen anterior"
              className="grid size-11 place-items-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Imagen siguiente"
              className="grid size-11 place-items-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
