import type { MetadataRoute } from "next";

// To tell search engine crawlers which URLs they can access on AGAVE Map.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://agave-map.vercel.app/sitemap.xml",
  };
}

// Output:

// User-Agent: *
// Allow: /
// Sitemap: https://agave-map.vercel.app/sitemap.xml
