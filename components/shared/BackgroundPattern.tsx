import { cn } from "@/lib/utils";

interface BackgroundPatternProps {
  variant?: "mandala" | "pattern" | "copper";
  className?: string;
}

export function BackgroundPattern({ variant = "pattern", className }: BackgroundPatternProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0",
        variant === "mandala" && "tejas-mandala opacity-60",
        variant === "pattern" && "tejas-pattern",
        variant === "copper" && "tejas-copper-gradient",
        className
      )}
      aria-hidden
    />
  );
}
