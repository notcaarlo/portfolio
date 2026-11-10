"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { PROJECTS, ProjectItem } from "@/data";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
  imageHeightClass?: string;
}

const VexooProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = "",
  imageHeightClass = "h-[380px] sm:h-[480px] lg:h-[520px]",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`vexoo-card rounded-[24px] p-4 flex flex-col justify-between group ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div
          className={`w-full ${imageHeightClass} rounded-[16px] overflow-hidden relative bg-black/20`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        </div>

        {/* Bottom Caption Row: Title left (rolling text), Category right */}
        <div className="pt-4 px-2 pb-1 flex items-center justify-between">
          <span className="relative inline-grid overflow-hidden text-[18px] font-medium tracking-[-0.36px] leading-[1.3] text-[var(--text-primary)]">
            <motion.span
              className="col-start-1 row-start-1 block"
              initial={false}
              animate={{
                y: hovered ? "-125%" : "0%",
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.title}
            </motion.span>
            <motion.span
              className="col-start-1 row-start-1 block"
              initial={false}
              animate={{
                y: hovered ? "0%" : "125%",
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.title}
            </motion.span>
          </span>

          <span className="text-[15px] font-medium text-[var(--text-secondary)]">
            {project.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default function PortfolioPage() {
  const ecommerceProject = PROJECTS[0]; // StockGuard E-Commerce
  const somnolenciaProject = PROJECTS[1]; // Detector de Somnolencia

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <TopNav />

      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-10">
        {/* Heading identical to Vexoo /portfolio */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[32px] sm:text-[42px] lg:text-[48px] font-medium leading-[1.18] tracking-[-0.02em] text-[var(--text-primary)] max-w-[920px] mb-12"
        >
          Explora los proyectos que representan mi experiencia en arquitectura
          backend, sistemas transaccionales y seguridad de aplicaciones
        </motion.h1>

        {/* 2 Projects Grid: StockGuard E-Commerce & Detector de Somnolencia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <VexooProjectCard project={ecommerceProject} />
          <VexooProjectCard project={somnolenciaProject} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
