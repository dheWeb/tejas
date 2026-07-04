"use client";

import type { ElementType } from "react";
import { useI18n } from "@/lib/i18n/context";
import type { LocalizedString } from "@/content/types";

interface LocalizedTextProps {
  text: LocalizedString;
  as?: ElementType;
  className?: string;
}

export function LocalizedText({ text, as: Tag = "span", className }: LocalizedTextProps) {
  const { t } = useI18n();
  return <Tag className={className}>{t(text)}</Tag>;
}

/** Server-safe: pass locale explicitly */
export function getLocalized(text: LocalizedString, locale: "en" | "hi" = "en") {
  return text[locale];
}
