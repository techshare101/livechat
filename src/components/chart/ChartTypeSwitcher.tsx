"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, BarChart3, PieChart, TrendingUp, Circle } from "lucide-react";
import { ChartSpecOutput } from "@/hooks/useChartGeneration";

type ChartType = ChartSpecOutput["chartType"];

interface ChartTypeOption {
  type: ChartType;
  label: string;
  icon: React.ReactNode;
}

const ALL_CHART_TYPES: ChartTypeOption[] = [
  { type: "bar", label: "Bar Chart", icon: <BarChart3 className="w-4 h-4" /> },
  { type: "horizontal-bar", label: "Horizontal Bar", icon: <BarChart3 className="w-4 h-4 rotate-90" /> },
  { type: "line", label: "Line Chart", icon: <TrendingUp className="w-4 h-4" /> },
  { type: "area", label: "Area Chart", icon: <TrendingUp className="w-4 h-4" /> },
  { type: "pie", label: "Pie Chart", icon: <PieChart className="w-4 h-4" /> },
  { type: "doughnut", label: "Donut Chart", icon: <Circle className="w-4 h-4" /> },
  { type: "radar", label: "Radar Chart", icon: <Circle className="w-4 h-4" /> },
  { type: "polarArea", label: "Polar Area", icon: <PieChart className="w-4 h-4" /> },
  { type: "scatter", label: "Scatter Plot", icon: <Circle className="w-4 h-4" /> },
  { type: "bubble", label: "Bubble Chart", icon: <Circle className="w-4 h-4" /> },
];

interface ChartTypeSwitcherProps {
  currentType: ChartType;
  spec: ChartSpecOutput;
  onTypeChange: (type: ChartType) => void;
}

function getCompatibleTypes(spec: ChartSpecOutput): ChartType[] {
  const hasGroupBy = spec.groupBy && spec.groupBy.length > 0;
  const hasAggregation = !!spec.aggregation;
  
  if (hasGroupBy && hasAggregation) {
    return ["bar", "horizontal-bar", "pie", "doughnut", "radar", "polarArea"];
  }
  
  if (hasAggregation) {
    return ["bar", "horizontal-bar", "line", "area", "pie", "doughnut", "radar", "polarArea"];
  }
  
  return ["bar", "horizontal-bar", "line", "area", "scatter", "bubble"];
}

export function ChartTypeSwitcher({ currentType, spec, onTypeChange }: ChartTypeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const compatibleTypes = getCompatibleTypes(spec);
  const availableOptions = ALL_CHART_TYPES.filter((opt) => compatibleTypes.includes(opt.type));
  const currentOption = ALL_CHART_TYPES.find((opt) => opt.type === currentType) || availableOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (type: ChartType) => {
    onTypeChange(type);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
      >
        {currentOption.icon}
        <span>{currentOption.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-44 bg-zinc-900 border border-zinc-800 shadow-xl z-50">
          <div className="py-1">
            {availableOptions.map((option) => (
              <button
                key={option.type}
                onClick={() => handleSelect(option.type)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                  option.type === currentType
                    ? "bg-amber-400/10 text-amber-400"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {option.icon}
                <span>{option.label}</span>
              </button>
            ))}
          </div>
          <div className="px-3 py-2 border-t border-zinc-800">
            <p className="text-xs text-zinc-600">Same data. Different view.</p>
          </div>
        </div>
      )}
    </div>
  );
}
