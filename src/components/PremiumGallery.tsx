"use client";

import Image from "next/image";

const galleryItems = [
  { id: 1, car: "BMW Series", src: "/images/gallery/bmw.jpg", placeholder: "Foto pemasangan kaca BMW" },
  { id: 2, car: "Mercedes-Benz", src: "/images/gallery/mercedes.jpg", placeholder: "Foto pemasangan kaca Mercedes" },
  { id: 3, car: "Toyota Alphard", src: "/images/gallery/alphard.jpg", placeholder: "Foto pemasangan kaca Alphard" },
  { id: 4, car: "Lexus", src: "/images/gallery/lexus.jpg", placeholder: "Foto pemasangan kaca Lexus" },
  { id: 5, car: "Toyota Avanza", src: "/images/gallery/avanza.jpg", placeholder: "Foto pemasangan kaca Avanza" },
  { id: 6, car: "Honda Jazz", src: "/images/gallery/jazz.jpg", placeholder: "Foto pemasangan kaca Jazz" },
];

export default function PremiumGallery() {
  return (
    <section className="bg-background py-20" id="gallery">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Galeri
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Dipercaya untuk Mobil Premium & Harian
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Dari sedan mewah hingga mobil harian, kami mengerjakan dengan standar profesional yang sama untuk setiap pemasangan.
          </p>
        </div>

        <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden bg-muted"
            >
              {/* Next.js Image with lazy loading */}
              <Image
                src={item.src}
                alt={`Pemasangan kaca ${item.car} di Sentra Autoglass`}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Fallback placeholder when image not found */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 -z-10">
                <div className="text-center px-4">
                  <svg className="mx-auto h-12 w-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-2 text-sm font-medium text-white/50">{item.car}</p>
                </div>
                {/* Placeholder label */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1.5 text-[10px] text-white/80 text-center leading-tight">
                  Placeholder - {item.placeholder}
                </div>
              </div>
              {/* Hover overlay with car name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full transition-transform group-hover:translate-y-0">
                <p className="text-sm font-medium text-white">{item.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
