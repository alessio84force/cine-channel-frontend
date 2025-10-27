import type { L } from "@/lib/ui";
import SettingsClient from "./SettingsClient";

export default async function Page({ params }: { params: Promise<{ locale: L; slug: string }> }) {
  const { locale, slug } = await params;
  return <SettingsClient locale={locale} slug={slug} />;
}
