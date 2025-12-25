"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Check } from "lucide-react";
import { Button } from "./Button";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    const waitlist = JSON.parse(localStorage.getItem("livechart_waitlist") || "[]");
    waitlist.push({
      email,
      useCase,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("livechart_waitlist", JSON.stringify(waitlist));

    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setEmail("");
    setUseCase("");
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 shadow-2xl relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h2>
                  <p className="text-zinc-400 mb-6">
                    We&apos;ll email you when Pro is ready. You&apos;ll be among the first to get unlimited exports and advanced features.
                  </p>
                  <Button variant="primary" onClick={handleClose}>
                    Continue Creating Charts
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Join the Pro Waitlist</h2>
                      <p className="text-sm text-zinc-400">Be first to unlock premium features</p>
                    </div>
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-zinc-300 font-medium mb-2">Pro includes:</p>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>✓ Unlimited chart exports (no watermark)</li>
                      <li>✓ Save unlimited charts to your library</li>
                      <li>✓ Priority support</li>
                      <li>✓ Early access to new features</li>
                    </ul>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="waitlist-email" className="block text-sm font-medium text-zinc-300 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="waitlist-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="waitlist-usecase" className="block text-sm font-medium text-zinc-300 mb-1">
                        What will you use LiveChart for? (optional)
                      </label>
                      <textarea
                        id="waitlist-usecase"
                        value={useCase}
                        onChange={(e) => setUseCase(e.target.value)}
                        placeholder="e.g., Sales reports, marketing analytics, client presentations..."
                        rows={3}
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      disabled={isLoading || !email}
                    >
                      {isLoading ? "Joining..." : "Join Waitlist"}
                    </Button>

                    <p className="text-xs text-zinc-500 text-center">
                      No spam. We&apos;ll only email you about Pro launch.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
