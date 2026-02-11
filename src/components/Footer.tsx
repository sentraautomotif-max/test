import Link from "next/link";
import { SITE } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/tracking";
import { Phone, Clock, Shield, MapPin } from "lucide-react";

export default function Footer() {
  const waUrl = buildWhatsAppUrl(SITE.phone, "Halo Sentra, saya mau konsultasi ganti kaca mobil.");

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-secondary-foreground">Sentra Autoglass</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-secondary-foreground/70">
              Spesialis pemasangan dan penggantian kaca mobil dengan garansi kebocoran hingga 3 tahun.
              Workshop dan home service di Tangerang, Bekasi, dan Surabaya.
            </p>
            <a
              href={waUrl}
              className="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              Chat Admin
            </a>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
              Layanan
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-secondary-foreground/70">
              <li>
                <Link href="/layanan/ganti-kaca-depan" className="hover:text-primary transition-colors">
                  Ganti Kaca Depan
                </Link>
              </li>
              <li>
                <Link href="/layanan/kaca-samping-pintu" className="hover:text-primary transition-colors">
                  Kaca Samping & Pintu
                </Link>
              </li>
              <li>
                <Link href="/layanan/kaca-belakang-defogger" className="hover:text-primary transition-colors">
                  Kaca Belakang + Defogger
                </Link>
              </li>
              <li>
                <Link href="/layanan/home-service" className="hover:text-primary transition-colors">
                  Home Service
                </Link>
              </li>
              <li>
                <Link href="/layanan/kalibrasi-adas" className="hover:text-primary transition-colors">
                  Kalibrasi ADAS
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
              Informasi
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Senin - Sabtu: 08:00 - 17:00</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Garansi hingga 3 tahun</span>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-primary transition-colors">
                  Artikel Kaca Mobil
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
              Lokasi
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <Link href="/lokasi" className="hover:text-primary transition-colors">Tangerang</Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <Link href="/lokasi" className="hover:text-primary transition-colors">Bekasi</Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <Link href="/lokasi" className="hover:text-primary transition-colors">Surabaya</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-8">
          <p className="text-center text-xs text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} Sentra Autoglass. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
