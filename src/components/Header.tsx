"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/tracking";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const waUrl = buildWhatsAppUrl(SITE.phone, "Halo Sentra, saya mau konsultasi ganti kaca depan.");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          <span className={isScrolled ? "text-foreground" : "text-white"}>
            Sentra Autoglass
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#process"
            className={`font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            Process
          </a>
          <a
            href="#gallery"
            className={`font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            Gallery
          </a>
          <a
            href="#lokasi"
            className={`font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            Locations
          </a>
          <a
            href="#faq"
            className={`font-medium transition-colors hover:text-primary ${
              isScrolled ? "text-muted-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            FAQ
          </a>
        </nav>

        <a
          href={waUrl}
          className="bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
