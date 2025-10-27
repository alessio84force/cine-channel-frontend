import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import "../globals.css";
import type { L } from "@/lib/ui";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export default async function RootLayout({ children, params }:{
  children: React.ReactNode;
  params: Promise<{ locale: L }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        <NavBar locale={locale} />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}