"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This replaces half my Excel workflow.",
    author: "Early User",
  },
  {
    quote: "I got to the chart I wanted in under a minute.",
    author: "Beta Tester",
  },
  {
    quote: "This feels like pairing with a data analyst.",
    author: "Product Manager",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What People Say
            </h2>
            <p className="text-zinc-500">(Early signal copy)</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.quote} delay={0.1 + index * 0.1}>
              <Card className="h-full">
                <Quote className="w-8 h-8 text-amber-400/30 mb-4" />
                <p className="text-lg mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="text-zinc-500 text-sm">— {testimonial.author}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-zinc-600 text-sm mt-8 italic">
            Real testimonials slot in here after week 2.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
