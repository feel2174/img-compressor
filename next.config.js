const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    const legacyRedirects = {
      "naver-blog-image-size-guide": "blog-image-optimization-checklist",
      "google-image-seo-alt-filename-guide": "webp-conversion-seo-guide",
      "product-thumbnail-compression-checklist": "ecommerce-product-image-compression-guide",
      "website-speed-core-web-vitals-images": "webp-conversion-seo-guide",
      "transparent-png-webp-guide": "jpg-png-webp-format-choice",
      "social-media-upload-image-compression": "mobile-photo-compression-before-upload",
      "email-attachment-image-size-guide": "mobile-photo-compression-before-upload",
      "portfolio-image-optimization-guide": "image-quality-60-70-80-comparison",
      "batch-image-compression-workflow": "blog-image-optimization-checklist",
    };

    return Object.entries(legacyRedirects).map(([source, destination]) => ({
      source: `/:locale(ko|en)/${source}`,
      destination: `/:locale/${destination}`,
      permanent: true,
    }));
  },
};

module.exports = withNextIntl(nextConfig);



