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

        <div className="text-center text-sm space-y-2">
          <p className="text-zinc-600">© {new Date().getFullYear()} LiveChart. All rights reserved.</p>
          <p className="text-zinc-700">
            Built by{" "}
            <span className="text-zinc-500">MetalmindTech</span>
            {" · "}
            <span className="text-zinc-500">Kojo & Kesarel</span>
            {" — "}
            <span className="text-zinc-600 text-xs" title="MetalmindTech's product studio">ArkForge</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
