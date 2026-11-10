"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { RollingText } from "@/components/RollingText";
import { PROFILE } from "@/data";

const PROJECT_TOPICS = [
  "Desarrollo Backend / API RESTful",
  "Arquitectura Transaccional / E-Commerce",
  "Seguridad de Aplicaciones / IAM / RBAC",
  "Integración de IA (LLMs) & Consultoría",
];

const COLLABORATION_TYPES = [
  "Posición Full-Time / Remoto",
  "Proyecto por Contrato",
  "Auditoría / Arquitectura Backend",
  "Otro / Conversación Directa",
];

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(PROJECT_TOPICS[0]);
  const [selectedType, setSelectedType] = useState(COLLABORATION_TYPES[0]);
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Contacto Portfolio: ${selectedTopic} (${selectedType})`
    );
    const body = encodeURIComponent(
      `Nombre: ${fullName}\nEmail: ${email}\nÁrea: ${selectedTopic}\nModalidad: ${selectedType}\n\nDetalles:\n${details}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <TopNav />

      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-10">
        {/* Heading identical to Vexoo /contact (48px medium) */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[32px] sm:text-[42px] lg:text-[48px] font-medium leading-[1.18] tracking-[-0.02em] text-[var(--text-primary)] max-w-[960px] mb-16 lg:mb-20"
        >
          Si prefieres no llenar formularios, escríbeme directamente a mi correo
          y hablemos sobre tu próximo proyecto o vacante
        </motion.h1>

        {/* 2-Column Layout: Left Direct Contact Info, Right Frosted Glass Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (col-span-5) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <p className="text-[14px] font-medium text-[var(--text-secondary)] mb-1.5">
                Teléfono
              </p>
              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
                className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.52px] text-[var(--text-primary)] inline-block"
              >
                <RollingText text={PROFILE.phone} />
              </a>
            </div>

            <div>
              <p className="text-[14px] font-medium text-[var(--text-secondary)] mb-1.5">
                Correo
              </p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.52px] text-[var(--text-primary)] inline-block"
              >
                <RollingText text={PROFILE.email} />
              </a>
            </div>

            <div>
              <p className="text-[14px] font-medium text-[var(--text-secondary)] mb-1.5">
                GitHub
              </p>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.52px] text-[var(--text-primary)] inline-block"
              >
                <RollingText text="github.com/notcaarlo" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Frosted Glass Form Box (col-span-7, exact Vexoo styling) */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 vexoo-card rounded-[24px] p-6 sm:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <label className="block text-[16px] font-medium text-[var(--text-primary)] mb-3">
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="ej. Juan Pérez"
                  className="w-full h-[52px] px-4 rounded-[12px] vexoo-card-inner text-[16px] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-1 focus:ring-black/30 dark:focus:ring-white/30"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[16px] font-medium text-[var(--text-primary)] mb-3">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="w-full h-[52px] px-4 rounded-[12px] vexoo-card-inner text-[16px] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-1 focus:ring-black/30 dark:focus:ring-white/30"
                />
              </div>

              {/* Radio Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                <div>
                  <p className="text-[16px] font-medium text-[var(--text-primary)] mb-4">
                    ¿De qué trata tu proyecto?
                  </p>
                  <div className="space-y-3.5">
                    {PROJECT_TOPICS.map((topic) => {
                      const active = selectedTopic === topic;
                      return (
                        <label
                          key={topic}
                          onClick={() => setSelectedTopic(topic)}
                          className="flex items-center gap-3 cursor-pointer select-none"
                        >
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                              active
                                ? "bg-black dark:bg-white"
                                : "vexoo-card-inner"
                            }`}
                          >
                            {active && (
                              <span className="w-2 h-2 rounded-full bg-white dark:bg-black" />
                            )}
                          </span>
                          <span className="text-[15px] sm:text-[16px] font-medium text-[var(--text-primary)]">
                            {topic}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-[16px] font-medium text-[var(--text-primary)] mb-4">
                    Modalidad / Colaboración
                  </p>
                  <div className="space-y-3.5">
                    {COLLABORATION_TYPES.map((type) => {
                      const active = selectedType === type;
                      return (
                        <label
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className="flex items-center gap-3 cursor-pointer select-none"
                        >
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                              active
                                ? "bg-black dark:bg-white"
                                : "vexoo-card-inner"
                            }`}
                          >
                            {active && (
                              <span className="w-2 h-2 rounded-full bg-white dark:bg-black" />
                            )}
                          </span>
                          <span className="text-[15px] sm:text-[16px] font-medium text-[var(--text-primary)]">
                            {type}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Share More Details */}
              <div className="pt-2">
                <label className="block text-[16px] font-medium text-[var(--text-primary)] mb-3">
                  Comparte más detalles
                </label>
                <textarea
                  rows={5}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Cuéntame sobre tu proyecto, arquitectura o vacante..."
                  className="w-full p-4 rounded-[12px] vexoo-card-inner text-[16px] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-1 focus:ring-black/30 dark:focus:ring-white/30 resize-y"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-[140px] h-[54px] rounded-[14px] vexoo-card-inner text-[16px] font-medium text-[var(--text-primary)] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer"
                >
                  {submitted ? "¡Listo!" : "Enviar"}
                </button>
              </div>

              {/* Green Availability Indicator */}
              <div className="flex items-center gap-2.5 pt-2">
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--accent-green)" }}
                />
                <span className="text-[16px] font-medium text-[var(--text-primary)]">
                  {PROFILE.availability}
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
