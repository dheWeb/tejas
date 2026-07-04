import type { HallOfFameEntry } from "@/types";
import { hallOfFameRegistry } from "@/content/hall-of-fame";

export const hallOfFameEntries: HallOfFameEntry[] = hallOfFameRegistry.map((e) => ({
  id: e.id,
  name: e.name,
  rank: e.rank,
  category: e.category,
  olympiad: e.olympiad.en,
  state: e.state,
  school: e.school,
  year: e.year,
  achievement: e.achievement.en,
  level: e.level?.en,
}));

export { hallOfFameCategories, getHallOfFameByCategory } from "@/content/hall-of-fame";
