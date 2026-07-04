import type { LocalizedString } from "./types";

/** Current TEJAS edition — independent DHE Olympiad cycle (post–Shiksha Mahakumbh) */
export const currentCycle = {
  editionSlug: "apj-abdul-kalam",
  editionName: {
    en: "Dr APJ Abdul Kalam Edition",
    hi: "डॉ APJ अब्दुल कलाम संस्करण",
  } satisfies LocalizedString,
  editionYear: 2026,
  /** Current olympiads are NOT under Shiksha Mahakumbh — independent TEJAS event after SMK */
  independenceNote: {
    en: "Independent TEJAS Olympiad cycle by Olympiad Cell, DHE — conducted after Shiksha Mahakumbh, not under its aegis.",
    hi: "Olympiad Cell, DHE द्वारा स्वतंत्र TEJAS ओलंपियाड चक्र — शिक्षा महाकुंभ के बाद, उसकी छत्रछाया के बाहर।",
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
    en: "Top achievers honoured at the TEJAS National Felicitation Ceremony (independent event — details to be announced)",
    hi: "शीर्ष achievers को TEJAS राष्ट्रीय सम्मान समारोह में सम्मानित किया जाएगा (स्वतंत्र कार्यक्रम)",
  } satisfies LocalizedString,
  administeredBy: {
    en: "Olympiad Cell, Department of Holistic Education (DHE)",
    hi: "ओलंपियाड सेल, समग्र शिक्षा विभाग (DHE)",
  } satisfies LocalizedString,
  academicEnquiries: "academics@shikshamahakumbh.com",
  olympiadEmail: "olympiad@shikshamahakumbh.com",
  shikshaMahakumbhReference: "https://www.shikshamahakumbh.com",
  shikshaMahakumbhOlympiadReference: "https://www.shikshamahakumbh.com",
} as const;

/** Edition label used in sample papers, calendars, etc. */
export const CURRENT_EDITION_LABEL = "Kalam Edition 2026";

/** 1st DHE English Olympiad — past cycle under Shiksha Mahakumbh (PDF report) */
export const pastEnglishOlympiad2025 = {
  name: {
    en: "1st DHE English Olympiad",
    hi: "प्रथम DHE अंग्रेज़ी ओलंपियाड",
  } satisfies LocalizedString,
  smkEdition: 5,
  underShikshaMahakumbh: {
    en: "Conducted under the aegis of Shiksha Mahakumbh 5th Edition",
    hi: "शिक्षा महाकुंभ 5th Edition की छत्रछाया में आयोजित",
  } satisfies LocalizedString,
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
