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
      "google-image-seo-alt-filename-guide": "jpg-png-webp-format-choice",
      "product-thumbnail-compression-checklist": "ecommerce-product-image-compression-guide",
      "website-speed-core-web-vitals-images": "jpg-png-webp-format-choice",
      "transparent-png-webp-guide": "jpg-png-webp-format-choice",
      "social-media-upload-image-compression": "blog-image-optimization-checklist",
      "email-attachment-image-size-guide": "blog-image-optimization-checklist",
      "portfolio-image-optimization-guide": "image-compression-benchmark-results",
      "batch-image-compression-workflow": "blog-image-optimization-checklist",
      "image-quality-60-70-80-comparison": "image-compression-benchmark-results",
      "mobile-photo-compression-before-upload": "blog-image-optimization-checklist",
      "webp-conversion-seo-guide": "jpg-png-webp-format-choice",
    };

    return Object.entries(legacyRedirects).map(([source, destination]) => ({
      source: `/:locale(ko|en)/${source}`,
      destination: `/:locale/${destination}`,
      permanent: true,
    }));
  },
};

module.exports = withNextIntl(nextConfig);


