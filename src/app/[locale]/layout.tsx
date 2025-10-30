import "./../globals.css";
import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import type { Locale } from "@/i18n/dict";

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const locale = params?.locale || "es";
  return (
    <html lang={locale}>
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        <NavBar locale={locale} />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
