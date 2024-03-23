import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isWindowDefined = () => typeof window !== "undefined";

export const appUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "https://aragorn.vercel.app";
