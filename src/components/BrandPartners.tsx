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
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Kami hanya menggunakan kaca dan lem berkualitas tinggi dari brand terpercaya untuk hasil pemasangan terbaik.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-4 md:grid-cols-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative flex flex-col items-center justify-center py-4 px-2 bg-background/50 border border-border/50"
            >
              {/* Logo placeholder */}
              <div className="h-8 flex items-center justify-center">
                <span className="text-xs font-bold tracking-wider text-muted-foreground/80 md:text-sm">
                  {brand.logo}
                </span>
              </div>
              {/* Placeholder label - subtle */}
              <div className="mt-2 text-[8px] text-muted-foreground/50 text-center leading-tight">
                Logo {brand.name}
              </div>
            </div>
          ))}
        </div>

        {/* Overall placeholder note */}
        <p className="mt-6 text-center text-[10px] text-muted-foreground/50">
          Placeholder - Ganti dengan logo resmi masing-masing brand
        </p>
      </div>
    </section>
  );
}
