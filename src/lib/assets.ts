import fs from "node:fs";
import path from "node:path";
import { readImageDimensions } from "./image-dimensions";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const VIDEO_EXT = new Set([".mp4", ".mov", ".webm"]);

function listDir(relDir: string, exts: Set<string>): string[] {
  const abs = path.join(process.cwd(), "public", relDir);
  try {
    return fs
      .readdirSync(abs)
      .filter((f) => exts.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/${relDir}/${f}`.replace(/\\/g, "/"));
  } catch {
    return [];
  }
}

export function getCategoryImages(category: string, prefix?: string): string[] {
  const all = listDir(`images/${category}`, IMAGE_EXT);
  if (!prefix) return all;
  return all.filter((src) => src.split("/").pop()!.startsWith(prefix));
}

export function getCategoryVideos(category: string): string[] {
  return listDir(`videos/${category}`, VIDEO_EXT);
}

export type SizedImage = { src: string; width: number; height: number };

export function getCategoryImagesWithSize(category: string, prefix?: string): SizedImage[] {
  return getCategoryImages(category, prefix).map((src) => {
    const abs = path.join(process.cwd(), "public", src);
    const dims = readImageDimensions(abs);
    return { src, width: dims?.width ?? 4, height: dims?.height ?? 3 };
  });
}
