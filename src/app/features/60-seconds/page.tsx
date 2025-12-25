import { Metadata } from "next";
import { FeaturePageLayout } from "@/components/features/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Your first chart in under 60 seconds. — LiveChart",
  description: "Drop a file. Ask a question. See the answer. No setup, no configuration, no learning curve. Just results.",
  openGraph: {
    title: "Your first chart in under 60 seconds.",
    description: "Drop a file. Ask a question. See the answer. That's it.",
  },
};

export default function SixtySecondsPage() {
  return (
    <FeaturePageLayout
      headline="Your first chart in under 60 seconds."
      subhead="Drop a file. Ask a question. See the answer. That's it."
      closingLine="Stop waiting. Start seeing."
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
        <p className="text-zinc-300 mb-4">
          Every chart takes <strong className="text-white">15+ minutes</strong> in traditional tools.
        </p>
        <p className="text-zinc-400 mb-4">The typical workflow:</p>
        <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-6">
          <li>Open Excel or Sheets</li>
          <li>Clean the data (10 min)</li>
          <li>Create pivot table (5 min)</li>
          <li>Format the chart (5 min)</li>
          <li>Screenshot and paste (2 min)</li>
          <li>Repeat when someone asks for a change</li>
        </ul>
        <p className="text-zinc-300">
          That's <strong className="text-white">22+ minutes</strong> for one chart.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">The LiveChart Way</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
              1
            </div>
            <div>
              <p className="text-white font-medium">Drop your file</p>
              <p className="text-zinc-500 text-sm">CSV, JSON, or logs — just drag and drop</p>
            </div>
            <p className="text-zinc-600 ml-auto">5 sec</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
              2
            </div>
            <div>
              <p className="text-white font-medium">Ask your question</p>
              <p className="text-zinc-500 text-sm">"Show monthly revenue by region"</p>
            </div>
            <p className="text-zinc-600 ml-auto">10 sec</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
              3
            </div>
            <div>
              <p className="text-white font-medium">See your chart</p>
              <p className="text-zinc-500 text-sm">Interactive, exportable, explainable</p>
            </div>
            <p className="text-zinc-600 ml-auto">45 sec</p>
          </div>
        </div>
        <div className="mt-8 p-4 bg-amber-400/10 border border-amber-400/30">
          <p className="text-amber-400 font-semibold text-center">Total: Under 60 seconds</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Time Saved Per Chart</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6 text-center">
            <p className="text-4xl font-bold text-red-400 mb-2">22 min</p>
            <p className="text-zinc-500">Traditional tools</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 text-center">
            <p className="text-4xl font-bold text-green-400 mb-2">60 sec</p>
            <p className="text-zinc-500">LiveChart</p>
          </div>
        </div>
        <p className="text-zinc-400 text-center mt-6">
          That's <strong className="text-white">21 minutes saved</strong> per chart.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">What You Can Do With 21 Extra Minutes</h2>
        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>Create 20 more charts</li>
          <li>Actually analyze the data</li>
          <li>Prepare for the meeting</li>
          <li>Go home on time</li>
        </ul>
      </section>
    </FeaturePageLayout>
  );
}
