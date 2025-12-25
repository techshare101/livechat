"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check, Sparkles, Users } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    price: "Free",
    description: "Try it instantly",
    features: [
      "Create your first chart",
      "No credit card required",
    ],
    cta: "Start Free",
    variant: "secondary" as const,
    icon: Sparkles,
  },
  {
    name: "Individual",
    price: "$19",
    period: "/month",
    description: "For solo work and deep thinking",
    features: [
      "Unlimited charts",
      "Unlimited refinements",
      "PNG export",
      "Local-only data processing",
    ],
    cta: "Get Started",
    variant: "primary" as const,
    popular: true,
    badge: "Best for analysts & founders",
  },
  {
    name: "Team",
    price: "$99",
    period: "/month",
    description: "For shared analysis and collaboration",
    features: [
      "Up to 5 users",
      "Shared chart library",
      "Team billing",
      "Priority support",
    ],
    cta: "Contact Sales",
    variant: "secondary" as const,
    icon: Users,
    badge: "Best for consultants & product teams",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Simple, Rational Pricing
            </h2>
            <p className="text-xl text-zinc-400">No games.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={0.1 + index * 0.1}>
              <Card
                hover={false}
                className={`h-full flex flex-col ${
                  plan.popular
                    ? "border-amber-500/50 bg-amber-950/10 relative"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-xs font-semibold px-3 py-1">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {plan.icon && <plan.icon className="w-5 h-5 text-amber-400" />}
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-zinc-500">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-zinc-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.badge && (
                  <p className="text-xs text-zinc-500 mb-4">👉 {plan.badge}</p>
                )}

                <Button variant={plan.variant} className="w-full">
                  {plan.cta}
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-zinc-500">
            Annual plans available — <span className="text-amber-400">save 20%</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
