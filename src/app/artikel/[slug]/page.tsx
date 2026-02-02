import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
  { slug: "windshield", label: "Windshield" },
];

const articles: Record<string, { 
  title: string; 
  description: string; 
  content: string[];
  tags: string[];
  relatedArticles: string[];
}> = {
  "kapan-harus-ganti-kaca-depan-mobil": {
    title: "Kapan Harus Ganti Kaca Depan Mobil?",
    description: "Kenali tanda-tanda kerusakan kaca depan yang perlu segera diganti untuk keamanan berkendara Anda.",
    tags: ["ganti-kaca-mobil", "kaca-depan-mobil", "kaca-mobil-retak", "windshield"],
    relatedArticles: ["perbedaan-kaca-oem-dan-aftermarket", "keamanan-pemasangan-kaca-mobil"],
    content: [
      "Kaca depan mobil adalah komponen penting yang melindungi pengemudi dan penumpang dari berbagai elemen luar. Ketika kaca depan mengalami kerusakan, penting untuk mengetahui kapan harus memperbaiki atau menggantinya.",
      "Berikut adalah tanda-tanda kaca depan perlu diganti:",
      "Retak yang memanjang lebih dari 30 cm biasanya sudah tidak bisa diperbaiki dan perlu penggantian. Retakan panjang dapat mengganggu struktur kaca dan membahayakan keamanan.",
      "Keretakan di area pandang pengemudi dapat mengganggu visibilitas dan berbahaya saat berkendara. Meskipun retaknya kecil, jika berada di area pandang utama, sebaiknya segera diganti.",
      "Kaca yang sudah kabur atau berjamur tidak hanya mengganggu estetika, tapi juga dapat mengurangi kejernihan pandangan, terutama saat berkendara di malam hari atau kondisi hujan.",
      "Jika Anda mengalami kecelakaan dan kaca depan terkena benturan, meskipun terlihat tidak ada kerusakan yang berarti, ada baiknya untuk memeriksakan kaca ke profesional.",
    ],
  },
  "perbedaan-kaca-oem-dan-aftermarket": {
    title: "Perbedaan Kaca OEM dan Aftermarket",
    description: "Pahami kelebihan dan kekurangan masing-masing jenis kaca untuk memilih yang sesuai kebutuhan.",
    tags: ["kaca-oem", "kaca-aftermarket", "ganti-kaca-mobil", "garansi-kaca-mobil"],
    relatedArticles: ["kapan-harus-ganti-kaca-depan-mobil", "keamanan-pemasangan-kaca-mobil"],
    content: [
      "Saat memilih kaca pengganti untuk mobil Anda, dua pilihan utama yang tersedia adalah kaca OEM (Original Equipment Manufacturer) dan kaca aftermarket. Keduanya memiliki karakteristik berbeda.",
      "Kaca OEM adalah kaca yang diproduksi oleh pabrikan yang sama dengan yang memasok kaca ke pabrik mobil. Kaca ini memiliki spesifikasi yang identik dengan kaca asli kendaraan.",
      "Kelebihan kaca OEM meliputi kualitas terjamin sesuai standar pabrikan, fit dan finish yang sempurna, serta garansi dari pabrikan. Namun, harganya cenderung lebih mahal.",
      "Kaca aftermarket diproduksi oleh perusahaan pihak ketiga. Kualitasnya bervariasi tergantung merek dan produsen. Harganya umumnya lebih terjangkau dibanding OEM.",
      "Kelebihan kaca aftermarket adalah harga lebih ekonomis dan ketersediaan yang lebih luas. Namun, kualitas bisa bervariasi dan mungkin ada perbedaan kecil dalam fit.",
      "Tips memilih: Pertimbangkan budget, usia kendaraan, dan rencana kepemilikan jangka panjang. Konsultasikan dengan profesional untuk rekomendasi terbaik sesuai kebutuhan Anda.",
    ],
  },
  "keamanan-pemasangan-kaca-mobil": {
    title: "Pentingnya Pemasangan Kaca yang Benar",
    description: "Pemasangan kaca yang tidak tepat bisa membahayakan. Ketahui standar pemasangan yang aman.",
    tags: ["pemasangan-kaca", "garansi-kaca-mobil", "kaca-mobil-bocor", "home-service-kaca"],
    relatedArticles: ["kapan-harus-ganti-kaca-depan-mobil", "perbedaan-kaca-oem-dan-aftermarket"],
    content: [
      "Kaca depan mobil bukan hanya pelindung dari angin dan debu. Kaca depan adalah komponen struktural penting yang berkontribusi pada kekuatan keseluruhan bodi mobil.",
      "Dalam kecelakaan, kaca depan yang terpasang dengan benar dapat mencegah atap mobil collapse dan membantu airbag berfungsi dengan optimal.",
      "Pemasangan yang tidak tepat dapat menyebabkan kaca lepas saat tabrakan, mengurangi efektivitas airbag penumpang, membiarkan air masuk dan merusak interior, serta menimbulkan suara angin yang mengganggu.",
      "Standar pemasangan yang aman meliputi penggunaan lem/sealant berkualitas tinggi, waktu curing yang cukup sebelum kendaraan digunakan, pembersihan yang tepat sebelum pemasangan, dan pengecekan sensor jika ada.",
      "Pastikan pemasangan dilakukan oleh teknisi berpengalaman yang memahami standar keamanan. Jangan terburu-buru menggunakan kendaraan setelah pemasangan.",
      "Di Sentra Autoglass, kami mengikuti standar pemasangan yang ketat untuk memastikan keamanan Anda. Setiap pemasangan dilengkapi garansi kebocoran hingga 3 tahun.",
    ],
  },
};

// Helper to get tag label from slug
function getTagLabel(tagSlug: string): string {
  return allTags.find(t => t.slug === tagSlug)?.label || tagSlug;
}

// Helper to get article title from slug
function getArticleTitle(articleSlug: string): string {
  return articles[articleSlug]?.title || articleSlug;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  
  if (!article) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags.map(t => getTagLabel(t)).join(", "),
  };
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function ArtikelDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const waUrl = buildWhatsAppUrl(
    SITE.phone,
    "Halo Sentra, saya mau konsultasi ganti kaca mobil setelah membaca artikel di website. Mobil: [merek+tipe+tahun]."
  );

  return (
    <>
      <Header />
      <main className="pt-16">
        <article className="bg-background py-16">
          <div className="mx-auto max-w-3xl px-4">
            <Link
              href="/artikel"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Artikel
            </Link>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              {article.title}
            </h1>

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

            <div className="mt-8 space-y-6">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Internal Links Section */}
            <div className="mt-12 border-t border-border pt-8">
              <h2 className="text-lg font-semibold text-foreground">
                Layanan Kami
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/#home-service" className="text-sm text-primary hover:underline">
                    Layanan Home Service - Teknisi datang ke lokasi Anda
                  </Link>
                </li>
                <li>
                  <Link href="/#lokasi" className="text-sm text-primary hover:underline">
                    Lokasi Workshop - Tangerang, Bekasi, Surabaya
                  </Link>
                </li>
                <li>
                  <Link href="/#gallery" className="text-sm text-primary hover:underline">
                    Galeri Hasil Pemasangan Kaca Mobil
                  </Link>
                </li>
              </ul>
            </div>

            {/* Related Articles */}
            {article.relatedArticles.length > 0 && (
              <div className="mt-8 border-t border-border pt-8">
                <h2 className="text-lg font-semibold text-foreground">
                  Artikel Terkait
                </h2>
                <ul className="mt-4 space-y-2">
                  {article.relatedArticles.map((relatedSlug) => (
                    <li key={relatedSlug}>
                      <Link 
                        href={`/artikel/${relatedSlug}`} 
                        className="text-sm text-primary hover:underline"
                      >
                        {getArticleTitle(relatedSlug)}
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
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
