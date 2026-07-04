import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuoteCardProps {
  quote: string;
  quoteHi?: string;
  author: string;
  role: string;
  className?: string;
}

export function QuoteCard({ quote, quoteHi, author, role, className }: QuoteCardProps) {
  return (
    <blockquote
      className={cn(
        "relative overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-tejas-saffron-soft/20 p-8 shadow-tejas",
        className
      )}
    >
      <Quote className="h-10 w-10 text-tejas-saffron/25" aria-hidden />
      <p className="mt-4 text-xl leading-relaxed text-tejas-ink font-medium">&ldquo;{quote}&rdquo;</p>
      {quoteHi && <p className="mt-3 font-hindi text-base text-tejas-muted">&ldquo;{quoteHi}&rdquo;</p>}
      <footer className="mt-6 border-t border-stone-200/80 pt-4">
        <cite className="not-italic">
          <span className="font-bold text-tejas-blue">{author}</span>
          <span className="block text-sm text-tejas-muted">{role}</span>
        </cite>
      </footer>
    </blockquote>
  );
}
