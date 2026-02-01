"use client";

import { useEffect, useRef } from "react";
import { VIDEOS } from "@/data/videos";
import { SITE } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/tracking";

export default function ResultsVideos() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const waUrl = buildWhatsAppUrl(SITE.phone, "Halo Sentra, saya mau tanya tentang pemasangan kaca mobil. Mobil: [merek+tipe+tahun].");

  useEffect(() => {
    const videos = refs.current.filter(Boolean) as HTMLVideoElement[];
    if (!videos.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-secondary py-20" id="social-proof">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              Social Proof
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-secondary-foreground md:text-3xl text-balance">
              Dipercaya Banyak Pemilik Mobil
            </h2>
            <p className="mt-3 max-w-xl text-base text-secondary-foreground/70">
              Lihat hasil pemasangan, konten endorse, dan aktivitas workshop langsung dari Instagram & TikTok kami.
            </p>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center border border-secondary-foreground/20 bg-secondary-foreground/5 text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
              aria-label="Geser ke kiri"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center border border-secondary-foreground/20 bg-secondary-foreground/5 text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
              aria-label="Geser ke kanan"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-8 flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
        >
          {VIDEOS.map((x, idx) => (
            <div
              key={x.id}
              className="flex-shrink-0 w-[280px] md:w-[300px] snap-start overflow-hidden border border-secondary-foreground/10 bg-secondary-foreground/5"
            >
              <div className="relative aspect-[9/16]">
                {/* Video placeholder with realistic styling */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900">
                  <div className="flex h-full flex-col items-center justify-center p-4">
                    <svg className="h-16 w-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="mt-3 text-center text-xs text-white/40 leading-relaxed">
                      {x.title}
                    </p>
                  </div>
                </div>
                <video
                  ref={(el) => {
                    refs.current[idx] = el;
                  }}
                  className="h-full w-full object-cover"
                  src={x.mp4}
                  muted
                  loop
                  playsInline
                  preload="none"
                />
                <div className="absolute bottom-3 left-3 bg-black/70 px-3 py-1 text-xs font-medium text-white">
                  {x.label}
                </div>
                {/* Placeholder label */}
                <div className="absolute top-3 left-3 right-3 bg-black/60 px-2 py-1 text-[10px] text-white/80 leading-tight">
                  Placeholder - Video konten Instagram / TikTok
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-secondary-foreground">{x.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={waUrl}
            data-cta="wa_social_proof"
            className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Tanya Pemasangan Kaca Mobil
          </a>
        </div>
      </div>
    </section>
  );
}
