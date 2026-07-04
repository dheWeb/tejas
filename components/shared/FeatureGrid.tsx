import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  titleHi?: string;
  description: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({ items, columns = 3, className }: FeatureGridProps) {
  const colClass = columns === 4 ? "lg:grid-cols-4" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("grid gap-6", colClass, className)}>
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-stone-200/80 bg-white p-8 shadow-tejas transition hover:border-tejas-saffron/20 hover:shadow-tejas-lg"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tejas-saffron-soft text-tejas-saffron">
            <item.icon className="h-6 w-6" aria-hidden />
          </div>
          <h3 className="mt-5 text-lg font-bold text-tejas-ink">{item.title}</h3>
          {item.titleHi && <p className="font-hindi text-sm text-tejas-muted">{item.titleHi}</p>}
          <p className="mt-2 text-sm text-tejas-muted leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
