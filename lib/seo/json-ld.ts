import { siteConfig } from "@/config/seo";
import { brand } from "@/design-system/tokens";
import type { FAQItem } from "@/types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    alternateName: brand.fullName,
    url: siteConfig.url,
    description: siteConfig.description,
    parentOrganization: {
      "@type": "Organization",
      name: brand.parentOrg,
      url: "https://www.dhe.org.in",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@type": "Organization", name: brand.parentOrg },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function courseJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: `${brand.name} — ${brand.parentOrg}`,
      url: siteConfig.url,
    },
  };
}
