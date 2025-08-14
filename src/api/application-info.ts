// src/api/applicationInfo.ts
import type { ApplicationForm } from "@/types/all";

export async function getApplicationInfo(): Promise<ApplicationForm> {
  const response = await fetch("https://buxoromaktabi.uz/api/v1/application-info/");
  if (!response.ok) {
    throw new Error("Failed to fetch application info");
  }
  const data = await response.json();
  return data[0];
}
