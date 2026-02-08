import { NextResponse } from "next/server";
import {
  blurUrl,
  fullUrl,
  listImagesByFolderPaged,
  thumbUrl,
} from "@/lib/cloudinary";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const folder = searchParams.get("folder") || "";
  const cursor = searchParams.get("cursor") || undefined;
  const max = Number(searchParams.get("max") || "60");

  if (!folder) {
    return NextResponse.json({ items: [], nextCursor: undefined });
  }

  const { images, nextCursor } = await listImagesByFolderPaged(folder, {
    max,
    cursor,
  });

  const items = images.map((img) => ({
    public_id: img.public_id,
    thumb: thumbUrl(img.public_id),
    full: fullUrl(img.public_id),
    blur: blurUrl(img.public_id),
    download: img.secure_url,
    width: img.width,
    height: img.height,
    created_at: img.created_at,
  }));

  return NextResponse.json({ items, nextCursor });
}
