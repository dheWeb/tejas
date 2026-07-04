import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "wave" | "line" | "gradient";
  className?: string;
  flip?: boolean;
}

export function SectionDivider({ variant = "gradient", className, flip }: SectionDividerProps) {
  if (variant === "line") {
    return (
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
        <hr className="border-stone-200/80" />
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={cn("relative h-16 overflow-hidden", flip && "rotate-180", className)} aria-hidden>
        <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full fill-tejas-ivory" preserveAspectRatio="none">
          <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,56 1440,32 L1440,64 L0,64 Z" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={cn("h-px w-full bg-gradient-to-r from-transparent via-tejas-saffron/30 to-transparent", className)}
      aria-hidden
    />
  );
}
