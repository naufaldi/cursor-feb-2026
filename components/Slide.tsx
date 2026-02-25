"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Slide as SlideType } from "@/lib/types";
import { MarkdownRenderer } from "./MarkdownRenderer";

interface SlideProps {
  slide: SlideType;
}

const slideVariants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export function Slide({ slide }: SlideProps) {
  const isCentered = ["title", "cover", "section", "video"].includes(slide.type);
  const showLogo = !["cover", "title"].includes(slide.type);

  return (
    <motion.div
      key={slide.id}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        opacity: { duration: 0.3, ease: "easeOut" },
      }}
      className={`absolute inset-0 flex items-center justify-center p-8 md:p-16 lg:p-24 slide-bg-gradient ${
        isCentered ? "text-center" : ""
      }`}
    >
      {/* Logo in bottom-left for regular slides */}
      {showLogo && (
        <div className="absolute bottom-6 left-6 z-10">
          <Image
            src="/logo.svg"
            alt="Cursor"
            width={120}
            height={28}
            className="opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
      )}

      <div
        className={`max-w-5xl w-full ${
          isCentered ? "flex flex-col items-center justify-center" : ""
        }`}
      >
        {slide.type === "title" && (
          <div className="space-y-8">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Cursor"
                width={280}
                height={66}
                className="mx-auto"
                priority
              />
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "'CursorGothic', system-ui, sans-serif" }}
            >
              {slide.title}
            </h1>
            <div className="text-xl md:text-2xl text-foreground-muted">
              <MarkdownRenderer content={slide.content} />
            </div>
          </div>
        )}

        {slide.type === "cover" && (
          <div className="space-y-8">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "'CursorGothic', system-ui, sans-serif" }}
            >
              {slide.title}
            </h1>
            {slide.content && (
              <div className="text-2xl md:text-3xl text-foreground-muted">
                <MarkdownRenderer content={slide.content} />
              </div>
            )}
          </div>
        )}

        {slide.type === "section" && (
          <div className="space-y-6">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent-primary leading-tight"
              style={{ fontFamily: "'CursorGothic', system-ui, sans-serif" }}
            >
              {slide.title}
            </h2>
            {slide.content && (
              <div className="text-xl md:text-2xl text-foreground-muted">
                <MarkdownRenderer content={slide.content} />
              </div>
            )}
          </div>
        )}

        {slide.type === "image" && (
          <div className="space-y-6">
            <MarkdownRenderer content={slide.content} />
          </div>
        )}

        {slide.type === "video" && slide.video && (
          <div className="flex items-center justify-center w-full h-full">
            <iframe
              src={slide.video}
              allow="autoplay"
              className="w-full rounded-lg"
              style={{ height: "75vh", maxWidth: "90vw" }}
              allowFullScreen
              title={slide.title}
            />
          </div>
        )}

        {!["title", "cover", "section", "image", "video"].includes(slide.type) && (
          <div className="space-y-4">
            <MarkdownRenderer content={slide.content} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
