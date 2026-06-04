import type { MetadataRoute } from 'next'
import { COMMODITIES, SERVICES } from '@/lib/constants'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/commodities', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/regions', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
  ]

  const now = new Date()

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: service.slug === 'commodity-brokerage' ? 0.9 : 0.8,
    })),
    ...COMMODITIES.map((commodity) => ({
      url: `${SITE_URL}/commodities/${commodity.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: commodity.featured ? 0.85 : 0.75,
    })),
  ]
}
