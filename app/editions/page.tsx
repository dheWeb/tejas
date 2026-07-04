import Link from "next/link";
import { createMetadata } from "@/config/seo";
import { EditionHero } from "@/components/shared/EditionHero";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { editions } from "@/data/editions";
import { getCurrentEdition } from "@/data/editions";

export const metadata = createMetadata({
  title: "Current Editions",
  description: "Explore current and upcoming TEJAS editions honouring Bharat's greatest minds — independent national talent assessment by DHE.",
  path: "/editions",
});

export default function EditionsPage() {
  const current = getCurrentEdition();

  return (
    <>
      <EditionHero
        year={current.year}
        name={current.name}
        subtitle={current.subtitle}
        theme={current.theme}
        bio={current.bio}
        accent={current.imageAccent}
        status={current.status}
        quote="Dream. Discover. Deliver."
      />
      <section className="tejas-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-8 rounded-2xl border border-tejas-saffron/30 bg-tejas-saffron/5 p-6">
              <p className="text-sm font-semibold text-tejas-saffron">Dr APJ Abdul Kalam Edition 2026 · Independent TEJAS Cycle</p>
              <p className="mt-2 text-tejas-muted">
                DHE English Olympiad 2.0, DHE Maths Olympiad, and DHE Tech Olympiad for Classes III–X.
                Conducted after Shiksha Mahakumbh — not under its aegis. Administered by Olympiad Cell, DHE.
              </p>
              <Link href={`/editions/${current.slug}`} className="mt-4 inline-block text-sm font-semibold text-tejas-saffron hover:underline">
                Explore {current.name} →
              </Link>
            </div>
          </FadeIn>
          <FadeIn>
            <SectionHeader
              title="Collectible Editions"
              subtitle="Each TEJAS edition honours a luminary of Bharatiya knowledge, science, and culture."
            />
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            {editions.filter((e) => e.slug !== current.slug).map((edition, i) => (
              <FadeIn key={edition.slug} delay={i * 0.08}>
                <Link href={`/editions/${edition.slug}`} className="block">
                  <article
                    className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-tejas-lg transition hover:-translate-y-1"
                    style={{ borderTopColor: edition.imageAccent, borderTopWidth: 4 }}
                  >
                    <div className="p-8">
                      <p className="text-4xl font-bold" style={{ color: edition.imageAccent }}>{edition.year}</p>
                      <h2 className="mt-2 text-xl font-bold text-tejas-ink">{edition.name}</h2>
                      <p className="text-sm font-medium text-tejas-saffron">{edition.subtitle}</p>
                      {edition.theme && (
                        <p className="mt-3 text-sm italic text-tejas-blue">&ldquo;{edition.theme}&rdquo;</p>
                      )}
                      <p className="mt-4 text-tejas-muted leading-relaxed">{edition.bio}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-tejas-saffron">View edition →</span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
