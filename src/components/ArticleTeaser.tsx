import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";

export default function ArticleTeaser() {
  // Show only the 3 most recent articles
  const recentArticles = articles.slice(0, 3);

  return (
    <section className="bg-secondary py-20" id="artikel">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Artikel
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-secondary-foreground md:text-3xl">
            Artikel Seputar Kaca Mobil
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-secondary-foreground/70">
            Informasi dan tips berguna seputar perawatan dan penggantian kaca mobil.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {recentArticles.map((article) => (
            <article
              key={article.slug}
              className="group border border-secondary-foreground/10 bg-secondary-foreground/5 overflow-hidden transition-colors hover:border-primary/30"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-800 -z-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-10 w-10 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-base font-semibold text-secondary-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/70 line-clamp-2">
                  {article.excerpt}
                </p>
                <Link
                  href={`/artikel/${article.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Baca Selengkapnya
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Lihat Semua Artikel
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
