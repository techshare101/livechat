"use client";

import { DatasetSchema } from "@/lib/schema/dataset";
import { Card } from "@/components/ui/Card";
import { Table, Hash, Calendar, ToggleLeft, FileText } from "lucide-react";

interface SchemaPreviewProps {
  schema: DatasetSchema;
  fileName: string;
}

const typeIcons = {
  string: FileText,
  number: Hash,
  date: Calendar,
  boolean: ToggleLeft,
};

export function SchemaPreview({ schema, fileName }: SchemaPreviewProps) {
  return (
    <Card hover={false} className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <Table className="w-5 h-5 text-amber-400" />
        <div>
          <h3 className="font-semibold text-white">{fileName}</h3>
          <p className="text-sm text-zinc-500">{schema.rowCount.toLocaleString()} rows</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Columns</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {schema.columns.map((col) => {
            const Icon = typeIcons[col.type];
            return (
              <div
                key={col.name}
                className="flex items-center gap-2 px-3 py-2 bg-zinc-800/50 border border-zinc-800"
              >
                <Icon className="w-4 h-4 text-zinc-500 shrink-0" />
                <span className="text-sm text-zinc-300 truncate">{col.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
