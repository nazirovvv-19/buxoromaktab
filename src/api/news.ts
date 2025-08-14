// src/api/news.ts
import type { News_ofus } from "@/types/all";

export async function getNews_ofus(): Promise<News_ofus[]> {
  const response = await fetch("https://buxoromaktabi.uz/api/v1/news/");
  if (!response.ok) {
    throw new Error("Failed to fetch news data");
  }
  const data = await response.json();
  return data; // array
}
