# SEO Utilities

Complete SEO utilities for Next.js and React applications with no hardcoded constants. You provide your own defaults.

## Import

```javascript
import { createSEOConfig, buildSeo } from 'tektokit';
```

## Quick Start

### 1. Create SEO Config (Once)

```javascript
// lib/seo.js or constants/seo.js
import { createSEOConfig } from 'tektokit';

export const seoConfig = createSEOConfig({
  siteName: 'My Awesome Site',
  siteUrl: 'https://example.com',
  defaultTitle: 'My Awesome Site - Welcome',
  defaultDescription: 'The best site on the internet',
  defaultImage: '/og-image.jpg',
  defaultKeywords: ['awesome', 'site', 'example'],
  defaultAuthor: 'My Company',
  twitterHandle: '@mysite',
  locale: 'en_US',
  facebookAppId: '123456789', // Optional
});
```

### 2. Use in Pages

```javascript
// app/page.js (Next.js App Router)
import { buildSeo } from 'tektokit';
import { seoConfig } from '@/lib/seo';

export const metadata = buildSeo(seoConfig, {
  title: 'Home Page',
  description: 'Welcome to our home page',
});
```

## API Reference

### createSEOConfig(config)

Creates a reusable SEO configuration object.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `siteName` | `string` | Yes | Your site name |
| `siteUrl` | `string` | Yes | Your site URL |
| `defaultTitle` | `string` | Yes | Default page title |
| `defaultDescription` | `string` | Yes | Default description |
| `defaultImage` | `string` | Yes | Default OG image |
| `defaultKeywords` | `array` | No | Default keywords |
| `defaultAuthor` | `string` | No | Default author (defaults to siteName) |
| `twitterHandle` | `string` | No | Twitter handle |
| `locale` | `string` | No | Default locale (default: 'en_US') |
| `facebookAppId` | `string` | No | Facebook App ID |

### buildSeo(config, pageData)

Builds Next.js metadata object for a specific page.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `config` | `object` | Yes | Config from createSEOConfig |
| `pageData` | `object` | No | Page-specific data |

**pageData options:**

| Property | Type | Description |
|----------|------|-------------|
| `title` | `string` | Page title |
| `description` | `string` | Page description |
| `keywords` | `array` | Additional keywords (merged with defaults) |
| `canonical` | `string` | Canonical URL (relative or absolute) |
| `image` | `string` | OG image URL |
| `type` | `string` | OG type ('website', 'article', etc.) |
| `author` | `string` | Page author |
| `noindex` | `boolean` | Prevent indexing |
| `nofollow` | `boolean` | Prevent following links |
| `article` | `object` | Article metadata (see below) |

**article metadata (for blog posts):**

```javascript
article: {
  authors: ['John Doe'],
  publishedTime: '2024-01-01T00:00:00Z',
  modifiedTime: '2024-01-02T00:00:00Z',
  tags: ['javascript', 'react'],
  section: 'Technology'
}
```

## Examples

### Basic Page

```javascript
export const metadata = buildSeo(seoConfig, {
  title: 'About Us',
  description: 'Learn about our company',
  canonical: '/about',
});
```

### Blog Post

```javascript
export const metadata = buildSeo(seoConfig, {
  title: 'How to Use React Hooks',
  description: 'A comprehensive guide to React hooks',
  canonical: `/blog/${slug}`,
  image: '/blog-images/react-hooks.jpg',
  type: 'article',
  keywords: ['react', 'hooks', 'tutorial'],
  article: {
    authors: ['Jane Doe'],
    publishedTime: post.createdAt,
    modifiedTime: post.updatedAt,
    tags: post.tags,
    section: 'Tutorials',
  },
});
```

### Product Page

```javascript
export const metadata = buildSeo(seoConfig, {
  title: product.name,
  description: product.description,
  canonical: `/products/${product.slug}`,
  image: product.image,
  keywords: product.tags,
});
```

### Private Page (Noindex)

```javascript
export const metadata = buildSeo(seoConfig, {
  title: 'User Dashboard',
  description: 'Your private dashboard',
  canonical: '/dashboard',
  noindex: true, // Don't index this page
});
```

### Dynamic SEO from CMS

```javascript
export async function generateMetadata({ params }) {
  const page = await fetchPage(params.slug);
  
  return buildSeo(seoConfig, {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.excerpt,
    canonical: `/${page.slug}`,
    image: page.seo?.image || page.featuredImage,
    keywords: page.seo?.keywords || page.tags,
  });
}
```

## Generated Metadata

The `buildSeo` function returns a Next.js metadata object with:

- Title and description
- Open Graph tags (title, description, type, url, images, siteName, locale)
- Twitter Card tags (card, title, description, images, creator)
- Canonical URL
- Keywords
- Author
- Robots meta (index, follow, googleBot)
- Facebook App ID (if provided)

## Notes

- All URLs are automatically converted to absolute URLs
- Keywords from pageData are merged with default keywords
- Trailing slashes are automatically removed from base URL
- Images can be relative or absolute URLs
- OG images are automatically sized to 1200x630
- Twitter card defaults to 'summary_large_image'
- Works with Next.js App Router and Pages Router
