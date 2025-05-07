// src/types/article.ts
export interface Article {
  title: string;
  hook: string;
  slug: string;
  coverImage: string; // URL of the cover picture
  content: string; // Markdown content
}