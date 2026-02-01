export type Location = {
  slug: "bekasi" | "tangerang" | "surabaya";
  name: string;
  hours: string;
  mapsUrl: string;
  // kalau nanti kamu kasih WA admin cabang, isi di sini
  branchWhatsapp?: string; // format: "62812xxxx"
};

export const LOCATIONS: Location[] = [
  {
    slug: "bekasi",
    name: "Sentra Autoglass – Bekasi",
    hours: "Senin – Sabtu | 08.00 – 17.00",
    mapsUrl: "https://maps.app.goo.gl/7qsEGdtqtPv2JYqN6",
  },
  {
    slug: "tangerang",
    name: "Sentra Autoglass – Tangerang",
    hours: "Senin – Sabtu | 08.00 – 17.00",
    mapsUrl: "https://maps.app.goo.gl/1zmpCuSLLyTNDYiW6",
  },
  {
    slug: "surabaya",
    name: "Sentra Autoglass – Surabaya",
    hours: "Senin – Minggu | 08.00 – 17.00",
    mapsUrl: "https://maps.app.goo.gl/wvC8XMHDahxRryXQA",
  },
];
