"use client";

import { useReveal } from "@/hooks/useReveal";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms for sequential section reveals */
  delay?: number;
  /** Animation direction */
  direction?: "up" | "left" | "right" | "scale";
}

export default function RevealSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealSectionProps) {
  const { ref, isVisible } = useReveal(0.1);

  const hiddenStyles: Record<string, string> = {
    up: "translate-y-8 opacity-0",
    left: "translate-x-8 opacity-0",
    right: "-translate-x-8 opacity-0",
    scale: "scale-95 opacity-0",
  };

  const visibleStyle = "translate-y-0 translate-x-0 scale-100 opacity-100";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleStyle : hiddenStyles[direction]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
