"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROFILE } from "@/data";
import { RollingText } from "./RollingText";
import { ArrowLeft } from "lucide-react";

interface TopNavProps {
  backHref?: string;
  backLabel?: string;
}

export const TopNav: React.FC<TopNavProps> = ({ backHref, backLabel }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [timeStr, setTimeStr] = useState<string>("1:52 AM");
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/Guatemala",
      });
      setTimeStr(formatted);
    };
    updateClock();
    const timer = setInterval(updateClock, 15000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("vexoo-theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("vexoo-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("vexoo-theme", "light");
    }
  };

  const navLinkHref = backHref || "/";
  const navLinkText = backLabel || (isHome ? PROFILE.shortName : "Inicio");

  return (
    <nav className="w-full h-[76px] px-4 sm:px-6 flex items-center justify-between text-[15px] sm:text-[16px] font-medium tracking-[-0.32px] relative z-30">
      {/* Left: Brand or Back + Role */}
      <div className="flex items-center gap-8 sm:gap-24">
        <Link
          href={navLinkHref}
          className="inline-flex items-center gap-2 text-[var(--text-primary)]"
        >
          {!isHome && <ArrowLeft size={16} strokeWidth={2} />}
          <RollingText text={navLinkText} />
        </Link>

        <span className="hidden md:inline-block text-[var(--text-primary)]">
          {PROFILE.role}
        </span>
      </div>

      {/* Right: City • Time + Theme Pill Toggle */}
      <div className="flex items-center gap-6 sm:gap-16">
        <div className="hidden sm:flex items-center gap-1.5 text-[var(--text-primary)]">
          <span>{PROFILE.city}</span>
          <span>•</span>
          <span className="tabular-nums">{timeStr}</span>
        </div>

        {/* Vexoo Theme Switch Pill */}
        <button
          onClick={toggleTheme}
          aria-label="Cambiar tema claro/oscuro"
          className="relative w-7 h-4 rounded-full flex items-center p-0.5 transition-colors cursor-pointer"
          style={{
            backgroundColor: isDark
              ? "rgba(255, 255, 255, 0.16)"
              : "rgba(0, 0, 0, 0.16)",
          }}
        >
          <span
            className="w-3 h-3 rounded-full transition-transform duration-300"
            style={{
              backgroundColor: isDark ? "#ffffff" : "#000000",
              transform: isDark ? "translateX(12px)" : "translateX(0px)",
            }}
          />
        </button>
      </div>
    </nav>
  );
};
