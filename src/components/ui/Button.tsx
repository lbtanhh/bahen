"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "gold" | "outline" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = "gold",
  size = "md",
  children,
  icon,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[11px] uppercase tracking-[0.25em]",
    md: "px-8 py-3.5 text-xs uppercase tracking-[0.25em]",
    lg: "px-10 py-4 text-xs uppercase tracking-[0.3em]",
  };

  const variantClasses = {
    gold: "bg-[#D4AF37] text-white hover:bg-[#C29F2D] shadow-lg shadow-[#D4AF37]/25 border border-[#D4AF37] relative overflow-hidden group",
    outline:
      "bg-transparent text-[#121212] border border-[#121212]/30 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#F7E7CE]/20 transition-colors",
    dark: "bg-[#121212] text-white hover:bg-[#262626] border border-[#D4AF37]/40 shadow-xl",
    ghost: "bg-transparent text-[#121212] hover:text-[#D4AF37]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center justify-center space-x-3 rounded-full font-medium transition-all duration-300 ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}

      {variant === "gold" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      )}
    </motion.button>
  );
}
