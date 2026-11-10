"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { PROJECTS } from "@/data";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = currentIndex !== -1 ? PROJECTS[currentIndex] : PROJECTS[0];

  const prevProject =
    PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <TopNav backHref="/portfolio" backLabel="Volver" />

      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-10">
        {/* Title & Category */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <h1 className="text-[36px] sm:text-[48px] font-medium tracking-[-0.02em] text-[var(--text-primary)] leading-tight">
              {project.title}
            </h1>
            <p className="text-[18px] sm:text-[20px] font-medium text-[var(--text-secondary)] mt-1">
              {project.category}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-black text-white dark:bg-white dark:text-black text-[15px] font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={17} /> Ver Demo en Vivo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl vexoo-card text-[var(--text-primary)] text-[15px] font-medium hover:opacity-80 transition-opacity"
            >
              <Github size={17} /> Ver Código en GitHub
            </a>
          </div>
        </motion.div>

        {/* Hero Project Image */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-[380px] sm:h-[580px] lg:h-[760px] rounded-[24px] overflow-hidden vexoo-card mb-16"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overview & Client / Role / Year Metadata Grid (exact Vexoo layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-2 sm:px-12 mb-20">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[16px] sm:text-[18px] font-medium leading-[1.6] text-[var(--text-primary)]">
              {project.overview}
            </p>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <p className="text-[14px] font-medium text-[var(--text-secondary)] mb-3">
                Stack Tecnológico:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl text-[14px] font-medium vexoo-card text-[var(--text-primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-start-8 lg:col-span-5 space-y-6 text-[16px] font-medium">
            <div>
              <p className="text-[var(--text-secondary)]">Contexto:</p>
              <p className="text-[var(--text-primary)] mt-1">
                {project.client}
              </p>
            </div>
            <div>
              <p className="text-[var(--text-secondary)]">Rol:</p>
              <p className="text-[var(--text-primary)] mt-1">{project.role}</p>
            </div>
            <div>
              <p className="text-[var(--text-secondary)]">Año:</p>
              <p className="text-[var(--text-primary)] mt-1">{project.year}</p>
            </div>
            {project.demo && (
              <div>
                <p className="text-[var(--text-secondary)]">URL Producción:</p>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--text-primary)] underline underline-offset-4 mt-1 inline-block"
                >
                  {project.demo}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* If project has architectural highlights (StockGuard E-Commerce), render them */}
        {project.highlights && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {project.highlights.map((h, i) => (
              <div
                key={h.title}
                className="vexoo-card rounded-[24px] p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[13px] font-medium text-[var(--text-secondary)] block mb-3">
                    0{i + 1} · Arquitectura
                  </span>
                  <h3 className="text-[20px] font-semibold text-[var(--text-primary)] mb-3">
                    {h.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
                    {h.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Secondary Showcase Images */}
        <div className="space-y-8 mb-20">
          {project.gallery.map((imgUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-[340px] sm:h-[520px] lg:h-[680px] rounded-[24px] overflow-hidden vexoo-card"
            >
              <img
                src={imgUrl}
                alt={`${project.title} preview ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </main>

      {/* Marquee "Explora la historia completa –" matching Vexoo project detail */}
      <div className="w-full overflow-hidden py-6 my-8 select-none">
        <div className="animate-marquee-slow flex items-center gap-8">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <span
              key={n}
              className="font-display font-medium text-[48px] sm:text-[68px] lg:text-[80px] leading-none tracking-[-0.03em] text-[var(--text-primary)] whitespace-nowrap"
            >
              Explora la historia completa <span className="mx-4">–</span>
            </span>
          ))}
        </div>
      </div>

      {/* Challenge / Objective / Results Table */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 mb-24">
        <div className="divide-y divide-black/10 dark:divide-white/10 px-2 sm:px-12">
          <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 text-[16px] font-medium text-[var(--text-primary)]">
              Reto
            </div>
            <div className="lg:col-span-7 text-[16px] font-medium leading-[1.6] text-[var(--text-primary)]">
              {project.challenge}
            </div>
          </div>

          <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 text-[16px] font-medium text-[var(--text-primary)]">
              Objetivo
            </div>
            <div className="lg:col-span-7 text-[16px] font-medium leading-[1.6] text-[var(--text-primary)]">
              {project.objective}
            </div>
          </div>

          <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 text-[16px] font-medium text-[var(--text-primary)]">
              Resultados
            </div>
            <div className="lg:col-span-7 text-[16px] font-medium leading-[1.6] text-[var(--text-primary)]">
              {project.results}
            </div>
          </div>
        </div>

        {/* Prev / Next Navigation (80px font size matching Vexoo) */}
        <div className="flex items-center justify-between pt-20 px-2 sm:px-4">
          <Link
            href={`/portfolio/${prevProject.slug}`}
            className="inline-flex items-center gap-4 text-[36px] sm:text-[64px] lg:text-[80px] font-display font-medium tracking-[-0.03em] text-[var(--text-primary)] hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-8 h-8 sm:w-14 sm:h-14" strokeWidth={1.75} />
            <span>Anterior</span>
          </Link>

          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="inline-flex items-center gap-4 text-[36px] sm:text-[64px] lg:text-[80px] font-display font-medium tracking-[-0.03em] text-[var(--text-primary)] hover:opacity-70 transition-opacity"
          >
            <span>Siguiente</span>
            <ArrowRight
              className="w-8 h-8 sm:w-14 sm:h-14"
              strokeWidth={1.75}
            />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
