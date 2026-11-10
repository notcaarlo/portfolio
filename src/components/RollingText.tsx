"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface RollingTextProps {
  text: string;
  className?: string;
}

export const RollingText: React.FC<RollingTextProps> = ({
  text,
  className = "",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={`relative inline-grid overflow-hidden leading-[1.3] ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        className="col-start-1 row-start-1 block"
        initial={false}
        animate={{
          y: hovered ? "-125%" : "0%",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
      <motion.span
        className="col-start-1 row-start-1 block"
        initial={false}
        animate={{
          y: hovered ? "0%" : "125%",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
};
