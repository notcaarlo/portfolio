"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TopNav } from "@/components/TopNav";
import { PROFILE } from "@/data";
import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiVitest,
  SiPython,
  SiJsonwebtokens,
} from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

type HoverKey = "default" | "about" | "portfolio" | "contact" | "avatar" | "stack" | "resume";

const HEADINGS: Record<HoverKey, { text: string; showWave?: boolean }> = {
  default: { text: "Carlo Villanueva" },
  about: { text: "Sobre mí" },
  portfolio: { text: "Portafolio" },
  contact: { text: "Contacto" },
  avatar: { text: "Hola", showWave: true },
  stack: { text: "Stack" },
  resume: { text: "Currículum" },
};

const TICKER_ITEMS = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js 15", Icon: SiNextdotjs, color: "currentColor" },
  { name: "Nest.js", Icon: SiNestjs, color: "#E0234E" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", Icon: SiPrisma, color: "currentColor" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Vitest", Icon: SiVitest, color: "#6E9F18" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "JWT / OIDC", Icon: SiJsonwebtokens, color: "#D63AFF" },
];

const WaveHandSvg = () => (
  <svg
    viewBox="0 0 110 110"
    className="w-[72px] h-[72px] sm:w-[96px] sm:h-[96px] lg:w-[115px] lg:h-[115px] inline-block ml-3 -mt-4 shrink-0"
  >
    <g transform="translate(0 0.151)">
      <path d="M 0 109.547 L 0 0 L 110 0 L 110 109.547 Z" fill="transparent" />
      <g transform="translate(0 0.128)">
        <path
          d="M 14.854 27.706 C 17.726 25.707 22.056 26.09 24.635 28.211 L 21.677 23.93 C 19.297 20.549 20.149 16.891 23.547 14.518 C 26.945 12.153 36.573 18.51 36.573 18.51 C 34.171 15.096 34.621 10.769 38.049 8.374 C 41.477 5.988 46.207 6.813 48.609 10.233 L 80.448 55.026 L 76.39 94.204 L 42.525 81.905 L 12.987 38.289 C 10.564 34.854 11.401 30.116 14.854 27.706 Z"
          fill="rgb(228,140,21)"
        />
        <path
          d="M 8.239 52.625 C 8.239 52.625 4.78 47.604 9.825 44.162 C 14.863 40.721 18.319 45.739 18.319 45.739 L 34.364 69.042 C 34.917 68.123 35.522 67.216 36.197 66.321 L 13.928 33.984 C 13.928 33.984 10.473 28.966 15.514 25.524 C 20.553 22.083 24.009 27.1 24.009 27.1 L 44.955 57.521 C 45.734 56.888 46.531 56.252 47.353 55.628 L 23.071 20.357 C 23.071 20.357 19.615 15.339 24.657 11.898 C 29.695 8.456 33.151 13.474 33.151 13.474 L 57.433 48.739 C 58.326 48.194 59.209 47.723 60.095 47.224 L 37.398 14.262 C 37.398 14.262 33.942 9.244 38.981 5.803 C 44.02 2.361 47.475 7.379 47.475 7.379 L 71.474 42.233 L 75.122 47.534 C 60.003 57.862 58.564 77.291 67.202 89.838 C 68.928 92.348 71.449 90.629 71.449 90.629 C 61.082 75.569 64.247 58.647 79.369 48.322 L 74.911 26.102 C 74.911 26.102 73.246 20.248 79.122 18.586 C 85.001 16.928 86.669 22.783 86.669 22.783 L 91.818 38.01 C 93.859 44.047 96.031 50.063 98.907 55.753 C 107.025 71.82 102.176 91.788 86.868 102.247 C 70.169 113.649 47.341 109.41 35.889 92.783 Z"
          fill="rgb(252,194,27)"
        />
        <path
          d="M 36.669 97.374 C 24.446 97.374 12.096 85.075 12.096 72.903 C 12.096 71.22 10.858 69.86 9.168 69.86 C 7.479 69.86 5.985 71.22 5.985 72.903 C 5.985 91.161 18.335 103.46 36.669 103.46 C 38.358 103.46 39.724 101.972 39.724 100.29 C 39.724 98.607 38.358 97.374 36.669 97.374 Z"
          fill="rgb(89,89,106)"
        />
        <path
          d="M 21.389 103.334 C 12.222 103.334 6.111 97.247 6.111 88.119 C 6.111 86.436 4.745 85.076 3.056 85.076 C 1.366 85.076 0 86.436 0 88.119 C 0 100.29 9.167 109.42 21.389 109.42 C 23.079 109.42 24.444 108.059 24.444 106.377 C 24.444 104.694 23.079 103.334 21.389 103.334 Z M 73.333 5.958 C 71.647 5.958 70.278 7.321 70.278 9.001 C 70.278 10.681 71.647 12.044 73.333 12.044 C 85.556 12.044 97.778 22.966 97.778 36.388 C 97.778 38.068 99.147 39.431 100.833 39.431 C 102.52 39.431 103.889 38.068 103.889 36.388 C 103.889 19.609 91.667 5.958 73.333 5.958 Z"
          fill="rgb(89,89,106)"
        />
        <path
          d="M 88.609 0 C 86.923 0 85.554 1.235 85.554 2.915 C 85.554 4.595 86.923 6.086 88.609 6.086 C 97.776 6.086 103.759 12.857 103.759 21.173 C 103.759 22.853 105.253 24.216 106.943 24.216 C 108.633 24.216 109.87 22.853 109.87 21.173 C 109.87 9.497 100.832 0 88.609 0 Z"
          fill="rgb(89,89,106)"
        />
      </g>
    </g>
  </svg>
);

interface CardLabelProps {
  label: string;
  hovered: boolean;
}

const CardLabel: React.FC<CardLabelProps> = ({ label, hovered }) => (
  <div className="w-full flex items-center justify-between">
    <span className="relative inline-grid overflow-hidden text-[18px] font-medium tracking-[-0.36px] leading-[1.3]">
      <motion.span
        className="col-start-1 row-start-1 block"
        initial={false}
        animate={{
          y: hovered ? "-125%" : "0%",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.span>
      <motion.span
        className="col-start-1 row-start-1 block"
        initial={false}
        animate={{
          y: hovered ? "0%" : "125%",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.span>
    </span>

    <span className="relative w-6 h-6 overflow-hidden flex items-center justify-center">
      <motion.span
        className="block"
        initial={false}
        animate={{
          x: hovered ? 22 : 0,
          y: hovered ? -22 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArrowUpRight size={20} strokeWidth={1.75} />
      </motion.span>
      <motion.span
        className="absolute block"
        initial={false}
        animate={{
          x: hovered ? 0 : -22,
          y: hovered ? 0 : 22,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArrowUpRight size={20} strokeWidth={1.75} />
      </motion.span>
    </span>
  </div>
);

export default function HomePage() {
  const [activeHover, setActiveHover] = useState<HoverKey>("default");
  const currentHeading = HEADINGS[activeHover];

  return (
    <main className="min-h-screen w-full flex flex-col justify-between pb-4">
      <TopNav />

      <div className="relative w-full max-w-[1440px] mx-auto px-4 flex-1 flex flex-col justify-end">
        {/* Giant Background Display Title (Overlapped by Frosted Glass Bento Cards) */}
        <div className="pointer-events-none relative lg:absolute lg:top-[16px] lg:left-0 lg:right-0 flex justify-center items-center h-[110px] sm:h-[145px] lg:h-[170px] z-0 overflow-visible select-none">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeHover}
              initial={{ y: 75, opacity: 0, skewY: 8 }}
              animate={{ y: 0, opacity: 1, skewY: 0 }}
              exit={{ y: -65, opacity: 0, skewY: -6 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-medium text-[54px] sm:text-[96px] md:text-[128px] lg:text-[152px] xl:text-[160px] leading-none tracking-[-0.04em] text-[var(--text-primary)] whitespace-nowrap flex items-center"
            >
              <span>{currentHeading.text}</span>
              {currentHeading.showWave && <WaveHandSvg />}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Bento Grid (z-10 so backdrop-filter: blur(10px) blurs the bottom half of the Giant Title) */}
        <div className="relative z-10 lg:mt-[100px] grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Top Row: About (col-span-3) + Portfolio (col-span-9) */}
          <Link
            href="/about"
            onMouseEnter={() => setActiveHover("about")}
            onMouseLeave={() => setActiveHover("default")}
            className="vexoo-card rounded-[32px] h-[240px] sm:h-[300px] lg:h-[338px] lg:col-span-3 p-8 flex flex-col justify-end group"
          >
            <CardLabel label="Sobre mí" hovered={activeHover === "about"} />
          </Link>

          <Link
            href="/portfolio"
            onMouseEnter={() => setActiveHover("portfolio")}
            onMouseLeave={() => setActiveHover("default")}
            className="vexoo-card rounded-[32px] h-[260px] sm:h-[300px] lg:h-[338px] lg:col-span-9 p-8 flex flex-col justify-between group"
          >
            {/* Subtle Featured E-Commerce Pill inside Portfolio Card */}
            <div className="flex justify-end">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-medium vexoo-card-inner text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--accent-green)" }}
                />
                Incluye StockGuard E-Commerce (Demo en Vivo)
              </span>
            </div>

            <CardLabel label="Portafolio" hovered={activeHover === "portfolio"} />
          </Link>

          {/* Bottom Row: Contact (col-span-6) + Avatar (col-span-3) + Stack & Resume (col-span-3) */}
          <Link
            href="/contact"
            onMouseEnter={() => setActiveHover("contact")}
            onMouseLeave={() => setActiveHover("default")}
            className="vexoo-card rounded-[32px] h-[240px] sm:h-[300px] lg:h-[338px] lg:col-span-6 p-8 flex flex-col justify-end group"
          >
            <CardLabel label="Contacto" hovered={activeHover === "contact"} />
          </Link>

          {/* Center Avatar Card */}
          <div
            onMouseEnter={() => setActiveHover("avatar")}
            onMouseLeave={() => setActiveHover("default")}
            className="vexoo-card rounded-[32px] h-[300px] lg:h-[338px] lg:col-span-3 overflow-hidden relative group cursor-pointer"
          >
            <img
              src={PROFILE.avatar}
              alt={PROFILE.name}
              className="w-full h-full object-cover rounded-[32px] grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
            />
          </div>

          {/* Right Stacked Column: Stack Ticker (top 161px) + Resume (bottom 161px) */}
          <div className="lg:col-span-3 flex flex-col gap-4 h-auto lg:h-[338px]">
            {/* Stack Ticker Card */}
            <div
              onMouseEnter={() => setActiveHover("stack")}
              onMouseLeave={() => setActiveHover("default")}
              className="vexoo-card rounded-[32px] h-[161px] flex items-center overflow-hidden px-4 relative cursor-pointer"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              }}
            >
              <div className="animate-marquee flex items-center gap-4">
                {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    title={item.name}
                    className="w-[72px] h-[72px] rounded-[16px] vexoo-card-inner flex items-center justify-center shrink-0"
                  >
                    <item.Icon
                      size={34}
                      style={{ color: item.color }}
                      className="opacity-90"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Card */}
            <a
              href={PROFILE.resumeUrl}
              download="CV_Carlo_Villanueva.docx"
              onMouseEnter={() => setActiveHover("resume")}
              onMouseLeave={() => setActiveHover("default")}
              className="vexoo-card rounded-[32px] h-[161px] p-8 flex flex-col justify-end group"
            >
              <CardLabel label="Currículum" hovered={activeHover === "resume"} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
