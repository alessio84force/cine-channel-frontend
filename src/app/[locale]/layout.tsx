import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { type Locale, LOCALES } from "@/i18n/dict";

export default async function LocaleLayout({
  params,
  children,
}: {
  params: Promise<{ locale: Locale }>;
  children: ReactNode;
}) {
  const { locale } = await params;
  const lang = (LOCALES.includes(locale) ? locale : "es") as Locale;

  return (
    <>
      <NavBar locale={lang} />
      {children}
      <Footer locale={lang} />
    </>
  );
}
