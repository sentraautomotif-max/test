const brands = [
  { name: "SIKA", logo: "SIKA" },
  { name: "BOYOU", logo: "BOYOU" },
  { name: "XYG", logo: "XYG" },
  { name: "Fuyao", logo: "FUYAO" },
  { name: "Mulia", logo: "MULIA" },
  { name: "Asahimas", logo: "ASAHIMAS" },
  { name: "AGC", logo: "AGC" },
  { name: "Pilkington", logo: "PILKINGTON" },
];

export default function BrandPartners() {
  return (
    <section className="border-y border-border bg-muted py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Material Berkualitas
          </span>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground md:text-2xl">
            Menggunakan Material & Kaca Terpercaya
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-6 md:grid-cols-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center py-4"
            >
              <span className="text-xs font-bold tracking-wider text-muted-foreground/60 md:text-sm">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
