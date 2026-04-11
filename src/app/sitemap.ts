import { MetadataRoute } from 'next'

import { blogPosts } from '@/data/blog-posts'
import { products } from '@/data/products'

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dryviet.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static core routes
  const staticRoutes = [
    { url: '',               priority: 1.0,  changeFrequency: 'weekly'  as const },
    { url: '/about',          priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/services',       priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/products',       priority: 0.9,  changeFrequency: 'weekly'  as const },
    { url: '/kotheche',       priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/certifications', priority: 0.7,  changeFrequency: 'yearly'  as const },
    { url: '/blog',           priority: 0.8,  changeFrequency: 'weekly'  as const },
    { url: '/contact',        priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/seo-audit',      priority: 0.5,  changeFrequency: 'monthly' as const },
  ]

  // Dynamic Product routes
  const productRoutes = products.map(p => ({
    url: `/products/${p.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const
  }))

  // Dynamic Blog routes
  const blogRoutes = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const
  }))

  const allRoutes = [...staticRoutes, ...productRoutes, ...blogRoutes]

  return allRoutes.map(r => ({
    url: `${base}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
