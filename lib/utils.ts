import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conditional support. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Pad a number to a two-digit string (01, 02, ...). */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}
