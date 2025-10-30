import Link from "next/link";
import { UI, type L } from "@/lib/ui";

export default async function Cancel({ params }: { params: Promise<{ locale: L }> }) {
  const { locale } = await params;
  const t = U.onboarding;
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-3">{t.cancel}</h1>
      <Link className="underline" href={`/${locale}/creator/onboarding`}>Back</Link>
    </main>
  );
}
