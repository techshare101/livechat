"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-black";

  const variants = {
    primary:
      "bg-amber-400 text-black hover:bg-amber-300 active:scale-[0.98]",
    secondary:
      "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 active:scale-[0.98]",
    ghost:
      "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.12 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
