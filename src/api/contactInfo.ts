// src/api/about.ts
import type { ContactForm } from "@/types/all";

export async function getContactForm(): Promise<ContactForm> {
  const response = await fetch("https://buxoromaktabi.uz/api/v1/contact-info/");
  if (!response.ok) {
    throw new Error("Failed to fetch about data");
  }
  const data = await response.json();
  return data[0];
}