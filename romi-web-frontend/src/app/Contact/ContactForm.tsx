"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { apiFetch } from "@/lib/api";

type ContactFormData = {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
};

type Props = {
  inputClass: string;
};

const initialData: ContactFormData = {
  nombre: "",
  email: "",
  asunto: "",
  mensaje: "",
};

export default function ContactForm({ inputClass }: Props) {
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      await apiFetch("/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setStatus({
        type: "success",
        message: "Tu mensaje fue enviado correctamente. Te responderemos pronto.",
      });
      setFormData(initialData);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error al enviar el mensaje.";
      setStatus({
        type: "error",
        message: `No se pudo enviar el mensaje. ${message}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-semibold text-[#2d2d2d] font-fredoka-one mb-4 sm:mb-5">
        Envíanos un Mensaje
      </h2>
      <form className="space-y-4" noValidate onSubmit={onSubmit}>
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-[#2d2d2d] font-poppins mb-1">
            Nombre Completo
          </label>
          <input
            id="nombre"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            placeholder="Escribe tu nombre"
            value={formData.nombre}
            onChange={(event) => setFormData((prev) => ({ ...prev, nombre: event.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#2d2d2d] font-poppins mb-1">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            placeholder="tucorreo@ejemplo.com"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="asunto" className="block text-sm font-medium text-[#2d2d2d] font-poppins mb-1">
            Asunto
          </label>
          <input
            id="asunto"
            type="text"
            required
            className={inputClass}
            placeholder="¿Sobre qué te gustaría hablar?"
            value={formData.asunto}
            onChange={(event) => setFormData((prev) => ({ ...prev, asunto: event.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-[#2d2d2d] font-poppins mb-1">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={5}
            required
            className={`${inputClass} resize-none`}
            placeholder="Cuéntanos con más detalle en qué podemos ayudarte."
            value={formData.mensaje}
            onChange={(event) => setFormData((prev) => ({ ...prev, mensaje: event.target.value }))}
          />
        </div>

        {status && (
          <p
            className={`text-sm font-poppins ${
              status.type === "success" ? "text-green-700" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}

        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#d58b88] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#c47a77] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-fredoka-one active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </div>
      </form>
    </>
  );
}
