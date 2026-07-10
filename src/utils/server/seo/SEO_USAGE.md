# SEO Utilities

Server-side utilities for SEO metadata, robots.txt, and sitemap.xml generation in Next.js.

## Import

```javascript
// Import from tektokit/server for server-side utilities
import { 
  createSEOConfig, 
  buildSeo, 
  generateRobots, 
  generateSitemap 
} from 'tektokit/server';
```

---

## Metadata Utilities

### createSEOConfig

Create a reusable SEO configuration object with site-wide defaults.

```javascript
import { createSEOConfig } from 'tektokit/server';

export const seoConfig = createSEOConfig({
  siteName: 'My Website',
  siteUrl: 'https://example.com',
  defaultTitle: 'My Website - Welcome',
  defaultDescription: 'Your one-stop destination for...',
  defaultImage: '/og-image.jpg',
  defaultKeywords: ['keyword1', 'keyword2'],
  twitterHandle: '@mywebsite',
  locale: 'en_US',
});
```

### buildSeo

Build SEO metadata for a page by merging page-specific data with defaults.

```javascript
import { buildSeo } from 'tektokit/server';
import { seoConfig } from '@/config/seo';

export const metadata = buildSeo(seoConfig, {
  title: 'About Us',
  description: 'Learn about our company',
  canonical: '/about',
  keywords: ['about', 'team'],
});
```

---

## generateRobots

Generate robots.txt configuration for Next.js App Router.

### Usage

Create `app/robots.js`:

```javascript
import { generateRobots } from 'tektokit/server';

export default function robots() {
  return generateRobots({
    siteUrl: 'https://example.com',
    allow: ['/', '/blog', '/about', '/contact', '/privacy', '/terms'],
    disallow: ['/admin', '/dashboard', '/api'],
  });
}
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `siteUrl` | `string` | `required` | Your production site URL |
| `allow` | `array` | `['/']` | Paths to allow crawling |
| `disallow` | `array` | `[]` | Paths to block crawling |
| `userAgent` | `string` | `'*'` | User agent to target |
| `localUrl` | `string` | `'http://localhost:3000'` | URL for development |

### Output

Generates `/robots.txt`:

```
User-agent: *
Allow: /
Allow: /blog
Disallow: /admin

Sitemap: https://example.com/sitemap.xml
Host: https://example.com
```

---

## generateSitemap

Generate sitemap.xml configuration for Next.js App Router.

### Usage

Create `app/sitemap.js`:

```javascript
import { generateSitemap } from 'tektokit/server';

export default async function sitemap() {
  const posts = await getBlogPosts();
  
  return generateSitemap({
    siteUrl: 'https://example.com',
    staticRoutes: ['/', '/about', '/contact', '/privacy'],
    dynamicRoutes: posts.map(post => ({
      url: `/blog/${post.slug}`,
      lastModified: post.updatedAt,
    })),
  });
}
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `siteUrl` | `string` | `required` | Your production site URL |
| `staticRoutes` | `array` | `[]` | Array of static paths |
| `dynamicRoutes` | `array` | `[]` | Array of dynamic route objects |
| `defaultChangeFrequency` | `string` | `'daily'` | Default change frequency |
| `defaultPriority` | `number` | `0.7` | Default priority (0-1) |

### Dynamic Route Objects

```javascript
{
  url: '/blog/post-slug',          // Required
  lastModified: '2024-01-15',      // Optional
  changeFrequency: 'weekly',       // Optional
  priority: 0.8,                   // Optional
}
```

Or simplified (just strings):

```javascript
dynamicRoutes: ['/blog/post-1', '/blog/post-2']
```

### Complete Example

```javascript
import { generateSitemap } from 'tektokit/server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export default async function sitemap() {
  const [posts, projects] = await Promise.all([
    getBlogPosts(),
    getProjects(),
  ]);

  const blogRoutes = posts.map(p => ({
    url: `/blog/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const projectRoutes = projects.map(p => ({
    url: `/projects/${p.slug}`,
    lastModified: p.updatedAt,
  }));

  return generateSitemap({
    siteUrl: 'https://example.com',
    staticRoutes: ['/', '/about', '/blog', '/projects'],
    dynamicRoutes: [...blogRoutes, ...projectRoutes],
  });
}
```

---

## Features

- ✅ Next.js App Router compatible
- ✅ TypeScript support
- ✅ Development/production environment handling
- ✅ Metadata generation with Open Graph and Twitter cards
- ✅ Flexible robots.txt configuration
- ✅ Dynamic sitemap generation
- ✅ SEO best practices
