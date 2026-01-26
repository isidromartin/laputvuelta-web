// app/components/AnalyticsPageView.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!gaId) return;
    if (typeof window.gtag !== "function") return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    window.gtag("config", gaId, { page_path: url });
  }, [pathname, searchParams, gaId]);

  return null;
}
