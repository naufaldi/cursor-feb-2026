"use client";

import { useRouter } from "next/navigation";
import { SlideNavigation } from "@/lib/types";

interface SlideNavProps {
  navigation: SlideNavigation;
}

export function SlideNav({ navigation }: SlideNavProps) {
  const router = useRouter();
  const { current, total, hasNext, hasPrev } = navigation;

  const goTo = (id: number) => {
    router.push(`/slides/${id}`);
  };

  const goNext = () => {
    if (hasNext) goTo(current + 1);
  };

  const goPrev = () => {
    if (hasPrev) goTo(current - 1);
  };

  const progressPercent = (current / total) * 100;

  return (
    <>
      {/* Navigation arrows */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
        <button
          onClick={goPrev}
          disabled={!hasPrev}
          className={`p-3 rounded-full bg-surface border border-surface-light transition-all ${
            hasPrev
              ? "hover:bg-surface-light hover:border-accent cursor-pointer"
              : "opacity-30 cursor-not-allowed"
          }`}
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <span className="text-foreground-muted font-mono text-sm min-w-[80px] text-center">
          {current} / {total}
        </span>

        <button
          onClick={goNext}
          disabled={!hasNext}
          className={`p-3 rounded-full bg-surface border border-surface-light transition-all ${
            hasNext
              ? "hover:bg-surface-light hover:border-accent cursor-pointer"
              : "opacity-30 cursor-not-allowed"
          }`}
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-surface z-50">
        <div
          className="h-full bg-accent transition-all duration-300 ease-out cursor-pointer"
          style={{ width: `${progressPercent}%` }}
        />
        {/* Clickable progress track */}
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percent = x / rect.width;
            const targetSlide = Math.max(1, Math.ceil(percent * total));
            goTo(targetSlide);
          }}
        />
      </div>

      {/* Slide dots for quick navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-50">
        {Array.from({ length: total }, (_, i) => i + 1).map((slideNum) => (
          <button
            key={slideNum}
            onClick={() => goTo(slideNum)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              slideNum === current
                ? "bg-accent scale-125"
                : "bg-foreground-muted/30 hover:bg-foreground-muted hover:scale-110"
            }`}
            aria-label={`Go to slide ${slideNum}`}
            title={`Slide ${slideNum}`}
          />
        ))}
      </div>
    </>
  );
}
