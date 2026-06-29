import type { MetadataRoute } from 'next';

const SITE_URL = 'https://tatabba.com';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date('2026-06-29'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
