import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { articles, type Article } from "@/data/articles";
import { SITE } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/tracking";

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
  { slug: "perawatan-kaca", label: "Perawatan Kaca" },
  { slug: "kaca-samping-mobil", label: "Kaca Samping" },
  { slug: "kaca-belakang-mobil", label: "Kaca Belakang" },
];

// Helper function to parse markdown to HTML
function parseMarkdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*?)$/gm, "<h3 className=\"text-lg font-semibold text-foreground mt-4 mb-2\">$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2 className=\"text-xl font-bold text-foreground mt-6 mb-3\">$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1 className=\"text-2xl font-bold text-foreground mt-0 mb-4\">$1</h1>");

  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, "<a href=\"$2\" className=\"text-primary hover:underline\">$1</a>");

  // Lists (simple bullet points)
  html = html.replace(/^- (.*?)$/gm, "<li className=\"ml-4\">$1</li>");

  // Line breaks for paragraphs
  const lines = html.split("\n");
  let result = "";
  let inList = false;
  for (const line of lines) {
    if (line.startsWith("<li")) {
      if (!inList) {
        result += "<ul className=\"list-disc pl-6 space-y-1 my-3\">";
        inList = true;
      }
      result += line + "\n";
    } else if (inList && !line.startsWith("<li")) {
      result += "</ul>";
      inList = false;
      if (line.trim()) {
        result += `<p className="text-base leading-relaxed text-muted-foreground my-3">${line}</p>`;
      }
    } else if (line.trim()) {
      if (!line.startsWith("<h") && !line.startsWith("<p")) {
        result += `<p className="text-base leading-relaxed text-muted-foreground my-3">${line}</p>`;
      } else {
        result += line;
      }
    }
  }
  if (inList) {
    result += "</ul>";
  }

  return result;
}

// Helper to get tag label from slug
function getTagLabel(tagSlug: string): string {
  return allTags.find(t => t.slug === tagSlug)?.label || tagSlug;
}

// Helper to find related articles
function getRelatedArticles(currentArticle: Article, limit: number = 3): Article[] {
  const commonTags = currentArticle.tags;
  return articles
    .filter(a => a.slug !== currentArticle.slug && a.tags.some(t => commonTags.includes(t)))
    .slice(0, limit);
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags.map(t => getTagLabel(t)).join(", "),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage, width: 1200, height: 630, alt: article.title }],
    },
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArtikelDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);
  const waUrl = buildWhatsAppUrl(
    SITE.phone,
    "Halo Sentra, saya mau konsultasi ganti kaca mobil setelah membaca artikel di website. Mobil: [merek+tipe+tahun]."
  );

  // Parse markdown content into sections
  const contentLines = article.content.split("\n\n");

  return (
    <>
      <Header />
      <main className="pt-16">
        <article className="bg-background py-16">
          <div className="mx-auto max-w-3xl px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground">Beranda</Link>
              <span>/</span>
              <Link href="/artikel" className="hover:text-foreground">Artikel</Link>
              <span>/</span>
              <span className="text-foreground">{article.title}</span>
            </nav>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              {article.title}
            </h1>

            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{new Date(article.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span>•</span>
              <span>Sentra Autoglass</span>
            </div>

            {/* Tags Section */}
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tagSlug) => (
                <Link
                  key={tagSlug}
                  href={`/artikel?tag=${tagSlug}`}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {getTagLabel(tagSlug)}
                </Link>
              ))}
            </div>

            {/* Article Content - Rendered from Markdown */}
            <div className="mt-8 prose prose-invert max-w-none space-y-4">
              {contentLines.map((section, index) => {
                // Handle headers
                if (section.startsWith("# ")) {
                  const title = section.replace("# ", "");
                  return <h1 key={index} className="text-2xl font-bold text-foreground mt-6 mb-4">{title}</h1>;
                }
                if (section.startsWith("## ")) {
                  const title = section.replace("## ", "");
                  return <h2 key={index} className="text-xl font-bold text-foreground mt-6 mb-3">{title}</h2>;
                }
                if (section.startsWith("### ")) {
                  const title = section.replace("### ", "");
                  return <h3 key={index} className="text-lg font-semibold text-foreground mt-4 mb-2">{title}</h3>;
                }

                // Handle lists
                if (section.split("\n")[0]?.startsWith("- ")) {
                  const items = section.split("\n").filter(line => line.startsWith("- "));
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-1 my-3">
                      {items.map((item, i) => (
                        <li key={i} className="text-muted-foreground">{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }

                // Handle regular paragraphs and tables
                if (section.includes("|")) {
                  // Simple table parsing
                  return (
                    <div key={index} className="overflow-x-auto my-4">
                      <table className="min-w-full border-collapse border border-border">
                        <tbody>
                          {section.split("\n").map((row, i) => {
                            if (!row.includes("|") || row.includes("---")) return null;
                            const cells = row.split("|").slice(1, -1);
                            return (
                              <tr key={i} className="border border-border">
                                {cells.map((cell, j) => (
                                  <td key={j} className="border border-border px-4 py-2 text-sm text-muted-foreground">
                                    {cell.trim()}
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                // Regular paragraph
                if (section.trim()) {
                  return (
                    <p key={index} className="text-base leading-relaxed text-muted-foreground">
                      {section}
                    </p>
                  );
                }

                return null;
              })}
            </div>

            {/* Internal Links Section */}
            <div className="mt-12 border-t border-border pt-8">
              <h2 className="text-lg font-semibold text-foreground">Layanan Kami</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/#home-service" className="text-sm text-primary hover:underline">
                    Layanan Home Service - Teknisi datang ke lokasi Anda
                  </Link>
                </li>
                <li>
                  <Link href="/lokasi" className="text-sm text-primary hover:underline">
                    Lokasi Workshop - Tangerang, Bekasi, Surabaya
                  </Link>
                </li>
                <li>
                  <Link href="/#gallery" className="text-sm text-primary hover:underline">
                    Galeri Hasil Pemasangan Kaca Mobil
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-sm text-primary hover:underline">
                    FAQ - Pertanyaan Umum
                  </Link>
                </li>
              </ul>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-8 border-t border-border pt-8">
                <h2 className="text-lg font-semibold text-foreground">Artikel Terkait</h2>
                <ul className="mt-4 space-y-2">
                  {relatedArticles.map((relArticle) => (
                    <li key={relArticle.slug}>
                      <Link 
                        href={`/artikel/${relArticle.slug}`} 
                        className="text-sm text-primary hover:underline"
                      >
                        {relArticle.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-12 border-t border-border pt-8">
              <p className="text-base font-semibold text-foreground">
                Butuh konsultasi tentang kaca mobil Anda?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Tim kami siap membantu menjawab pertanyaan dan memberikan rekomendasi terbaik.
              </p>
              <a
                href={waUrl}
                data-cta="wa_article"
                className="mt-4 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Konsultasi Ganti Kaca Mobil via WhatsApp
              </a>
            </div>

            {/* JSON-LD Schema for Article */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  headline: article.title,
                  description: article.excerpt,
                  image: article.coverImage,
                  datePublished: article.date,
                  author: {
                    "@type": "Organization",
                    name: "Sentra Autoglass",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "Sentra Autoglass",
                    logo: {
                      "@type": "ImageObject",
                      url: `${SITE.url}/logo.png`,
                    },
                  },
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `${SITE.url}/artikel/${slug}`,
                  },
                }),
              }}
            />
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
