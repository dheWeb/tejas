import { HomeHero } from "@/features/home/HomeHero";
import { TrustBanner } from "@/components/shared/TrustBanner";
import { ImpactMetricsSection } from "@/features/home/ImpactMetricsSection";
import { CurrentOlympiadsSection } from "@/features/home/CurrentOlympiadsSection";
import { WhyTejasSection } from "@/features/home/WhyTejasSection";
import { HowTejasWorksSection } from "@/features/home/HowTejasWorksSection";
import { PrepareZoneSection } from "@/features/home/PrepareZoneSection";
import { EditionStorySection } from "@/features/home/EditionStorySection";
import { SuccessStoriesSection } from "@/features/home/SuccessStoriesSection";
import { HallOfFamePreviewSection } from "@/features/home/HallOfFamePreviewSection";
import { ForSchoolsSection } from "@/features/home/ForSchoolsSection";
import { FutureVisionSection } from "@/features/home/FutureVisionSection";
import { FutureModulesSection } from "@/features/home/FutureModulesSection";
import { NewsSection } from "@/features/home/NewsSection";
import { FAQSection } from "@/components/shared/FAQSection";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { faqItems } from "@/data/faq";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBanner />
      <ImpactMetricsSection />
      <SectionDivider variant="gradient" />
      <WhyTejasSection />
      <HowTejasWorksSection />
      <CurrentOlympiadsSection />
      <PrepareZoneSection />
      <EditionStorySection />
      <SuccessStoriesSection />
      <HallOfFamePreviewSection />
      <ForSchoolsSection />
      <FutureVisionSection />
      <FutureModulesSection />
      <NewsSection />
      <FAQSection items={faqItems.slice(0, 5)} />
    </>
  );
}
