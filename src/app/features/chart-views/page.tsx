import { Metadata } from "next";
import { FeaturePageLayout } from "@/components/features/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Same data. Different view. Instantly. — LiveChart",
  description: "Explore your data from multiple angles without redoing the work. Switch between chart types with one click.",
  openGraph: {
    title: "Same data. Different view. Instantly.",
    description: "Explore your data from multiple angles without redoing the work.",
  },
};

export default function ChartViewsPage() {
  return (
    <FeaturePageLayout
      headline="Same data. Different view. Instantly."
      subhead="Explore your data from multiple angles without redoing the work."
      closingLine="Explore faster. Decide sooner."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
        <p className="text-zinc-300 mb-4">
          Every follow-up question creates friction:
        </p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4">
          <li>"Can we see this as a pie chart?"</li>
          <li>"What about a horizontal version?"</li>
          <li>"Does this look better stacked?"</li>
        </ul>
        <p className="text-zinc-400 mb-4">In most tools, that means:</p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>Rebuilding the chart</li>
          <li>Reformatting everything</li>
          <li>Losing momentum</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
        <p className="text-zinc-300 mb-4">
          LiveChart lets you switch chart types <strong className="text-white">without touching the data logic.</strong>
        </p>
        <p className="text-zinc-400 mb-4">One click:</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Bar → Pie</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Bar → Horizontal</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Bar → Donut</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Bar → Radar</p>
          </div>
        </div>
        <p className="text-zinc-400">Same transformation. New perspective.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Why This Is Different</h2>
        <p className="text-zinc-400 mb-4">
          Other tools treat each chart as a new build.
        </p>
        <p className="text-zinc-300">
          LiveChart treats charts as <strong className="text-white">views, not work.</strong>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">When This Shines</h2>
        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>Exploratory analysis</li>
          <li>Stakeholder reviews</li>
          <li>"What if we looked at it this way?" moments</li>
        </ul>
      </section>
    </FeaturePageLayout>
  );
}
