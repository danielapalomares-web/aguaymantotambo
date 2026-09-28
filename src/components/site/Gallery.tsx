import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import heroCampos from "@/assets/hero-campos.jpg";
import heroEmpaque from "@/assets/hero-empaque.jpg";
import nosotrosCampo from "@/assets/nosotros-campo.jpg";
import galeriaSeleccion from "@/assets/galeria-seleccion.jpg";
import noticiaCultivo from "@/assets/noticia-cultivo.jpg";

const images = [
  { src: heroCampos, alt: "Campos y plantaciones de aguaymanto en un valle andino", span: "lg:col-span-2 lg:row-span-2" },
  { src: heroAguaymanto, alt: "Aguaymanto fresco seleccionado en canasta", span: "" },
  { src: nosotrosCampo, alt: "Productor peruano mostrando aguaymanto recién cosechado", span: "" },
  { src: galeriaSeleccion, alt: "Selección y empaque del aguaymanto en instalaciones limpias", span: "lg:col-span-2" },
  { src: noticiaCultivo, alt: "Frutos de aguaymanto madurando en la planta", span: "" },
  { src: heroEmpaque, alt: "Presentaciones comerciales de aguaymanto listas para distribución", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, i) => (
          <Reveal key={image.alt} delay={i * 60} className={cn("h-full", image.span)}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ampliar imagen: ${image.alt}`}
              className="group relative size-full overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-primary-deep/0 transition-colors duration-500 group-hover:bg-primary-deep/25" />
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-deep/95 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Cerrar imagen"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <X className="size-5" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="max-h-[75vh] w-full rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-primary-foreground/80">
              {images[active].alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
