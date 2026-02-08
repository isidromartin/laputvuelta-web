import "server-only";
import { v2 as cloudinary } from "cloudinary";

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || "dlqacmx8q";

cloudinary.config({
  cloud_name: cloudName,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Validación clara (no imprime secretos)
if (!cloudName) {
  throw new Error("Missing CLOUDINARY_CLOUD_NAME env var");
}
if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  throw new Error(
    "Missing CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET env vars (needed for Search API)",
  );
}

export type CloudinaryImage = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  created_at: string;
};

export async function listImagesByFolder(folder: string, max = 60) {
  try {
    const res = await cloudinary.search
      .expression(`folder:${folder} AND resource_type:image`)
      .sort_by("created_at", "desc")
      .max_results(max)
      .execute();

    return (res.resources || []).map((r: any) => ({
      public_id: r.public_id,
      secure_url: r.secure_url,
      width: r.width,
      height: r.height,
      created_at: r.created_at,
    })) as CloudinaryImage[];
  } catch (err) {
    // Evita romper la página si Cloudinary falla
    console.error("[Cloudinary] listImagesByFolder error:", err);
    return [];
  }
}

export function thumbUrl(publicId: string) {
  return cloudinary.url(publicId, {
    secure: true,
    transformation: [
      { width: 480, crop: "limit" },
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  });
}

export function fullUrl(publicId: string) {
  return cloudinary.url(publicId, {
    secure: true,
    transformation: [
      { width: 1600, crop: "limit" },
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  });
}

export function blurUrl(publicId: string) {
  return cloudinary.url(publicId, {
    secure: true,
    transformation: [
      { width: 20, crop: "limit" },
      { quality: "auto:low" },
      { fetch_format: "auto" },
    ],
  });
}

export async function listImagesByFolderPaged(
  folder: string,
  args?: { max?: number; cursor?: string },
): Promise<{
  images: CloudinaryImage[];
  nextCursor?: string;
  totalCount?: number;
}> {
  const max = Math.min(Math.max(args?.max ?? 60, 1), 500);

  try {
    let q = cloudinary.search
      .expression(`folder:${folder} AND resource_type:image`)
      .sort_by("created_at", "desc")
      .max_results(max);

    if (args?.cursor) q = q.next_cursor(args.cursor);

    const res = await q.execute();

    const images = (res.resources || []).map((r: any) => ({
      public_id: r.public_id,
      secure_url: r.secure_url,
      width: r.width,
      height: r.height,
      created_at: r.created_at,
    })) as CloudinaryImage[];

    return {
      images,
      nextCursor: res.next_cursor as string | undefined,
      totalCount:
        typeof res.total_count === "number" ? res.total_count : undefined,
    };
  } catch (err) {
    console.error("[Cloudinary] listImagesByFolderPaged error:", err);
    return { images: [], nextCursor: undefined, totalCount: undefined };
  }
}
