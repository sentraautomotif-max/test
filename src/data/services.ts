export type ServiceFAQ = {
  q: string;
  a: string;
};

export type ServiceSection = {
  heading: string;
  body: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  sections: ServiceSection[];
  faq: ServiceFAQ[];
  warranty: string;
  relatedArticleTags: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "ganti-kaca-depan",
    title: "Ganti Kaca Depan Mobil (Windshield)",
    shortTitle: "Kaca Depan",
    description:
      "Penggantian kaca depan mobil dengan material berkualitas dan pemasangan presisi. Tersedia kaca OEM dan aftermarket untuk semua merek kendaraan.",
    icon: "shield",
    sections: [
      {
        heading: "Kapan Kaca Depan Perlu Diganti?",
        body: "Kaca depan perlu diganti ketika terdapat retakan memanjang lebih dari 30 cm, retak di area pandang pengemudi, kerusakan akibat benturan benda keras, atau kaca yang sudah delaminasi (mengelupas antar lapisan). Retakan kecil di pinggir kaca juga bisa menyebar seiring waktu akibat getaran dan perubahan suhu.",
      },
      {
        heading: "Pilihan Kaca: OEM vs Aftermarket",
        body: "Kami menyediakan kaca OEM (Original Equipment Manufacturer) yang identik dengan kaca bawaan pabrik, maupun kaca aftermarket berkualitas dari brand seperti XYG, Mulia, dan Asahimas. Tim kami akan membantu merekomendasikan pilihan terbaik sesuai tipe kendaraan, kebutuhan, dan budget Anda.",
      },
      {
        heading: "Proses Penggantian Kaca Depan",
        body: "Proses dimulai dengan pelepasan kaca lama secara hati-hati, pembersihan frame dan jalur sealant, pengecekan kondisi rubber dan molding, aplikasi sealant PU (Polyurethane) berkualitas tinggi dari SIKA, pemasangan kaca baru dengan presisi, lalu pengecekan akhir dan water test untuk memastikan tidak ada kebocoran.",
      },
      {
        heading: "Material Sealant yang Digunakan",
        body: "Kami menggunakan sealant PU (Polyurethane) dari SIKA yang merupakan standar industri otomotif global. Sealant ini memiliki daya rekat kuat, tahan cuaca ekstrem, dan memenuhi standar keselamatan kendaraan. Waktu curing minimal 2-4 jam sebelum kendaraan boleh digunakan.",
      },
      {
        heading: "Kaca dengan Fitur Sensor & ADAS",
        body: "Untuk kendaraan modern yang dilengkapi sensor hujan, sensor cahaya, kamera ADAS, atau head-up display, kami menyesuaikan penggantian kaca dengan spesifikasi yang tepat. Kaca pengganti harus memiliki area khusus untuk sensor agar fitur-fitur tersebut tetap berfungsi optimal.",
      },
      {
        heading: "Estimasi Waktu Pengerjaan",
        body: "Waktu pengerjaan penggantian kaca depan berkisar 60-120 menit tergantung tipe kendaraan dan tingkat kesulitan. Setelah pemasangan, kendaraan perlu didiamkan minimal 2-4 jam untuk proses curing sealant sebelum boleh digunakan.",
      },
      {
        heading: "Garansi Kebocoran Pemasangan",
        body: "Setiap pemasangan kaca depan di Sentra Autoglass disertai garansi kebocoran pemasangan hingga 3 tahun. Garansi ini mencakup kebocoran yang disebabkan oleh proses pemasangan kami. Perlu diketahui bahwa garansi tidak mencakup kerusakan akibat benturan atau faktor eksternal lainnya.",
      },
      {
        heading: "Tips Perawatan Setelah Pemasangan",
        body: "Setelah penggantian kaca, hindari mencuci kendaraan selama 24 jam pertama. Jangan menutup pintu dengan keras selama 48 jam. Hindari jalan berlubang atau speed bump dengan kecepatan tinggi selama 24 jam pertama. Jangan melepas plester penahan jika ada, biarkan selama 2-3 hari.",
      },
    ],
    faq: [
      {
        q: "Berapa biaya ganti kaca depan mobil?",
        a: "Biaya bervariasi tergantung merek, tipe kendaraan, dan jenis kaca (OEM/aftermarket). Hubungi kami via WhatsApp dengan informasi merek dan tipe mobil Anda untuk mendapatkan estimasi harga yang akurat.",
      },
      {
        q: "Apakah bisa ganti kaca depan di hari yang sama?",
        a: "Bisa, tergantung ketersediaan stok kaca dan antrian. Chat kami via WhatsApp untuk mengecek ketersediaan dan jadwal tercepat.",
      },
      {
        q: "Apakah garansi mencakup kaca pecah lagi?",
        a: "Garansi kami mencakup kebocoran pemasangan, bukan kerusakan akibat benturan atau faktor eksternal. Garansi berlaku hingga 3 tahun sejak pemasangan.",
      },
      {
        q: "Berapa lama waktu curing setelah pemasangan?",
        a: "Minimal 2-4 jam untuk curing sealant. Selama waktu ini, kendaraan sebaiknya tidak digunakan agar sealant mengering sempurna dan ikatan kaca kuat.",
      },
      {
        q: "Apakah kaca aftermarket aman?",
        a: "Kaca aftermarket yang kami gunakan berasal dari brand terpercaya dan memenuhi standar keselamatan. Namun, untuk kendaraan dengan fitur ADAS, kami merekomendasikan kaca OEM untuk kompatibilitas sensor.",
      },
      {
        q: "Apakah perlu kalibrasi ADAS setelah ganti kaca?",
        a: "Untuk kendaraan dengan fitur ADAS (kamera, sensor), kalibrasi diperlukan setelah penggantian kaca depan agar sistem berfungsi dengan benar. Kami menyediakan layanan ini.",
      },
    ],
    warranty: "Garansi kebocoran pemasangan hingga 3 tahun. Garansi tidak mencakup kerusakan akibat benturan atau faktor eksternal.",
    relatedArticleTags: ["ganti-kaca-mobil", "kaca-depan-mobil", "kaca-oem", "kaca-aftermarket"],
  },
  {
    slug: "kaca-samping-pintu",
    title: "Ganti Kaca Samping & Kaca Pintu Mobil",
    shortTitle: "Kaca Samping",
    description:
      "Penggantian kaca samping dan kaca pintu mobil (tempered glass). Tersedia untuk semua merek dan tipe kendaraan dengan pemasangan presisi.",
    icon: "car",
    sections: [
      {
        heading: "Jenis Kaca Samping Mobil",
        body: "Kaca samping mobil umumnya menggunakan tempered glass yang dirancang untuk pecah menjadi butiran kecil saat terkena benturan, berbeda dengan kaca depan yang menggunakan laminated glass. Jenis kaca samping meliputi kaca pintu depan, kaca pintu belakang, kaca quarter (segitiga kecil), dan kaca kusen.",
      },
      {
        heading: "Penyebab Kerusakan Kaca Samping",
        body: "Kerusakan kaca samping bisa disebabkan oleh percobaan pencurian (dipecah paksa), benturan batu atau benda keras, kecelakaan, dan kerusakan pada mekanisme power window. Kaca samping yang retak harus segera diganti karena tempered glass tidak bisa diperbaiki.",
      },
      {
        heading: "Proses Penggantian Kaca Samping",
        body: "Proses meliputi pelepasan panel pintu, pembersihan pecahan kaca dari dalam pintu, pengecekan mekanisme power window dan regulator, pemasangan kaca baru dengan presisi, pengujian operasi naik-turun kaca, dan pemasangan kembali panel pintu.",
      },
      {
        heading: "Kaca Samping dengan Fitur Khusus",
        body: "Beberapa kendaraan memiliki kaca samping dengan fitur khusus seperti privacy glass (kaca gelap), kaca akustik untuk mengurangi kebisingan, atau laminated side glass. Kami menyediakan kaca pengganti sesuai spesifikasi kendaraan Anda.",
      },
      {
        heading: "Estimasi Waktu Pengerjaan",
        body: "Penggantian kaca samping biasanya membutuhkan waktu 30-60 menit tergantung tipe kendaraan. Kaca samping menggunakan sistem regulator di dalam pintu, sehingga perlu pembongkaran panel pintu untuk proses penggantian.",
      },
      {
        heading: "Garansi Pemasangan",
        body: "Pemasangan kaca samping disertai garansi kebocoran dan garansi fungsi operasi (naik-turun) selama 1 tahun. Jika terjadi masalah dengan pemasangan, kami akan memperbaikinya tanpa biaya tambahan.",
      },
    ],
    faq: [
      {
        q: "Apakah kaca samping bisa diperbaiki tanpa diganti?",
        a: "Tidak. Kaca samping menggunakan tempered glass yang langsung pecah menjadi butiran kecil saat rusak, sehingga harus diganti baru.",
      },
      {
        q: "Berapa lama penggantian kaca samping?",
        a: "Berkisar 30-60 menit tergantung tipe kendaraan dan kondisi mekanisme power window.",
      },
      {
        q: "Apakah power window bisa rusak saat ganti kaca?",
        a: "Tim kami berpengalaman dan selalu mengecek mekanisme power window sebelum dan sesudah penggantian kaca untuk memastikan semua berfungsi normal.",
      },
      {
        q: "Apakah tersedia kaca samping privacy/gelap?",
        a: "Ya, kami menyediakan kaca samping dengan berbagai tingkat kegelapan sesuai spesifikasi kendaraan Anda.",
      },
      {
        q: "Berapa biaya ganti kaca samping?",
        a: "Biaya bervariasi tergantung merek, tipe kendaraan, dan jenis kaca. Hubungi kami via WhatsApp untuk estimasi harga.",
      },
      {
        q: "Apakah kaca samping langsung bisa digunakan?",
        a: "Ya, kaca samping bisa langsung digunakan setelah pemasangan karena menggunakan sistem regulator, bukan sealant yang membutuhkan waktu curing.",
      },
    ],
    warranty: "Garansi kebocoran dan fungsi operasi selama 1 tahun.",
    relatedArticleTags: ["kaca-samping-mobil", "ganti-kaca-mobil"],
  },
  {
    slug: "kaca-belakang-defogger",
    title: "Ganti Kaca Belakang Mobil (Rear Glass + Defogger)",
    shortTitle: "Kaca Belakang",
    description:
      "Penggantian kaca belakang mobil termasuk yang dilengkapi defogger (pemanas kaca). Pemasangan presisi dengan garansi fungsi defogger.",
    icon: "thermometer",
    sections: [
      {
        heading: "Apa Itu Defogger pada Kaca Belakang?",
        body: "Defogger adalah elemen pemanas berupa garis-garis tipis yang tertanam pada kaca belakang mobil. Fungsinya untuk menghilangkan embun atau uap air pada permukaan kaca saat cuaca dingin atau hujan, sehingga visibilitas ke belakang tetap jernih.",
      },
      {
        heading: "Kapan Kaca Belakang Perlu Diganti?",
        body: "Kaca belakang perlu diganti jika terjadi retakan atau pecah akibat benturan, kerusakan garis defogger yang tidak bisa diperbaiki, delaminasi pada kaca, atau kebocoran pada area kaca belakang yang sudah tidak bisa ditangani dengan re-sealing.",
      },
      {
        heading: "Proses Penggantian Kaca Belakang",
        body: "Proses meliputi pelepasan trim dan aksesoris sekitar kaca, pelepasan kaca lama dengan hati-hati (termasuk konektor defogger), pembersihan frame, aplikasi sealant PU baru, pemasangan kaca baru, penghubungan konektor defogger, dan pengujian fungsi defogger.",
      },
      {
        heading: "Memastikan Defogger Tetap Berfungsi",
        body: "Saat penggantian kaca belakang, tim kami memastikan konektor listrik defogger terhubung dengan benar. Setelah pemasangan, kami melakukan pengujian fungsi defogger untuk memastikan semua garis pemanas berfungsi normal.",
      },
      {
        heading: "Kaca Belakang dengan Antena",
        body: "Beberapa kendaraan memiliki antena radio yang tertanam pada kaca belakang. Kami memastikan kaca pengganti memiliki fitur yang sama dan semua koneksi berfungsi normal setelah penggantian.",
      },
      {
        heading: "Estimasi Waktu dan Garansi",
        body: "Penggantian kaca belakang membutuhkan waktu 60-90 menit. Waktu curing sealant minimal 2-4 jam. Garansi mencakup kebocoran pemasangan hingga 3 tahun dan fungsi defogger selama 1 tahun.",
      },
    ],
    faq: [
      {
        q: "Apakah defogger tetap berfungsi setelah ganti kaca?",
        a: "Ya, kami memastikan konektor defogger terhubung dengan benar dan melakukan pengujian fungsi setelah pemasangan.",
      },
      {
        q: "Berapa biaya ganti kaca belakang dengan defogger?",
        a: "Biaya bervariasi tergantung merek dan tipe kendaraan. Kaca dengan defogger umumnya lebih mahal dari kaca biasa. Hubungi kami untuk estimasi.",
      },
      {
        q: "Apakah bisa pasang defogger di kaca yang awalnya tidak ada?",
        a: "Tidak disarankan. Defogger merupakan bagian integral dari kaca dan tidak bisa ditambahkan setelahnya.",
      },
      {
        q: "Berapa lama penggantian kaca belakang?",
        a: "Berkisar 60-90 menit untuk pemasangan, ditambah waktu curing sealant minimal 2-4 jam.",
      },
      {
        q: "Apakah kaca belakang aftermarket memiliki defogger?",
        a: "Ya, kaca belakang aftermarket berkualitas juga dilengkapi garis defogger sesuai spesifikasi kendaraan.",
      },
      {
        q: "Apa yang terjadi jika garis defogger rusak?",
        a: "Garis defogger yang rusak sebagian kadang bisa diperbaiki dengan repair kit khusus. Namun jika kerusakannya parah, penggantian kaca adalah solusi terbaik.",
      },
    ],
    warranty: "Garansi kebocoran pemasangan hingga 3 tahun. Garansi fungsi defogger selama 1 tahun.",
    relatedArticleTags: ["kaca-belakang-mobil", "ganti-kaca-mobil"],
  },
  {
    slug: "home-service",
    title: "Layanan Home Service Ganti Kaca Mobil",
    shortTitle: "Home Service",
    description:
      "Teknisi berpengalaman datang ke lokasi Anda untuk penggantian kaca mobil. Standar kerja sama dengan workshop, garansi tetap berlaku penuh.",
    icon: "home",
    sections: [
      {
        heading: "Apa Itu Layanan Home Service?",
        body: "Layanan home service memungkinkan Anda mendapatkan pemasangan atau penggantian kaca mobil tanpa harus datang ke workshop. Tim teknisi kami membawa peralatan profesional langsung ke rumah, kantor, atau lokasi pilihan Anda.",
      },
      {
        heading: "Kapan Memilih Home Service?",
        body: "Home service cocok ketika kendaraan tidak bisa dikendarai karena kaca pecah, jadwal Anda padat dan tidak bisa ke workshop, lokasi Anda jauh dari workshop, atau Anda menginginkan kenyamanan tanpa perlu bepergian. Layanan ini tersedia di area Tangerang dan sekitarnya.",
      },
      {
        heading: "Area Jangkauan Home Service",
        body: "Saat ini layanan home service aktif untuk area Tangerang, Tangerang Selatan, BSD, Serpong, Alam Sutera, Gading Serpong, Karawaci, dan sekitarnya. Untuk area di luar jangkauan, silakan konsultasi terlebih dahulu via WhatsApp.",
      },
      {
        heading: "Peralatan yang Dibawa Teknisi",
        body: "Teknisi kami membawa set peralatan lengkap termasuk: suction cup profesional, sealant PU SIKA, cutter dan scraper, alat pembersih, pelindung interior kendaraan, dan semua material yang dibutuhkan untuk pemasangan yang aman dan presisi.",
      },
      {
        heading: "Proses Booking Home Service",
        body: "Prosesnya sederhana: hubungi kami via WhatsApp dengan informasi merek, tipe, dan tahun kendaraan. Tim kami akan memberikan estimasi harga dan jadwal. Setelah deal, teknisi akan datang sesuai jadwal yang disepakati. Pembayaran dilakukan setelah pemasangan selesai dan Anda puas dengan hasilnya.",
      },
      {
        heading: "Standar Kerja Home Service",
        body: "Standar kerja home service sama persis dengan workshop. Kami menggunakan material yang sama, mengikuti SOP yang sama, dan memberikan garansi yang sama. Area kerja dilindungi agar kendaraan dan lingkungan sekitar tetap bersih.",
      },
      {
        heading: "Syarat Lokasi untuk Home Service",
        body: "Lokasi harus memiliki area yang cukup untuk teknisi bekerja di sekitar kendaraan. Idealnya area teduh atau garasi agar tidak terganggu cuaca. Kendaraan harus bisa diakses dari semua sisi. Jika lokasi terbatas, konsultasikan terlebih dahulu.",
      },
      {
        heading: "Garansi Home Service",
        body: "Garansi home service sama dengan workshop: kebocoran pemasangan hingga 3 tahun. Garansi ini berlaku penuh tanpa pengurangan meskipun pemasangan dilakukan di luar workshop.",
      },
    ],
    faq: [
      {
        q: "Apakah ada biaya tambahan untuk home service?",
        a: "Ada biaya transportasi yang bervariasi tergantung jarak lokasi. Biaya ini akan diinformasikan saat konsultasi awal.",
      },
      {
        q: "Berapa lama teknisi sampai ke lokasi?",
        a: "Tergantung jadwal dan lokasi. Biasanya dalam 1-2 hari kerja setelah booking. Untuk kasus urgent, bisa lebih cepat.",
      },
      {
        q: "Apakah home service tersedia di hari Minggu?",
        a: "Home service mengikuti jam operasional, yaitu Senin-Sabtu. Namun untuk kebutuhan khusus, silakan konsultasi via WhatsApp.",
      },
      {
        q: "Apa yang perlu saya siapkan untuk home service?",
        a: "Pastikan area sekitar kendaraan cukup luas untuk teknisi bekerja, idealnya area teduh. Kendaraan harus bisa diakses dari semua sisi.",
      },
      {
        q: "Apakah bisa home service untuk kaca samping?",
        a: "Ya, home service tersedia untuk semua jenis kaca: depan, samping, belakang, dan kaca quarter.",
      },
      {
        q: "Bagaimana jika hujan saat jadwal home service?",
        a: "Jika cuaca tidak memungkinkan, kami akan reschedule ke waktu yang lebih baik. Pemasangan kaca tidak bisa dilakukan saat hujan karena mempengaruhi kualitas sealant.",
      },
    ],
    warranty: "Garansi kebocoran pemasangan hingga 3 tahun, sama dengan pemasangan di workshop.",
    relatedArticleTags: ["home-service-kaca", "ganti-kaca-mobil"],
  },
  {
    slug: "kalibrasi-adas",
    title: "Kalibrasi ADAS Setelah Ganti Kaca Depan",
    shortTitle: "Kalibrasi ADAS",
    description:
      "Layanan kalibrasi sistem ADAS (Advanced Driver Assistance Systems) setelah penggantian kaca depan untuk memastikan fitur keselamatan berfungsi optimal.",
    icon: "crosshair",
    sections: [
      {
        heading: "Apa Itu ADAS?",
        body: "ADAS (Advanced Driver Assistance Systems) adalah sistem bantuan pengemudi yang menggunakan kamera dan sensor pada kaca depan. Fitur ini meliputi: lane departure warning, forward collision warning, automatic emergency braking, adaptive cruise control, dan traffic sign recognition.",
      },
      {
        heading: "Mengapa Kalibrasi Diperlukan?",
        body: "Setelah penggantian kaca depan, posisi kamera ADAS bisa bergeser meskipun hanya sedikit. Pergeseran kecil saja bisa membuat sistem membaca jarak dan posisi dengan tidak akurat. Kalibrasi diperlukan untuk mengembalikan akurasi pembacaan kamera ke spesifikasi pabrikan.",
      },
      {
        heading: "Tipe Kalibrasi ADAS",
        body: "Ada dua jenis kalibrasi: statis dan dinamis. Kalibrasi statis dilakukan di workshop menggunakan target khusus yang ditempatkan di depan kendaraan. Kalibrasi dinamis dilakukan dengan mengemudikan kendaraan pada kondisi tertentu agar sistem melakukan kalibrasi otomatis. Beberapa kendaraan memerlukan keduanya.",
      },
      {
        heading: "Kendaraan yang Memerlukan Kalibrasi",
        body: "Kendaraan yang memerlukan kalibrasi ADAS setelah ganti kaca depan antara lain: Toyota (Safety Sense), Honda (SENSING), Subaru (EyeSight), BMW, Mercedes-Benz, Mazda (i-ACTIVSENSE), dan kendaraan lain yang dilengkapi kamera pada kaca depan.",
      },
      {
        heading: "Proses Kalibrasi di Sentra Autoglass",
        body: "Tim kami melakukan kalibrasi sesuai prosedur pabrikan menggunakan alat diagnostic yang sesuai. Proses ini memastikan kamera ADAS membaca jarak, garis jalan, dan objek di depan kendaraan dengan akurat sesuai spesifikasi awal.",
      },
      {
        heading: "Risiko Tanpa Kalibrasi",
        body: "Tanpa kalibrasi yang benar, sistem ADAS bisa memberikan peringatan palsu, tidak memberikan peringatan saat seharusnya, atau automatic braking aktif pada waktu yang salah. Ini berbahaya dan bisa menyebabkan kecelakaan.",
      },
      {
        heading: "Estimasi Waktu dan Biaya",
        body: "Proses kalibrasi membutuhkan waktu 30-60 menit setelah pemasangan kaca selesai. Biaya kalibrasi terpisah dari biaya penggantian kaca. Konsultasikan kebutuhan kalibrasi saat booking penggantian kaca.",
      },
      {
        heading: "Garansi Kalibrasi",
        body: "Kami memberikan garansi hasil kalibrasi. Jika setelah kalibrasi sistem ADAS masih menunjukkan error yang terkait dengan kalibrasi, kami akan melakukan re-kalibrasi tanpa biaya tambahan.",
      },
    ],
    faq: [
      {
        q: "Apakah semua mobil perlu kalibrasi ADAS setelah ganti kaca?",
        a: "Tidak semua. Hanya kendaraan yang dilengkapi kamera atau sensor ADAS pada kaca depan yang memerlukan kalibrasi. Tim kami akan menginformasikan saat konsultasi.",
      },
      {
        q: "Berapa biaya kalibrasi ADAS?",
        a: "Biaya bervariasi tergantung merek dan tipe kendaraan. Biaya ini terpisah dari penggantian kaca. Hubungi kami untuk estimasi.",
      },
      {
        q: "Apakah kalibrasi bisa dilakukan saat home service?",
        a: "Kalibrasi statis memerlukan ruang dan kondisi tertentu. Sebaiknya dilakukan di workshop untuk hasil optimal. Konsultasikan kebutuhan Anda.",
      },
      {
        q: "Bagaimana tahu mobil saya ada ADAS?",
        a: "Cek apakah ada kamera kecil di belakang kaca depan (biasanya di dekat spion tengah). Atau cek fitur kendaraan Anda di buku manual apakah ada fitur lane assist, collision warning, dll.",
      },
      {
        q: "Apa tanda ADAS perlu dikalibrasi ulang?",
        a: "Tanda-tanda meliputi: lampu indikator ADAS menyala, peringatan di dashboard, fitur lane assist tidak akurat, atau automatic braking aktif tanpa alasan.",
      },
      {
        q: "Apakah bisa ganti kaca tanpa kalibrasi ADAS?",
        a: "Secara fisik bisa, namun sangat tidak disarankan karena sistem ADAS tidak akan berfungsi akurat dan bisa membahayakan keselamatan.",
      },
    ],
    warranty: "Garansi hasil kalibrasi. Re-kalibrasi gratis jika terjadi error terkait kalibrasi.",
    relatedArticleTags: ["ganti-kaca-mobil", "kaca-depan-mobil", "pemasangan-kaca"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
