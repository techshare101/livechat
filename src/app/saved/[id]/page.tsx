"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Chart as ChartJS } from "chart.js";
import { motion } from "framer-motion";
import { BarChart3, ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ChartRenderer } from "@/components/chart/ChartRenderer";
import { ChartTypeSwitcher } from "@/components/chart/ChartTypeSwitcher";
import { TransformationSpec } from "@/components/chart/TransformationSpec";
import { getChartById, SavedChart } from "@/lib/storage/saved-charts";
import { transformData } from "@/lib/utils/transform-data";

export default function SavedChartPage() {
  const params = useParams();
  const { isSignedIn, isLoaded } = useUser();
  const [chart, setChart] = useState<SavedChart | null>(null);
  const [chartTypeOverride, setChartTypeOverride] = useState<string | null>(null);
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (isLoaded && params.id) {
      const saved = getChartById(params.id as string);
      setChart(saved);
    }
  }, [isLoaded, params.id]);

  const handleExportPNG = () => {
    if (chartRef.current) {
      const url = chartRef.current.toBase64Image();
      const link = document.createElement("a");
      link.download = `${chart?.name || "chart"}.png`;
      link.href = url;
      link.click();
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
          <h1 className="text-2xl font-bold text-white mb-2">Sign in required</h1>
          <p className="text-zinc-400 mb-6">Sign in to view your saved charts.</p>
          <Link href="/sign-in">
            <Button variant="primary">Sign In</Button>
          </Link>
        </Card>
      </div>
    );
  }

  if (!chart) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Card hover={false} className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-white mb-2">Chart not found</h1>
          <p className="text-zinc-400 mb-6">This chart may have been deleted.</p>
          <Link href="/saved">
            <Button variant="primary">Back to Saved Charts</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const displaySpec = chartTypeOverride
    ? { ...chart.spec, chartType: chartTypeOverride as typeof chart.spec.chartType }
    : chart.spec;

  const chartData = transformData(chart.rawData, displaySpec);

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/saved" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Saved</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BarChart3 className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-semibold">LiveChart</span>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold mb-1">{chart.name}</h1>
            <p className="text-zinc-400 text-sm mb-6">
              From {chart.fileName} • Saved {new Date(chart.createdAt).toLocaleDateString()}
            </p>

            <Card hover={false} className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{displaySpec.title}</h3>
                <ChartTypeSwitcher
                  currentType={displaySpec.chartType}
                  spec={displaySpec}
                  onTypeChange={(type) => setChartTypeOverride(type)}
                />
              </div>
              <div className="h-80">
                <ChartRenderer spec={displaySpec} chartData={chartData} chartRef={chartRef} />
              </div>
            </Card>

            <TransformationSpec spec={displaySpec} />

            {displaySpec.insight && (
              <Card hover={false} className="bg-amber-950/20 border-amber-900/30">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-lg">💡</span>
                  <div>
                    <p className="text-sm text-amber-400 font-medium mb-1">Insight</p>
                    <p className="text-zinc-300">{displaySpec.insight}</p>
                  </div>
                </div>
              </Card>
            )}

            <div className="flex justify-center">
              <Button variant="secondary" size="sm" onClick={handleExportPNG}>
                <Download className="w-4 h-4 mr-2" />
                Export PNG
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
