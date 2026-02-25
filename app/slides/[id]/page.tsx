import { notFound } from "next/navigation";
import { getSlide, getTotalSlides } from "@/lib/slides";
import { SlidePresenter } from "./SlidePresenter";

interface SlidePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const total = getTotalSlides();
  return Array.from({ length: total }, (_, i) => ({
    id: String(i + 1),
  }));
}

export async function generateMetadata({ params }: SlidePageProps) {
  const { id } = await params;
  const slideId = parseInt(id, 10);
  const slide = getSlide(slideId);

  if (!slide) {
    return { title: "Slide Not Found" };
  }

  return {
    title: `${slide.title} | Workshop`,
  };
}

export default async function SlidePage({ params }: SlidePageProps) {
  const { id } = await params;
  const slideId = parseInt(id, 10);
  const slide = getSlide(slideId);
  const total = getTotalSlides();

  if (!slide || isNaN(slideId) || slideId < 1 || slideId > total) {
    notFound();
  }

  return (
    <SlidePresenter
      slide={slide}
      navigation={{
        current: slideId,
        total,
        hasNext: slideId < total,
        hasPrev: slideId > 1,
      }}
    />
  );
}
