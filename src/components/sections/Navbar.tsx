"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BarChart3 } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-md border-b border-zinc-900"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <BarChart3 className="w-6 h-6 text-amber-400" />
          <span className="text-xl font-semibold">LiveChart</span>
        </Link>

        <div className="flex items-center gap-4">
          <a href="#pricing">
            <Button variant="ghost" size="sm">
              Pricing
            </Button>
          </a>
          <Link href="/app">
            <Button variant="primary" size="sm">
              Try Free
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
