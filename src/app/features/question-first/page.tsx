import { Metadata } from "next";
import { FeaturePageLayout } from "@/components/features/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Ask questions. Not dashboards. — LiveChart",
  description: "Get answers without building a reporting system. Skip the dashboard setup and get instant charts from natural language questions.",
  openGraph: {
    title: "Ask questions. Not dashboards.",
    description: "Get answers without building a reporting system.",
  },
};

export default function QuestionFirstPage() {
  return (
    <FeaturePageLayout
      headline="Ask questions. Not dashboards."
      subhead="Get answers without building a reporting system."
      closingLine="If you can ask it, you can see it."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
        <p className="text-zinc-300 mb-4">
          Dashboards promise insight but deliver maintenance.
        </p>
        <p className="text-zinc-400 mb-4">They require:</p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-6">
          <li>Planning</li>
          <li>Design</li>
          <li>Constant updates</li>
          <li>Endless tweaks</li>
        </ul>
        <p className="text-zinc-300">
          Most users just want <strong className="text-white">one answer right now.</strong>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
        <p className="text-zinc-300 mb-6">
          LiveChart starts with a question.
        </p>
        <div className="bg-zinc-900 border border-zinc-800 p-6 mb-6">
          <p className="text-zinc-500 mb-2">You type:</p>
          <p className="text-amber-400 font-mono">"Show monthly revenue by region."</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-6 mb-6">
          <p className="text-zinc-500 mb-2">You get:</p>
          <ul className="text-zinc-300 space-y-1">
            <li>✓ A chart</li>
            <li>✓ The logic</li>
            <li>✓ The answer</li>
          </ul>
        </div>
        <p className="text-zinc-400">
          No dashboard. No setup. No ceremony.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Why This Is Powerful</h2>
        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>Faster time to insight</li>
          <li>Encourages curiosity</li>
          <li>Removes over-engineering</li>
        </ul>
        <p className="text-zinc-300 mt-6">
          This is analysis as a <strong className="text-white">conversation</strong> — not a project.
        </p>
      </section>
    </FeaturePageLayout>
  );
}
