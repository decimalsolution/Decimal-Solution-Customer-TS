import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
// Define the type for inputs
type ClassValue = string | number | undefined | null |ClassValue[] | { [key: string]: boolean };

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
