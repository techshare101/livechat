"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Shield, Lock, Database, CheckCircle } from "lucide-react";

const securityPoints = [
  { icon: Lock, text: "Your raw data never leaves your browser" },
  { icon: Database, text: "We only process: column names, types, minimal summaries" },
  { icon: Shield, text: "No uploads. No storage by default." },
  { icon: CheckCircle, text: "No compliance headaches" },
];

export function Security() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Security & Trust
            </h2>
            <p className="text-xl text-zinc-400">Say this clearly.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Card hover={false} className="border-green-900/50 bg-green-950/10">
            <div className="grid md:grid-cols-2 gap-6">
              {securityPoints.map((point) => (
                <div key={point.text} className="flex items-start gap-4">
                  <point.icon className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-lg text-zinc-300">{point.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-zinc-400 mt-8 text-lg">
            This is why teams approve it <span className="text-amber-400">fast</span>.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
