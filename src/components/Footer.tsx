"use client";

import React from "react";
import { PROFILE } from "@/data";
import { RollingText } from "./RollingText";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 sm:px-8 pt-12 pb-16 mt-16">
      <div className="max-w-[1440px] mx-auto border-t border-black/10 dark:border-white/10 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1: Email */}
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

        {/* Col 2: Phone & E-Commerce Live */}
        <div className="space-y-6">
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
              StockGuard E-Commerce (En Vivo)
            </p>
            <a
              href="https://e-commerce-ten-lyart-22.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.52px] text-[var(--text-primary)] inline-block"
            >
              <RollingText text="e-commerce.vercel.app ↗" />
            </a>
          </div>
        </div>

        {/* Col 3: GitHub & LinkedIn */}
        <div className="space-y-6">
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
              <RollingText text={PROFILE.githubHandle} />
            </a>
          </div>

          <div>
            <p className="text-[14px] font-medium text-[var(--text-secondary)] mb-1.5">
              LinkedIn
            </p>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.52px] text-[var(--text-primary)] inline-block"
            >
              <RollingText text={PROFILE.linkedinHandle} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
