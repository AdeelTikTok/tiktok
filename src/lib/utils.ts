import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MARKETS = [
  "United Kingdom",
  "United States",
  "Spain",
  "Italy",
  "France",
  "Germany",
  "Malaysia",
  "Mexico",
  "Brazil",
] as const;

export const WHATSAPP_NUMBER = "923274698250";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'd like to book a strategy call about my TikTok Shop."
)}`;
