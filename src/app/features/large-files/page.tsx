import { Metadata } from "next";
import { FeaturePageLayout } from "@/components/features/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Analyze files that break spreadsheets. — LiveChart",
  description: "If Google Sheets crashes, LiveChart keeps going. Handle large datasets that would freeze traditional spreadsheet tools.",
  openGraph: {
    title: "Analyze files that break spreadsheets.",
    description: "If Google Sheets crashes, LiveChart keeps going.",
  },
};

export default function LargeFilesPage() {
  return (
    <FeaturePageLayout
      headline="Analyze files that break spreadsheets."
      subhead="If Google Sheets crashes, LiveChart keeps going."
      closingLine="Your data shouldn't need to shrink to be useful."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
        <p className="text-zinc-300 mb-4">
          Real data doesn't fit neatly into spreadsheets.
        </p>
        <p className="text-zinc-400 mb-4">Users hit walls at:</p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-6">
          <li>100K+ rows</li>
          <li>Wide CSVs with dozens of columns</li>
          <li>Log files and system exports</li>
          <li>Raw database dumps</li>
        </ul>
        <p className="text-zinc-400">
          Excel slows down. Sheets crashes. Work stops.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
        <p className="text-zinc-300 mb-4">
          LiveChart is built for <strong className="text-white">real-world file sizes.</strong>
        </p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-6">
          <li>Upload large CSVs and JSON files</li>
          <li>Fast schema inference</li>
          <li>Instant chart generation</li>
          <li>No spreadsheet limits</li>
        </ul>
        <p className="text-zinc-400">
          Your data stays usable — even when it's messy or big.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Before & After</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-950/20 border border-red-900/30 p-6">
            <p className="text-red-400 font-semibold mb-3">Before</p>
            <ul className="text-zinc-400 space-y-2 text-sm">
              <li>→ Split file into chunks</li>
              <li>→ Wait for Sheets to load</li>
              <li>→ Crash. Retry. Crash again.</li>
              <li>→ Give up and sample data</li>
            </ul>
          </div>
          <div className="bg-green-950/20 border border-green-900/30 p-6">
            <p className="text-green-400 font-semibold mb-3">After</p>
            <ul className="text-zinc-400 space-y-2 text-sm">
              <li>→ Drop file into LiveChart</li>
              <li>→ Schema detected instantly</li>
              <li>→ Ask your question</li>
              <li>→ Get your chart</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Why This Matters</h2>
        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>Unblock analysis immediately</li>
          <li>Avoid splitting files</li>
          <li>No pre-cleaning just to "make it fit"</li>
          <li>Work with your actual data, not a sample</li>
        </ul>
      </section>
    </FeaturePageLayout>
  );
}
