export type Branch = {
  id: string;
  city: string;
  name: string;
  address: string;
  hours: string;
  whatsapp: string;
  phone: string;
  mapsUrl: string;
  coverageAreas: string[];
  isHomeService: boolean;
};

export const BRANCHES: Branch[] = [
  {
    id: "tangerang",
    city: "Tangerang",
    name: "Sentra Autoglass Tangerang",
    address: "Jl. Raya Serpong KM 7 No. 32, Tangerang Selatan, Banten",
    hours: "Senin - Sabtu, 08.00 - 17.00 WIB",
    whatsapp: "6281281161200",
    phone: "+6281281161200",
    mapsUrl: "https://maps.app.goo.gl/1zmpCuSLLyTNDYiW6",
    coverageAreas: [
      "Tangerang Kota",
      "Tangerang Selatan",
      "BSD",
      "Serpong",
      "Alam Sutera",
      "Gading Serpong",
      "Karawaci",
      "Cikupa",
      "Balaraja",
    ],
    isHomeService: true,
  },
  {
    id: "bekasi",
    city: "Bekasi",
    name: "Sentra Autoglass Bekasi",
    address: "Jl. Ir. H. Juanda No. 15, Bekasi Timur, Jawa Barat",
    hours: "Senin - Sabtu, 08.00 - 17.00 WIB",
    whatsapp: "6281281161200",
    phone: "+6281281161200",
    mapsUrl: "https://maps.app.goo.gl/7qsEGdtqtPv2JYqN6",
    coverageAreas: [
      "Bekasi Kota",
      "Bekasi Timur",
      "Bekasi Barat",
      "Bekasi Utara",
      "Bekasi Selatan",
      "Cikarang",
      "Tambun",
      "Cibitung",
    ],
    isHomeService: false,
  },
  {
    id: "surabaya",
    city: "Surabaya",
    name: "Sentra Autoglass Surabaya",
    address: "Jl. Raya Darmo Permai III No. 52, Surabaya, Jawa Timur",
    hours: "Senin - Minggu, 08.00 - 17.00 WIB",
    whatsapp: "6281281161200",
    phone: "+6281281161200",
    mapsUrl: "https://maps.app.goo.gl/wvC8XMHDahxRryXQA",
    coverageAreas: [
      "Surabaya Pusat",
      "Surabaya Timur",
      "Surabaya Barat",
      "Surabaya Utara",
      "Surabaya Selatan",
      "Sidoarjo",
      "Gresik",
    ],
    isHomeService: false,
  },
];

export function getBranchById(id: string): Branch | undefined {
  return BRANCHES.find((b) => b.id === id);
}

export function getDefaultBranch(): Branch {
  return BRANCHES[0];
}
