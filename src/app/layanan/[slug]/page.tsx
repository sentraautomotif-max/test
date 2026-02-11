import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { articles } from "@/data/articles";
import { SITE } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/tracking";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Layanan Tidak Ditemukan" };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
    },
  };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function LayananDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Find related articles by matching tags
  const relatedArticles = articles
    .filter((a) => a.tags.some((t) => service.relatedArticleTags.includes(t)))
    .slice(0, 3);

  const waUrl = buildWhatsAppUrl(
    SITE.phone,
    `Halo Sentra, saya mau konsultasi tentang layanan ${service.shortTitle}. Mobil: [merek+tipe+tahun]. Lokasi: [kota].`
  );

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-4xl px-4">
            <nav className="flex items-center gap-2 text-sm text-secondary-foreground/60 mb-6">
              <Link href="/" className="hover:text-secondary-foreground">Beranda</Link>
              <span>/</span>
              <Link href="/#layanan" className="hover:text-secondary-foreground">Layanan</Link>
              <span>/</span>
              <span className="text-secondary-foreground">{service.shortTitle}</span>
            </nav>

            <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl text-balance">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/70">
              {service.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={waUrl}
                data-cta={`wa_layanan_${slug}`}
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Konsultasi via WhatsApp
              </a>
              <Link
                href="/lokasi"
                className="inline-flex items-center justify-center border border-secondary-foreground/20 px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary-foreground/5"
              >
                Lihat Lokasi Workshop
              </Link>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="space-y-10">
              {service.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-xl font-bold text-foreground">{section.heading}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Warranty Info */}
            <div className="mt-12 border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-base font-semibold text-foreground">Garansi</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.warranty}</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-secondary-foreground">Pertanyaan Umum</h2>
            <div className="mt-8 space-y-6">
              {service.faq.map((item, idx) => (
                <div key={idx} className="border-b border-secondary-foreground/10 pb-6 last:border-b-0">
                  <h3 className="text-base font-semibold text-secondary-foreground">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">{item.a}</p>
                </div>
              ))}
            </div>

            {/* FAQ Schema JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: service.faq.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: item.a,
                    },
                  })),
                }),
              }}
            />
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-background py-16">
            <div className="mx-auto max-w-4xl px-4">
              <h2 className="text-xl font-bold text-foreground">Artikel Terkait</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/artikel/${article.slug}`}
                    className="group border border-border p-4 transition-colors hover:border-primary/30"
                  >
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Services */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-xl font-bold text-secondary-foreground">Layanan Lainnya</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {SERVICES.filter((s) => s.slug !== slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/layanan/${s.slug}`}
                  className="group flex items-start gap-3 border border-secondary-foreground/10 bg-secondary-foreground/5 p-4 transition-colors hover:border-primary/30"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-secondary-foreground group-hover:text-primary transition-colors">
                      {s.shortTitle}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-secondary-foreground/60 line-clamp-2">
                      {s.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-background py-12">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-lg font-semibold text-foreground">
              Butuh {service.shortTitle}?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Konsultasi gratis, estimasi harga transparan, garansi jelas.
            </p>
            <a
              href={waUrl}
              data-cta={`wa_layanan_bottom_${slug}`}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Konsultasi via WhatsApp
            </a>
          </div>
        </section>

        {/* Service Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: {
                "@type": "LocalBusiness",
                name: SITE.name,
                url: SITE.url,
                telephone: `+${SITE.phone}`,
              },
              areaServed: ["Tangerang", "Bekasi", "Surabaya"],
              serviceType: "Penggantian Kaca Mobil",
            }),
          }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
