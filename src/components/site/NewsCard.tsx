import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { NewsPost } from "@/data/news";
import { Reveal } from "./Reveal";

export function NewsCard({ post, delay = 0 }: { post: NewsPost; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
        <Link to="/noticias/$slug" params={{ slug: post.slug }} className="relative block aspect-16/10 overflow-hidden">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={800}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-xs font-bold text-accent-foreground">
            {post.category}
          </span>
        </Link>
        <div className="flex flex-1 flex-col p-7">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            <time dateTime={post.date}>{post.dateLabel}</time>
          </p>
          <h3 className="mt-3 font-display text-lg leading-snug text-primary">
            <Link to="/noticias/$slug" params={{ slug: post.slug }} className="hover:text-secondary">
              {post.title}
            </Link>
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <Link
            to="/noticias/$slug"
            params={{ slug: post.slug }}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-accent"
          >
            Leer más
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
