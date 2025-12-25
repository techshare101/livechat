export interface Feature {
  slug: string;
  headline: string;
  subhead: string;
  description: string;
  category: "product" | "features" | "why";
}

export const FEATURES: Feature[] = [
  {
    slug: "question-first",
    headline: "Ask questions. Not dashboards.",
    subhead: "Get answers without building a reporting system.",
    description: "Skip the dashboard setup. Just ask what you want to know and get a chart instantly.",
    category: "product",
  },
  {
    slug: "chart-views",
    headline: "Same data. Different view. Instantly.",
    subhead: "Explore your data from multiple angles without redoing the work.",
    description: "Switch between bar, line, pie, and more with one click. No re-processing needed.",
    category: "product",
  },
  {
    slug: "explain-the-numbers",
    headline: "See exactly how every chart is calculated.",
    subhead: "No black boxes. No 'trust me.' Every chart comes with a clear explanation.",
    description: "Full transparency on grouping, aggregation, and transformations applied to your data.",
    category: "product",
  },
  {
    slug: "data-storytelling",
    headline: "Tell stories with data. Not just charts.",
    subhead: "Transform numbers into narratives that move stakeholders to action.",
    description: "AI-generated insights explain what your chart reveals and why it matters.",
    category: "product",
  },
  {
    slug: "60-seconds",
    headline: "Your first chart in under 60 seconds.",
    subhead: "Drop a file. Ask a question. See the answer. That's it.",
    description: "No setup, no configuration, no learning curve. Just results.",
    category: "features",
  },
  {
    slug: "large-files",
    headline: "Analyze files that break spreadsheets.",
    subhead: "If Google Sheets crashes, LiveChart keeps going.",
    description: "Handle large datasets that would freeze or crash traditional spreadsheet tools.",
    category: "features",
  },
  {
    slug: "no-code",
    headline: "No Python. No SQL. No problem.",
    subhead: "Analyze data with plain English — no technical skills required.",
    description: "Describe what you want in natural language. We handle the rest.",
    category: "features",
  },
  {
    slug: "export",
    headline: "Charts that are ready to share. Instantly.",
    subhead: "Built to drop straight into decks, docs, and reports.",
    description: "One-click PNG export. No formatting, no cleanup, no extra steps.",
    category: "features",
  },
  {
    slug: "privacy",
    headline: "Your data stays yours.",
    subhead: "Designed for privacy from day one.",
    description: "All processing happens in your browser. Your data never leaves your machine.",
    category: "why",
  },
];

export function getFeatureBySlug(slug: string): Feature | undefined {
  return FEATURES.find((f) => f.slug === slug);
}

export function getFeaturesByCategory(category: Feature["category"]): Feature[] {
  return FEATURES.filter((f) => f.category === category);
}
