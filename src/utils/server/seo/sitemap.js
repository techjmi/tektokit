/**
 * Generate sitemap configuration for Next.js
 * Usage in app/sitemap.js:
 * 
 * import { generateSitemap } from 'tektokit/server';
 * export default async function sitemap() {
 *   return generateSitemap({
 *     siteUrl: 'https://example.com',
 *     staticRoutes: ['/', '/about', '/blog'],
 *     dynamicRoutes: await getBlogPosts(), // [{ url: '/blog/post-1', lastModified: '...' }]
 *   });
 * }
 */

export const generateSitemap = ({
  siteUrl,
  staticRoutes = [],
  dynamicRoutes = [],
  defaultChangeFrequency = 'daily',
  defaultPriority = 0.7,
}) => {
  const baseUrl = (siteUrl || '').replace(/\/$/, '');
  
  // Helper to build absolute URLs
  const ABS = (path) => {
    try {
      return new URL(path, baseUrl).toString();
    } catch {
      return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
    }
  };

  // Map static routes
  const staticEntries = staticRoutes.map((path) => ({
    url: ABS(path),
    changeFrequency: defaultChangeFrequency,
    priority: defaultPriority,
  }));

  // Map dynamic routes (expects array of objects with url, lastModified, etc.)
  const dynamicEntries = dynamicRoutes.map((route) => {
    if (typeof route === 'string') {
      return {
        url: ABS(route),
        changeFrequency: defaultChangeFrequency,
        priority: defaultPriority,
      };
    }
    
    return {
      url: ABS(route.url || route.path || route.slug || ''),
      lastModified: route.lastModified || route.updatedAt || route.date,
      changeFrequency: route.changeFrequency || defaultChangeFrequency,
      priority: route.priority ?? defaultPriority,
    };
  });

  return [...staticEntries, ...dynamicEntries];
};
