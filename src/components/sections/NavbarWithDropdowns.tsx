"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/Button";
import { BarChart3, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Product",
    children: [
      { label: "Question-First Analysis", href: "/features/question-first", description: "Ask questions, not dashboards" },
      { label: "Chart Views", href: "/features/chart-views", description: "Same data, different view" },
      { label: "Explain the Numbers", href: "/features/explain-the-numbers", description: "See how charts are calculated" },
      { label: "Data Storytelling", href: "/features/data-storytelling", description: "Turn charts into narratives" },
    ],
  },
  {
    label: "Features",
    children: [
      { label: "60-Second Charts", href: "/features/60-seconds", description: "First chart in under a minute" },
      { label: "Handles Large Files", href: "/features/large-files", description: "Analyze files that break spreadsheets" },
      { label: "No-Code Analysis", href: "/features/no-code", description: "No Python, no SQL, no problem" },
      { label: "Export & Share", href: "/features/export", description: "One-click PNG export" },
    ],
  },
  {
    label: "Why LiveChart",
    children: [
      { label: "No Dashboards", href: "/features/question-first", description: "Focus on answers, not maintenance" },
      { label: "Spreadsheet-Free", href: "/features/large-files", description: "No Excel or Sheets required" },
      { label: "Privacy-First", href: "/features/privacy", description: "Your data stays yours" },
    ],
  },
  {
    label: "Pricing",
    href: "/#pricing",
  },
];

function NavDropdown({ item, isOpen, onToggle }: { item: NavItem; isOpen: boolean; onToggle: () => void }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) onToggle();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  if (item.href) {
    return (
      <Link href={item.href} className="text-zinc-400 hover:text-white transition-colors text-sm">
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm"
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && item.children && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-72 bg-zinc-900 border border-zinc-800 shadow-xl z-50"
          >
            <div className="py-2">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onToggle}
                  className="block px-4 py-3 hover:bg-zinc-800 transition-colors"
                >
                  <p className="text-white text-sm font-medium">{child.label}</p>
                  {child.description && (
                    <p className="text-zinc-500 text-xs mt-0.5">{child.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function NavbarWithDropdowns() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

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
          <span className="text-xl font-semibold text-white">LiveChart</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          {NAV_ITEMS.map((item) => (
            <NavDropdown
              key={item.label}
              item={item}
              isOpen={openDropdown === item.label}
              onToggle={() => handleToggle(item.label)}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-zinc-400 hover:text-white transition-colors text-sm">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
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
