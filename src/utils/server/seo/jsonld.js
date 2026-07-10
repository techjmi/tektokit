/**
 * JSON-LD (Structured Data) Utilities
 * See docs/jsonld.md for detailed usage
 */

/**
 * Organization schema
 */
export const createOrganizationSchema = ({
  name,
  url,
  logo,
  description,
  email,
  telephone,
  address,
  sameAs = [], // Social media URLs
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name,
  url,
  logo: logo ? { '@type': 'ImageObject', url: logo } : undefined,
  description,
  email,
  telephone,
  address: address
    ? {
        '@type': 'PostalAddress',
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.zip,
        addressCountry: address.country,
      }
    : undefined,
  sameAs: sameAs.length > 0 ? sameAs : undefined,
});

/**
 * WebSite schema
 */
export const createWebSiteSchema = ({
  name,
  url,
  description,
  publisher,
  searchUrl, // URL template for search, e.g., https://example.com/search?q={search_term_string}
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name,
  url,
  description,
  publisher: publisher
    ? { '@type': 'Organization', name: publisher }
    : undefined,
  potentialAction: searchUrl
    ? {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: searchUrl,
        },
        'query-input': 'required name=search_term_string',
      }
    : undefined,
});

/**
 * WebPage schema
 */
export const createWebPageSchema = ({
  name,
  description,
  url,
  authorName,
  publisherName,
  publisherLogo,
  datePublished,
  dateModified,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url,
  author: authorName ? { '@type': 'Person', name: authorName } : undefined,
  publisher: publisherName
    ? {
        '@type': 'Organization',
        name: publisherName,
        logo: publisherLogo
          ? { '@type': 'ImageObject', url: publisherLogo }
          : undefined,
      }
    : undefined,
  datePublished,
  dateModified,
});

/**
 * Article schema (Blog posts, news)
 */
export const createArticleSchema = ({
  headline,
  description,
  url,
  image,
  authorName,
  publisherName,
  publisherLogo,
  datePublished,
  dateModified,
  articleSection,
  keywords = [],
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline,
  description,
  image,
  author: { '@type': 'Person', name: authorName },
  publisher: {
    '@type': 'Organization',
    name: publisherName,
    logo: { '@type': 'ImageObject', url: publisherLogo },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  datePublished,
  dateModified: dateModified || datePublished,
  articleSection,
  keywords: keywords.length > 0 ? keywords : undefined,
});

/**
 * BreadcrumbList schema
 */
export const createBreadcrumbSchema = (items, baseUrl) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
      ? baseUrl
        ? new URL(item.url, baseUrl).toString()
        : item.url
      : undefined,
  })),
});

/**
 * Product schema (E-commerce)
 */
export const createProductSchema = ({
  name,
  description,
  image,
  sku,
  brand,
  offers,
  aggregateRating,
  reviews = [],
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  image,
  sku,
  brand: brand ? { '@type': 'Brand', name: brand } : undefined,
  offers: offers
    ? {
        '@type': 'Offer',
        url: offers.url,
        priceCurrency: offers.currency,
        price: offers.price,
        availability: offers.availability || 'https://schema.org/InStock',
        priceValidUntil: offers.priceValidUntil,
      }
    : undefined,
  aggregateRating: aggregateRating
    ? {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: aggregateRating.bestRating || 5,
        worstRating: aggregateRating.worstRating || 1,
      }
    : undefined,
  review:
    reviews.length > 0
      ? reviews.map((review) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: review.author },
          datePublished: review.datePublished,
          reviewBody: review.body,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: review.rating,
            bestRating: 5,
          },
        }))
      : undefined,
});

/**
 * Person schema
 */
export const createPersonSchema = ({
  name,
  url,
  image,
  jobTitle,
  description,
  email,
  telephone,
  sameAs = [],
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name,
  url,
  image,
  jobTitle,
  description,
  email,
  telephone,
  sameAs: sameAs.length > 0 ? sameAs : undefined,
});

/**
 * FAQ schema
 */
export const createFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

/**
 * Video schema
 */
export const createVideoSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration, // ISO 8601 format, e.g., "PT1M33S"
  contentUrl,
  embedUrl,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
});

/**
 * Course schema (Educational)
 */
export const createCourseSchema = ({
  name,
  description,
  provider,
  url,
  image,
  offers,
  aggregateRating,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name,
  description,
  provider: provider ? { '@type': 'Organization', name: provider } : undefined,
  url,
  image,
  offers: offers
    ? {
        '@type': 'Offer',
        category: offers.category || 'Paid',
        priceCurrency: offers.currency,
        price: offers.price,
      }
    : undefined,
  aggregateRating: aggregateRating
    ? {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
      }
    : undefined,
});
