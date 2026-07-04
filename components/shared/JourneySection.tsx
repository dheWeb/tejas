import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

interface JourneySectionProps {
  id?: string;
  children: React.ReactNode;
  nextLabel?: string;
  nextHref?: string;
  className?: string;
  showConnector?: boolean;
}

/** Homepage section wrapper — each block flows into the next */
export function JourneySection({
  id,
  children,
  nextLabel,
  nextHref,
  className,
  showConnector = true,
}: JourneySectionProps) {
  return (
    <section id={id} className={cn("relative", className)}>
      <FadeIn>{children}</FadeIn>
      {showConnector && nextHref && nextLabel && (
        <div className="flex flex-col items-center pb-8 pt-4">
          <ArrowDown className="h-5 w-5 text-tejas-saffron/40" aria-hidden />
          <Link
            href={nextHref}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-tejas-saffron hover:underline"
          >
            {nextLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      )}
    </section>
  );
}
