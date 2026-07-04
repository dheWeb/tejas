import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface EditionBadgeProps {
  label: string;
  variant?: "current" | "past" | "upcoming";
  className?: string;
}

export function EditionBadge({ label, variant = "current", className }: EditionBadgeProps) {
  return (
    <Badge
      className={cn(
        "font-semibold",
        variant === "current" && "bg-gradient-to-r from-tejas-saffron to-tejas-saffron-dark text-white border-0",
        variant === "past" && "bg-tejas-blue/10 text-tejas-blue",
        variant === "upcoming" && "bg-stone-100 text-tejas-muted",
        className
      )}
    >
      {label}
    </Badge>
  );
}
