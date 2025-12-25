import { Metadata } from "next";
import { getFeatureBySlug } from "./features";

export function generateFeatureMetadata(slug: string): Metadata {
  const feature = getFeatureBySlug(slug);
  
  if (!feature) {
    return {
      title: "Feature — LiveChart",
      description: "Explore LiveChart features for AI-powered data visualization.",
    };
  }

  return {
    title: `${feature.headline} — LiveChart`,
    description: feature.subhead,
    openGraph: {
      title: feature.headline,
      description: feature.subhead,
      type: "website",
      siteName: "LiveChart",
    },
    twitter: {
      card: "summary_large_image",
      title: feature.headline,
      description: feature.subhead,
    },
  };
}
