import { MetadataRoute } from 'next';
import { defaultLocale } from '@/i18n';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

