"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,auto)]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  span?: "wide" | "tall" | "large";
}

export function BentoItem({ children, className, href, span }: BentoItemProps) {
  const spanClass =
    span === "wide" ? "md:col-span-2" : span === "tall" ? "md:row-span-2" : span === "large" ? "md:col-span-2 md:row-span-2" : "";

  const inner = (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-6 shadow-tejas transition hover:-translate-y-0.5 hover:shadow-tejas-lg",
        spanClass,
        className
      )}
    >
      {children}
      {href && (
        <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 text-tejas-saffron opacity-0 transition group-hover:opacity-100" aria-hidden />
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={cn("block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tejas-saffron rounded-2xl", spanClass)}>
        {inner}
      </Link>
    );
  }

  return inner;
}
