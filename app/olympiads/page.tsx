import { createMetadata } from "@/config/seo";
import { PageHero } from "@/components/shared/PageHero";
import { OlympiadCard } from "@/components/shared/OlympiadCard";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { olympiads, getActiveOlympiads } from "@/data/olympiads";

export const metadata = createMetadata({
  title: "Olympiads",
  description: "DHE Olympiads under Shiksha Mahakumbh 6.0 — English, Maths, Technology for Classes III–X, plus future TEJAS streams.",
  path: "/olympiads",
});

export default function OlympiadsPage() {
  const active = getActiveOlympiads();
  const comingSoon = olympiads.filter((o) => o.status === "coming-soon");

  return (
    <>
      <PageHero
        eyebrow="Olympiads"
        title="National Olympiad Series"
        subtitle="Three active streams for SMK 6.0 — English, Maths, Technology. Ten-subject TEJAS ecosystem expanding nationwide."
        primaryCta={{ label: "Free Mock Test", href: "/prepare/mock-tests" }}
        secondaryCta={{ label: "Prepare Hub", href: "/prepare" }}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="SMK 6.0"
              title="Active Olympiad Streams"
              subtitle="Classes III–X · Registration dates to be announced · Felicitation at NIT Hamirpur, 9–11 Oct 2026"
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {active.map((o, i) => (
              <FadeIn key={o.slug} delay={i * 0.04}>
                <OlympiadCard {...o} status="active" registrationOpen={false} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <SectionHeader
              className="mt-20"
              eyebrow="Roadmap"
              title="Expanding Ecosystem"
              subtitle="Science, Hindi, Sanskrit, GK, AI, Coding, Innovation — add data, not redesign."
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {comingSoon.map((o, i) => (
              <FadeIn key={o.slug} delay={i * 0.04}>
                <OlympiadCard {...o} status="coming-soon" registrationOpen={false} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
