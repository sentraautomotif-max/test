"use client";

import Link from "next/link";
import { SERVICES } from "@/data/services";
import { Shield, Car, Thermometer, Home, Crosshair } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const iconMap: Record<string, React.ElementType> = {
  shield: Shield,
  car: Car,
  thermometer: Thermometer,
  home: Home,
  crosshair: Crosshair,
};

export default function ServicesOverview() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section className="bg-background py-20" id="layanan">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Layanan Kami
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance">
            Layanan Kaca Mobil Profesional
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Penggantian dan pemasangan kaca mobil untuk semua jenis kendaraan dengan garansi dan standar kerja profesional.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <Link
                key={service.slug}
                href={`/layanan/${service.slug}`}
                className={`group border border-border bg-background p-6 transition-all hover:border-primary/30 ${
                  isVisible ? "animate-count-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Selengkapnya
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
