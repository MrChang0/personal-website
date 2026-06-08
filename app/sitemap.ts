import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://personal-website-kappa-sepia-17.vercel.app",
      lastModified: new Date()
    }
  ];
}
