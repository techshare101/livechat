"use client";

import { useStructuredCompletion } from "@hashbrownai/react";
import { s } from "@hashbrownai/core";
import { DatasetSchema } from "@/lib/schema/dataset";
import { CHART_SYSTEM_PROMPT } from "@/lib/prompts/chart-system";
import { schemaToPromptContext } from "@/lib/utils/parse-csv";

const ChartTypeEnum = s.enumeration("Chart type", [
  "bar",
  "line",
  "area",
  "pie",
  "doughnut",
  "scatter",
  "stacked-bar",
  "stacked-area",
  "bubble",
  "radar",
  "polarArea",
  "horizontal-bar",
]);

const AggregationEnum = s.enumeration("Aggregation function", [
  "sum",
  "count",
  "average",
  "min",
  "max",
  "median",
]);

const SortOrderEnum = s.enumeration("Sort order", ["asc", "desc", "none"]);

const FilterOperatorEnum = s.enumeration("Filter operator", [
  "equals",
  "not_equals",
  "contains",
  "greater_than",
  "less_than",
  "in",
  "not_in",
]);

const FilterSchema = s.object("Filter", {
  column: s.string("Column name to filter on"),
  operator: FilterOperatorEnum,
  value: s.string("Filter value"),
});

const TransformationSchema = s.object("Transformation", {
  groupBy: s.array("Columns to group by", s.string("Column name")),
  aggregation: AggregationEnum,
  aggregationColumn: s.string("Column to aggregate"),
  sortBy: s.string("Column to sort by"),
  sortOrder: SortOrderEnum,
  limit: s.integer("Limit number of results"),
});

const ChartSpecHashbrownSchema = s.object("ChartSpec", {
  chartType: ChartTypeEnum,
  title: s.string("Chart title"),
  xAxisColumn: s.string("Column for X axis"),
  xAxisLabel: s.string("X axis label"),
  yAxisColumn: s.string("Column for Y axis (the value being measured)"),
  yAxisLabel: s.string("Y axis label"),
  groupBy: s.array("Columns to group by", s.string("Column name")),
  aggregation: AggregationEnum,
  aggregationColumn: s.string("Column to aggregate"),
  sortBy: s.string("Column to sort by"),
  sortOrder: SortOrderEnum,
  limit: s.integer("Limit number of results (use 0 for no limit)"),
  reasoning: s.string("Brief explanation of why this chart type and transformation answers the user's question"),
  insight: s.string("A specific, actionable data insight based on the transformation - describe patterns, trends, outliers, or key findings. Example: 'Revenue grew 45% from Jan to Jun, with North America contributing 52% of total sales.'"),
});

export type ChartSpecOutput = s.Infer<typeof ChartSpecHashbrownSchema>;

interface UseChartGenerationProps {
  schema: DatasetSchema | null;
  userPrompt: string | null;
}

export function useChartGeneration({ schema, userPrompt }: UseChartGenerationProps) {
  const schemaContext = schema ? schemaToPromptContext(schema) : "";
  const fullPrompt = userPrompt ? `${schemaContext}\n\n---\n\nUser request: ${userPrompt}` : null;

  const { output, isLoading, isReceiving, error, reload } = useStructuredCompletion({
    model: "gpt-4o",
    system: CHART_SYSTEM_PROMPT,
    input: fullPrompt,
    schema: ChartSpecHashbrownSchema,
    debounceTime: 300,
  });

  return {
    chartSpec: output,
    isLoading: isLoading || isReceiving,
    error: error?.message || null,
    reload,
  };
}
