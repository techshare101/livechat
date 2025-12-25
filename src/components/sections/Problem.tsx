"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { X } from "lucide-react";

const painPoints = [
  "Opening Excel or Sheets",
  "Cleaning columns",
  "Pivoting",
  "Formatting",
  "Re-doing it when someone asks one small change",
];

export function Problem() {
  return (
    <section className="px-6 py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            You already have the data.
            <br />
            <span className="text-zinc-500">What you don&apos;t have is time.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-xl text-zinc-400 mb-10">
            Every chart today means:
          </p>
        </ScrollReveal>

        <div className="space-y-4 mb-12">
          {painPoints.map((point, index) => (
            <ScrollReveal key={point} delay={0.15 + index * 0.05}>
              <div className="flex items-center gap-4 text-lg text-zinc-400">
                <X className="w-5 h-5 text-red-500 shrink-0" />
                <span>{point}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="border-l-2 border-amber-400 pl-6">
            <p className="text-2xl font-medium text-white">
              It&apos;s not analysis.
            </p>
            <p className="text-2xl font-medium gradient-text">
              It&apos;s friction.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
