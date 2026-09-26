import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL: string;
}

const photosDirectory = path.join(process.cwd(), "public/photos");
const photoExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

// "03-regina-pizzeria-at-night.jpg" -> "Regina pizzeria at night"
const altFromFilename = (file: string) => {
  const words = path
    .parse(file)
    .name.replace(/^\d+[-_\s]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return words ? words.charAt(0).toUpperCase() + words.slice(1) : "Photo";
};

const loadPhoto = async (file: string): Promise<Photo | null> => {
  const filePath = path.join(photosDirectory, file);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    const width = metadata.autoOrient.width;
    const height = metadata.autoOrient.height;
    const blur = await image
      .rotate()
      .resize(16, 16, { fit: "inside" })
      .webp({ quality: 40 })
      .toBuffer();

    return {
      src: `/photos/${encodeURIComponent(file)}`,
      alt: altFromFilename(file),
      width,
      height,
      blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
    };
  } catch (error: unknown) {
    console.error(`Skipping unreadable photo ${file}:`, error);
    return null;
  }
};

export const getPhotos = async () => {
  let files: string[];

  try {
    files = await fs.readdir(photosDirectory);
  } catch {
    return [];
  }

  const photos = await Promise.all(
    files
      .filter((file) => photoExtensions.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map(loadPhoto),
  );

  return photos.filter((photo): photo is Photo => photo !== null);
};
