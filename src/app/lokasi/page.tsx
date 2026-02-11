import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LOCATIONS } from "@/data/locations";
import { SITE } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/tracking";
import { MapPin, Clock, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Lokasi Workshop",
  description: "Temukan lokasi workshop Sentra Autoglass terdekat di Bekasi, Tangerang, dan Surabaya. Workshop dan home service tersedia.",
};

export default function LokasiPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Lokasi Workshop Sentra Autoglass
            </h1>
            <p className="mt-4 max-w-2xl text-base text-secondary-foreground/70">
              Kunjungi workshop terdekat untuk konsultasi dan pemasangan kaca mobil. Home service juga tersedia di semua area.
            </p>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {LOCATIONS.map((l) => {
                const phone = l.branchWhatsapp ?? SITE.phone;
                const waUrl = buildWhatsAppUrl(
                  phone,
                  `Halo Admin ${l.name.split(" – ")[1]}, saya mau konsultasi pemasangan kaca mobil. Mobil: [merek+tipe+tahun]. Bisa dibantu?`
                );

                return (
                  <div
                    key={l.slug}
                    className="border border-border bg-background p-6 flex flex-col"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold text-foreground">{l.name}</h2>
                        <p className="mt-2 text-xs text-muted-foreground">{l.address}</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3 flex-1">
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                        <div className="text-xs text-muted-foreground">
                          <p className="font-medium text-foreground">Jam Operasional</p>
                          <p>{l.hours}</p>
                        </div>
                      </div>

                      {l.serviceArea.length > 0 && (
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                          <div className="text-xs text-muted-foreground">
                            <p className="font-medium text-foreground">Area Layanan</p>
                            <p>{l.serviceArea.join(", ")}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                      <a
                        href={waUrl}
                        data-cta={`wa_lokasi_${l.slug}`}
                        className="flex items-center justify-center gap-2 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Konsultasi via WhatsApp
                      </a>
                      <a
                        href={l.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                      >
                        <Navigation className="h-4 w-4" />
                        Lihat di Google Maps
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Local Business Schema - JSON-LD */}
          {LOCATIONS.map((location) => (
            <script
              key={location.slug}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  name: location.name,
                  image: `${SITE.url}/og.jpg`,
                  description: `Kaca mobil terpercaya di ${location.city}. Pemasangan, penggantian, dan home service tersedia.`,
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: location.address,
                    addressLocality: location.city,
                    addressCountry: "ID",
                  },
                  telephone: SITE.phone,
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    opens: "08:00",
                    closes: "17:00",
                  },
                  url: SITE.url,
                  sameAs: [],
                  areaServed: location.serviceArea,
                }),
              }}
            />
          ))}
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
