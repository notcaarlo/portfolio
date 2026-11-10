"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { PROFILE, CORE_PILLARS, EXPERIENCE_TIMELINE } from "@/data";

interface WordRevealProps {
  leadText: string;
  bodyText: string;
}

const ScrollRevealParagraph: React.FC<WordRevealProps> = ({
  leadText,
  bodyText,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const fullWords = `${leadText} ${bodyText}`.split(" ");
  const leadCount = leadText.split(" ").length;

  return (
    <p
      ref={containerRef}
      className="text-[26px] sm:text-[34px] lg:text-[40px] font-medium leading-[1.3] tracking-[-0.02em] flex flex-wrap gap-x-[0.28em] gap-y-1"
    >
      {fullWords.map((word, idx) => {
        const start = idx / fullWords.length;
        const end = start + 1 / fullWords.length;
        return (
          <WordSpan
            key={idx}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
            alwaysActive={idx < leadCount}
          />
        );
      })}
    </p>
  );
};

interface WordSpanProps {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  alwaysActive: boolean;
}

const WordSpan: React.FC<WordSpanProps> = ({
  word,
  progress,
  range,
  alwaysActive,
}) => {
  const opacity = useTransform(progress, range, [0.24, 1]);

  if (alwaysActive) {
    return <span className="text-[var(--text-primary)]">{word}</span>;
  }

  return (
    <motion.span style={{ opacity }} className="text-[var(--text-primary)]">
      {word}
    </motion.span>
  );
};

export default function AboutPage() {
  const marqueeSkills = [
    "Arquitectura Backend",
    "Seguridad de Aplicaciones",
    "PostgreSQL & Prisma",
    "Next.js 15 & Nest.js",
    "IAM · OIDC · JWT · RBAC",
    "Criptografía HMAC-SHA256",
    "Análisis de Riesgos MAGERIT & OCTAVE",
    "Inteligencia Artificial & LLMs",
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <TopNav />

      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-8">
        {/* Giant "Sobre mí" Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-medium text-[72px] sm:text-[120px] lg:text-[160px] leading-none tracking-[-0.04em] text-[var(--text-primary)] mb-12 lg:mb-20"
        >
          Sobre mí
        </motion.h1>

        {/* Scroll-Reveal Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-start-5 lg:col-span-8">
            <ScrollRevealParagraph
              leadText={PROFILE.aboutLead}
              bodyText={PROFILE.aboutBody}
            />
          </div>
        </div>

        {/* Right-aligned Portrait Image (matching Vexoo /about layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 lg:mb-36">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-start-8 lg:col-span-5"
          >
            <div className="w-full h-[460px] sm:h-[620px] lg:h-[720px] rounded-[32px] overflow-hidden vexoo-card">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* 5 Core Engineering & Security Pillars (matching Vexoo 3+2 Quotes Grid) */}
        <section className="mb-24 lg:mb-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {CORE_PILLARS.map((item, idx) => (
              <motion.div
                key={item.author}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.45,
                  delay: 0.15 + idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col justify-between"
              >
                <div>
                  <span className="block text-[40px] leading-none font-serif text-[var(--text-primary)] mb-4 select-none">
                    ❛❛
                  </span>
                  <p className="text-[20px] sm:text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--text-primary)] mb-6">
                    {item.quote}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[16px] font-medium tracking-[-0.32px]">
                  <span className="text-[var(--text-primary)]">
                    {item.author}
                  </span>
                  <span className="text-[var(--text-secondary)]">
                    {item.org}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Education Timeline Table (matching Vexoo 3-column Experience rows) */}
        <section className="mb-24 lg:mb-36">
          <div className="divide-y divide-black/10 dark:divide-white/10">
            {EXPERIENCE_TIMELINE.map((exp, idx) => (
              <motion.div
                key={`${exp.period}-${exp.role}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.45,
                  delay: 0.25 + idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="py-10 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                {/* Col 1: Period */}
                <div className="md:col-span-3 text-[16px] font-medium text-[var(--text-primary)]">
                  {exp.period}
                </div>

                {/* Col 2: Role + Company */}
                <div className="md:col-span-4">
                  <p className="text-[20px] font-medium leading-[1.3] text-[var(--text-primary)]">
                    {exp.role}
                  </p>
                  <p className="text-[20px] font-medium leading-[1.3] text-[var(--text-secondary)] mt-0.5">
                    {exp.company}
                  </p>
                </div>

                {/* Col 3: Description */}
                <div className="md:col-span-5 text-[16px] font-medium leading-[1.5] text-[var(--text-secondary)]">
                  {exp.description}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Giant Infinite Marquee Banner before Footer */}
      <div className="w-full overflow-hidden py-6 select-none">
        <div className="animate-marquee-slow flex items-center gap-8">
          {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
            <span
              key={`${skill}-${idx}`}
              className="font-display font-medium text-[56px] sm:text-[84px] lg:text-[112px] leading-none tracking-[-0.03em] text-[var(--text-primary)] whitespace-nowrap"
            >
              {skill} <span className="mx-4">–</span>
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
