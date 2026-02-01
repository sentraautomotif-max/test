import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Artikel Seputar Kaca Mobil",
  description: "Informasi dan tips berguna seputar perawatan, penggantian, dan pemasangan kaca mobil dari Sentra Autoglass.",
};

const articles = [
  {
    slug: "kapan-harus-ganti-kaca-depan-mobil",
    title: "Kapan Harus Ganti Kaca Depan Mobil?",
    excerpt: "Kenali tanda-tanda kerusakan kaca depan yang perlu segera diganti untuk keamanan berkendara Anda.",
    date: "15 Januari 2026",
  },
  {
    slug: "perbedaan-kaca-oem-dan-aftermarket",
    title: "Perbedaan Kaca OEM dan Aftermarket",
    excerpt: "Pahami kelebihan dan kekurangan masing-masing jenis kaca untuk memilih yang sesuai kebutuhan.",
    date: "10 Januari 2026",
  },
  {
    slug: "keamanan-pemasangan-kaca-mobil",
    title: "Pentingnya Pemasangan Kaca yang Benar",
    excerpt: "Pemasangan kaca yang tidak tepat bisa membahayakan. Ketahui standar pemasangan yang aman.",
    date: "5 Januari 2026",
  },
];

export default function ArtikelPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Artikel Seputar Kaca Mobil
            </h1>
            <p className="mt-4 max-w-2xl text-base text-secondary-foreground/70">
              Temukan informasi dan tips berguna seputar perawatan, penggantian, dan pemasangan kaca mobil.
            </p>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="group border border-border bg-background p-6 transition-colors hover:border-primary/30"
                >
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <h2 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
