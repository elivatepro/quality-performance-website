import type { MetadataRoute } from "next";
import { products } from "@/data/products";

/**
 * Sitemap for the dealer-focused site (Josh sync).
 *
 * Consumer / hidden routes (protect-your-car, technology, vin-decoder,
 * protection-map, gallery, reviews, sms-updates) are intentionally excluded so
 * search engines index only the dealer experience. Those routes still exist in
 * the app; re-add them here when the consumer experience is brought back.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qualityperformance.io";

  const productPages = products.map((product) => ({
    url: `${baseUrl}/services/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/partner-with-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...productPages,
    {
      // Vehicle owner page, reached by scanning the addendum QR. Indexed so
      // owners searching for their warranty find it, but deliberately absent
      // from the dealer navigation.
      url: `${baseUrl}/protected`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
