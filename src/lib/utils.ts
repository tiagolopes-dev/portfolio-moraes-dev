import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleDownloadCv = () => {
  console.log("downloading cv");
  const a = document.createElement("a");
  a.href = "/moraes-dev-cv.pdf";
  a.download = "moraes-dev-cv.pdf";
  a.click();
}