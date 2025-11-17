import { ImageResponse } from 'next/og';
import { locales, defaultLocale } from '@/i18n';
import { getMessages, setRequestLocale } from 'next-intl/server';

export const runtime = 'edge';
export const alt = 'Image Compressor - Free Online Image Optimization Tool';
export const size = {
  width: 1200,
  height: 630,
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
        {/* Main Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Icon/Logo Area */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                fontSize: '120px',
                marginRight: '20px',
              }}
            >
              🖼️
            </div>
            <div
              style={{
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                fontSize: '50px',
              }}
            >
              📦
            </div>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
              lineHeight: '1.1',
            }}
          >
            {seo.title}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '32px',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: '1.4',
            }}
          >
            {seo.description}
          </p>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              marginTop: '50px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '24px',
              }}
            >
              <span>⚡</span>
              <span style={{ color: 'white' }}>
                {validLocale === 'ko' ? '빠른 압축' : 'Fast Compression'}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '24px',
              }}
            >
              <span>🔒</span>
              <span style={{ color: 'white' }}>
                {validLocale === 'ko' ? '프라이버시 보호' : 'Privacy Protected'}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '24px',
              }}
            >
              <span>🆓</span>
              <span style={{ color: 'white' }}>
                {validLocale === 'ko' ? '완전 무료' : '100% Free'}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

