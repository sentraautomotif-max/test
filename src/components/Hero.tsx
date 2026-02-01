"use client";

import { SITE } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/tracking";

const WA_TEXT =
  "Halo Sentra, saya mau konsultasi ganti kaca depan. Mobil: [merek+tipe+tahun]. Lokasi: [kota]. Bisa dibantu estimasi & jadwal?";

export default function Hero() {
  const waUrl = buildWhatsAppUrl(SITE.phone, WA_TEXT);

  return (
    <section className="relative min-h-[90vh] flex items-center" id="cta-wa">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-secondary">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-60"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/videos_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-block border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
            Workshop & Home Service
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
            Professional Windshield Installation
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-white/80 md:text-xl text-pretty">
            Workshop & Home Service | Up to 3 Years Leak Warranty
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={waUrl}
              data-cta="wa_primary"
              className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat via WhatsApp
            </a>
            <a
              href="#lokasi"
              className="inline-flex items-center justify-center border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              View Locations
            </a>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Fast response during working hours | Tangerang, Bekasi, Surabaya
          </p>
        </div>
      </div>
    </section>
  );
}
