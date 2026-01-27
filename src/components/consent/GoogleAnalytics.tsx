// app/components/consent/GoogleAnalytics.tsx
"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getCookieConsentValue } from "react-cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const CONSENT_COOKIE = "cookie_analytics_consent";

function hasConsent() {
  return getCookieConsentValue(CONSENT_COOKIE) === "true";
}

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const update = () => setConsent(hasConsent());
    update();
    window.addEventListener("cookie_consent_update", update);
    return () => window.removeEventListener("cookie_consent_update", update);
  }, []);

  const pagePath = useMemo(() => {
    if (typeof window === "undefined") return pathname;
    return pathname + window.location.search;
  }, [pathname]);

  // Pageview en SPA (cambios de ruta)
  useEffect(() => {
    if (!gaId || !consent) return;

    let cancelled = false;

    const send = () => {
      const gtag = window.gtag;
      if (typeof gtag !== "function") return false;

      gtag("event", "page_view", {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      });

      return true;
    };

    // Intenta enviar; si aún no existe gtag, reintenta un poco
    if (send()) return;

    let tries = 0;
    const maxTries = 20;
    const interval = 250;

    const tick = () => {
      if (cancelled) return;
      tries += 1;
      if (send()) return;
      if (tries < maxTries) setTimeout(tick, interval);
    };

    setTimeout(tick, interval);

    return () => {
      cancelled = true;
    };
  }, [gaId, consent, pagePath]);

  if (!gaId || !consent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          
          gtag('config', '${gaId}', { anonymize_ip: true, send_page_view: false });

          gtag('event', 'page_view', {
            page_path: window.location.pathname + window.location.search,
            page_location: window.location.href,
            page_title: document.title
          });
        `}
      </Script>
    </>
  );
}
