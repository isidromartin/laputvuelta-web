"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      cookieName="cookie_analytics_consent"
      buttonText="Aceptar todo"
      declineButtonText="Solo necesarias"
      enableDeclineButton
      expires={180}
      sameSite="Lax"
      overlay={false}
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
        padding: "16px 18px",
        maxWidth: "1080px",
        margin: "0 auto",
        borderRadius: "16px 16px 0 0",
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
      <div>
        <strong style={{ display: "block", marginBottom: 6 }}>
          Configuración de cookies
        </strong>
        <span style={{ color: "rgba(255,255,255,0.8)" }}>
          Usamos cookies necesarias y, con tu permiso, analíticas para mejorar
          la experiencia. Puedes cambiar tu decisión en cualquier momento.
        </span>{" "}
        <a
          href="/cookies"
          style={{ color: "#ffffff", textDecoration: "underline" }}
        >
          Ver política de cookies
        </a>
        <span style={{ color: "rgba(255,255,255,0.6)" }}> · </span>
        <a
          href="/privacidad"
          style={{ color: "#ffffff", textDecoration: "underline" }}
        >
          Privacidad
        </a>
      </div>
    </CookieConsent>
  );
}
