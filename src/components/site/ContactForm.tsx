"use client";

import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  inquiryType: "General" | "Partners" | "Salas" | "Prensa";
  instagram: string;
  subject: string;
  message: string;
  phone: string;
  company: string; // honeypot
};

const COOLDOWN_MS = 30_000;

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    inquiryType: "General",
    instagram: "",
    subject: "",
    message: "",
    company: "",
    phone: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const canSend = useMemo(() => {
    if (status === "sending") return false;
    try {
      const last = Number(localStorage.getItem("lpv_contact_last_sent") || "0");
      return Date.now() - last > COOLDOWN_MS;
    } catch {
      return true;
    }
  }, [status]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    // honeypot
    if (form.company.trim().length > 0) return;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMsg("Faltan variables de EmailJS (revisa .env.local / Vercel).");
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Completa nombre, email y mensaje.");
      return;
    }

    // cooldown
    try {
      const last = Number(localStorage.getItem("lpv_contact_last_sent") || "0");
      if (Date.now() - last <= COOLDOWN_MS) {
        setStatus("error");
        setErrorMsg("Espera unos segundos antes de volver a enviar.");
        return;
      }
    } catch {}

    setStatus("sending");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      inquiry_type: form.inquiryType,
      instagram: form.instagram || "-",
      subject: form.subject || "(sin asunto)",
      message: form.message,
      phone: form.phone || "-",
      page_url: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      setStatus("success");
      try {
        localStorage.setItem("lpv_contact_last_sent", String(Date.now()));
      } catch {}

      setForm({
        name: "",
        email: "",
        inquiryType: "General",
        instagram: "",
        subject: "",
        message: "",
        company: "",
        phone: "",
      });
    } catch {
      setStatus("error");
      setErrorMsg(
        "No se pudo enviar. Inténtalo de nuevo o escríbenos por Instagram."
      );
    }
  }

  const inputBase =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 " +
    "text-sm text-white/90 placeholder:text-white/35 outline-none backdrop-blur " +
    "transition focus:border-[var(--primary)]/45 focus:ring-2 focus:ring-[var(--primary)]/25";

  return (
    <form
      onSubmit={onSubmit}
      className="glass relative overflow-hidden rounded-3xl border border-white/10 p-6 md:p-8"
    >
      {/* halos internos */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--primary)]/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
              forum
            </span>
            <h2 className="text-lg md:text-xl font-black uppercase tracking-tight text-white/95 secondaryFont">
              Contacto
            </h2>
          </div>
          <p className="mt-1 text-sm text-white/60 max-w-md">
            Te leemos. Si es urgente, mejor DM a Instagram.
          </p>
        </div>

        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
          {status === "sending" ? "ENVIANDO…" : ""}
        </span>
      </div>

      {/* Honeypot oculto */}
      <div className="hidden">
        <label className="text-xs">Company</label>
        <input
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <div className="relative mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Nombre
            </label>
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputBase}
              placeholder="Tu nombre"
              autoComplete="name"
            />
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Email
            </label>
            <input
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputBase}
              placeholder="tu@email.com"
              autoComplete="email"
              inputMode="email"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Motivo
            </label>
            <select
              value={form.inquiryType}
              onChange={(e) =>
                update(
                  "inquiryType",
                  e.target.value as FormState["inquiryType"]
                )
              }
              className={
                inputBase +
                " appearance-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,77,94,0.10),transparent_55%)]"
              }
            >
              <option value="General">General</option>
              <option value="Partners">Partners</option>
              <option value="Salas">Salas</option>
              <option value="Prensa">Prensa</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Teléfono
            </label>
            <input
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputBase}
              placeholder="+34 600 123 456"
              inputMode="tel"
              autoComplete="tel"
            />
          </div>
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
            Instagram (opcional)
          </label>
          <input
            value={form.instagram}
            onChange={(e) => update("instagram", e.target.value)}
            className={inputBase}
            placeholder="@usuario"
            autoComplete="off"
          />
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
            Asunto (opcional)
          </label>
          <input
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className={inputBase}
            placeholder="Ej: partnership / booking / prensa..."
            autoComplete="off"
          />
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
            Mensaje
          </label>
          <textarea
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputBase + " min-h-[140px]"}
            placeholder="Cuéntanos lo que necesitas…"
          />
        </div>

        {/* Estados */}
        {status === "success" ? (
          <div className="rounded-2xl border border-[var(--primary)]/25 bg-[var(--primary)]/10 px-4 py-3 text-sm text-white/80">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[var(--primary)] text-xl">
                check_circle
              </span>
              <div>
                <div className="font-bold uppercase tracking-widest text-[11px]">
                  Enviado
                </div>
                <div className="text-white/70">
                  Te contestamos lo antes posible.
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {status === "error" ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[var(--primary)] text-xl">
                error
              </span>
              <div>
                <div className="font-bold uppercase tracking-widest text-[11px]">
                  Error
                </div>
                <div className="text-white/70">
                  {errorMsg || "Error enviando el mensaje."}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* CTA */}
        <button
          type="submit"
          disabled={!canSend || status === "sending"}
          className="mt-2 relative inline-flex items-center justify-center rounded-2xl bg-[var(--primary)] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-[color:rgba(255,77,94,0.9)] hover:scale-[1.01] disabled:opacity-50 disabled:hover:scale-100"
        >
          <span className="pointer-events-none absolute -inset-[2px] rounded-2xl border border-white/15" />
          <span className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-[var(--primary)]/25 blur-xl" />
          {status === "sending" ? "Enviando…" : "Enviar"}
        </button>

        <p className="text-xs text-white/45">
          Puedes escribirnos por Instagram:{" "}
          <span className="text-white/70">@laputvuelta.oficial</span>
        </p>

        {/* Cooldown hint (opcional visual) */}
        {!canSend && status !== "sending" ? (
          <p className="text-[11px] text-white/35">
            Has enviado hace poco. Espera unos segundos para volver a enviar.
          </p>
        ) : null}
      </div>
    </form>
  );
}
