"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      cookieName="cookie_analytics_consent"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      enableDeclineButton
      expires={180}
      sameSite="Lax"
      overlay
      onAccept={() =>
        window.dispatchEvent(
          new CustomEvent("cookie_consent_update", {
            detail: { analytics: true },
          }),
        )
      }
      onDecline={() =>
        window.dispatchEvent(
          new CustomEvent("cookie_consent_update", {
            detail: { analytics: false },
          }),
        )
      }
      style={{
        background: "rgba(10,10,12,0.92)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        fontSize: "14px",
      }}
      buttonStyle={{
        background: "#ffffff",
        color: "#000000",
        borderRadius: "999px",
        padding: "10px 14px",
        fontSize: "14px",
        fontWeight: 600,
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#ffffff",
        borderRadius: "999px",
        padding: "10px 14px",
        fontSize: "14px",
        fontWeight: 600,
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      Usamos cookies para mejorar tu experiencia en la web.
    </CookieConsent>
  );
}
