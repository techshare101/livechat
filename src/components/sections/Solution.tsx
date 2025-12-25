"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Check } from "lucide-react";

const steps = [
  "Understand your schema",
  "Transform the data",
  "Render a live chart",
  "Let you refine it conversationally",
];

export function Solution() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Language <ArrowRight className="inline w-8 h-8 mx-2 text-amber-400" /> Charts
            </h2>
            <p className="text-xl text-zinc-400">In the Browser</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ScrollReveal delay={0.1}>
            <Card className="h-full">
              <p className="text-zinc-500 text-sm uppercase tracking-wider mb-4">
                You type
              </p>
              <p className="text-xl md:text-2xl font-mono text-amber-400">
                &quot;Show monthly revenue, grouped by region, bar chart.&quot;
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="h-full">
              <p className="text-zinc-500 text-sm uppercase tracking-wider mb-4">
                We instantly
              </p>
              <ul className="space-y-3">
                {steps.map((step) => (
                  <li key={step} className="flex items-center gap-3 text-lg">
                    <Check className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-zinc-500 text-sm mb-1">No formulas</p>
            </div>
            <div className="text-zinc-700">•</div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">No SQL</p>
            </div>
            <div className="text-zinc-700">•</div>
            <div>
              <p className="text-zinc-500 text-sm mb-1">No dashboards to set up</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
