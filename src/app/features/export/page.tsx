import { Metadata } from "next";
import { FeaturePageLayout } from "@/components/features/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Charts that are ready to share. Instantly. — LiveChart",
  description: "Built to drop straight into decks, docs, and reports. One-click PNG export with no formatting needed.",
  openGraph: {
    title: "Charts that are ready to share. Instantly.",
    description: "Built to drop straight into decks, docs, and reports.",
  },
};

export default function ExportPage() {
  return (
    <FeaturePageLayout
      headline="Charts that are ready to share. Instantly."
      subhead="Built to drop straight into decks, docs, and reports."
      closingLine="From question to shareable in seconds."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
        <p className="text-zinc-300 mb-4">
          Most charts look fine inside tools — and <strong className="text-white">terrible everywhere else.</strong>
        </p>
        <p className="text-zinc-400 mb-4">Users resort to:</p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>Screenshots</li>
          <li>Cropping</li>
          <li>Reformatting</li>
          <li>Rebuilding visuals elsewhere</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
        <p className="text-zinc-300 mb-4">
          LiveChart exports presentation-ready charts with <strong className="text-white">one click.</strong>
        </p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-6">
          <li>High-quality PNGs</li>
          <li>Clean styling</li>
          <li>Consistent formatting</li>
        </ul>
        <p className="text-zinc-300">
          What you see is what you share.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Perfect For</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Slides</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Notion docs</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Client reports</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Internal reviews</p>
          </div>
        </div>
      </section>
    </FeaturePageLayout>
  );
}
