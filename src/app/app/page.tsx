"use client";

import { useState, useCallback, useRef } from "react";
import { Chart as ChartJS } from "chart.js";
import { motion } from "framer-motion";
import { BarChart3, ArrowLeft, Download, RefreshCw, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useUser, SignInButton } from "@clerk/nextjs";

import { FileUpload } from "@/components/chart/FileUpload";
import { PromptInput } from "@/components/chart/PromptInput";
import { SchemaPreview } from "@/components/chart/SchemaPreview";
import { ChartRenderer } from "@/components/chart/ChartRenderer";
import { ChartTypeSwitcher } from "@/components/chart/ChartTypeSwitcher";
import { TransformationSpec } from "@/components/chart/TransformationSpec";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { parseCSV } from "@/lib/utils/parse-csv";
import { transformData } from "@/lib/utils/transform-data";
import { useChartGeneration } from "@/hooks/useChartGeneration";
import { DatasetSchema } from "@/lib/schema/dataset";

type AppState = "upload" | "prompt" | "chart";

export default function AppPage() {
  const { isSignedIn } = useUser();
  const [state, setState] = useState<AppState>("upload");
  const [fileName, setFileName] = useState<string>("");
  const [rawData, setRawData] = useState<Record<string, unknown>[]>([]);
  const [schema, setSchema] = useState<DatasetSchema | null>(null);
  const [userPrompt, setUserPrompt] = useState<string | null>(null);
  const [showRefinement, setShowRefinement] = useState(false);
  const [chartTypeOverride, setChartTypeOverride] = useState<string | null>(null);
  const chartRef = useRef<ChartJS | null>(null);

  const { chartSpec, isLoading, error, reload } = useChartGeneration({
    schema,
    userPrompt,
  });

  const handleExportPNG = useCallback(() => {
    if (chartRef.current) {
      const url = chartRef.current.toBase64Image();
      const link = document.createElement("a");
      link.download = `${chartSpec?.title || "chart"}.png`;
      link.href = url;
      link.click();
    }
  }, [chartSpec]);

  const handleRefinement = useCallback((refinement: string) => {
    if (userPrompt) {
      setUserPrompt(`${userPrompt}. Also: ${refinement}`);
      setShowRefinement(false);
    }
  }, [userPrompt]);

  const handleFileLoaded = useCallback((content: string, name: string) => {
    try {
      const { data, schema: parsedSchema } = parseCSV(content);
      setRawData(data);
      setSchema(parsedSchema);
      setFileName(name);
      setState("prompt");
    } catch (err) {
      console.error("Parse error:", err);
    }
  }, []);

  const handlePromptSubmit = useCallback((prompt: string) => {
    setUserPrompt(prompt);
    setState("chart");
  }, []);

  const handleReset = useCallback(() => {
    setState("upload");
    setFileName("");
    setRawData([]);
    setSchema(null);
    setUserPrompt(null);
  }, []);

  const handleNewPrompt = useCallback(() => {
    setUserPrompt(null);
    setChartTypeOverride(null);
    setState("prompt");
  }, []);

  const displaySpec = chartSpec && chartTypeOverride 
    ? { ...chartSpec, chartType: chartTypeOverride as typeof chartSpec.chartType }
    : chartSpec;

  const chartData = displaySpec ? transformData(rawData, displaySpec) : null;

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BarChart3 className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-semibold">LiveChart</span>
          </Link>

          {state !== "upload" && (
            <Button variant="ghost" size="sm" onClick={handleReset}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Start Over
            </Button>
          )}
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {state === "upload" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Turn Files Into Charts <span className="gradient-text">With Language</span>
                </h1>
                <p className="text-xl text-zinc-400">
                  Drop a CSV. Ask a question. Get a chart — instantly.
                </p>
              </div>

              <FileUpload onFileLoaded={handleFileLoaded} />

              <div className="text-center space-y-2">
                <p className="text-sm text-zinc-500">
                  Your data stays in your browser. Nothing is uploaded to our servers.
                </p>
                <p className="text-sm text-zinc-600">
                  No file?{" "}
                  <a
                    href="/sample-sales.csv"
                    download="sample-sales.csv"
                    className="text-amber-400 hover:text-amber-300 underline transition-colors"
                  >
                    Download sample sales data
                  </a>
                </p>
              </div>
            </motion.div>
          )}

          {state === "prompt" && schema && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">What do you want to see?</h1>
                <p className="text-zinc-400">
                  Describe the chart you need in plain English.
                </p>
              </div>

              <SchemaPreview schema={schema} fileName={fileName} />

              <PromptInput
                onSubmit={handlePromptSubmit}
                isLoading={false}
                placeholder='Try: "Show total sales by month as a bar chart"'
              />

              <div className="flex flex-wrap justify-center gap-2">
                {schema.columns.slice(0, 3).map((col) => (
                  <button
                    key={col.name}
                    onClick={() => handlePromptSubmit(`Show ${col.name} distribution`)}
                    className="px-3 py-1.5 text-sm bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    Show {col.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {state === "chart" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500 mb-1">Your request</p>
                  <p className="text-lg font-medium">&quot;{userPrompt}&quot;</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={handleNewPrompt}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    New Question
                  </Button>
                </div>
              </div>

              {isLoading && (
                <Card hover={false} className="h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-zinc-400">Generating your chart...</p>
                  </div>
                </Card>
              )}

              {error && (
                <Card hover={false} className="border-red-900/50 bg-red-950/10">
                  <p className="text-red-400">{error}</p>
                  <Button variant="secondary" size="sm" onClick={reload} className="mt-4">
                    Try Again
                  </Button>
                </Card>
              )}

              {displaySpec && chartData && !isLoading && (
                <>
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

                  {showRefinement ? (
                    <Card hover={false}>
                      <p className="text-sm text-zinc-500 mb-3">Refine your chart</p>
                      <PromptInput
                        onSubmit={handleRefinement}
                        isLoading={isLoading}
                        placeholder='Try: "Make it a line chart" or "Only show top 5"'
                      />
                      <button
                        onClick={() => setShowRefinement(false)}
                        className="text-sm text-zinc-500 hover:text-white mt-3 transition-colors"
                      >
                        Cancel
                      </button>
                    </Card>
                  ) : (
                    <div className="flex justify-center gap-3">
                      <Button variant="secondary" size="sm" onClick={() => setShowRefinement(true)}>
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Refine Chart
                      </Button>
                      {isSignedIn ? (
                        <Button variant="secondary" size="sm" onClick={handleExportPNG}>
                          <Download className="w-4 h-4 mr-2" />
                          Export PNG
                        </Button>
                      ) : (
                        <SignInButton mode="modal">
                          <Button variant="secondary" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Export PNG
                          </Button>
                        </SignInButton>
                      )}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
