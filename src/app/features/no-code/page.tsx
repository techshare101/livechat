import { Metadata } from "next";
import { FeaturePageLayout } from "@/components/features/FeaturePageLayout";

export const metadata: Metadata = {
  title: "No Python. No SQL. No problem. — LiveChart",
  description: "Analyze data with plain English — no technical skills required. Describe what you want in natural language.",
  openGraph: {
    title: "No Python. No SQL. No problem.",
    description: "Analyze data with plain English — no technical skills required.",
  },
};

export default function NoCodePage() {
  return (
    <FeaturePageLayout
      headline="No Python. No SQL. No problem."
      subhead="Analyze data with plain English — no technical skills required."
      closingLine="If you can describe it, you can chart it."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
        <p className="text-zinc-300 mb-4">
          Most data tools assume you're a developer.
        </p>
        <p className="text-zinc-400 mb-4">They expect you to know:</p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-6">
          <li>SQL queries and JOINs</li>
          <li>Python pandas and matplotlib</li>
          <li>Excel formulas and pivot tables</li>
          <li>BI tool configuration</li>
        </ul>
        <p className="text-zinc-300">
          But you just want to <strong className="text-white">see your data.</strong>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
        <p className="text-zinc-300 mb-4">
          LiveChart speaks <strong className="text-white">your language.</strong>
        </p>
        <div className="space-y-4">
          <div className="bg-zinc-900 border border-zinc-800 p-4">
            <p className="text-zinc-500 text-sm mb-1">Instead of:</p>
            <p className="text-red-400 font-mono text-sm">SELECT region, SUM(revenue) FROM sales GROUP BY region ORDER BY revenue DESC</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4">
            <p className="text-zinc-500 text-sm mb-1">You say:</p>
            <p className="text-green-400 font-mono text-sm">"Show total revenue by region, highest first"</p>
          </div>
        </div>
        <p className="text-zinc-400 mt-6">
          Same result. Zero learning curve.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What You Can Ask</h2>
        <div className="grid gap-3">
          <div className="bg-zinc-900 border border-zinc-800 p-3">
            <p className="text-amber-400 font-mono text-sm">"Compare sales this month vs last month"</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-3">
            <p className="text-amber-400 font-mono text-sm">"Show me the top 10 customers by revenue"</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-3">
            <p className="text-amber-400 font-mono text-sm">"What's the trend in signups over the last 6 months?"</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-3">
            <p className="text-amber-400 font-mono text-sm">"Break down expenses by category as a pie chart"</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Built For</h2>
        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>Marketers analyzing campaign performance</li>
          <li>Founders tracking business metrics</li>
          <li>Operations managers monitoring KPIs</li>
          <li>Anyone who has data but not a data team</li>
        </ul>
      </section>
    </FeaturePageLayout>
  );
}
