"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FEATURES } from "@/lib/features";

interface FeaturePageLayoutProps {
  headline: string;
  subhead: string;
  children: React.ReactNode;
  closingLine: string;
  ctaText?: string;
  ctaHref?: string;
}

export function FeaturePageLayout({
  headline,
  subhead,
  children,
  closingLine,
  ctaText = "Try It Free",
  ctaHref = "/app",
}: FeaturePageLayoutProps) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BarChart3 className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-semibold">LiveChart</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/features"
              className="text-zinc-400 hover:text-white transition-colors text-sm hidden md:block"
            >
              All Features
            </Link>
            <Link href={ctaHref}>
              <Button variant="primary" size="sm">
                {ctaText}
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto flex gap-8">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <Link
                href="/features"
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                All Features
              </Link>
              <nav className="space-y-1">
                {FEATURES.map((feature) => (
                  <Link
                    key={feature.slug}
                    href={`/features/${feature.slug}`}
                    className={`block px-3 py-2 text-sm transition-colors ${
                      currentSlug === feature.slug
                        ? "text-amber-400 bg-amber-400/10 border-l-2 border-amber-400"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    {feature.headline.length > 30
                      ? feature.headline.substring(0, 30) + "..."
                      : feature.headline}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {headline}
            </h1>
            <p className="text-xl text-zinc-400 mb-16">{subhead}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {children}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 pt-16 border-t border-zinc-800"
          >
            <p className="text-2xl font-semibold text-amber-400 mb-8">
              {closingLine}
            </p>
            <Link href={ctaHref}>
              <Button variant="primary" size="lg">
                {ctaText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
