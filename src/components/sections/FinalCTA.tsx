"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Upload } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="px-6 py-32 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Stop building charts.
            <br />
            <span className="gradient-text">Start asking questions.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Link href="/app">
            <Button size="lg" className="gap-2 mb-8">
              <Upload className="w-5 h-5" />
              Upload a file → Get your first chart now
            </Button>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <span>No setup</span>
            <span className="text-zinc-700">•</span>
            <span>No install</span>
            <span className="text-zinc-700">•</span>
            <span>No waiting</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
