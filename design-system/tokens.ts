/**
 * TEJAS Design System — Design Tokens
 * Phase 1 Premium Product Experience
 */

export const colors = {
  primary: "#E85D04",
  primarySoft: "#FFF4ED",
  primaryDark: "#C2410C",
  secondary: "#1E3A5F",
  secondaryDark: "#0F172A",
  background: "#FAF9F6",
  success: "#059669",
  gold: "#D4A017",
  copper: "#B87333",
  stone: "#78716C",
  text: "#1C1917",
  textMuted: "#57534E",
  border: "#E7E5E4",
} as const;

export const typography = {
  fontSans: "var(--font-jakarta)",
  fontHindi: "var(--font-noto-devanagari)",
  hero: "clamp(2.75rem, 6vw, 5rem)",
  h1: "clamp(2rem, 4vw, 3.25rem)",
  h2: "clamp(1.75rem, 3vw, 2.5rem)",
  h3: "1.5rem",
  body: "1rem",
  small: "0.875rem",
} as const;

export const spacing = {
  section: "6rem",
  sectionLg: "8rem",
  container: "1280px",
} as const;

export const radii = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.25rem",
  "3xl": "1.5rem",
  full: "9999px",
} as const;

export const motion = {
  durationFast: 0.2,
  durationNormal: 0.45,
  durationSlow: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
} as const;

export const brand = {
  name: "TEJAS",
  nameHi: "तेजस",
  fullName: "Talent Evaluation & Joint Assessment Series",
  fullNameHi: "प्रतिभा मूल्यांकन एवं संयुक्त मूल्यांकन श्रृंखला",
  tagline: "Discover. Prepare. Shine.",
  taglineHi: "खोजें · तैयारी करें · चमकें",
  parentOrg: "Department of Holistic Education",
  parentOrgHi: "समग्र शिक्षा विभाग",
  parentOrgShort: "DHE",
  country: "Bharat",
  domain: "tejas.dhe.org.in",
  url: "https://tejas.dhe.org.in",
  movement:
    "Not Just an Examination, but a National Movement for Talent, Research, Innovation, and Nation Building",
} as const;
