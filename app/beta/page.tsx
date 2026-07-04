import { createMetadata } from "@/config/seo";

export const metadata = createMetadata({
  title: "Beta Feedback",
  description: "Closed beta feedback for TEJAS — help shape Bharat's National Talent Development Ecosystem before public launch.",
  path: "/beta",
  noIndex: true,
});

export { BetaPage as default } from "./BetaPageClient";
