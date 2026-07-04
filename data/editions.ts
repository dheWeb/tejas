import type { Edition } from "@/types";
import { editionRegistry, getCurrentEditionContent, getPastEditions, getUpcomingEditions } from "@/content/editions";

export const editions: Edition[] = editionRegistry
  .filter((e) => e.status !== "past")
  .map((e) => ({
    year: e.year,
    slug: e.slug,
    name: e.name.en,
    subtitle: e.subtitle.en,
    bio: e.bio.en,
    theme: e.theme.en,
    status: e.status as "current" | "upcoming" | "past",
    imageAccent: e.imageAccent,
  }));

export const previousEditions: Edition[] = getPastEditions().map((e) => ({
  year: e.year,
  slug: e.slug,
  name: e.name.en,
  subtitle: e.subtitle.en,
  bio: e.bio.en,
  theme: e.theme.en,
  status: "past" as const,
  imageAccent: e.imageAccent,
}));

export function getCurrentEdition() {
  const current = getCurrentEditionContent();
  return {
    year: current.year,
    slug: current.slug,
    name: current.name.en,
    subtitle: current.subtitle.en,
    bio: current.bio.en,
    theme: current.theme.en,
    status: current.status as "current",
    imageAccent: current.imageAccent,
  };
}

export { getUpcomingEditions };
