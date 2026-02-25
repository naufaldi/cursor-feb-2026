export interface Slide {
  id: number;
  title: string;
  content: string;
  type: "title" | "content" | "code" | "diagram" | "quote" | "cover" | "section" | "image" | "video";
  video?: string;
  notes?: string;
}

export interface SlideNavigation {
  current: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
}
