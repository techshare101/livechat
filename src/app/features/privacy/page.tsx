import { Metadata } from "next";
import { FeaturePageLayout } from "@/components/features/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Your data stays yours. — LiveChart",
  description: "Designed for privacy from day one. All processing happens in your browser. Your data never leaves your machine.",
  openGraph: {
    title: "Your data stays yours.",
    description: "Designed for privacy from day one.",
  },
};

export default function PrivacyPage() {
  return (
    <FeaturePageLayout
      headline="Your data stays yours."
      subhead="Designed for privacy from day one."
      closingLine="Insight without compromise."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
        <p className="text-zinc-300 mb-4">
          Most analytics tools want your data on their servers.
        </p>
        <p className="text-zinc-400 mb-4">That means:</p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>Uploading sensitive information</li>
          <li>Trusting third-party storage</li>
          <li>Compliance headaches</li>
          <li>Data you can't fully control</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
        <p className="text-zinc-300 mb-4">
          LiveChart processes data <strong className="text-white">directly in your browser.</strong>
        </p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-6">
          <li>No dashboards filled with sensitive uploads</li>
          <li>No silent storage</li>
          <li>Your files stay on your machine</li>
        </ul>
        <p className="text-zinc-400">
          Only the schema and your question reach the AI — not your raw data.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Built For</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Consultants</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Analysts</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Founders</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 text-center">
            <p className="text-amber-400">Anyone with real data</p>
          </div>
        </div>
      </section>
    </FeaturePageLayout>
  );
}
