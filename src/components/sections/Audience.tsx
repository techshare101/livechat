"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TrendingUp, Briefcase, Brain, Building2, BarChart } from "lucide-react";

const audiences = [
  { icon: TrendingUp, label: "Analysts" },
  { icon: Briefcase, label: "Consultants" },
  { icon: Brain, label: "Product managers" },
  { icon: Building2, label: "SMB founders" },
  { icon: BarChart, label: "Anyone tired of Excel gymnastics" },
];

export function Audience() {
  return (
    <section className="px-6 py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Who This Is For
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            If you work with files and get asked questions, this is for you.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4">
          {audiences.map((audience, index) => (
            <ScrollReveal key={audience.label} delay={0.1 + index * 0.05}>
              <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-5 py-3 hover:border-zinc-700 transition-colors">
                <audience.icon className="w-5 h-5 text-amber-400" />
                <span className="text-zinc-300">{audience.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
