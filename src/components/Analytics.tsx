"use client";

import Script from "next/script";
import { useEffect } from "react";
import { getUtmFromUrl } from "@/lib/tracking";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID; // contoh: "GTM-XXXXXXX"
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;   // contoh: "G-XXXXXXX" (optional)
const ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID; // optional: "AW-XXXXXXXXX"

export default function Analytics() {
  useEffect(() => {
    // Simpan UTM untuk dipakai saat click WA
    const url = new URL(window.location.href);
    const utm = getUtmFromUrl(url);
    if (Object.keys(utm).length > 0) {
      localStorage.setItem("sentra_utm", JSON.stringify(utm));
    }

    // Global click listener untuk CTA tracking
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const a = target.closest("a");
      if (!a) return;

      const cta = a.getAttribute("data-cta");
      if (!cta) return;

      const utmRaw = localStorage.getItem("sentra_utm");
      const utm = utmRaw ? JSON.parse(utmRaw) : {};

      // Push to dataLayer (GTM)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cta_click",
        cta,
        href: a.getAttribute("href"),
        ...utm,
      });

      // Optional: direct gtag event (kalau kamu pakai gtag)
      if (window.gtag) {
        window.gtag("event", "cta_click", { cta, ...utm });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {/* GTM (recommended) */}
      {GTM_ID ? (
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      ) : null}

      {/* Optional: GA4 gtag */}
      {GA_ID ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {/* Optional: Google Ads base tag (kalau tidak lewat GTM) */}
      {ADS_CONVERSION_ID ? (
        <Script id="ads-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', '${ADS_CONVERSION_ID}');
          `}
        </Script>
      ) : null}
    </>
  );
}
