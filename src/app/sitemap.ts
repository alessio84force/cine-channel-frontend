import type { MetadataRoute } from 'next';

const locales = ['es','en','fr'] as const;
const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];
  for (const l of locales) {
    urls.push(
      { url: `${base}/${l}`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
      { url: `${base}/${l}/explore`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
      { url: `${base}/${l}/search`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
      { url: `${base}/${l}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
      { url: `${base}/${l}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
      { url: `${base}/${l}/creator/onboarding`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 }
    );
  }
  return urls;
}
