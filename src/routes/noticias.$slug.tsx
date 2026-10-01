import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { NewsCard } from "@/components/site/NewsCard";
import { CTASection } from "@/components/site/CTASection";
import { getPost, news } from "@/data/news";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Noticia no encontrada — Aguaymanto Perú" }] };
    return {
      meta: [
        { title: `${post.title} — Aguaymanto Perú` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 pt-40 pb-24 text-center">
      <h1 className="text-3xl text-primary">Noticia no encontrada</h1>
      <Link to="/noticias" className="mt-6 inline-block font-semibold text-secondary">
        Volver a noticias
      </Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = news.filter((n) => n.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="pt-32 lg:pt-40">
        <header className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-accent"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Volver a noticias
          </Link>
          <span className="mt-6 block w-fit rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-xs font-bold text-accent-foreground">
            {post.category}
          </span>
          <h1 className="text-balance-title mt-5 text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CalendarDays className="size-4" aria-hidden="true" />
              <time dateTime={post.date}>{post.dateLabel}</time>
            </span>
            <span className="flex items-center gap-2">
              <User className="size-4" aria-hidden="true" />
              {post.author}
            </span>
          </div>
        </header>
        <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={800}
            className="aspect-16/9 w-full rounded-2xl object-cover shadow-lift"
          />
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-6 px-4 text-base leading-relaxed text-foreground sm:px-6 sm:text-lg">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {post.gallery?.length ? (
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 px-4 sm:grid-cols-2 sm:px-6">
            {post.gallery.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-4/3 w-full rounded-xl object-cover"
              />
            ))}
          </div>
        ) : null}
      </article>

      <section className="mt-20 bg-muted/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-primary sm:text-3xl">Noticias relacionadas</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <NewsCard key={p.slug} post={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
