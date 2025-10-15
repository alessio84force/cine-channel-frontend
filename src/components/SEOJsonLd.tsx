export default function SEOJsonLd() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cine-Channel",
    url,
    logo: "/icon.svg",
    sameAs: []
  };
  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cine-Channel",
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: "{url}/search?q={query}",
      "query-input": "required name=query",
      urlTemplate: "{url}/search?q={query}"
    }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(org)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(site)}} />
    </>
  );
}
