/**
 * SEO Utilities
 * See docs/seo.md for detailed usage
 */

/**
 * Create SEO configuration (one-time setup)
 */
export const createSEOConfig = ({
  siteName,
  siteUrl,
  defaultTitle,
  defaultDescription,
  defaultImage,
  defaultKeywords = [],
  defaultAuthor = siteName,
  twitterHandle,
  locale = 'en_US',
  facebookAppId,
}) => {
  const baseUrl = siteUrl.replace(/\/$/, '');

  return {
    siteName,
    siteUrl: baseUrl,
    defaultTitle,
    defaultDescription,
    defaultImage,
    defaultKeywords,
    defaultAuthor,
    twitterHandle,
    locale,
    facebookAppId,
    metadataBase: new URL(baseUrl),
  };
};

/**
 * Build SEO metadata for a page
 * Merges page data with config defaults
 */
export const buildSeo = (config, pageData = {}) => {
  const {
    title = config.defaultTitle,
    description = config.defaultDescription,
    keywords = [],
    canonical,
    image,
    type = 'website',
    author = config.defaultAuthor,
    noindex = false,
    nofollow = false,
    article,
  } = pageData;

  const mergedKeywords = Array.from(
    new Set([...(config.defaultKeywords || []), ...keywords])
  );

  const canonicalUrl = canonical
    ? new URL(canonical, config.metadataBase).toString()
    : config.siteUrl;

  const ogImage = image || config.defaultImage;
  const ogImageUrl = ogImage?.startsWith('http')
    ? ogImage
    : new URL(ogImage, config.metadataBase).toString();

  const ogImages = [
    {
      url: ogImageUrl,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];

  const ogArticle =
    type === 'article' && article
      ? {
          authors: article.authors || [author],
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime || article.publishedTime,
          tags: article.tags,
          section: article.section,
        }
      : undefined;

  return {
    title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: author }],
    metadataBase: config.metadataBase,
    openGraph: {
      title,
      description,
      type,
      url: canonicalUrl,
      siteName: config.siteName,
      locale: config.locale,
      images: ogImages,
      article: ogArticle,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
      creator: config.twitterHandle,
      site: config.twitterHandle,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },
    ...(config.facebookAppId && {
      other: {
        'fb:app_id': config.facebookAppId,
      },
    }),
  };
};
