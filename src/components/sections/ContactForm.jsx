"use client";
import { useState } from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { contactForm } from "@/lib/data";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact-form" className="">
      <div className="">
        {/* Encabezado centrado */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="h-10 w-10 mb-3">
            <Image
              src="/images/contact/email.webp"
              alt="Email"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
          </div>
          <h2
            className="text-[22px] sm:text-2xl md:text-3xl font-extrabold tracking-wide"
            style={{ color: "#90ea93" }}
          >
            RESERVÁ TU VISITA TÉCNICA
          </h2>
          <p className="mt-2 text-[12px] sm:text-xs font-semibold tracking-wide uppercase text-neutral-700">
            Completá el formulario y te contactamos en menos de 24hs
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
        >
          {/* Nombre (full) */}
          <div className="md:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md bg-neutral-100 border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md bg-neutral-100 border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold">
              Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="mt-1 w-full rounded-md bg-neutral-100 border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            />
          </div>

          {/* Dirección (full) */}
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold">
              Dirección donde hacer la visita
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              className="mt-1 w-full rounded-md bg-neutral-100 border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            />
          </div>

          {/* Mensaje (full) */}
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 w-full rounded-md bg-neutral-100 border border-neutral-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            />
          </div>

          {/* Botón (full) */}
          <div className="md:col-span-2 pt-1">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full h-12 sm:h-14 inline-flex cursor-pointer bg-[#90ea93] hover:bg-[#90ea93]/50 items-center justify-center rounded-lg text-[18px] sm:text-xl font-semibold text-black transition
                         disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : "Agendar visita técnica"}
            </button>
          </div>

          {status === "success" && (
            <p className="md:col-span-2 text-green-700">
              {contactForm.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="md:col-span-2 text-red-700">
              {contactForm.errorMessage}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
