import { HomeHero } from "@/features/home/HomeHero";
import { WhatIsTejasSection } from "@/features/home/WhatIsTejasSection";
import { WhyTejasSection } from "@/features/home/WhyTejasSection";
import { CurrentOlympiadsSection } from "@/features/home/CurrentOlympiadsSection";
import { HowTejasWorksSection } from "@/features/home/HowTejasWorksSection";
import { PrepareZoneSection } from "@/features/home/PrepareZoneSection";
import { ResearchInnovationSection } from "@/features/home/ResearchInnovationSection";
import { HallOfFamePreviewSection } from "@/features/home/HallOfFamePreviewSection";
import { ForSchoolsSection } from "@/features/home/ForSchoolsSection";
import { FutureVisionSection } from "@/features/home/FutureVisionSection";
import { RegisterCTASection } from "@/features/home/RegisterCTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/data/faq";
import { organizationJsonLd, websiteJsonLd, faqJsonLd } from "@/lib/seo/json-ld";

/** Homepage narrative — each section flows into the next */
export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd(), faqJsonLd(faqItems.slice(0, 6))]} />
      <HomeHero />
      <WhatIsTejasSection />
      <WhyTejasSection />
      <CurrentOlympiadsSection />
      <HowTejasWorksSection />
      <PrepareZoneSection />
      <ResearchInnovationSection />
      <HallOfFamePreviewSection />
      <ForSchoolsSection />
      <FutureVisionSection />
      <FAQSection items={faqItems.slice(0, 6)} />
      <RegisterCTASection />
    </>
  );
}
