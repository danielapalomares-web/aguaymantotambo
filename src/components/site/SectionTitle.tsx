import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "dark",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  children?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        tone === "light" && "text-primary-foreground",
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "eyebrow mb-4",
            tone === "light" ? "text-gold-soft" : "text-secondary",
          )}
        >
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-balance-title text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
