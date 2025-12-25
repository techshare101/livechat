"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { X, Check, Zap } from "lucide-react";

const isNot = [
  "A BI dashboard",
  "A data warehouse",
  "A workflow builder",
];

const is = [
  "A language-driven chart engine",
  "Built for thinking, not setup",
  'Optimized for "one more question"',
];

export function Differentiators() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why This Is Different
            </h2>
            <p className="text-xl text-zinc-400">(And Faster)</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ScrollReveal delay={0.1}>
            <Card hover={false} className="border-red-900/50 bg-red-950/10">
              <p className="text-zinc-500 text-sm uppercase tracking-wider mb-6">
                This is NOT
              </p>
              <ul className="space-y-4">
                {isNot.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg text-zinc-400">
                    <X className="w-5 h-5 text-red-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card hover={false} className="border-amber-900/50 bg-amber-950/10">
              <p className="text-zinc-500 text-sm uppercase tracking-wider mb-6">
                This IS
              </p>
              <ul className="space-y-4">
                {is.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <Check className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-6 py-3">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="text-lg">
                Time to first insight: <span className="text-amber-400 font-semibold">under 60 seconds</span>
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
