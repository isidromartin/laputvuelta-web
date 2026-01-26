// app/components/AnalyticsPageView.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AnalyticsPageView() {
  const pathname = usePathname();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!gaId) return;
    const gtag = (window as any).gtag;
    if (typeof gtag !== "function") return;

    gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, gaId]);

  return null;
}
