// src/api/advantages.ts
import type { Advantage } from "@/types/all";

export async function getAdvantages(): Promise<Advantage[]> {
  const response = await fetch("https://buxoromaktabi.uz/api/v1/advantages/");
  if (!response.ok) {
    throw new Error("Failed to fetch advantages");
  }
  const data = await response.json();
  return data;
}
