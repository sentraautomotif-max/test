import Link from "next/link";

const articles = [
  {
    slug: "kapan-harus-ganti-kaca-depan-mobil",
    title: "Kapan Harus Ganti Kaca Depan Mobil?",
    excerpt: "Kenali tanda-tanda kerusakan kaca depan yang perlu segera diganti untuk keamanan berkendara Anda.",
  },
  {
    slug: "perbedaan-kaca-oem-dan-aftermarket",
    title: "Perbedaan Kaca OEM dan Aftermarket",
    excerpt: "Pahami kelebihan dan kekurangan masing-masing jenis kaca untuk memilih yang sesuai kebutuhan.",
  },
  {
    slug: "keamanan-pemasangan-kaca-mobil",
    title: "Pentingnya Pemasangan Kaca yang Benar",
    excerpt: "Pemasangan kaca yang tidak tepat bisa membahayakan. Ketahui standar pemasangan yang aman.",
  },
];

export default function ArticleTeaser() {
  return (
    <section className="bg-background py-20" id="artikel">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Artikel
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Artikel Seputar Kaca Mobil
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Informasi dan tips berguna seputar perawatan dan penggantian kaca mobil.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group border border-border bg-background p-6 transition-colors hover:border-primary/30"
            >
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
