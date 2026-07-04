import { notFound } from "next/navigation";
import { createMetadata } from "@/config/seo";
import { getEditionContent, getAllEditionSlugs } from "@/content/editions";
import { EditionLandingPage } from "@/components/editions/EditionLandingPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEditionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const edition = getEditionContent(slug);
  if (!edition) return {};
  return createMetadata({
    title: edition.name.en,
    description: edition.bio.en,
    path: `/editions/${slug}`,
  });
}

export default async function EditionPage({ params }: Props) {
  const { slug } = await params;
  const edition = getEditionContent(slug);
  if (!edition) notFound();

  return <EditionLandingPage edition={edition} />;
}
