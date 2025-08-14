// src/api/request.ts
import type { Request } from "@/types/all";

export async function sendRequest(data: Request): Promise<void> {
  const response = await fetch("https://buxoromaktabi.uz/api/v1/request/", {
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
