import { SITE } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/tracking";
import { Phone, Clock, Shield, MapPin } from "lucide-react";

export default function Footer() {
  const waUrl = buildWhatsAppUrl(SITE.phone, "Halo Sentra, saya mau konsultasi ganti kaca depan.");

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-secondary-foreground">Sentra Autoglass</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-secondary-foreground/70">
              Professional windshield installation with up to 3 years leak warranty. 
              Workshop and home service available in Tangerang, Bekasi, and Surabaya.
            </p>
            <a
              href={waUrl}
              className="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              Contact via WhatsApp
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
              Working Hours
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Mon - Sat: 08:00 - 17:00</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Up to 3 years warranty</span>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
              Locations
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Bekasi</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Tangerang</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Surabaya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-8">
          <p className="text-center text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Sentra Autoglass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
