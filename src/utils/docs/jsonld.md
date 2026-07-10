# JsonLd Component & Utilities

Structured data (JSON-LD) for better SEO and rich search results. Includes 10+ schema types and automatic cleanup.

## Import

```javascript
import { JsonLd } from 'tektokit';
import {
  createOrganizationSchema,
  createWebSiteSchema,
  createArticleSchema,
  createBreadcrumbSchema,
  // ... more schemas
} from 'tektokit';
```

## Quick Start

### Basic Usage

```javascript
import { JsonLd, createArticleSchema } from 'tektokit';

const articleSchema = createArticleSchema({
  headline: 'How to Use React',
  description: 'A complete guide',
  url: 'https://example.com/blog/react',
  image: '/images/react.jpg',
  authorName: 'John Doe',
  publisherName: 'My Blog',
  publisherLogo: '/logo.png',
  datePublished: '2024-01-01',
  dateModified: '2024-01-02',
});

// In your component
<JsonLd data={articleSchema} />
```

## Available Schemas

### 1. Organization

```javascript
import { createOrganizationSchema } from 'tektokit';

const orgSchema = createOrganizationSchema({
  name: 'My Company',
  url: 'https://example.com',
  logo: 'https://example.com/logo.png',
  description: 'We build amazing things',
  email: 'contact@example.com',
  telephone: '+1-555-0100',
  address: {
    street: '123 Main St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
    country: 'US',
  },
  sameAs: [
    'https://twitter.com/mycompany',
    'https://facebook.com/mycompany',
    'https://linkedin.com/company/mycompany',
  ],
});

<JsonLd data={orgSchema} />
```

### 2. WebSite

```javascript
import { createWebSiteSchema } from 'tektokit';

const websiteSchema = createWebSiteSchema({
  name: 'My Site',
  url: 'https://example.com',
  description: 'The best site',
  publisher: 'My Company',
  searchUrl: 'https://example.com/search?q={search_term_string}',
});

<JsonLd data={websiteSchema} />
```

### 3. Article (Blog Posts)

```javascript
import { createArticleSchema } from 'tektokit';

const articleSchema = createArticleSchema({
  headline: post.title,
  description: post.excerpt,
  url: `https://example.com/blog/${post.slug}`,
  image: post.image,
  authorName: post.author.name,
  publisherName: 'My Blog',
  publisherLogo: 'https://example.com/logo.png',
  datePublished: post.createdAt,
  dateModified: post.updatedAt,
  articleSection: 'Technology',
  keywords: post.tags,
});
```

### 4. Breadcrumbs

```javascript
import { createBreadcrumbSchema } from 'tektokit';

const breadcrumbSchema = createBreadcrumbSchema(
  [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'React Tutorial', url: '/blog/react' },
  ],
  'https://example.com' // Base URL
);
```

### 5. Product (E-commerce)

```javascript
import { createProductSchema } from 'tektokit';

const productSchema = createProductSchema({
  name: product.name,
  description: product.description,
  image: product.image,
  sku: product.sku,
  brand: product.brand,
  offers: {
    url: `https://example.com/products/${product.slug}`,
    currency: 'USD',
    price: product.price,
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2024-12-31',
  },
  aggregateRating: {
    ratingValue: 4.5,
    reviewCount: 89,
  },
  reviews: [
    {
      author: 'John Doe',
      datePublished: '2024-01-01',
      body: 'Great product!',
      rating: 5,
    },
  ],
});
```

### 6. Person

```javascript
import { createPersonSchema } from 'tektokit';

const personSchema = createPersonSchema({
  name: 'John Doe',
  url: 'https://example.com/authors/john',
  image: '/authors/john.jpg',
  jobTitle: 'Senior Developer',
  description: 'Passionate about web development',
  email: 'john@example.com',
  sameAs: ['https://twitter.com/johndoe', 'https://github.com/johndoe'],
});
```

### 7. FAQ

```javascript
import { createFAQSchema } from 'tektokit';

const faqSchema = createFAQSchema([
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'How do I install React?',
    answer: 'Run npm install react react-dom',
  },
]);
```

### 8. Video

```javascript
import { createVideoSchema } from 'tektokit';

const videoSchema = createVideoSchema({
  name: 'React Tutorial',
  description: 'Learn React in 30 minutes',
  thumbnailUrl: '/videos/react-thumb.jpg',
  uploadDate: '2024-01-01',
  duration: 'PT30M', // ISO 8601: 30 minutes
  contentUrl: 'https://example.com/video.mp4',
  embedUrl: 'https://youtube.com/embed/abc123',
});
```

### 9. Course

```javascript
import { createCourseSchema } from 'tektokit';

const courseSchema = createCourseSchema({
  name: 'Complete React Course',
  description: 'Master React from beginner to advanced',
  provider: 'My Learning Platform',
  url: 'https://example.com/courses/react',
  image: '/courses/react.jpg',
  offers: {
    category: 'Paid',
    currency: 'USD',
    price: 49.99,
  },
  aggregateRating: {
    ratingValue: 4.8,
    reviewCount: 234,
  },
});
```

### 10. WebPage

```javascript
import { createWebPageSchema } from 'tektokit';

const webPageSchema = createWebPageSchema({
  name: 'About Us',
  description: 'Learn about our company',
  url: 'https://example.com/about',
  authorName: 'Company Team',
  publisherName: 'My Company',
  publisherLogo: '/logo.png',
  datePublished: '2024-01-01',
  dateModified: '2024-01-15',
});
```

## Multiple Schemas

```javascript
// Render multiple schemas at once
<JsonLd
  data={[
    organizationSchema,
    websiteSchema,
    breadcrumbSchema,
  ]}
/>

// Or separately
<>
  <JsonLd data={organizationSchema} />
  <JsonLd data={websiteSchema} />
  <JsonLd data={breadcrumbSchema} />
</>
```

## Complete Example (Blog Post Page)

```javascript
// app/blog/[slug]/page.jsx
import { JsonLd, createArticleSchema, createBreadcrumbSchema } from 'tektokit';

export default function BlogPost({ post }) {
  const articleSchema = createArticleSchema({
    headline: post.title,
    description: post.excerpt,
    url: `https://example.com/blog/${post.slug}`,
    image: post.image,
    authorName: post.author.name,
    publisherName: 'My Blog',
    publisherLogo: 'https://example.com/logo.png',
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    articleSection: post.category,
    keywords: post.tags,
  });

  const breadcrumbSchema = createBreadcrumbSchema(
    [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: post.title, url: `/blog/${post.slug}` },
    ],
    'https://example.com'
  );

  return (
    <>
      <article>{/* Your post content */}</article>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
    </>
  );
}
```

## Notes

- All schemas are automatically cleaned (undefined/null removed)
- Works in both client and server components
- Errors are logged in development mode
- Supports array of schemas for convenience
- All schemas follow Schema.org standards
- Google Search Console validates these schemas
