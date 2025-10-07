import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';

const locales = ['en','es','fr'] as const;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      {/* stesse classi del body del root layout */}
      <body className="bg-neutral-950 text-white">{children}</body>
    </html>
  );
}