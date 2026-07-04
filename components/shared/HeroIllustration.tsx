"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export function HeroIllustration({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className={cn("relative aspect-square max-w-lg mx-auto", className)}>
      <div className="absolute inset-0 tejas-mandala rounded-full opacity-40" aria-hidden />
      {!reduced && (
        <>
          <motion.div
            className="absolute left-1/4 top-1/4 h-24 w-24 rounded-2xl bg-tejas-saffron/20 border border-tejas-saffron/30 shadow-tejas-lg"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-1/4 top-1/3 h-20 w-20 rounded-full bg-tejas-blue/15 border border-tejas-blue/25 shadow-tejas"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 h-28 w-36 rounded-2xl bg-white/90 border border-stone-200 shadow-tejas-lg p-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="h-2 w-12 rounded bg-tejas-saffron/60 mb-2" />
            <div className="h-1.5 w-full rounded bg-stone-200 mb-1" />
            <div className="h-1.5 w-3/4 rounded bg-stone-200" />
            <p className="mt-2 text-[10px] font-bold text-tejas-blue">2027 Edition</p>
          </motion.div>
        </>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-48 w-48 rounded-full border-2 border-tejas-gold/30 bg-gradient-to-br from-tejas-saffron-soft via-white to-tejas-blue/5 flex items-center justify-center shadow-tejas-lg">
          <div className="text-center">
            <p className="text-5xl font-black text-tejas-saffron">T</p>
            <p className="font-hindi text-xs text-tejas-muted mt-1">तेजस</p>
          </div>
        </div>
      </div>
    </div>
  );
}
