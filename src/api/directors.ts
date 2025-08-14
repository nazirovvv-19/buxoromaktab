// src/api/directors.ts
import type { Directors_all } from "@/types/all";

export async function getDirectors_all(): Promise<Directors_all[]> {
  const response = await fetch("https://buxoromaktabi.uz/api/v1/directors/");
  if (!response.ok) {
    throw new Error("Failed to fetch directors data");
  }
  const data = await response.json();
  return data; // return array of directors
}
