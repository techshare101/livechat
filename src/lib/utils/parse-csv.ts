import { DatasetSchema, Column, ColumnType } from "@/lib/schema/dataset";

export function parseCSV(content: string): { data: Record<string, unknown>[]; schema: DatasetSchema } {
  const lines = content.trim().split("\n");
  if (lines.length < 2) {
    throw new Error("CSV must have at least a header row and one data row");
  }

  const headers = parseCSVLine(lines[0]);
  const data: Record<string, unknown>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row: Record<string, unknown> = {};
    headers.forEach((header, index) => {
      row[header] = parseValue(values[index] || "");
    });
    data.push(row);
  }

  const columns = inferColumns(headers, data);
  const schema: DatasetSchema = {
    columns,
    rowCount: data.length,
    preview: data.slice(0, 5),
  };

  return { data, schema };
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

function parseValue(value: string): unknown {
  if (value === "" || value.toLowerCase() === "null" || value.toLowerCase() === "na") {
    return null;
  }
  if (value.toLowerCase() === "true") return true;
  if (value.toLowerCase() === "false") return false;
  
  const num = Number(value.replace(/,/g, ""));
  if (!isNaN(num) && value.trim() !== "") {
    return num;
  }
  
  const date = Date.parse(value);
  if (!isNaN(date) && /\d{4}[-/]\d{1,2}[-/]\d{1,2}/.test(value)) {
    return new Date(date).toISOString();
  }
  
  return value;
}

function inferColumns(headers: string[], data: Record<string, unknown>[]): Column[] {
  return headers.map((name) => {
    const values = data.map((row) => row[name]);
    const nonNullValues = values.filter((v) => v !== null);
    const uniqueValues = new Set(nonNullValues.map(String));

    const type = inferType(nonNullValues);
    const samples = nonNullValues.slice(0, 3) as (string | number | boolean | null)[];
    const nullable = values.some((v) => v === null);
    const cardinality = uniqueValues.size < 10 ? "low" : uniqueValues.size < 100 ? "medium" : "high";

    return { name, type, samples, nullable, cardinality };
  });
}

function inferType(values: unknown[]): ColumnType {
  if (values.length === 0) return "string";

  const types = values.map((v) => {
    if (typeof v === "number") return "number";
    if (typeof v === "boolean") return "boolean";
    if (typeof v === "string" && /^\d{4}-\d{2}-\d{2}/.test(v)) return "date";
    return "string";
  });

  const typeCounts = types.reduce((acc, t) => {
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0][0] as ColumnType;
}

export function schemaToPromptContext(schema: DatasetSchema): string {
  const columnDescriptions = schema.columns
    .map((col) => `- ${col.name} (${col.type}, cardinality: ${col.cardinality})${col.nullable ? " [nullable]" : ""}`)
    .join("\n");

  return `Dataset Schema:
${columnDescriptions}

Row count: ${schema.rowCount}

Sample data:
${JSON.stringify(schema.preview.slice(0, 3), null, 2)}`;
}
