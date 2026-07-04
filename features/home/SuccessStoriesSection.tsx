import { SuccessStoryCard } from "@/components/shared/SuccessStoryCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";

const stories = [
  {
    name: "Aarav Sharma",
    achievement: "National Gold — Mathematics",
    school: "DPS RK Puram",
    state: "Delhi",
    quote: "TEJAS helped me think beyond textbooks.",
  },
  {
    name: "Priya Nair",
    achievement: "National Gold — Science",
    school: "Bhavan's Vidya Mandir",
    state: "Kerala",
    quote: "The mock tests built real exam confidence.",
  },
  {
    name: "Rohan Mehta",
    achievement: "National Silver — Technology",
    school: "Ahmedabad Intl. School",
    state: "Gujarat",
  },
];

export function SuccessStoriesSection() {
  return (
    <section className="tejas-section bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="Stories"
            title="Student Success Stories"
            subtitle="Real journeys from discovery to national recognition."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.08}>
              <SuccessStoryCard {...s} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
