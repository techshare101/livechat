import { z } from "zod";

export const ChartTypeSchema = z.enum([
  "bar",
  "line",
  "area",
  "pie",
  "doughnut",
  "scatter",
  "stacked-bar",
  "stacked-area",
]);

export const AggregationSchema = z.enum([
  "sum",
  "count",
  "average",
  "min",
  "max",
  "median",
]);

export const SortOrderSchema = z.enum(["asc", "desc", "none"]);

export const FilterOperatorSchema = z.enum([
  "equals",
  "not_equals",
  "contains",
  "greater_than",
  "less_than",
  "in",
  "not_in",
]);

export const FilterSchema = z.object({
  column: z.string().describe("Column name to filter on"),
  operator: FilterOperatorSchema,
  value: z.union([z.string(), z.number(), z.array(z.string())]),
});

export const TransformationSchema = z.object({
  groupBy: z.array(z.string()).optional().describe("Columns to group by"),
  aggregation: AggregationSchema.optional().describe("Aggregation function to apply"),
  aggregationColumn: z.string().optional().describe("Column to aggregate"),
  filters: z.array(FilterSchema).optional().describe("Filters to apply before charting"),
  sortBy: z.string().optional().describe("Column to sort by"),
  sortOrder: SortOrderSchema.optional().default("none"),
  limit: z.number().optional().describe("Limit number of results"),
});

export const ChartSpecSchema = z.object({
  chartType: ChartTypeSchema.describe("Type of chart to render"),
  title: z.string().describe("Chart title"),
  xAxis: z.object({
    column: z.string().describe("Column for X axis"),
    label: z.string().optional().describe("X axis label"),
  }),
  yAxis: z.object({
    column: z.string().describe("Column for Y axis (the value being measured)"),
    label: z.string().optional().describe("Y axis label"),
  }),
  series: z.array(z.object({
    name: z.string().describe("Series name for legend"),
    column: z.string().describe("Column that defines this series"),
    color: z.string().optional().describe("Hex color for this series"),
  })).optional().describe("Multiple series for stacked/grouped charts"),
  transformation: TransformationSchema.describe("Data transformation to apply"),
  reasoning: z.string().describe("Brief explanation of why this chart answers the user's question"),
});

export type ChartSpec = z.infer<typeof ChartSpecSchema>;
export type ChartType = z.infer<typeof ChartTypeSchema>;
export type Transformation = z.infer<typeof TransformationSchema>;
export type Filter = z.infer<typeof FilterSchema>;
