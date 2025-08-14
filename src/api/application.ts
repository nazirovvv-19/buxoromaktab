// src/api/application.ts
import type { Application } from "@/types/all";

export async function sendApplication(data: Application): Promise<void> {
  const response = await fetch("https://buxoromaktabi.uz/api/v1/application/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Ariza yuborilmadi");
  }
}
