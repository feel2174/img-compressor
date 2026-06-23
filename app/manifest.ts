import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PixelZipKit XP Image Compressor - Free Image Compression and WebP Conversion',
    short_name: 'PixelZipKit',
    description: 'Compress images and convert them to WebP directly in your browser.',
    start_url: '/ko',
    display: 'standalone',
    background_color: '#f8f7ef',
    theme_color: '#245edb',
    icons: [
      {
        src: '/icon-192x192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

