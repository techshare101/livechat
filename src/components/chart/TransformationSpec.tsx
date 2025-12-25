"use client";

import { ChartSpecOutput } from "@/hooks/useChartGeneration";
import { Card } from "@/components/ui/Card";
import { Code, Lightbulb } from "lucide-react";

interface TransformationSpecProps {
  spec: ChartSpecOutput;
}

export function TransformationSpec({ spec }: TransformationSpecProps) {
  const transformSteps: string[] = [];

  if (spec.groupBy && spec.groupBy.length > 0) {
    transformSteps.push(`Group by: ${spec.groupBy.join(", ")}`);
  }

  if (spec.aggregation && spec.aggregationColumn) {
    transformSteps.push(
      `Aggregate: ${spec.aggregation.toUpperCase()}(${spec.aggregationColumn})`
    );
  }

  if (spec.sortBy && spec.sortOrder !== "none") {
    transformSteps.push(`Sort: ${spec.sortBy} (${spec.sortOrder})`);
  }

  if (spec.limit && spec.limit > 0) {
    transformSteps.push(`Limit: ${spec.limit} rows`);
  }

  return (
    <Card hover={false} className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <Code className="w-5 h-5 text-amber-400" />
        <h3 className="font-semibold text-white">Transformation</h3>
      </div>

      {transformSteps.length > 0 ? (
        <div className="space-y-1 mb-4">
          {transformSteps.map((step, i) => (
            <div key={i} className="text-sm font-mono text-zinc-400">
              {step}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-500 mb-4">No transformations applied</p>
      )}

      <div className="flex items-start gap-2 pt-4 border-t border-zinc-800">
        <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p className="text-sm text-zinc-400">{spec.reasoning}</p>
      </div>
    </Card>
  );
}
