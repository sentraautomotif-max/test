import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/seo";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Spesialis Pemasangan & Penggantian Kaca Mobil | Sentra Autoglass",
    template: "%s | Sentra Autoglass",
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: "Spesialis Pemasangan & Penggantian Kaca Mobil | Sentra Autoglass",
    description: SITE.description,
    siteName: SITE.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Sentra Autoglass - Spesialis Kaca Mobil" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spesialis Pemasangan & Penggantian Kaca Mobil | Sentra Autoglass",
    description: SITE.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`min-h-screen bg-background text-foreground antialiased ${inter.className}`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
