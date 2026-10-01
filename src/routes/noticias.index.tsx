import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { NewsCard } from "@/components/site/NewsCard";
import { news, newsCategories } from "@/data/news";
import noticiaCultivo from "@/assets/noticia-cultivo.jpg";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Noticias y actualidad — Aguaymanto Perú" },
      {
        name: "description",
        content: "Novedades de la empresa, agricultura, mercado y todo sobre el aguaymanto peruano.",
      },
      { property: "og:title", content: "Noticias y actualidad — Aguaymanto Perú" },
      { property: "og:description", content: "Novedades sobre el aguaymanto peruano y nuestra empresa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Noticias y actualidad"
        title="Novedades desde el campo peruano"
        image={noticiaCultivo}
        imageAlt="Plantación de aguaymanto con frutos madurando"
      />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap gap-2" aria-label="Categorías">
            {newsCategories.map((cat) => (
              <li
                key={cat}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-primary"
              >
                {cat}
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((post, i) => (
              <NewsCard key={post.slug} post={post} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
