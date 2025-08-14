// src/api/news.ts
import type { Results_ofus } from "@/types/all";

export async function getResults(): Promise<Results_ofus[]> {
    const response = await fetch("https://buxoromaktabi.uz/api/v1/results/");
    if (!response.ok) {
        throw new Error("Failed to fetch news data");
    }
    const data = await response.json();
    return data; // array
}
