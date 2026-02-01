import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Artikel Seputar Kaca Mobil",
  description: "Informasi dan tips berguna seputar perawatan, penggantian, dan pemasangan kaca mobil dari Sentra Autoglass.",
};

// Tags for SEO - related search keywords
const allTags = [
  { slug: "ganti-kaca-mobil", label: "Ganti Kaca Mobil" },
  { slug: "kaca-depan-mobil", label: "Kaca Depan Mobil" },
  { slug: "kaca-oem", label: "Kaca OEM" },
  { slug: "kaca-aftermarket", label: "Kaca Aftermarket" },
  { slug: "pemasangan-kaca", label: "Pemasangan Kaca" },
  { slug: "kaca-mobil-retak", label: "Kaca Mobil Retak" },
  { slug: "home-service-kaca", label: "Home Service Kaca" },
  { slug: "garansi-kaca-mobil", label: "Garansi Kaca Mobil" },
  { slug: "kaca-mobil-bocor", label: "Kaca Mobil Bocor" },
  { slug: "windshield", label: "Windshield" },
];

const articles = [
  {
    slug: "kapan-harus-ganti-kaca-depan-mobil",
    title: "Kapan Harus Ganti Kaca Depan Mobil?",
    excerpt: "Kenali tanda-tanda kerusakan kaca depan yang perlu segera diganti untuk keamanan berkendara Anda.",
    date: "15 Januari 2026",
    imageSrc: "/images/articles/ganti-kaca-depan.jpg",
    tags: ["ganti-kaca-mobil", "kaca-depan-mobil", "kaca-mobil-retak", "windshield"],
  },
  {
    slug: "perbedaan-kaca-oem-dan-aftermarket",
    title: "Perbedaan Kaca OEM dan Aftermarket",
    excerpt: "Pahami kelebihan dan kekurangan masing-masing jenis kaca untuk memilih yang sesuai kebutuhan.",
    date: "10 Januari 2026",
    imageSrc: "/images/articles/oem-vs-aftermarket.jpg",
    tags: ["kaca-oem", "kaca-aftermarket", "ganti-kaca-mobil", "garansi-kaca-mobil"],
  },
  {
    slug: "keamanan-pemasangan-kaca-mobil",
    title: "Pentingnya Pemasangan Kaca yang Benar",
    excerpt: "Pemasangan kaca yang tidak tepat bisa membahayakan. Ketahui standar pemasangan yang aman.",
    date: "5 Januari 2026",
    imageSrc: "/images/articles/pemasangan-kaca.jpg",
    tags: ["pemasangan-kaca", "garansi-kaca-mobil", "kaca-mobil-bocor", "home-service-kaca"],
  },
];

// Helper to get tag label from slug
function getTagLabel(tagSlug: string): string {
  return allTags.find(t => t.slug === tagSlug)?.label || tagSlug;
}

type Props = {
  searchParams: Promise<{ tag?: string }>;
};

export default async function ArtikelPage({ searchParams }: Props) {
  const { tag } = await searchParams;
  
  // Filter articles by tag if tag parameter exists
  const filteredArticles = tag 
    ? articles.filter(article => article.tags.includes(tag))
    : articles;

  const activeTagLabel = tag ? getTagLabel(tag) : null;

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              {activeTagLabel ? `Artikel: ${activeTagLabel}` : "Artikel Seputar Kaca Mobil"}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-secondary-foreground/70">
              Temukan informasi dan tips berguna seputar perawatan, penggantian, dan pemasangan kaca mobil.
            </p>

            {/* Tags Filter */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/artikel"
                className={`inline-flex items-center px-3 py-1.5 text-xs font-medium transition-colors ${
                  !tag 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary-foreground/10 text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Semua
              </Link>
              {allTags.map((t) => (
                <Link
                  key={t.slug}
                  href={`/artikel?tag=${t.slug}`}
                  className={`inline-flex items-center px-3 py-1.5 text-xs font-medium transition-colors ${
                    tag === t.slug 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary-foreground/10 text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-4">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Belum ada artikel dengan tag ini.</p>
                <Link
                  href="/artikel"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Lihat semua artikel
                </Link>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="group border border-border bg-background overflow-hidden transition-colors hover:border-primary/30"
                  >
                    {/* Image with Next.js Image - lazy loaded */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={article.imageSrc}
                        alt={article.title}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {/* Fallback placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-800 -z-10">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="h-10 w-10 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <h2 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      {/* Article tags */}
                      <div className="mt-4 flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tagSlug) => (
                          <Link
                            key={tagSlug}
                            href={`/artikel?tag=${tagSlug}`}
                            className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium bg-secondary text-secondary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {getTagLabel(tagSlug)}
                          </Link>
                        ))}
                      </div>
                      
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
            )}

            {/* Internal Links for SEO */}
            <div className="mt-16 border-t border-border pt-8">
              <h2 className="text-lg font-semibold text-foreground">
                Layanan Sentra Autoglass
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Link href="/" className="text-sm text-primary hover:underline">
                  Beranda - Konsultasi Ganti Kaca Mobil
                </Link>
                <Link href="/#home-service" className="text-sm text-primary hover:underline">
                  Layanan Home Service Kaca Mobil
                </Link>
                <Link href="/#lokasi" className="text-sm text-primary hover:underline">
                  Lokasi Workshop Kami
                </Link>
                <Link href="/#gallery" className="text-sm text-primary hover:underline">
                  Galeri Hasil Pemasangan
                </Link>
                <Link href="/#social-proof" className="text-sm text-primary hover:underline">
                  Video Dokumentasi Pemasangan
                </Link>
                <Link href="/#faq" className="text-sm text-primary hover:underline">
                  FAQ - Pertanyaan Umum
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
