import { Metadata } from "next";
import { FeaturePageLayout } from "@/components/features/FeaturePageLayout";

export const metadata: Metadata = {
  title: "See exactly how every chart is calculated. — LiveChart",
  description: "No black boxes. No 'trust me.' Every chart comes with a clear explanation of what happened to your data.",
  openGraph: {
    title: "See exactly how every chart is calculated.",
    description: "No black boxes. No 'trust me.' Every chart comes with a clear explanation.",
  },
};

export default function ExplainTheNumbersPage() {
  return (
    <FeaturePageLayout
      headline="See exactly how every chart is calculated."
      subhead="No black boxes. No 'trust me.' Every chart comes with a clear explanation of what happened to your data."
      closingLine="If you can explain it, you can defend it."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
        <p className="text-zinc-300 mb-4">
          Charts fail in meetings for one reason: <strong className="text-white">no one trusts the math.</strong>
        </p>
        <p className="text-zinc-400 mb-4">Someone always asks:</p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4">
          <li>"Where did this number come from?"</li>
          <li>"Did you filter anything out?"</li>
          <li>"Is this summed or averaged?"</li>
        </ul>
        <p className="text-zinc-400">
          Traditional BI tools hide the logic. Spreadsheets bury it in formulas no one wants to read.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
        <p className="text-zinc-300 mb-4">
          LiveChart shows the transformation in <strong className="text-white">plain English.</strong>
        </p>
        <p className="text-zinc-400 mb-4">For every chart, you can instantly see:</p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-6">
          <li>What columns were used</li>
          <li>How the data was grouped</li>
          <li>Which aggregations were applied</li>
          <li>How results were sorted or filtered</li>
        </ul>
        <p className="text-zinc-400">No SQL. No Excel formulas. Just clarity.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Example</h2>
        <div className="bg-zinc-900 border border-zinc-800 p-6 font-mono text-sm">
          <p className="text-zinc-500 mb-2">Transformation</p>
          <p className="text-amber-400">Group by: region</p>
          <p className="text-amber-400">Aggregate: SUM(revenue)</p>
          <p className="text-amber-400">Sort: revenue (descending)</p>
        </div>
        <p className="text-zinc-500 mt-4 text-sm">That's it. That's the math.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Why It Matters</h2>
        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>Defend your numbers in seconds</li>
          <li>Build stakeholder trust</li>
          <li>Catch mistakes before they matter</li>
          <li>Share charts without anxiety</li>
        </ul>
      </section>
    </FeaturePageLayout>
  );
}
