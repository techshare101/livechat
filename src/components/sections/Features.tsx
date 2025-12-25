"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Upload, MessageSquare, BarChart3, Eye } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Upload Anything",
    description: "CSV, JSON, simple logs. Your data stays local in the browser.",
  },
  {
    icon: MessageSquare,
    title: "Ask for a Chart",
    description: '"Group by month" • "Stack by region" • "Highlight outliers" • "Only show EU and NA"',
  },
  {
    icon: BarChart3,
    title: "Get a Real Chart",
    description: "Bar, line, stacked, area. Clean defaults. Presentation-ready instantly.",
  },
  {
    icon: Eye,
    title: "Trust What You See",
    description: "Every chart comes with readable transformation spec and clear aggregation logic.",
  },
];

export function Features() {
  return (
    <section className="px-6 py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What You Can Do
            </h2>
            <p className="text-xl text-zinc-400">Concrete. Demo-ready.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={0.1 + index * 0.1}>
              <Card className="h-full">
                <feature.icon className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="text-center text-zinc-500 mt-12">
            The chart updates live as you refine. Export when it looks right.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
