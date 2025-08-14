// src/api/schoolPhotos.ts
import type { SchoolPhoto } from "@/types/all";

export async function getSchoolPhoto(): Promise<SchoolPhoto[]> {
  const response = await fetch("https://buxoromaktabi.uz/api/v1/school-photos/");
  if (!response.ok) {
    throw new Error("Failed to fetch school photos");
  }
  const data = await response.json();
  return data; // array
}
