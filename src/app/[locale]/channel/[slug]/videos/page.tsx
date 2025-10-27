import type { L } from "@/lib/ui";
import VideosClient from "./VideosClient";

export default async function Page({ params }: { params: Promise<{ locale: L; slug: string }> }) {
  const { locale, slug } = await params;
  return <VideosClient locale={locale} slug={slug} />;
}
