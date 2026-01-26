"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    fvCookies?: {
      enableAnalitycs?: () => void;
      disableAnalitycs?: () => void;
    };
  }
}

export function FourvenuesPrivacyBridge() {
  useEffect(() => {
    // Sin CMP: desactiva siempre analítica dentro del iframe.
    window.fvCookies?.disableAnalitycs?.();
  }, []);

  return null;
}
