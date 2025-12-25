"use client";

import { Shield, Zap, X } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500 mb-8">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Runs entirely in your browser
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Built for speed, not lock-in
          </span>
          <span className="flex items-center gap-2">
            <X className="w-4 h-4" />
            Cancel anytime
          </span>
        </div>

        <div className="text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} LiveChart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
