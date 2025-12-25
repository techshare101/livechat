import { z } from "zod";

export const ColumnTypeSchema = z.enum(["string", "number", "date", "boolean"]);

export const ColumnSchema = z.object({
  name: z.string(),
  type: ColumnTypeSchema,
  samples: z.array(z.union([z.string(), z.number(), z.boolean(), z.null()])),
  nullable: z.boolean(),
  cardinality: z.enum(["low", "medium", "high"]),
});

export const DatasetSchemaSchema = z.object({
  columns: z.array(ColumnSchema),
  rowCount: z.number(),
  preview: z.array(z.record(z.string(), z.unknown())).describe("First 5 rows of data"),
});

export type ColumnType = z.infer<typeof ColumnTypeSchema>;
export type Column = z.infer<typeof ColumnSchema>;
export type DatasetSchema = z.infer<typeof DatasetSchemaSchema>;
