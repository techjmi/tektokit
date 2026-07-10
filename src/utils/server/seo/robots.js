/**
 * Generate robots.txt configuration for Next.js
 * Usage in app/robots.js:
 * 
 * import { generateRobots } from 'tektokit/server';
 * export default function robots() {
 *   return generateRobots({
 *     siteUrl: 'https://example.com',
 *     allow: ['/', '/blog', '/about'],
 *     disallow: ['/admin', '/dashboard'],
 *   });
 * }
 */

export const generateRobots = ({
  siteUrl,
  allow = ['/'],
  disallow = [],
  userAgent = '*',
  localUrl = 'http://localhost:3000',
}) => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? localUrl
      : (siteUrl || '').replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent,
        allow,
        disallow,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
};
