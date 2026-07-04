import { cn } from "@/lib/utils";

interface TejasEmblemProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-14 w-14 text-base" };

/** TEJAS signature saffron–blue gradient emblem */
export function TejasEmblem({ size = "md", className }: TejasEmblemProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-tejas-saffron via-tejas-saffron to-tejas-blue font-black text-white shadow-md ring-2 ring-white/20",
        sizes[size],
        className
      )}
      aria-hidden
    >
      <span className="relative z-10 tracking-tighter">T</span>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/10 to-white/5" />
    </div>
  );
}
