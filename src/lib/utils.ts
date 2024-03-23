import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isWindowDefined = () => typeof window !== "undefined";

export const appUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "https://aragorn.vercel.app";

export const openLink = (url: string) => {
  if (isWindowDefined() && url) {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    a.href = url;
    a.target = "_blank";
    a.click();
    document.body.removeChild(a);
  }
}
