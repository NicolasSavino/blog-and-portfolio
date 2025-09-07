import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally join class names.
 * It merges Tailwind CSS classes without style conflicts.
 * @param {...(string|Object|Array)} inputs - The class names to join.
 * @returns {string} The final, merged class name string.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
