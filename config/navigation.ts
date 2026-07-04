import type { LucideIcon } from "lucide-react";

export interface MegaMenuItem {
  label: string;
  labelHi?: string;
  href: string;
  description?: string;
  descriptionHi?: string;
  badge?: string;
}

export interface MegaMenuSection {
  title: string;
  titleHi?: string;
  items: MegaMenuItem[];
}

export interface NavItem {
  label: string;
  labelHi?: string;
  href: string;
  megaMenu?: MegaMenuSection[];
}

export const mainNav: NavItem[] = [
  {
    label: "Olympiads",
    labelHi: "ओलंपियाड",
    href: "/olympiads",
    megaMenu: [
      {
        title: "Core Subjects",
        titleHi: "मुख्य विषय",
        items: [
          { label: "English", labelHi: "अंग्रेज़ी", href: "/olympiads/english", description: "SMK 6.0 Active Stream", badge: "Active" },
          { label: "Mathematics", labelHi: "गणित", href: "/olympiads/mathematics", description: "SMK 6.0 Active Stream", badge: "Active" },
          { label: "Technology", labelHi: "प्रौद्योगिकी", href: "/olympiads/technology", description: "SMK 6.0 Active Stream", badge: "Active" },
          { label: "Science", labelHi: "विज्ञान", href: "/olympiads/science", description: "Coming soon" },
        ],
      },
      {
        title: "Future Skills",
        titleHi: "भविष्य कौशल",
        items: [
          { label: "Technology", href: "/olympiads/technology", description: "Digital literacy & innovation" },
          { label: "AI & Data Science", href: "/olympiads/ai", description: "Responsible AI foundations", badge: "New" },
          { label: "Coding", href: "/olympiads/coding", description: "Computational thinking" },
          { label: "Innovation", href: "/olympiads/innovation", description: "Design thinking & entrepreneurship" },
        ],
      },
    ],
  },
  {
    label: "Prepare",
    labelHi: "तैयारी",
    href: "/prepare",
    megaMenu: [
      {
        title: "Learn & Practice",
        items: [
          { label: "Mock Tests", href: "/prepare/mock-tests", description: "Free full-length simulations" },
          { label: "Practice Sets", href: "/prepare", description: "Topic-wise drills" },
          { label: "Question Banks", href: "/prepare", description: "Curated question pools" },
          { label: "Video Learning", href: "/prepare", description: "Expert masterclasses" },
        ],
      },
    ],
  },
  {
    label: "Editions",
    labelHi: "संस्करण",
    href: "/editions",
  },
  {
    label: "Resources",
    labelHi: "संसाधन",
    href: "/resources",
  },
  {
    label: "Schools",
    labelHi: "विद्यालय",
    href: "/schools",
  },
  {
    label: "Rankings",
    labelHi: "रैंकिंग",
    href: "/rankings",
  },
  {
    label: "Hall of Fame",
    labelHi: "हॉल ऑफ फेम",
    href: "/hall-of-fame",
  },
  {
    label: "About",
    labelHi: "परिचय",
    href: "/about",
  },
];

export const futureModules = [
  { label: "AI Mentor", labelHi: "AI मेंटर", href: "#", comingSoon: true },
  { label: "Student Dashboard", labelHi: "छात्र पोर्टल", href: "#", comingSoon: true },
  { label: "Research Hub", labelHi: "अनुसंधान केंद्र", href: "#", comingSoon: true },
  { label: "Digital Library", labelHi: "डिजिटल पुस्तकालय", href: "#", comingSoon: true },
  { label: "National Talent Index", labelHi: "राष्ट्रीय प्रतिभा सूचकांक", href: "#", comingSoon: true },
  { label: "Mobile App", labelHi: "मोबाइल ऐप", href: "#", comingSoon: true },
] as const;

export const footerNav = {
  platform: [
    { label: "About TEJAS", href: "/about" },
    { label: "Current Editions", href: "/editions" },
    { label: "Previous Editions", href: "/editions/previous" },
    { label: "Mock Tests", href: "/prepare/mock-tests" },
  ],
  olympiads: [
    { label: "English (Active)", href: "/olympiads/english" },
    { label: "Mathematics (Active)", href: "/olympiads/mathematics" },
    { label: "Technology (Active)", href: "/olympiads/technology" },
    { label: "All Olympiads", href: "/olympiads" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "For Schools", href: "/schools" },
  ],
  dhe: [
    { label: "DHE Website", href: "https://www.dhe.org.in", external: true },
    {
      label: "DHE Olympiads Program",
      href: "https://www.dhe.org.in/programs/dhe-olympiads",
      external: true,
    },
  ],
} as const;
