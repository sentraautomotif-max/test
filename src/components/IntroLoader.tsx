"use client";

import { useState, useEffect } from "react";

export default function IntroLoader() {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    // Phase 1: loading bar fills for 1.2s
    const t1 = setTimeout(() => setPhase("reveal"), 1200);
    // Phase 2: curtain lifts away over 0.6s, then unmount
    const t2 = setTimeout(() => setPhase("done"), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-secondary transition-all duration-700 ${
        phase === "reveal" ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
      }`}
      style={{ pointerEvents: phase === "reveal" ? "none" : "auto" }}
    >
      {/* Brand name */}
      <div className="flex flex-col items-center gap-4">
        <h1
          className={`text-2xl font-bold tracking-tight text-secondary-foreground md:text-3xl transition-all duration-500 ${
            phase === "loading" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          Sentra Autoglass
        </h1>

        {/* Loading bar */}
        <div className="relative h-[2px] w-48 overflow-hidden bg-secondary-foreground/10">
          <div
            className={`absolute inset-y-0 left-0 bg-primary transition-all ${
              phase === "loading" ? "animate-loader-bar" : "w-full"
            }`}
          />
        </div>

        <p
          className={`text-xs tracking-widest uppercase text-secondary-foreground/50 transition-all duration-500 ${
            phase === "loading" ? "opacity-100" : "opacity-0 translate-y-2"
          }`}
        >
          Spesialis Kaca Mobil
        </p>
      </div>
    </div>
  );
}
