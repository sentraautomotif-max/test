export type Location = {
  slug: "bekasi" | "tangerang" | "surabaya";
  name: string;
  address: string;
  city: string;
  hours: string;
  mapsUrl: string;
  serviceArea: string[];
  branchWhatsapp?: string; // format: "62812xxxx"
};

export const LOCATIONS: Location[] = [
  {
    slug: "bekasi",
    name: "Sentra Autoglass – Bekasi",
    address: "Jl. Ahmad Yani No. 123, Bekasi Selatan",
    city: "Bekasi",
    hours: "Senin – Sabtu | 08.00 – 17.00",
    mapsUrl: "https://maps.app.goo.gl/7qsEGdtqtPv2JYqN6",
    serviceArea: ["Bekasi Kota", "Bekasi Timur", "Bekasi Utara", "Bekasi Barat", "Cikarang"],
  },
  {
    slug: "tangerang",
    name: "Sentra Autoglass – Tangerang",
    address: "Jl. Jenderal Sudirman No. 456, Tangerang",
    city: "Tangerang",
    hours: "Senin – Sabtu | 08.00 – 17.00",
    mapsUrl: "https://maps.app.goo.gl/1zmpCuSLLyTNDYiW6",
    serviceArea: ["Tangerang Kota", "Tangerang Selatan", "Balaraja", "Kronos", "Balaraja"],
  },
  {
    slug: "surabaya",
    name: "Sentra Autoglass – Surabaya",
    address: "Jl. Gresik No. 789, Surabaya",
    city: "Surabaya",
    hours: "Senin – Minggu | 08.00 – 17.00",
    mapsUrl: "https://maps.app.goo.gl/wvC8XMHDahxRryXQA",
    serviceArea: ["Surabaya Pusat", "Surabaya Timur", "Surabaya Utara", "Gresik", "Sidoarjo"],
  },
];
