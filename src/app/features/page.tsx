import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, BarChart3 } from "lucide-react";
import { FEATURES, getFeaturesByCategory } from "@/lib/features";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Features — LiveChart",
  description: "Explore all LiveChart features: AI-powered chart generation, data storytelling, privacy-first analysis, and more.",
};

export default function FeaturesIndexPage() {
  const productFeatures = getFeaturesByCategory("product");
  const coreFeatures = getFeaturesByCategory("features");
  const whyFeatures = getFeaturesByCategory("why");

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BarChart3 className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-semibold">LiveChart</span>
          </Link>
          <Link href="/app">
            <Button variant="primary" size="sm">
              Try Free
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Everything LiveChart <span className="gradient-text">Can Do</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              From instant chart generation to AI-powered insights — explore the features that make data analysis effortless.
            </p>
          </div>

          <FeatureSection title="Product" features={productFeatures} />
          <FeatureSection title="Core Features" features={coreFeatures} />
          <FeatureSection title="Why LiveChart" features={whyFeatures} />

          <div className="mt-16 text-center">
            <Link href="/app">
              <Button variant="primary" size="lg">
                Try LiveChart Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureSection({ title, features }: { title: string; features: typeof FEATURES }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <Link
            key={feature.slug}
            href={`/features/${feature.slug}`}
            className="group block p-6 bg-zinc-900 border border-zinc-800 hover:border-amber-400/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors mb-2">
              {feature.headline}
            </h3>
            <p className="text-zinc-400 text-sm mb-3">{feature.description}</p>
            <span className="text-amber-400 text-sm flex items-center gap-1">
              Learn more <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
