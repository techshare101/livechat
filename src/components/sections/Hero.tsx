"use client";

import { motion } from "framer-motion";
import { Upload, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Turn Files Into Charts{" "}
            <span className="gradient-text">With Language</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-xl md:text-2xl text-zinc-400 mb-4 max-w-2xl mx-auto"
        >
          Drop a CSV. Ask a question. Get a chart — instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-zinc-500 mb-10 space-y-1"
        >
          <p>Stop fighting spreadsheets.</p>
          <p>Stop rebuilding the same charts every week.</p>
          <p className="text-zinc-300">Just tell the data what you want to see.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link href="/app">
            <Button size="lg" className="gap-2">
              <Upload className="w-5 h-5" />
              Upload a file → Get your first chart
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500"
        >
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-400" />
            Runs entirely in your browser
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            No signup to try
          </span>
        </motion.div>
      </div>
    </section>
  );
}
