import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ locale?: string }>;
}) {
  const { locale } = await params;            // ✅ evitare "sync dynamic APIs"
  const lang = locale ?? "es";
  redirect(`/${lang}/signin?callbackUrl=/${lang}/creator/onboarding`);
}
