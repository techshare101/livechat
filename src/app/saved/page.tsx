"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Trash2, ExternalLink, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getSavedCharts, deleteChart, SavedChart } from "@/lib/storage/saved-charts";

export default function SavedChartsPage() {
  const { user, isSignedIn, isLoaded } = useUser();
  const [charts, setCharts] = useState<SavedChart[]>([]);

  useEffect(() => {
    if (isSignedIn && user) {
      setCharts(getSavedCharts(user.id));
    }
  }, [isSignedIn, user]);

  const handleDelete = (id: string) => {
    if (confirm("Delete this chart?")) {
      deleteChart(id);
      setCharts(charts.filter((c) => c.id !== id));
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-zinc-500">Loading...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Card hover={false} className="text-center max-w-md">
          <BarChart3 className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Sign in to view saved charts</h1>
          <p className="text-zinc-400 mb-6">Your charts are saved locally and tied to your account.</p>
          <Link href="/sign-in">
            <Button variant="primary">Sign In</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BarChart3 className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-semibold">LiveChart</span>
          </Link>
          <Link href="/app">
            <Button variant="primary" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New Chart
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2">Saved Charts</h1>
            <p className="text-zinc-400 mb-8">Your saved chart configurations</p>

            {charts.length === 0 ? (
              <Card hover={false} className="text-center py-12">
                <BarChart3 className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">No saved charts yet</h2>
                <p className="text-zinc-400 mb-6">Create a chart and save it to see it here.</p>
                <Link href="/app">
                  <Button variant="primary">Create Your First Chart</Button>
                </Link>
              </Card>
            ) : (
              <div className="grid gap-4">
                {charts.map((chart) => (
                  <Card key={chart.id} hover={false} className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{chart.name}</h3>
                      <p className="text-sm text-zinc-400">
                        {chart.spec.chartType} • {chart.fileName} • {new Date(chart.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href={`/saved/${chart.id}`}>
                        <Button variant="secondary" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button variant="secondary" size="sm" onClick={() => handleDelete(chart.id)}>
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
