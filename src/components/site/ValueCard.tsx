import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

export function ValueCard({
  name,
  text,
  delay = 0,
}: {
  name: string;
  text: string;
  delay?: number;
}) {
  return (
    <Reveal as="li" delay={delay} className="h-full">
      <div className="flex h-full gap-4 rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/60">
        <span
          className="grid size-9 shrink-0 place-items-center rounded-full bg-muted text-secondary"
          aria-hidden="true"
        >
          <Check className="size-4" />
        </span>
        <div>
          <h3 className="font-display text-base text-primary">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
        </div>
      </div>
    </Reveal>
  );
}
