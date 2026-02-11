"use client";

import { SITE } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/tracking";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    number: "01",
    title: "Hubungi via WhatsApp",
    description: "Kirim merek, tipe, tahun mobil, dan foto kerusakan kaca via WhatsApp. Tim kami akan merespons dengan cepat.",
  },
  {
    number: "02",
    title: "Dapat Estimasi Harga",
    description: "Kami berikan estimasi harga berdasarkan jenis kaca (OEM/aftermarket) dan tipe kendaraan Anda. Tanpa kewajiban.",
  },
  {
    number: "03",
    title: "Pilih Workshop atau Home Service",
    description: "Datang ke workshop kami atau pilih home service. Teknisi datang ke lokasi Anda dengan peralatan profesional lengkap.",
  },
  {
    number: "04",
    title: "Pemasangan Profesional",
    description: "Teknisi berpengalaman memasang kaca dengan sealant PU SIKA dan SOP standar. Water test setelah pemasangan.",
  },
  {
    number: "05",
    title: "Garansi 3 Tahun",
    description: "Setiap pemasangan disertai garansi kebocoran hingga 3 tahun. Follow-up 24 jam setelah pemasangan.",
  },
];

export default function HowItWorks() {
  const waUrl = buildWhatsAppUrl(
    SITE.phone,
    "Halo Sentra, saya mau konsultasi ganti kaca mobil. Mobil: [merek+tipe+tahun]. Lokasi: [kota]."
  );
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section className="bg-background py-20" id="cara-kerja">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Cara Kerja
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance">
            Proses Ganti Kaca Mobil di Sentra Autoglass
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Dari konsultasi hingga garansi, prosesnya sederhana dan transparan.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`relative ${isVisible ? "animate-count-in" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Connector line on desktop */}
              {idx < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-6 translate-x-full bg-border md:block" aria-hidden="true" />
              )}
              <div className="border border-border bg-background p-5 h-full transition-colors hover:border-primary/20">
                <span className="text-2xl font-bold text-primary/30">{step.number}</span>
                <h3 className="mt-3 text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={waUrl}
            data-cta="wa_how_it_works"
            className="animate-pulse-glow inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Mulai Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
}
