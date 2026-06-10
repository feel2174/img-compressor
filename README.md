# 이미지 압축기

무료 온라인 이미지 압축 도구입니다. 브라우저에서 직접 이미지를 압축하여 용량을 줄일 수 있습니다.

## 기능

- 🖼️ 드래그 앤 드롭으로 이미지 업로드
- ⚙️ 품질, 최대 너비/높이 조절 가능
- 📦 여러 이미지 동시 압축
- 💾 개별 또는 일괄 다운로드
- 🔒 모든 처리는 브라우저에서 이루어지며 서버로 전송되지 않음
- 📱 반응형 디자인
- 🌐 다국어 지원 (한국어, 영어)
- 🔍 SEO 최적화 (메타데이터, Open Graph, 구조화된 데이터)

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- React 18
- Tailwind CSS
- next-intl (다국어)
- browser-image-compression

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 다국어 지원

- 한국어 (`/ko`)
- 영어 (`/en`)

번역 파일은 `messages/` 폴더에 있습니다.

## SEO 최적화

다음 SEO 기능이 포함되어 있습니다:

- ✅ 메타데이터 최적화
- ✅ Open Graph 태그
- ✅ Twitter Card
- ✅ 구조화된 데이터 (JSON-LD)
- ✅ sitemap.xml 자동 생성
- ✅ robots.txt
- ✅ 다국어 hreflang 태그
- ✅ Canonical URL

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음을 추가하세요:

```env
NEXT_PUBLIC_BASE_URL=https://www.pixelzipkit.com
```

## Vercel 배포

1. GitHub에 프로젝트를 푸시합니다
2. [Vercel](https://vercel.com)에 로그인하고 새 프로젝트를 생성합니다
3. GitHub 저장소를 연결합니다
4. 환경 변수 `NEXT_PUBLIC_BASE_URL`을 설정합니다
5. 자동으로 배포가 시작됩니다

## Google AdSense 설정

1. AdSense 계정의 Publisher ID를 확인합니다.
2. Vercel 환경 변수에 `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx` 형식으로 등록합니다.
3. `public/ads.txt`의 Publisher ID가 실제 AdSense 계정 ID와 일치하는지 확인합니다.
4. 광고 슬롯 ID는 Google AdSense에서 광고 단위를 생성한 뒤 `AdSense` 컴포넌트 사용 위치에 전달합니다.
5. 승인 전에는 개인정보처리방침, 문의, 소개, 이용약관 페이지가 실제 도메인에서 접근 가능한지 확인합니다.

## 라이선스

MIT



