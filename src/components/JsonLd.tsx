export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Quality Performance",
    description:
      "Professional paint protection film (PPF) installation for dealerships and car owners across multiple US states.",
    url: "https://qualityperformance.io",
    logo: "https://qualityperformance.io/logo.svg",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Paint Protection Film Installation",
      "PPF Installation",
      "Vehicle Paint Protection",
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "Quality Performance",
      url: "https://qualityperformance.io",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
