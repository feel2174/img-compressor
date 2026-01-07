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
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Main Container - White Card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '1100px',
            height: '580px',
            backgroundColor: 'white',
            borderRadius: '24px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            padding: '60px',
          }}
        >
          {/* Icon Area */}
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
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3)',
              }}
            >
              <div style={{ fontSize: '60px' }}>🖼️</div>
            </div>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#0f172a',
              textAlign: 'center',
              marginBottom: '40px',
              lineHeight: '1.1',
            }}
          >
            {validLocale === 'ko' ? '무료 이미지 압축기' : 'Free Image Compressor'}
          </h1>

          {/* Feature Cards */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            {/* 무료 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                padding: '20px 32px',
                borderRadius: '16px',
                boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.3)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                }}
              >
                💰
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '4px' }}>
                  {validLocale === 'ko' ? '완전' : 'Completely'}
                </div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>
                  {validLocale === 'ko' ? '무료' : 'Free'}
                </div>
              </div>
            </div>

            {/* 무제한 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                padding: '20px 32px',
                borderRadius: '16px',
                boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                }}
              >
                ∞
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '4px' }}>
                  {validLocale === 'ko' ? '제한' : 'Limit'}
                </div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>
                  {validLocale === 'ko' ? '무제한' : 'Unlimited'}
                </div>
              </div>
            </div>

            {/* 보안 100% */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                padding: '20px 32px',
                borderRadius: '16px',
                boxShadow: '0 10px 15px -3px rgba(168, 85, 247, 0.3)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                }}
              >
                🔒
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '4px' }}>
                  {validLocale === 'ko' ? '보안' : 'Security'}
                </div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>
                  100%
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: '#475569',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: '1.4',
            }}
          >
            {validLocale === 'ko' 
              ? '브라우저에서 바로 사용하는 안전한 이미지 압축 도구'
              : 'Safe image compression tool that works directly in your browser'}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

