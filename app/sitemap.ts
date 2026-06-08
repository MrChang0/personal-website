import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://personal-website-mrchang0s-projects.vercel.app",
      lastModified: new Date()
    }
  ];
}
