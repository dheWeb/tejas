import { createMetadata } from "@/config/seo";
import { PageHero } from "@/components/shared/PageHero";
import { HallOfFameCard } from "@/components/shared/HallOfFameCard";
import { CertificatePreview } from "@/components/shared/CertificatePreview";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ComingSoonCard } from "@/components/shared/ComingSoonCard";
import { hallOfFameCategories, getHallOfFameByCategory } from "@/data/hall-of-fame";

export const metadata = createMetadata({
  title: "Hall of Fame",
  description: "Bharat's National Talent Gallery — national toppers, school excellence, and DHE English Olympiad 2025 winners.",
  path: "/hall-of-fame",
});

export default function HallOfFamePage() {
  const national = getHallOfFameByCategory("national");
  const schools = getHallOfFameByCategory("school");
  const emptyCategories = hallOfFameCategories.filter(
    (c) => !["national", "school"].includes(c.id) && getHallOfFameByCategory(c.id).length === 0
  );

  return (
    <>
      <PageHero
        eyebrow="Recognition"
        title="Hall of Fame"
        subtitle="Bharat's National Talent Gallery — celebrating meritorious students, schools, and future innovators."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <CertificatePreview studentName="Kanav Goyal" rank="Overall 1st — Level D, English Olympiad 2025" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <SectionHeader
              className="mt-20"
              eyebrow="1st DHE English Olympiad"
              title="National Toppers — All Levels"
              subtitle="Overall winners from 10,040 students across 25 schools (SMK 5.0, October 2025)"
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {national.map((entry, i) => (
              <FadeIn key={entry.id} delay={i * 0.03}>
                <HallOfFameCard entry={{
                  id: entry.id,
                  name: entry.name,
                  rank: entry.rank,
                  category: entry.category as "national",
                  olympiad: entry.olympiad.en,
                  school: entry.school,
                  year: entry.year,
                  achievement: entry.achievement.en,
                }} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <SectionHeader className="mt-20" eyebrow="Schools" title="Schools of Excellence" />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            {schools.map((entry, i) => (
              <FadeIn key={entry.id} delay={i * 0.05}>
                <HallOfFameCard entry={{
                  id: entry.id,
                  name: entry.name,
                  rank: entry.rank,
                  category: "school",
                  olympiad: entry.olympiad.en,
                  state: entry.state,
                  school: entry.school,
                  year: entry.year,
                  achievement: entry.achievement.en,
                }} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <SectionHeader
              className="mt-20"
              eyebrow="Expanding"
              title="More Categories Coming"
              subtitle="Teacher Excellence, Innovation Awards, Young Scientist, Young Innovator, Project Showcase — with current TEJAS Olympiads"
            />
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {emptyCategories.map((cat) => (
              <ComingSoonCard key={cat.id} title={cat.label.en} description="Results and recognition from current TEJAS Olympiads will populate this gallery." />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
