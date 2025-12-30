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
  // Honeypot anti-spam (campo oculto)
  company: string;
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

    // Honeypot: si se rellena, es bot
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

    // Cooldown simple
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

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.02] p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white/90">Escríbenos</h2>
          <p className="mt-1 text-sm text-white/60">
            Te leemos. Si es urgente, mejor DM a Instagram.
          </p>
        </div>

        <span className="text-xs text-white/50">
          {status === "sending" ? "Enviando..." : ""}
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

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs text-white/60">Nombre</label>
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white/90 outline-none focus:border-white/25"
              placeholder="Tu nombre"
              autoComplete="name"
            />
          </div>

          <div>
            <label className="text-xs text-white/60">Email</label>
            <input
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white/90 outline-none focus:border-white/25"
              placeholder="tu@email.com"
              autoComplete="email"
              inputMode="email"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs text-white/60">Motivo</label>
            <select
              value={form.inquiryType}
              onChange={(e) =>
                update(
                  "inquiryType",
                  e.target.value as FormState["inquiryType"]
                )
              }
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white/90 outline-none focus:border-white/25"
            >
              <option value="General">General</option>
              <option value="Partners">Partners</option>
              <option value="Salas">Salas</option>
              <option value="Prensa">Prensa</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-white/60">Telefono</label>
            <input
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white/90 outline-none focus:border-white/25"
              placeholder="+34 600 123 456"
              inputMode="tel"
              autoComplete="tel"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-white/60">Instagram (opcional)</label>
          <input
            value={form.instagram}
            onChange={(e) => update("instagram", e.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white/90 outline-none focus:border-white/25"
            placeholder="@usuario"
            autoComplete="off"
          />
        </div>

        <div>
          <label className="text-xs text-white/60">Asunto (opcional)</label>
          <input
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white/90 outline-none focus:border-white/25"
            placeholder="Ej: partnership / booking / prensa..."
            autoComplete="off"
          />
        </div>

        <div>
          <label className="text-xs text-white/60">Mensaje</label>
          <textarea
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="mt-2 min-h-[140px] w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white/90 outline-none focus:border-white/25"
            placeholder="Cuéntanos lo que necesitas..."
          />
        </div>

        {status === "success" ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80">
            Mensaje enviado. Te contestamos lo antes posible.
          </div>
        ) : null}

        {status === "error" ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80">
            {errorMsg || "Error enviando el mensaje."}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={!canSend || status === "sending"}
          className="mt-2 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-50 transition"
        >
          Enviar
        </button>

        <p className="text-xs text-white/45">
          Puedes escribirnos por Instagram:{" "}
          <span className="text-white/70">@laputvuelta.oficial</span>
        </p>
      </div>
    </form>
  );
}
