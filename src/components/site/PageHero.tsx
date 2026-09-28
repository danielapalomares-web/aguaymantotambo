import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-deep pt-36 pb-16 lg:pt-44 lg:pb-24">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="eyebrow text-gold-soft">
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="text-balance-title mt-5 max-w-3xl text-4xl leading-[1.1] text-primary-foreground sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>
        {text ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {text}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
