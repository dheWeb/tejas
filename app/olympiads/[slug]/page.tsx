import { notFound } from "next/navigation";
import { createMetadata } from "@/config/seo";
import { getOlympiadContent, getAllOlympiadSlugs } from "@/content/olympiads";
import { OlympiadPortal } from "@/components/olympiads/OlympiadPortal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllOlympiadSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const olympiad = getOlympiadContent(slug);
  if (!olympiad) return {};
  return createMetadata({
    title: `${olympiad.name.en} Olympiad`,
    description: olympiad.description.en,
    path: `/olympiads/${slug}`,
  });
}

export default async function OlympiadDetailPage({ params }: Props) {
  const { slug } = await params;
  const olympiad = getOlympiadContent(slug);
  if (!olympiad) notFound();

  return <OlympiadPortal olympiad={olympiad} />;
}
