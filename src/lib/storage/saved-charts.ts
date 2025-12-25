import { ChartSpecOutput } from "@/hooks/useChartGeneration";

export interface SavedChart {
  id: string;
  userId: string;
  name: string;
  spec: ChartSpecOutput;
  rawData: Record<string, unknown>[];
  fileName: string;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = "livechart_saved_charts";

export function getSavedCharts(userId: string): SavedChart[] {
  if (typeof window === "undefined") return [];
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  try {
    const all: SavedChart[] = JSON.parse(stored);
    return all.filter((chart) => chart.userId === userId);
  } catch {
    return [];
  }
}

export function saveChart(
  userId: string,
  name: string,
  spec: ChartSpecOutput,
  rawData: Record<string, unknown>[],
  fileName: string
): SavedChart {
  const charts = getAllCharts();
  
  const newChart: SavedChart = {
    id: crypto.randomUUID(),
    userId,
    name,
    spec,
    rawData,
    fileName,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  charts.push(newChart);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(charts));
  
  return newChart;
}

export function updateChart(id: string, updates: Partial<SavedChart>): SavedChart | null {
  const charts = getAllCharts();
  const index = charts.findIndex((c) => c.id === id);
  
  if (index === -1) return null;
  
  charts[index] = {
    ...charts[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(charts));
  return charts[index];
}

export function deleteChart(id: string): boolean {
  const charts = getAllCharts();
  const filtered = charts.filter((c) => c.id !== id);
  
  if (filtered.length === charts.length) return false;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
}

export function getChartById(id: string): SavedChart | null {
  const charts = getAllCharts();
  return charts.find((c) => c.id === id) || null;
}

function getAllCharts(): SavedChart[] {
  if (typeof window === "undefined") return [];
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}
