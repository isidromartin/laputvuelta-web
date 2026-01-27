"use client";

import { useEffect } from "react";
import { getCookieConsentValue } from "react-cookie-consent";

const CONSENT_COOKIE = "cookie_analytics_consent";

function hasConsent() {
  return getCookieConsentValue(CONSENT_COOKIE) === "true";
}

export function FourvenuesPrivacyBridge() {
  useEffect(() => {
    const apply = () => {
      const ok = hasConsent();

      const fv = (window as any).fvCookies;
      if (!fv) return;

      // Por si Fourvenues usa nombres distintos
      const enable = fv.enableAnalitycs ?? fv.enableAnalytics;
      const disable = fv.disableAnalitycs ?? fv.disableAnalytics;

      if (ok) enable?.();
      else disable?.();
    };

    apply();
    window.addEventListener("cookie_consent_update", apply);
    return () => window.removeEventListener("cookie_consent_update", apply);
  }, []);

  return null;
}
