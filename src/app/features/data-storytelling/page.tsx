import { Metadata } from "next";
import { FeaturePageLayout } from "@/components/features/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Tell stories with data. Not just charts. — LiveChart",
  description: "Transform numbers into narratives that move stakeholders to action. AI-generated insights explain what your chart reveals.",
  openGraph: {
    title: "Tell stories with data. Not just charts.",
    description: "Transform numbers into narratives that move stakeholders to action.",
  },
};

export default function DataStorytellingPage() {
  return (
    <FeaturePageLayout
      headline="Tell stories with data. Not just charts."
      subhead="Transform numbers into narratives that move stakeholders to action."
      closingLine="The best chart is the one that changes minds."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
        <p className="text-zinc-300 mb-4">
          Charts alone don't convince anyone.
        </p>
        <p className="text-zinc-400 mb-4">You've seen it happen:</p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-6">
          <li>Perfect bar chart. Zero buy-in.</li>
          <li>Accurate numbers. Glazed-over eyes.</li>
          <li>"Can you explain what this means?"</li>
        </ul>
        <p className="text-zinc-300">
          Data without context is just <strong className="text-white">noise.</strong>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
        <p className="text-zinc-300 mb-4">
          LiveChart doesn't just generate charts — it explains <strong className="text-white">why they matter.</strong>
        </p>
        <div className="bg-zinc-900 border border-zinc-800 p-6 mb-6">
          <p className="text-zinc-500 mb-2">You ask:</p>
          <p className="text-amber-400 font-mono">"Why did revenue drop in Q3?"</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-6 mb-6">
          <p className="text-zinc-500 mb-2">You get:</p>
          <ul className="text-zinc-300 space-y-1">
            <li>✓ A chart showing the drop</li>
            <li>✓ The transformation logic</li>
            <li>✓ AI-generated insight explaining the pattern</li>
          </ul>
        </div>
        <p className="text-zinc-400">
          Now you have a story, not just a chart.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Why Stories Win</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6">
            <p className="text-red-400 font-semibold mb-3">Without Story</p>
            <p className="text-zinc-400 text-sm">"Here's a chart of Q3 revenue by region."</p>
            <p className="text-zinc-600 text-xs mt-2">Result: "Okay... so what?"</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6">
            <p className="text-green-400 font-semibold mb-3">With Story</p>
            <p className="text-zinc-400 text-sm">"Q3 revenue dropped 23%. The West region drove the decline — down 40% after we lost the Acme contract."</p>
            <p className="text-zinc-600 text-xs mt-2">Result: "Let's fix the West region."</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Built For</h2>
        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>Product managers presenting to leadership</li>
          <li>Analysts defending recommendations</li>
          <li>Founders pitching investors</li>
          <li>Consultants delivering client insights</li>
        </ul>
      </section>
    </FeaturePageLayout>
  );
}
