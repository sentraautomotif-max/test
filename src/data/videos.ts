export type ResultVideo = {
  id: string;
  title: string;
  label: string;
  mp4: string;
  poster?: string;
  igUrl?: string;
};

export const VIDEOS: ResultVideo[] = [
  {
    id: "v1",
    title: "Hasil Pemasangan BMW 320i",
    label: "Premium",
    mp4: "/videos/videos_1.mp4",
    poster: "/images/posters/v1.jpg",
    igUrl: "https://www.instagram.com/reel/DQJvhZjEZY3/"
  },
  {
    id: "v2",
    title: "Home Service Toyota Alphard",
    label: "Home Service",
    mp4: "/videos/videos_1.mp4",
    poster: "/images/posters/v2.jpg",
  },
  {
    id: "v3",
    title: "Aktivitas Workshop Bekasi",
    label: "Workshop",
    mp4: "/videos/videos_1.mp4",
    poster: "/images/posters/v3.jpg",
  },
  {
    id: "v4",
    title: "Pemasangan Kaca Mercedes",
    label: "Premium",
    mp4: "/videos/videos_1.mp4",
    poster: "/images/posters/v4.jpg",
  },
  {
    id: "v5",
    title: "Testimoni Pelanggan",
    label: "Review",
    mp4: "/videos/videos_1.mp4",
    poster: "/images/posters/v5.jpg",
  },
  {
    id: "v6",
    title: "Hasil Akhir Honda CR-V",
    label: "Hasil",
    mp4: "/videos/videos_1.mp4",
    poster: "/images/posters/v6.jpg",
  },
];
