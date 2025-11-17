import { ImageResponse } from 'next/og';
import { locales, defaultLocale } from '@/i18n';
import { getMessages, setRequestLocale } from 'next-intl/server';

export const runtime = 'edge';
export const alt = 'Image Compressor - Free Online Image Optimization Tool';
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const { locale } = await Promise.resolve(params);
  const validLocale = locales.includes(locale as any) ? locale : defaultLocale;
  
  // Enable static rendering
  setRequestLocale(validLocale);
  
  const messages = await getMessages({ locale: validLocale });
  const seo = messages.seo as {
    title: string;
    description: string;
  };

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px',
            }}
          >
            <div style={{ fontSize: '100px', marginRight: '20px' }}>🖼️</div>
          </div>

          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
              lineHeight: '1.1',
            }}
          >
            {seo.title}
          </h1>

          <p
            style={{
              fontSize: '28px',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: '1.4',
            }}
          >
            {seo.description}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

