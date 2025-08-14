// src/api/schoolPhotos.ts
import type { Teachers_ofus } from "@/types/all";

export async function getTeachers_ofus(): Promise<Teachers_ofus[]> {
  const response = await fetch("https://buxoromaktabi.uz/api/v1/teachers/");
  if (!response.ok) {
    throw new Error("Failed to fetch school photos");
  }
  const data = await response.json();
  return data; // array
}
