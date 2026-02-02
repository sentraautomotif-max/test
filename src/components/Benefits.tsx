import { CheckCircle2, Wrench, Home, ClipboardCheck } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Standar Kerja Jelas",
    desc: "Proses pemasangan mengikuti SOP yang konsisten, baik di workshop maupun home service.",
  },
  {
    icon: Wrench,
    title: "Workshop & Home Service",
    desc: "Kunjungi workshop kami atau teknisi kami yang datang ke lokasi Anda.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Checked",
    desc: "Diperiksa sebelum dan sesudah pemasangan untuk hasil yang nyaman dan aman.",
  },
  {
    icon: Home,
    title: "Workshop & Tim Nyata",
    desc: "Workshop yang mapan dengan teknisi berpengalaman yang bisa Anda percaya.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-background py-20" id="garansi">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            Kenapa Pilih Kami
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Standar Kerja Kami
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Tujuan sederhana: hasil yang bersih, aman, dan nyaman.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="border border-border bg-background p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
