"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-zinc-900/50 border border-zinc-800 p-6
        ${hover ? "border-beam transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
