import { FAQ_ITEMS } from "@/data/faq";
import Script from "next/script";
import { SITE } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/tracking";

export default function FAQ() {
  const waUrl = buildWhatsAppUrl(SITE.phone, "Halo Sentra, saya ada pertanyaan tentang layanan ganti kaca mobil.");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };

  return (
    <section className="bg-muted py-20" id="faq">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {FAQ_ITEMS.map((x) => (
            <details
              key={x.q}
              className="group border border-border bg-background p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-foreground">
                {x.q}
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border border-border transition-transform group-open:rotate-45">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{x.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Masih ada pertanyaan?{" "}
            <a className="font-semibold text-primary hover:underline" href={waUrl}>
              Chat kami via WhatsApp
            </a>
          </p>
        </div>
      </div>

      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </section>
  );
}
