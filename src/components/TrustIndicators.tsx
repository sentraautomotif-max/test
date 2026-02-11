"use client";

import { Building2, Car, Shield, Award } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const indicators = [
  {
    icon: Building2,
    value: "3+",
    label: "Workshop Aktif",
  },
  {
    icon: Car,
    value: "Ribuan",
    label: "Mobil Ditangani",
  },
  {
    icon: Award,
    value: "Premium",
    label: "& Mobil Harian",
  },
  {
    icon: Shield,
    value: "3 Tahun",
    label: "Garansi Kebocoran",
  },
];

export default function TrustIndicators() {
  const { ref, isVisible } = useReveal(0.2);

  return (
    <section className="border-y border-border bg-background py-12" ref={ref}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {indicators.map((item, idx) => (
            <div
              key={item.label}
              className={`text-center ${isVisible ? "animate-count-in" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center bg-muted">
                <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
