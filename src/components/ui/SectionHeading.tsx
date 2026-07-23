"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end"
      : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col mb-16 sm:mb-20 ${alignmentClass}`}
    >
      {tag && (
        <div className="flex items-center space-x-3 mb-4">
          <span className="h-[1px] w-8 bg-[#D4AF37]" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#D4AF37]">
            {tag}
          </span>
          <span className="h-[1px] w-8 bg-[#D4AF37]" />
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.15] max-w-3xl ${
          dark ? "text-white" : "text-[#121212]"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-5 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed tracking-wide ${
            dark ? "text-gray-300" : "text-[#777777]"
          }`}
        >
          {subtitle}
        </p>
      )}

      <div className="mt-8 flex items-center space-x-1.5 opacity-80">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
        <span className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
      </div>
    </motion.div>
  );
}
