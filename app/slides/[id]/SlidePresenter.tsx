"use client";

import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Slide } from "@/components/Slide";
import { SlideNav } from "@/components/SlideNav";
import { Slide as SlideType, SlideNavigation } from "@/lib/types";

interface SlidePresenterProps {
  slide: SlideType;
  navigation: SlideNavigation;
}

export function SlidePresenter({ slide, navigation }: SlidePresenterProps) {
  const router = useRouter();
  const { current, total, hasNext, hasPrev } = navigation;
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = useCallback(
    (id: number) => {
      router.push(`/slides/${id}`);
    },
    [router]
  );

  const goNext = useCallback(() => {
    if (hasNext) goTo(current + 1);
  }, [hasNext, current, goTo]);

  const goPrev = useCallback(() => {
    if (hasPrev) goTo(current - 1);
  }, [hasPrev, current, goTo]);

  const goFirst = useCallback(() => {
    if (current !== 1) goTo(1);
  }, [current, goTo]);

  const goLast = useCallback(() => {
    if (current !== total) goTo(total);
  }, [current, total, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "Enter":
          e.preventDefault();
          goNext();
          break;
        case "ArrowLeft":
        case "Backspace":
          e.preventDefault();
          goPrev();
          break;
        case "Home":
          e.preventDefault();
          goFirst();
          break;
        case "End":
          e.preventDefault();
          goLast();
          break;
        default:
          // Number keys for quick jump (1-9)
          if (e.key >= "1" && e.key <= "9") {
            const targetSlide = parseInt(e.key, 10);
            if (targetSlide <= total) {
              e.preventDefault();
              goTo(targetSlide);
            }
          }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, goFirst, goLast, goTo, current, total]);

  // Touch/swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        goNext(); // Swipe left -> next
      } else {
        goPrev(); // Swipe right -> prev
      }
    }

    setTouchStart(null);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-background"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={true} mode="wait">
        <Slide key={slide.id} slide={slide} />
      </AnimatePresence>

      <SlideNav navigation={navigation} />

      {/* Keyboard shortcuts hint */}
      <div className="fixed bottom-8 right-8 text-foreground-muted/50 text-xs font-mono hidden md:block">
        ← → to navigate
      </div>
    </div>
  );
}
