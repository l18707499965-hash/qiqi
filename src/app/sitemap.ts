import type { MetadataRoute } from 'next';

const BASE_URL = process.env.COZE_PROJECT_DOMAIN_DEFAULT ?? 'https://localhost:5000';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '', priority: 1, changeFrequency: 'daily' },
    { path: '/features', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/download', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/help', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/help/faq', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return pages.map((p) => ({
    url: `${BASE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}