import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog-posts'
import { products } from '@/data/products'

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dryviet.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static routes
  const staticRoutes = [
    { url: `${base}`, priority: 1.0, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/products`, priority: 0.9, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/contact`, priority: 0.85, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/kotheche`, priority: 0.85, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/certifications`, priority: 0.7, changeFrequency: 'yearly' as const, lastModified: now },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: 'yearly' as const, lastModified: now },
    { url: `${base}/return-policy`, priority: 0.3, changeFrequency: 'yearly' as const, lastModified: now },
    { url: `${base}/payment-policy`, priority: 0.3, changeFrequency: 'yearly' as const, lastModified: now },
    { url: `${base}/shipping-policy`, priority: 0.3, changeFrequency: 'yearly' as const, lastModified: now },
  ]

  // Dynamic products
  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  // Dynamic posts
  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  return [...staticRoutes, ...productRoutes, ...blogRoutes]
}
