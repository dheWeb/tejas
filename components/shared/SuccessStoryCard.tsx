import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SuccessStoryCardProps {
  name: string;
  achievement: string;
  school: string;
  state: string;
  quote?: string;
  href?: string;
  className?: string;
}

export function SuccessStoryCard({
  name,
  achievement,
  school,
  state,
  quote,
  href = "/hall-of-fame",
  className,
}: SuccessStoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-2xl border border-stone-200 bg-white p-6 shadow-tejas transition hover:-translate-y-1 hover:shadow-tejas-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tejas-saffron",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-tejas-gold/30 to-tejas-saffron/20 text-lg font-bold text-tejas-blue">
          {name.charAt(0)}
        </div>
        <ArrowUpRight className="h-5 w-5 text-tejas-muted opacity-0 transition group-hover:opacity-100" aria-hidden />
      </div>
      <h3 className="mt-4 text-lg font-bold text-tejas-ink group-hover:text-tejas-saffron transition-colors">
        {name}
      </h3>
      <p className="text-sm font-semibold text-tejas-saffron">{achievement}</p>
      <p className="mt-2 text-sm text-tejas-muted">{school} · {state}</p>
      {quote && <p className="mt-4 text-sm italic text-tejas-muted border-l-2 border-tejas-saffron/30 pl-3">{quote}</p>}
    </Link>
  );
}
