"use client";

import { Timeline } from "@/components/shared/Timeline";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";

const steps = [
  {
    year: 1,
    title: "Discover",
    description: "Register through school or individually. TEJAS identifies talent across every district of Bharat.",
  },
  {
    year: 2,
    title: "Prepare",
    description: "Access mock tests, practice sets, videos, and olympiad books — built for conceptual mastery.",
  },
  {
    year: 3,
    title: "Assess",
    description: "Fair, analytical assessments measuring reasoning, creativity, and real-world application.",
  },
  {
    year: 4,
    title: "Celebrate",
    description: "National recognition, scholarships, Hall of Fame, and pathways to research & innovation.",
  },
];

export function HowTejasWorksSection() {
  return (
    <section className="tejas-section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="How It Works"
            title="Your TEJAS Journey"
            subtitle="From discovery to national recognition — a complete talent development pathway."
          />
        </FadeIn>
        <Timeline
          items={steps.map((s) => ({
            year: s.year,
            title: s.title,
            description: s.description,
            status: s.year === 1 ? "current" : "upcoming",
          }))}
        />
      </div>
    </section>
  );
}
