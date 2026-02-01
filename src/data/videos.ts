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
    title: "Glass Removal Process",
    label: "Step 1",
    mp4: "/videos/videos_1.mp4",
    igUrl: "https://www.instagram.com/reel/DQJvhZjEZY3/"
  },
  {
    id: "v2",
    title: "Surface Preparation",
    label: "Step 2",
    mp4: "/videos/videos_1.mp4",
  },
  {
    id: "v3",
    title: "Sealant Application",
    label: "Step 3",
    mp4: "/videos/videos_1.mp4",
  },
  {
    id: "v4",
    title: "Glass Installation",
    label: "Step 4",
    mp4: "/videos/videos_1.mp4",
  },
  {
    id: "v5",
    title: "Quality Check",
    label: "Step 5",
    mp4: "/videos/videos_1.mp4",
  },
  {
    id: "v6",
    title: "Final Result",
    label: "Complete",
    mp4: "/videos/videos_1.mp4",
  },
];
