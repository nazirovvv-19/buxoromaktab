// src/api/about.ts
import type { AboutData } from "@/types/all";

export async function getAboutData(): Promise<AboutData> {
  const response = await fetch("https://buxoromaktabi.uz/api/v1/about/");
  if (!response.ok) {
    throw new Error("Failed to fetch about data");
  }
  const data = await response.json();
  return data[0];
}