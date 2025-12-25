import { ChartSpecOutput } from "@/hooks/useChartGeneration";

interface Transformation {
  groupBy?: string[];
  aggregation?: string;
  aggregationColumn?: string;
  sortBy?: string;
  sortOrder?: string;
  limit?: number;
}

export function transformData(
  data: Record<string, unknown>[],
  spec: ChartSpecOutput
): { labels: string[]; datasets: { label: string; data: number[]; backgroundColor?: string }[] } {
  const transformation: Transformation = {
    groupBy: spec.groupBy,
    aggregation: spec.aggregation,
    aggregationColumn: spec.aggregationColumn,
    sortBy: spec.sortBy,
    sortOrder: spec.sortOrder,
    limit: spec.limit > 0 ? spec.limit : undefined,
  };

  let grouped = applyGrouping(data, transformation);
  let sorted = applySorting(grouped, transformation);
  let limited = applyLimit(sorted, transformation.limit);

  const labels = limited.map((row) => formatLabel(row[spec.xAxisColumn]));
  
  const datasets = [{
    label: spec.yAxisLabel || spec.yAxisColumn,
    data: limited.map((row) => Number(row[spec.yAxisColumn]) || 0),
  }];

  return { labels, datasets };
}


function applyGrouping(
  data: Record<string, unknown>[],
  transformation: Transformation
): Record<string, unknown>[] {
  if (!transformation.groupBy || transformation.groupBy.length === 0) {
    return data;
  }

  const groups = new Map<string, Record<string, unknown>[]>();

  data.forEach((row) => {
    const key = transformation.groupBy!.map((col) => String(row[col])).join("|||");
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(row);
  });

  const aggregated: Record<string, unknown>[] = [];

  groups.forEach((rows, key) => {
    const keyParts = key.split("|||");
    const result: Record<string, unknown> = {};

    transformation.groupBy!.forEach((col, i) => {
      result[col] = keyParts[i];
    });

    if (transformation.aggregationColumn && transformation.aggregation) {
      const values = rows.map((r) => Number(r[transformation.aggregationColumn!]) || 0);
      result[transformation.aggregationColumn] = aggregate(values, transformation.aggregation);
    }

    aggregated.push(result);
  });

  return aggregated;
}

function aggregate(values: number[], method: string): number {
  switch (method) {
    case "sum":
      return values.reduce((a, b) => a + b, 0);
    case "count":
      return values.length;
    case "average":
      return values.reduce((a, b) => a + b, 0) / values.length;
    case "min":
      return Math.min(...values);
    case "max":
      return Math.max(...values);
    case "median":
      const sorted = [...values].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    default:
      return values.reduce((a, b) => a + b, 0);
  }
}

function applySorting(
  data: Record<string, unknown>[],
  transformation: Transformation
): Record<string, unknown>[] {
  if (!transformation.sortBy || transformation.sortOrder === "none") {
    return data;
  }

  return [...data].sort((a, b) => {
    const aVal = a[transformation.sortBy!];
    const bVal = b[transformation.sortBy!];

    if (typeof aVal === "number" && typeof bVal === "number") {
      return transformation.sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    }

    const comparison = String(aVal).localeCompare(String(bVal));
    return transformation.sortOrder === "asc" ? comparison : -comparison;
  });
}

function applyLimit(data: Record<string, unknown>[], limit?: number): Record<string, unknown>[] {
  if (!limit) return data;
  return data.slice(0, limit);
}

function formatLabel(value: unknown): string {
  if (value === null || value === undefined) return "";
  
  const str = String(value);
  
  // Check if it's an ISO date string
  if (/^\d{4}-\d{2}-\d{2}T/.test(str)) {
    const date = new Date(str);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }
  
  // Check if it's a date string like 2024-01-15
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
    const date = new Date(str);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }
  
  return str;
}
