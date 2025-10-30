import "../globals.css";
import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { LOCALES, type Locale } from "@/i18n/dict";

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const lang = (LOCALES.includes(locale) ? locale : "es") as Locale;

  return (
    <html lang={lang}>
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        <NavBar locale={lang} />
        {children}
        <Footer locale={lang} />
      </body>
    </html>
  );
}
