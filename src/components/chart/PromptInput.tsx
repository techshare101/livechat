"use client";

import { useState, useCallback } from "react";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
  disabled?: boolean;
  placeholder?: string;
}

export function PromptInput({
  onSubmit,
  isLoading,
  disabled = false,
  placeholder = 'Try: "Show monthly revenue by region"',
}: PromptInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim() && !isLoading && !disabled) {
        onSubmit(value.trim());
      }
    },
    [value, isLoading, disabled, onSubmit]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e);
      }
    },
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || isLoading}
          className={`
            w-full px-4 py-4 pr-14 bg-zinc-900 border border-zinc-800 
            text-white placeholder-zinc-500 
            focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50
            transition-all duration-200
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        />
        <motion.button
          type="submit"
          disabled={!value.trim() || isLoading || disabled}
          className={`
            absolute right-2 p-2 transition-all duration-200
            ${
              value.trim() && !isLoading && !disabled
                ? "text-amber-400 hover:bg-amber-400/10"
                : "text-zinc-600 cursor-not-allowed"
            }
          `}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </form>
  );
}
