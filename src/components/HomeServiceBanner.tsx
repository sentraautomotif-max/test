import { SITE } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/tracking";

export default function HomeServiceBanner() {
  const waUrl = buildWhatsAppUrl(
    SITE.phone,
    "Halo Sentra, saya tertarik dengan layanan home service. Mobil: [merek+tipe+tahun]. Lokasi: [alamat]."
  );

  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Image placeholder */}
          <div className="relative aspect-video w-full overflow-hidden bg-secondary-foreground/10 md:w-1/2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="mx-auto h-20 w-20 text-secondary-foreground/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="mt-2 text-sm text-secondary-foreground/40">Home Service Image</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              Home Service
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-secondary-foreground md:text-3xl text-balance">
              Can&apos;t visit our workshop? We come to you.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-secondary-foreground/70">
              Our technicians bring the same professional equipment and quality standards directly to your location. 
              Perfect for busy schedules or when your vehicle can&apos;t be driven.
            </p>
            
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Same quality standards as workshop
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Professional equipment on-site
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Full warranty coverage included
              </li>
            </ul>

            <a
              href={waUrl}
              className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book Home Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
