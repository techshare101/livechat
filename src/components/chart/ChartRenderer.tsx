"use client";

import { forwardRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line, Pie, Doughnut, Scatter, Bubble, Radar, PolarArea } from "react-chartjs-2";
import { ChartSpecOutput } from "@/hooks/useChartGeneration";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartRendererProps {
  spec: ChartSpecOutput;
  chartData: {
    labels: string[];
    datasets: { label: string; data: number[]; backgroundColor?: string }[];
  };
  chartRef?: React.RefObject<ChartJS | null>;
}

const CHART_COLORS = [
  "#fbbf24",
  "#f59e0b",
  "#d97706",
  "#b45309",
  "#92400e",
  "#78350f",
  "#fcd34d",
  "#fde68a",
];

export function ChartRenderer({ spec, chartData, chartRef }: ChartRendererProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#a1a1aa",
          font: { family: "system-ui" },
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: !!spec.xAxisLabel,
          text: spec.xAxisLabel || "",
          color: "#a1a1aa",
        },
        ticks: { color: "#71717a" },
        grid: { color: "#27272a" },
      },
      y: {
        title: {
          display: !!spec.yAxisLabel,
          text: spec.yAxisLabel || "",
          color: "#a1a1aa",
        },
        ticks: { color: "#71717a" },
        grid: { color: "#27272a" },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: "#a1a1aa",
          font: { family: "system-ui" },
        },
      },
      title: {
        display: false,
      },
    },
  };

  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets.map((ds, i) => ({
      ...ds,
      backgroundColor: ds.backgroundColor || CHART_COLORS[i % CHART_COLORS.length],
      borderColor: ds.backgroundColor || CHART_COLORS[i % CHART_COLORS.length],
      borderWidth: 1,
    })),
  };

  const areaData = {
    labels: chartData.labels,
    datasets: chartData.datasets.map((ds, i) => ({
      ...ds,
      fill: true,
      backgroundColor: `${CHART_COLORS[i % CHART_COLORS.length]}40`,
      borderColor: CHART_COLORS[i % CHART_COLORS.length],
      borderWidth: 2,
    })),
  };

  switch (spec.chartType) {
    case "bar":
    case "stacked-bar":
      return (
        <Bar
          ref={chartRef as React.RefObject<ChartJS<"bar">>}
          data={data}
          options={{
            ...options,
            scales: {
              ...options.scales,
              x: { ...options.scales.x, stacked: spec.chartType === "stacked-bar" },
              y: { ...options.scales.y, stacked: spec.chartType === "stacked-bar" },
            },
          }}
        />
      );
    case "line":
      return <Line ref={chartRef as React.RefObject<ChartJS<"line">>} data={data} options={options} />;
    case "area":
    case "stacked-area":
      return (
        <Line
          ref={chartRef as React.RefObject<ChartJS<"line">>}
          data={areaData}
          options={{
            ...options,
            scales: {
              ...options.scales,
              y: { ...options.scales.y, stacked: spec.chartType === "stacked-area" },
            },
          }}
        />
      );
    case "pie":
      return <Pie ref={chartRef as React.RefObject<ChartJS<"pie">>} data={data} options={pieOptions} />;
    case "doughnut":
      return <Doughnut ref={chartRef as React.RefObject<ChartJS<"doughnut">>} data={data} options={pieOptions} />;
    case "scatter":
      return <Scatter ref={chartRef as React.RefObject<ChartJS<"scatter">>} data={data} options={options} />;
    case "horizontal-bar":
      return (
        <Bar
          ref={chartRef as React.RefObject<ChartJS<"bar">>}
          data={data}
          options={{
            ...options,
            indexAxis: "y" as const,
          }}
        />
      );
    case "bubble":
      const bubbleData = {
        labels: chartData.labels,
        datasets: chartData.datasets.map((ds, i) => ({
          label: ds.label,
          data: ds.data.map((val, idx) => ({
            x: idx,
            y: val,
            r: Math.min(Math.max(val / 10, 5), 30),
          })),
          backgroundColor: `${CHART_COLORS[i % CHART_COLORS.length]}80`,
          borderColor: CHART_COLORS[i % CHART_COLORS.length],
        })),
      };
      return <Bubble ref={chartRef as React.RefObject<ChartJS<"bubble">>} data={bubbleData} options={options} />;
    case "radar":
      const radarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top" as const,
            labels: { color: "#a1a1aa", font: { family: "system-ui" } },
          },
          title: { display: false },
        },
        scales: {
          r: {
            angleLines: { color: "#27272a" },
            grid: { color: "#27272a" },
            pointLabels: { color: "#a1a1aa" },
            ticks: { color: "#71717a", backdropColor: "transparent" },
          },
        },
      };
      const radarData = {
        labels: chartData.labels,
        datasets: chartData.datasets.map((ds, i) => ({
          ...ds,
          backgroundColor: `${CHART_COLORS[i % CHART_COLORS.length]}40`,
          borderColor: CHART_COLORS[i % CHART_COLORS.length],
          borderWidth: 2,
          pointBackgroundColor: CHART_COLORS[i % CHART_COLORS.length],
        })),
      };
      return <Radar ref={chartRef as React.RefObject<ChartJS<"radar">>} data={radarData} options={radarOptions} />;
    case "polarArea":
      const polarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right" as const,
            labels: { color: "#a1a1aa", font: { family: "system-ui" } },
          },
          title: { display: false },
        },
        scales: {
          r: {
            grid: { color: "#27272a" },
            ticks: { color: "#71717a", backdropColor: "transparent" },
          },
        },
      };
      const polarData = {
        labels: chartData.labels,
        datasets: chartData.datasets.map((ds, i) => ({
          ...ds,
          backgroundColor: CHART_COLORS.slice(0, chartData.labels.length).map((c) => `${c}80`),
          borderColor: CHART_COLORS.slice(0, chartData.labels.length),
          borderWidth: 1,
        })),
      };
      return <PolarArea ref={chartRef as React.RefObject<ChartJS<"polarArea">>} data={polarData} options={polarOptions} />;
    default:
      return <Bar ref={chartRef as React.RefObject<ChartJS<"bar">>} data={data} options={options} />;
  }
}
