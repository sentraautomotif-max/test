"use client";

import { useEffect, useRef } from "react";
import { VIDEOS } from "@/data/videos";

export default function ResultsVideos() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videos = refs.current.filter(Boolean) as HTMLVideoElement[];
    if (!videos.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-secondary py-20" id="process">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              Our Process
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-secondary-foreground md:text-3xl text-balance">
              Real Installation Process at Sentra Autoglass
            </h2>
            <p className="mt-3 max-w-xl text-base text-secondary-foreground/70">
              Watch our technicians at work. Every video shows real installations from our workshops.
            </p>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center border border-secondary-foreground/20 bg-secondary-foreground/5 text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
              aria-label="Scroll left"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center border border-secondary-foreground/20 bg-secondary-foreground/5 text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
              aria-label="Scroll right"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-8 flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
        >
          {VIDEOS.map((x, idx) => (
            <div
              key={x.id}
              className="flex-shrink-0 w-[280px] md:w-[300px] snap-start overflow-hidden border border-secondary-foreground/10 bg-secondary-foreground/5"
            >
              <div className="relative aspect-[9/16]">
                <video
                  ref={(el) => {
                    refs.current[idx] = el;
                  }}
                  className="h-full w-full object-cover"
                  src={x.mp4}
                  muted
                  loop
                  playsInline
                  preload="none"
                />
                <div className="absolute bottom-3 left-3 bg-black/70 px-3 py-1 text-xs font-medium text-white">
                  {x.label}
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-secondary-foreground">{x.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
