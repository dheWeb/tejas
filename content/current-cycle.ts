import type { LocalizedString } from "./types";

/** Shiksha Mahakumbh 6.0 — current DHE Olympiad cycle (RASE Academic Council) */
export const currentCycle = {
  smkEdition: 6,
  smkName: {
    en: "Shiksha Mahakumbh 6.0 — Meeting of the Minds",
    hi: "शिक्षा महाकुंभ 6.0 — मीटिंग ऑफ द माइंड्स",
  } satisfies LocalizedString,
  summitDates: {
    en: "9–11 October 2026",
    hi: "9–11 अक्टूबर 2026",
  } satisfies LocalizedString,
  summitVenue: {
    en: "NIT Hamirpur, Himachal Pradesh",
    hi: "एनआईटी हमीरपुर, हिमाचल प्रदेश",
  } satisfies LocalizedString,
  activeStreams: ["english", "mathematics", "technology"] as const,
  grades: {
    en: "Classes III–X",
    hi: "कक्षा III–X",
  } satisfies LocalizedString,
  registrationStatus: {
    en: "Registration and exam dates to be announced",
    hi: "पंजीकरण और परीक्षा तिथियाँ घोषित की जाएँगी",
  } satisfies LocalizedString,
  felicitation: {
    en: "Top achievers will be honoured at Shiksha Mahakumbh 6.0 (9–11 Oct 2026, NIT Hamirpur)",
    hi: "शीर्ष achievers को शिक्षा महाकुंभ 6.0 (9–11 अक्टूबर 2026, एनआईटी हमीरपुर) में सम्मानित किया जाएगा",
  } satisfies LocalizedString,
  administeredBy: {
    en: "Olympiad Cell, Department of Holistic Education (DHE)",
    hi: "ओलंपियाड सेल, समग्र शिक्षा विभाग (DHE)",
  } satisfies LocalizedString,
  academicEnquiries: "academics@shikshamahakumbh.com",
  olympiadEmail: "olympiad@shikshamahakumbh.com",
  raseReference: "https://www.rase.co.in/departments/academic-council#olympiad",
} as const;

/** 1st DHE English Olympiad — past cycle (PDF report) */
export const pastEnglishOlympiad2025 = {
  name: {
    en: "1st DHE English Olympiad",
    hi: "प्रथम DHE अंग्रेज़ी ओलंपियाड",
  } satisfies LocalizedString,
  smkEdition: 5,
  examDates: {
    en: "13–16 October 2025",
    hi: "13–16 अक्टूबर 2025",
  } satisfies LocalizedString,
  regions: {
    en: "Punjab, Haryana & Chandigarh (Tricity)",
    hi: "पंजाब, हरियाणा और चंडीगढ़ (ट्राइसिटी)",
  } satisfies LocalizedString,
  totalStudents: 10040,
  totalSchools: 25,
  format: {
    en: "MCQ format using OMR sheets",
    hi: "OMR शीट द्वारा MCQ प्रारूप",
  } satisfies LocalizedString,
  partner: {
    en: "English Connection — language enhancement platform",
    hi: "English Connection — भाषा विकास मंच",
  } satisfies LocalizedString,
  overallFelicitation: {
    en: "1 November 2025 at Shiksha Mahakumbh 5th Edition, NIPER Mohali",
    hi: "1 नवंबर 2025 — शिक्षा महाकुंभ 5th Edition, NIPER मोहाली",
  } satisfies LocalizedString,
  schoolFelicitation: {
    en: "13 February 2026 at ISTC Auditorium, CSIR–CSIO, Chandigarh",
    hi: "13 फ़रवरी 2026 — ISTC Auditorium, CSIR–CSIO, Chandigarh",
  } satisfies LocalizedString,
  levels: [
    { level: "A", classes: { en: "Class I–II", hi: "कक्षा I–II" } },
    { level: "B", classes: { en: "Class III–IV", hi: "कक्षा III–IV" } },
    { level: "C", classes: { en: "Class V–VI", hi: "कक्षा V–VI" } },
    { level: "D", classes: { en: "Class VII–VIII", hi: "कक्षा VII–VIII" } },
    { level: "E", classes: { en: "Class IX–X", hi: "कक्षा IX–X" } },
  ],
} as const;
