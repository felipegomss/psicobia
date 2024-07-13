import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const whatsappLink = "https://wa.me/5571996755965";

export const emailLink = "mailto:psicobiancaveira@gmail.com";
