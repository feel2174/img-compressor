import type { Locale } from "@/i18n";

export const articleSlugs = [
  "blog-image-optimization-checklist",
  "ecommerce-product-image-compression-guide",
  "jpg-png-webp-format-choice",
  "image-quality-60-70-80-comparison",
  "mobile-photo-compression-before-upload",
  "webp-conversion-seo-guide",
] as const;

export type ArticleSlug = (typeof articleSlugs)[number];

export type ArticlePage = {
  title: string;
  description: string;
  label: string;
  paragraphs: string[];
  bullets: string[];
  faqs?: { question: string; answer: string }[];
};

export const articlePages = {
  ko: {
    "blog-image-optimization-checklist": {
      title: "블로그 이미지 최적화 체크리스트",
      description:
        "블로그 글을 발행하기 전 이미지 크기, 파일명, 포맷, 압축 품질을 점검하는 실전 체크리스트입니다.",
      label: "블로그 체크리스트",
      paragraphs: [
        "블로그 이미지는 글의 첫인상과 체류 시간에 직접 영향을 줍니다. 검색 결과에서 유입된 사용자는 본문이 늦게 열리거나 사진이 한참 뒤에 보이면 바로 이탈할 수 있으므로, 업로드 전 이미지 용량을 줄이고 본문 폭에 맞는 크기로 정리하는 과정이 필요합니다.",
        "상위 이미지 최적화 가이드들은 공통적으로 원본 사진을 그대로 올리지 말고, 표시되는 크기에 맞춰 리사이즈한 뒤 JPG 또는 WebP로 압축하라고 안내합니다. 본문 사진은 보통 1200px 안팎이면 충분한 경우가 많고, 확대 확인이 필요한 튜토리얼 이미지만 더 큰 해상도를 남기는 방식이 효율적입니다.",
        "파일명과 대체 텍스트도 함께 정리해야 합니다. `IMG_3021.jpg`보다 `blog-image-compression-checklist.webp`처럼 내용이 드러나는 이름이 관리와 검색 이해에 모두 유리합니다. 대체 텍스트는 키워드를 나열하기보다 이미지가 본문에서 어떤 정보를 보완하는지 설명하는 문장으로 작성하는 편이 좋습니다.",
        "발행 직전에는 원본과 압축 결과를 100% 보기로 비교하고, 글 목록 썸네일과 본문 대표 이미지가 모두 빠르게 열리는지 확인하세요. 품질은 75~85 사이에서 시작하고, 풍경이나 음식 사진처럼 질감이 중요한 이미지는 조금 높게, 설명용 캡처는 글자가 흐려지지 않는지 먼저 확인하는 방식이 안전합니다.",
      ],
      bullets: [
        "본문 폭보다 큰 원본 이미지는 먼저 리사이즈합니다.",
        "사진은 JPG 또는 WebP, 투명 이미지와 UI 캡처는 PNG 또는 WebP를 비교합니다.",
        "대표 이미지, 본문 이미지, 썸네일을 각각 다른 목적에 맞게 압축합니다.",
        "파일명과 alt 텍스트는 이미지 내용을 설명하는 자연어로 작성합니다.",
        "발행 전 모바일 화면에서 이미지 로딩과 글자 선명도를 확인합니다.",
      ],
      faqs: [
        {
          question: "블로그 이미지는 무조건 WebP가 좋은가요?",
          answer:
            "대부분의 웹 게시물에는 WebP가 효율적이지만, 일부 플랫폼이나 편집 도구가 WebP를 제한할 수 있습니다. 업로드 위치가 WebP를 지원하는지 확인한 뒤 사용하세요.",
        },
        {
          question: "품질을 너무 낮추면 SEO에 불리한가요?",
          answer:
            "파일은 작아져도 이미지가 흐리거나 본문 이해를 방해하면 사용자 경험이 나빠집니다. 검색 최적화는 속도와 콘텐츠 이해가 함께 좋아야 효과가 있습니다.",
        },
      ],
    },
    "ecommerce-product-image-compression-guide": {
      title: "쇼핑몰 상품 이미지 용량 줄이기 가이드",
      description:
        "상품 사진, 상세 페이지, 목록 썸네일의 용량을 줄이면서 구매 판단에 필요한 디테일을 유지하는 방법입니다.",
      label: "쇼핑몰 이미지",
      paragraphs: [
        "쇼핑몰 이미지는 단순히 예쁘게 보이는 것을 넘어 구매 판단을 돕는 정보입니다. 로딩이 느리면 상품 목록 이탈이 늘고, 과하게 압축하면 소재감과 색감이 무너져 신뢰를 떨어뜨릴 수 있습니다. 그래서 상품 이미지는 위치별로 다른 기준을 적용하는 것이 좋습니다.",
        "목록 썸네일은 빠른 탐색이 중요하므로 더 강하게 압축해도 됩니다. 반면 상세 페이지의 대표 컷, 색상 비교 컷, 질감 확대 컷은 사용자가 확대해서 확인할 가능성이 있으므로 품질을 80 전후로 유지하고 WebP 결과를 원본과 함께 비교하는 편이 안전합니다.",
        "국내 쇼핑 플랫폼은 상품 이미지 용량이나 권장 해상도 제한을 두는 경우가 많습니다. 실제 입점 채널의 가이드를 먼저 확인한 뒤, 그 기준보다 여유 있게 작은 파일을 만드는 것이 업로드 실패와 재작업을 줄이는 방법입니다.",
        "상품 이미지 파일명은 색상, 모델명, 각도처럼 관리에 필요한 정보를 담아두면 좋습니다. 예를 들어 `linen-shirt-white-front.webp`처럼 저장하면 이후 썸네일 교체, 광고 소재 제작, 이미지 검색 최적화 작업에서 혼선을 줄일 수 있습니다.",
      ],
      bullets: [
        "목록 썸네일은 작고 가볍게, 상세 이미지는 디테일을 유지합니다.",
        "상품 색상과 질감이 중요한 컷은 품질 80 전후에서 시작합니다.",
        "플랫폼 업로드 제한보다 여유 있게 작은 용량으로 준비합니다.",
        "색상명, 상품명, 촬영 각도를 파일명에 반영합니다.",
        "압축 후 모바일 상품 상세 페이지에서 실제 구매 흐름을 확인합니다.",
      ],
    },
    "jpg-png-webp-format-choice": {
      title: "JPG / PNG / WebP 차이와 선택 기준",
      description:
        "사진, 로고, 투명 배경, 스크린샷에 맞춰 JPG, PNG, WebP 중 어떤 포맷을 선택할지 정리합니다.",
      label: "포맷 선택",
      paragraphs: [
        "이미지 최적화에서 포맷 선택은 품질 슬라이더만큼 중요합니다. 같은 사진이라도 JPG, PNG, WebP 중 무엇으로 저장하느냐에 따라 파일 크기와 선명도가 크게 달라집니다. 포맷을 잘못 고르면 압축을 해도 용량이 줄지 않거나, 투명 배경이 사라질 수 있습니다.",
        "JPG는 사진처럼 색상 변화가 자연스럽고 복잡한 이미지에 적합합니다. 손실 압축을 사용하기 때문에 용량을 크게 줄일 수 있지만, 반복 저장하거나 품질을 과하게 낮추면 경계면과 그라데이션에 압축 흔적이 생길 수 있습니다.",
        "PNG는 투명 배경, 로고, 아이콘, UI 캡처처럼 선명한 경계가 중요한 이미지에 강합니다. 다만 사진을 PNG로 저장하면 용량이 커지기 쉽습니다. 투명도가 필요한 이미지라면 PNG와 WebP 결과를 비교해 더 작은 쪽을 선택하는 것이 좋습니다.",
        "WebP는 손실/무손실 압축과 투명도를 모두 지원하는 현대적인 웹 이미지 포맷입니다. 최신 브라우저에서는 널리 지원되며, JPG나 PNG보다 작은 결과가 나오는 경우가 많습니다. 단, 일부 오래된 편집 프로그램이나 플랫폼 호환성은 확인해야 합니다.",
      ],
      bullets: [
        "일반 사진은 JPG 또는 손실 WebP를 먼저 테스트합니다.",
        "투명 로고는 PNG 또는 투명 WebP를 사용합니다.",
        "UI 캡처는 글자가 흐려지지 않는지 가장 먼저 확인합니다.",
        "호환성이 중요한 첨부 파일은 JPG가 안전한 선택일 수 있습니다.",
        "최종 선택은 용량, 품질, 업로드 위치의 지원 여부를 함께 봅니다.",
      ],
      faqs: [
        {
          question: "PNG를 JPG로 바꾸면 왜 배경이 하얗게 되나요?",
          answer:
            "JPG는 투명도를 지원하지 않기 때문입니다. 투명 배경을 유지해야 한다면 PNG 또는 투명 WebP를 선택해야 합니다.",
        },
      ],
    },
    "image-quality-60-70-80-comparison": {
      title: "이미지 품질 60 / 70 / 80 설정 비교",
      description:
        "압축 품질 60, 70, 80의 차이를 이해하고 블로그, 쇼핑몰, 썸네일에 맞는 기준을 고르는 방법입니다.",
      label: "품질 비교",
      paragraphs: [
        "이미지 압축 품질 값은 숫자가 낮을수록 파일이 작아지고, 높을수록 원본에 가까워집니다. 하지만 80에서 90으로 올린다고 체감 품질이 크게 좋아지지 않는 이미지도 있고, 70 아래로 낮추면 갑자기 뭉개짐이 보이는 이미지도 있습니다.",
        "품질 80은 블로그 대표 이미지, 상품 사진, 포트폴리오처럼 시각적 신뢰가 중요한 경우의 출발점으로 좋습니다. 용량 절감과 선명도의 균형이 비교적 안정적이며, 대부분의 사진에서 원본과 차이를 크게 느끼기 어렵습니다.",
        "품질 70은 일반 본문 이미지, 설명용 사진, 모바일 중심 콘텐츠에 적합합니다. 화면에서 작게 보이는 이미지라면 70 정도로도 충분히 자연스럽게 보일 수 있습니다. 다만 텍스트가 포함된 캡처나 제품 라벨은 확대해서 확인해야 합니다.",
        "품질 60은 썸네일, 임시 공유용 이미지, 대량 업로드 전 미리보기처럼 용량 절감이 더 중요한 상황에 어울립니다. 그러나 인물 얼굴, 제품 질감, 작은 글자, 그라데이션이 많은 이미지는 압축 흔적이 드러날 수 있으므로 주의가 필요합니다.",
      ],
      bullets: [
        "품질 80: 대표 이미지, 상품 사진, 포트폴리오에 적합합니다.",
        "품질 70: 블로그 본문과 일반 웹 이미지의 균형점입니다.",
        "품질 60: 썸네일과 용량 제한 대응에 유용합니다.",
        "텍스트가 포함된 이미지는 낮은 품질에서 흐림이 쉽게 보입니다.",
        "결과 파일은 원본과 나란히 비교한 뒤 다운로드합니다.",
      ],
    },
    "mobile-photo-compression-before-upload": {
      title: "모바일 사진 업로드 전 압축 가이드",
      description:
        "스마트폰 사진을 블로그, 쇼핑몰, 신청서, 메신저에 올리기 전 용량을 줄이는 실전 방법입니다.",
      label: "모바일 사진",
      paragraphs: [
        "최근 스마트폰 사진은 한 장만으로도 수 MB를 넘는 경우가 흔합니다. 원본 그대로 블로그나 쇼핑몰에 올리면 업로드가 느려지고, 모바일 방문자는 데이터를 더 많이 사용하게 됩니다. 업로드 전 압축은 가장 간단한 성능 개선입니다.",
        "모바일 사진은 먼저 목적을 정해야 합니다. 기록 보관용 원본은 따로 남기고, 웹 게시용 이미지만 압축하세요. 본문에 표시할 사진이라면 가로 1200~1600px 정도로도 충분한 경우가 많고, SNS나 썸네일용은 더 작게 준비해도 됩니다.",
        "품질은 70~80 사이에서 시작하는 것이 좋습니다. 음식, 인물, 제품 사진처럼 질감과 색감이 중요한 경우에는 80에 가깝게 두고, 단순 배경이나 안내용 사진은 70 정도까지 낮춰도 자연스러운 결과가 나올 수 있습니다.",
        "모바일 브라우저에서 바로 처리하는 방식은 별도 앱 설치가 필요 없고, 사진을 서버로 올리지 않아도 된다는 장점이 있습니다. 다만 매우 큰 사진을 여러 장 동시에 처리하면 기기 성능에 따라 시간이 걸릴 수 있으므로, 필요한 사진부터 묶어서 처리하는 방식이 좋습니다.",
      ],
      bullets: [
        "원본 보관용과 업로드용 파일을 분리합니다.",
        "웹 게시용 사진은 표시 크기에 맞춰 줄입니다.",
        "품질 70~80에서 시작해 결과를 비교합니다.",
        "대량 사진은 몇 장씩 나누어 처리하면 안정적입니다.",
        "업로드 후 모바일 화면에서 로딩과 선명도를 확인합니다.",
      ],
    },
    "webp-conversion-seo-guide": {
      title: "WebP 변환이 SEO에 도움이 되는 이유",
      description:
        "WebP 변환이 페이지 속도, 사용자 경험, 이미지 검색 최적화에 어떤 영향을 주는지 설명합니다.",
      label: "WebP SEO",
      paragraphs: [
        "WebP 변환 자체가 검색 순위를 보장하지는 않습니다. 하지만 작은 이미지 파일은 페이지 로딩을 빠르게 만들고, 빠른 로딩은 사용자 경험과 성능 지표를 개선하는 데 도움이 됩니다. 검색 최적화는 이런 작은 개선이 쌓여 만들어집니다.",
        "Google은 WebP가 웹을 위한 현대적인 이미지 포맷이며, 손실/무손실 압축과 투명도를 지원한다고 설명합니다. 실제 웹사이트에서는 같은 시각 품질에서 JPG나 PNG보다 작은 파일이 나오는 경우가 많아 이미지가 많은 페이지에서 효과가 큽니다.",
        "SEO 관점에서는 포맷 변환만으로 충분하지 않습니다. 이미지 파일명, alt 텍스트, 주변 본문 맥락, 적절한 크기, 지연 로딩 구현까지 함께 점검해야 합니다. WebP는 그중 파일 크기를 줄이는 강력한 선택지로 이해하는 것이 정확합니다.",
        "실무에서는 원본 이미지를 보관하고, 웹 게시용으로 WebP를 만든 뒤 실제 페이지에서 문제가 없는지 확인하는 흐름이 좋습니다. 일부 외부 채널이나 오래된 편집 도구는 WebP를 제한할 수 있으므로, 필요하면 JPG 대체본도 함께 준비하세요.",
      ],
      bullets: [
        "WebP는 작은 파일로 페이지 속도 개선에 도움을 줄 수 있습니다.",
        "검색 순위는 속도, 콘텐츠 품질, 접근성 등 여러 요소가 함께 작용합니다.",
        "파일명과 alt 텍스트를 함께 정리해야 이미지 SEO 효과가 커집니다.",
        "외부 플랫폼 호환성이 필요하면 JPG 대체본을 준비합니다.",
        "압축 결과가 원본보다 큰 경우에는 원본 포맷을 유지합니다.",
      ],
    },
    "naver-blog-image-size-guide": {
      title: "네이버 블로그 이미지 용량 줄이기 가이드",
      description:
        "네이버 블로그에 올릴 사진을 선명하게 유지하면서 빠르게 열리도록 압축하는 방법입니다.",
      label: "네이버 블로그",
      paragraphs: [
        "네이버 블로그는 모바일 방문 비중이 높기 때문에 이미지가 너무 크면 글을 읽기 전부터 피로감을 줄 수 있습니다. 특히 여행, 맛집, 제품 리뷰처럼 사진이 많은 글은 업로드 전 압축만으로도 체감 속도가 좋아질 수 있습니다.",
        "블로그 본문 사진은 화면 폭보다 과하게 클 필요가 없습니다. 원본이 4000px 이상이라면 웹 표시용으로 줄이고, 품질은 75~85 범위에서 시작하세요. 리뷰 사진처럼 디테일이 중요한 경우에는 80 이상을 먼저 테스트하는 편이 좋습니다.",
        "이미지 파일명은 개인 보관에는 큰 차이가 없어 보여도, 콘텐츠 관리에는 중요합니다. 날짜, 주제, 장소, 제품명 등을 반영하면 나중에 같은 사진을 다시 찾거나 썸네일을 교체할 때 훨씬 편합니다.",
        "블로그 플랫폼이 업로드 후 이미지를 다시 변환할 수 있으므로, 너무 낮은 품질로 먼저 압축하면 재압축 과정에서 품질이 더 떨어질 수 있습니다. 원본과 압축본을 비교하고, 눈에 띄는 열화가 없는 수준에서 저장하는 것이 좋습니다.",
      ],
      bullets: [
        "사진이 많은 글은 업로드 전 일괄 압축합니다.",
        "본문용 이미지는 표시 폭에 맞게 리사이즈합니다.",
        "리뷰 사진은 품질 80 전후로 먼저 테스트합니다.",
        "장소명, 제품명, 주제를 파일명에 반영합니다.",
        "업로드 후 모바일에서 대표 이미지와 본문 사진을 확인합니다.",
      ],
    },
    "google-image-seo-alt-filename-guide": {
      title: "Google 이미지 SEO: 파일명과 alt 텍스트 작성법",
      description:
        "검색엔진이 이미지를 이해하도록 돕는 파일명, 대체 텍스트, 주변 문맥 작성 기준입니다.",
      label: "이미지 SEO",
      paragraphs: [
        "Google 이미지 검색 최적화는 단순히 파일 용량을 줄이는 작업이 아닙니다. 검색엔진은 이미지 파일명, alt 텍스트, 캡션, 주변 본문, 페이지 제목 같은 신호를 함께 해석합니다. 이미지를 설명하는 텍스트가 명확할수록 검색엔진과 사용자 모두에게 도움이 됩니다.",
        "파일명은 짧고 구체적으로 작성하세요. `image1.webp`보다 `webp-compression-quality-comparison.webp`처럼 이미지 주제가 드러나는 이름이 좋습니다. 한글 파일명도 사용할 수 있지만, 여러 시스템 호환성을 고려하면 영문 소문자와 하이픈 조합이 관리하기 쉽습니다.",
        "alt 텍스트는 이미지가 보이지 않을 때 대신 읽히는 설명입니다. 키워드를 반복하기보다 이미지가 전달하는 정보를 자연스럽게 적어야 합니다. 예를 들어 버튼 캡처라면 버튼의 기능을, 상품 사진이라면 상품의 색상과 형태를 설명하는 식입니다.",
        "이미지 주변 본문도 중요합니다. 본문과 무관한 이미지를 넣고 alt에만 키워드를 채우는 방식은 사용자 경험에 도움이 되지 않습니다. 이미지가 글의 어떤 부분을 설명하는지 자연스럽게 연결될 때 검색 친화적인 콘텐츠가 됩니다.",
      ],
      bullets: [
        "파일명은 이미지 내용을 설명하는 영문 소문자와 하이픈으로 정리합니다.",
        "alt 텍스트는 키워드 나열이 아니라 이미지 설명으로 작성합니다.",
        "본문 문맥과 관련 있는 이미지만 사용합니다.",
        "장식용 이미지는 과도한 설명을 넣지 않습니다.",
        "이미지 용량과 접근성 텍스트를 함께 점검합니다.",
      ],
    },
    "product-thumbnail-compression-checklist": {
      title: "상품 썸네일 이미지 압축 체크리스트",
      description:
        "쇼핑몰 목록, 카테고리, 추천 영역에 쓰는 상품 썸네일을 빠르고 선명하게 만드는 기준입니다.",
      label: "상품 썸네일",
      paragraphs: [
        "상품 썸네일은 사용자가 목록에서 가장 먼저 보는 이미지입니다. 작게 보이지만 페이지에 수십 장이 동시에 노출되므로 전체 로딩 속도에 큰 영향을 줍니다. 썸네일 최적화는 쇼핑몰 성능 개선에서 우선순위가 높은 작업입니다.",
        "썸네일은 실제 표시 크기보다 지나치게 큰 원본을 사용할 필요가 없습니다. 카드형 목록에서 300~600px 정도로 보이는 이미지를 2000px 원본 그대로 넣으면 네트워크 비용만 늘어납니다. 표시 영역에 맞춰 리사이즈하고 압축하는 것이 좋습니다.",
        "압축 품질은 65~75 정도부터 테스트해볼 수 있습니다. 썸네일은 작게 보이기 때문에 상세 이미지보다 낮은 품질도 자연스럽게 보이는 경우가 많습니다. 다만 패션, 뷰티, 인테리어처럼 색감이 구매 판단에 중요한 카테고리는 결과를 더 꼼꼼히 비교해야 합니다.",
        "썸네일은 배경과 상품의 대비가 중요합니다. 압축 후 경계가 흐려지거나 흰 배경에 노이즈가 생기면 클릭률에 영향을 줄 수 있습니다. 여러 상품을 같은 기준으로 압축하되, 대표 상품 이미지는 별도로 확인하는 습관이 필요합니다.",
      ],
      bullets: [
        "실제 목록 카드 크기에 맞춰 리사이즈합니다.",
        "썸네일은 상세 이미지보다 강하게 압축해도 됩니다.",
        "색감이 중요한 카테고리는 품질을 조금 높게 둡니다.",
        "흰 배경 노이즈와 상품 경계 흐림을 확인합니다.",
        "카테고리 목록 전체 로딩 속도를 기준으로 판단합니다.",
      ],
    },
    "website-speed-core-web-vitals-images": {
      title: "웹사이트 속도와 Core Web Vitals를 위한 이미지 최적화",
      description:
        "이미지 용량, 표시 크기, 지연 로딩, WebP 변환이 웹 성능 지표에 미치는 영향을 정리합니다.",
      label: "웹 성능",
      paragraphs: [
        "웹페이지에서 이미지는 가장 큰 리소스가 되는 경우가 많습니다. 대표 이미지가 늦게 뜨면 사용자는 페이지가 느리다고 느끼고, 이미지 크기가 지정되지 않으면 로딩 중 레이아웃이 흔들릴 수 있습니다. 이미지 최적화는 성능 개선의 기본입니다.",
        "Core Web Vitals 관점에서는 LCP 대상 이미지가 특히 중요합니다. 첫 화면의 큰 이미지가 너무 무겁다면 페이지의 주요 콘텐츠가 늦게 표시됩니다. 이 이미지는 표시 크기에 맞춰 줄이고, WebP 같은 효율적인 포맷을 테스트하는 것이 좋습니다.",
        "본문 아래쪽 이미지는 지연 로딩을 사용할 수 있지만, 검색엔진이 접근할 수 있는 방식으로 구현해야 합니다. 이미지 URL이 렌더링된 HTML에서 확인 가능하고, 스크롤이나 클릭 같은 사용자 행동에만 의존하지 않는 구조가 안전합니다.",
        "이미지를 압축할 때는 품질만 보지 말고 너비와 높이 속성, 반응형 이미지, 캐싱 정책까지 함께 봐야 합니다. 도구로 파일을 줄이는 일은 시작점이고, 실제 페이지에서 어떻게 불러오는지가 최종 성능을 결정합니다.",
      ],
      bullets: [
        "첫 화면 대표 이미지는 가장 먼저 최적화합니다.",
        "표시 크기보다 큰 이미지는 리사이즈합니다.",
        "WebP 변환으로 파일 크기를 줄일 수 있는지 비교합니다.",
        "이미지 너비와 높이를 지정해 레이아웃 흔들림을 줄입니다.",
        "아래쪽 이미지는 검색 친화적인 지연 로딩을 적용합니다.",
      ],
    },
    "transparent-png-webp-guide": {
      title: "투명 PNG를 WebP로 변환할 때 주의할 점",
      description:
        "로고, 아이콘, 누끼 이미지의 투명 배경을 유지하면서 파일 용량을 줄이는 방법입니다.",
      label: "투명 이미지",
      paragraphs: [
        "투명 PNG는 로고, 아이콘, 상품 누끼 이미지에 자주 쓰입니다. 하지만 사진처럼 복잡한 누끼 이미지를 PNG로 저장하면 용량이 매우 커질 수 있습니다. 이때 투명도를 지원하는 WebP를 비교해보면 더 작은 결과를 얻을 수 있습니다.",
        "중요한 점은 투명 배경이 필요한 이미지를 JPG로 변환하면 안 된다는 것입니다. JPG는 알파 채널을 지원하지 않아 배경이 흰색 또는 다른 색으로 채워질 수 있습니다. 투명도를 유지하려면 PNG 또는 WebP를 선택해야 합니다.",
        "로고와 아이콘은 경계가 선명해야 하므로 압축 후 가장자리에 번짐이나 색 번짐이 생기지 않는지 확인하세요. 작은 아이콘은 용량 차이가 크지 않을 수 있으므로, 품질보다 선명도를 우선하는 판단도 필요합니다.",
        "상품 누끼 이미지는 배경과 상품 경계가 구매 신뢰에 영향을 줍니다. WebP 변환 후 투명 영역이 유지되는지, 흰 배경과 어두운 배경에서 모두 자연스럽게 보이는지 확인하면 실수를 줄일 수 있습니다.",
      ],
      bullets: [
        "투명도가 필요하면 JPG 변환을 피합니다.",
        "PNG와 WebP 결과의 용량과 가장자리 품질을 비교합니다.",
        "로고는 선명도, 상품 누끼는 경계 자연스러움을 확인합니다.",
        "밝은 배경과 어두운 배경에서 모두 미리 봅니다.",
        "작은 아이콘은 무리하게 압축하지 않아도 됩니다.",
      ],
    },
    "social-media-upload-image-compression": {
      title: "SNS 업로드용 이미지 압축 가이드",
      description:
        "인스타그램, X, 페이스북, 커뮤니티 업로드 전 사진 용량과 품질을 균형 있게 줄이는 방법입니다.",
      label: "SNS 이미지",
      paragraphs: [
        "SNS 플랫폼은 업로드된 이미지를 다시 압축하거나 리사이즈하는 경우가 많습니다. 이미지를 너무 낮은 품질로 줄인 뒤 다시 플랫폼 압축을 거치면 선명도가 더 떨어질 수 있습니다. 업로드 전 압축은 적당한 수준이 중요합니다.",
        "피드용 사진은 화면에서 빠르게 소비되므로 과도한 원본 해상도가 필요하지 않습니다. 다만 인물, 음식, 제품처럼 시각적 인상이 중요한 이미지는 품질 75~85 사이에서 시작하고, 텍스트가 들어간 카드뉴스는 글자 경계가 흐려지지 않는지 확인해야 합니다.",
        "SNS는 플랫폼별 권장 비율이 다릅니다. 압축 전에 정사각형, 세로형, 가로형 등 게시 위치에 맞춰 자르거나 리사이즈하면 불필요한 데이터가 줄고, 업로드 후 자동 크롭으로 중요한 부분이 잘리는 문제도 줄어듭니다.",
        "커뮤니티나 메신저 공유용 이미지는 용량 제한이 더 직접적인 문제일 수 있습니다. 이 경우 품질 70 이하도 테스트할 수 있지만, 최종적으로는 읽어야 할 글자와 핵심 피사체가 충분히 선명한지 기준으로 판단하세요.",
      ],
      bullets: [
        "플랫폼 권장 비율에 맞춘 뒤 압축합니다.",
        "카드뉴스는 텍스트 선명도를 가장 먼저 확인합니다.",
        "피드 사진은 품질 75~85에서 시작합니다.",
        "용량 제한 대응용 이미지는 품질 60~70도 테스트합니다.",
        "플랫폼 재압축을 고려해 너무 낮은 품질은 피합니다.",
      ],
    },
    "email-attachment-image-size-guide": {
      title: "이메일 첨부용 사진 용량 줄이기",
      description:
        "메일 첨부 제한에 걸리지 않도록 사진 여러 장의 용량을 줄이고 호환성 좋은 포맷을 고르는 방법입니다.",
      label: "이메일 첨부",
      paragraphs: [
        "이메일은 첨부 용량 제한이 있어 스마트폰 원본 사진 여러 장을 그대로 보내면 실패하는 경우가 많습니다. 이때 필요한 것은 최고 품질 원본이 아니라 상대방이 빠르게 열어볼 수 있는 적절한 크기의 공유용 이미지입니다.",
        "업무 메일이나 공공기관 제출처럼 호환성이 중요한 상황에서는 JPG가 여전히 안전한 선택입니다. WebP는 웹에서 효율적이지만, 수신자의 오래된 뷰어 또는 업무 시스템이 WebP를 열지 못할 수 있습니다.",
        "사진 확인용이라면 가로 1200~1600px 정도로 줄이고 품질 70~80을 적용해도 충분한 경우가 많습니다. 인쇄나 디자인 작업을 위한 원본 전달이라면 압축본 대신 클라우드 링크나 원본 파일 전달 방식을 고려하는 편이 좋습니다.",
        "여러 장을 보낼 때는 파일명을 정리해두면 수신자가 내용을 파악하기 쉽습니다. `site-visit-01.jpg`, `product-sample-blue.jpg`처럼 순서와 내용을 담으면 메일 본문 설명과도 자연스럽게 연결됩니다.",
      ],
      bullets: [
        "호환성이 중요하면 JPG를 우선 고려합니다.",
        "확인용 사진은 표시 크기에 맞춰 줄입니다.",
        "인쇄용 원본은 압축하지 말고 별도 전달합니다.",
        "여러 장은 순서가 보이도록 파일명을 정리합니다.",
        "첨부 전 전체 용량을 확인합니다.",
      ],
    },
    "portfolio-image-optimization-guide": {
      title: "포트폴리오 이미지 최적화 가이드",
      description:
        "디자인, 사진, 개발 포트폴리오에서 시각 품질을 지키면서 페이지 속도를 개선하는 이미지 압축 기준입니다.",
      label: "포트폴리오",
      paragraphs: [
        "포트폴리오 사이트는 이미지 품질이 곧 신뢰입니다. 하지만 고해상도 결과물을 원본 그대로 올리면 첫 화면 로딩이 느려지고, 방문자가 작품을 보기도 전에 이탈할 수 있습니다. 포트폴리오 최적화는 품질을 지키는 압축이 핵심입니다.",
        "대표 작품 이미지는 품질 80 이상에서 시작하는 것이 좋습니다. 작은 썸네일과 목록 이미지는 더 강하게 압축하되, 상세 페이지에서 확대해서 보는 이미지는 선명도를 더 우선해야 합니다. 같은 작품이라도 위치별로 다른 파일을 준비하면 효율적입니다.",
        "디자인 포트폴리오의 UI 캡처는 텍스트와 얇은 선이 많아 낮은 품질에서 흐려지기 쉽습니다. 이런 이미지는 PNG 또는 무손실에 가까운 WebP를 비교하고, 사진 중심 작품은 손실 WebP를 테스트하는 방식이 좋습니다.",
        "검색 노출을 고려한다면 작품명, 역할, 프로젝트 유형을 파일명과 alt 텍스트에 자연스럽게 반영하세요. 단, 포트폴리오의 핵심은 사용자가 작품을 이해하는 것이므로 키워드보다 정확한 설명이 우선입니다.",
      ],
      bullets: [
        "대표 작품은 품질 80 이상에서 시작합니다.",
        "썸네일과 상세 이미지를 분리해 준비합니다.",
        "UI 캡처는 텍스트 선명도를 기준으로 판단합니다.",
        "사진 작품은 WebP 변환 결과를 비교합니다.",
        "작품명과 역할을 파일명과 alt 텍스트에 반영합니다.",
      ],
    },
    "batch-image-compression-workflow": {
      title: "여러 이미지 한 번에 압축하는 작업 흐름",
      description:
        "블로그, 쇼핑몰, SNS 업로드를 준비할 때 여러 이미지를 일괄 압축하고 검수하는 실전 순서입니다.",
      label: "일괄 압축",
      paragraphs: [
        "이미지가 많을수록 한 장씩 압축하는 방식은 시간이 오래 걸리고 기준도 흔들리기 쉽습니다. 일괄 압축은 같은 목적의 이미지를 한 번에 처리해 작업 시간을 줄이고, 전체 콘텐츠의 품질 기준을 일정하게 유지하는 데 도움이 됩니다.",
        "먼저 이미지를 목적별로 나누세요. 대표 이미지, 본문 이미지, 썸네일, 제출용 첨부 파일은 적정 크기와 포맷이 다릅니다. 한 폴더에 모두 넣고 같은 품질로 압축하면 어떤 이미지는 과하게 줄고, 어떤 이미지는 여전히 클 수 있습니다.",
        "두 번째는 기준값을 정하는 단계입니다. 블로그 본문은 품질 75~85, 썸네일은 65~75, 상품 상세는 80 전후처럼 시작값을 두고 샘플 몇 장을 먼저 비교하세요. 샘플 결과가 자연스러우면 나머지를 같은 기준으로 처리하면 됩니다.",
        "마지막으로 결과 목록을 확인하면서 원본보다 커진 파일, 글자가 흐려진 캡처, 투명 배경이 사라진 이미지가 없는지 점검합니다. 일괄 작업일수록 예외 파일을 찾는 검수 단계가 중요합니다.",
      ],
      bullets: [
        "대표 이미지, 본문 이미지, 썸네일을 목적별로 분리합니다.",
        "샘플 몇 장으로 품질 기준을 먼저 정합니다.",
        "동일한 목적의 이미지만 같은 설정으로 일괄 처리합니다.",
        "원본보다 커진 결과는 다운로드하지 않습니다.",
        "압축 후 예외 파일을 따로 검수합니다.",
      ],
    },
  },
  en: {
    "blog-image-optimization-checklist": {
      title: "Blog Image Optimization Checklist",
      description:
        "A practical checklist for resizing, compressing, naming, and publishing blog images without hurting readability.",
      label: "Blog Checklist",
      paragraphs: [
        "Blog images affect both first impression and reading flow. If a post opens slowly or images appear long after the text, readers may leave before the content has a chance to help them. Optimizing images before publishing is one of the easiest ways to improve the experience.",
        "Most image optimization guides agree on the same starting point: do not upload full camera originals when the post only displays a smaller image. Resize the image to match the content area, then compress it as JPG or WebP depending on compatibility and visual quality.",
        "Filenames and alt text matter too. A name like `blog-image-compression-checklist.webp` is easier for search engines and editors to understand than `IMG_3021.jpg`. Alt text should describe the image's purpose in the article instead of repeating keywords.",
        "Before publishing, compare the compressed result with the original at normal and 100% view. Start around 75 to 85 quality for most blog photos, then adjust based on whether the image contains faces, product details, small text, or smooth gradients.",
      ],
      bullets: [
        "Resize images that are wider than the content area.",
        "Test JPG or WebP for photos and PNG or WebP for transparent graphics.",
        "Prepare separate files for hero images, body images, and thumbnails.",
        "Use descriptive filenames and natural alt text.",
        "Check the final post on mobile before publishing.",
      ],
      faqs: [
        {
          question: "Should every blog image be converted to WebP?",
          answer:
            "WebP is often efficient for web publishing, but some platforms or editorial workflows may still prefer JPG or PNG. Check where the image will be uploaded before deciding.",
        },
      ],
    },
    "ecommerce-product-image-compression-guide": {
      title: "Ecommerce Product Image Compression Guide",
      description:
        "How to reduce product image file size while preserving the detail shoppers need to make a purchase decision.",
      label: "Ecommerce Images",
      paragraphs: [
        "Product images are not just decoration. They help shoppers judge color, texture, shape, and trust. If product pages load slowly, shoppers may leave; if compression is too aggressive, the product may look less reliable than it really is.",
        "Treat list thumbnails and product detail images differently. Thumbnails can usually be smaller and more compressed because they appear in grids. Main product photos and zoomable detail shots should keep more visual quality, often starting around quality 80.",
        "Marketplace and ecommerce platforms often have their own file size and dimension limits. Check those rules first, then prepare images with enough margin so uploads do not fail and pages remain fast after platform processing.",
        "Use filenames that help your team understand the product later. A file like `linen-shirt-white-front.webp` is easier to manage than a camera filename, especially when replacing thumbnails or preparing ad creatives.",
      ],
      bullets: [
        "Compress thumbnails more aggressively than detail images.",
        "Start around quality 80 for important product photos.",
        "Stay under platform upload limits with room to spare.",
        "Include product, color, and angle in filenames.",
        "Review compressed images on mobile product pages.",
      ],
    },
    "jpg-png-webp-format-choice": {
      title: "JPG, PNG, or WebP: How to Choose the Right Image Format",
      description:
        "A clear guide to choosing JPG, PNG, or WebP for photos, screenshots, logos, transparent graphics, and web pages.",
      label: "Format Choice",
      paragraphs: [
        "Image format choice is as important as the quality slider. The same visual asset can become lightweight or unnecessarily heavy depending on whether it is saved as JPG, PNG, or WebP.",
        "JPG works well for photos and complex images with smooth color transitions. It uses lossy compression, so it can create small files, but repeated saves or very low quality settings may introduce visible artifacts.",
        "PNG is useful for transparency, logos, icons, and UI screenshots where crisp edges matter. It can become large for photographic content, so WebP is worth testing when transparency must be preserved.",
        "WebP supports lossy and lossless compression as well as transparency. It is widely supported in modern browsers and often produces smaller files than JPG or PNG at similar perceived quality. Compatibility with older tools should still be checked.",
      ],
      bullets: [
        "Use JPG or lossy WebP for ordinary photos.",
        "Use PNG or transparent WebP for logos and cutout images.",
        "Check text clarity before compressing screenshots heavily.",
        "Use JPG when maximum attachment compatibility matters.",
        "Choose based on file size, visual quality, and destination support.",
      ],
    },
    "image-quality-60-70-80-comparison": {
      title: "Image Quality 60 vs 70 vs 80: Which Compression Setting to Use",
      description:
        "A practical comparison of 60, 70, and 80 quality settings for blog images, product photos, thumbnails, and mobile uploads.",
      label: "Quality Settings",
      paragraphs: [
        "Lower image quality settings create smaller files, while higher settings preserve more detail. The best number is not universal because image content matters: portraits, product labels, screenshots, and gradients react differently to compression.",
        "Quality 80 is a strong starting point for hero images, product photos, and portfolio visuals where trust and detail matter. It often provides a good balance between size reduction and natural-looking results.",
        "Quality 70 is useful for ordinary blog body images, mobile-first content, and supporting photos. If the image is not displayed very large, quality 70 can look natural while saving meaningful file size.",
        "Quality 60 is best reserved for thumbnails, previews, temporary sharing, and strict upload limits. It can introduce visible artifacts in faces, text, gradients, and fine product details, so review the result before publishing.",
      ],
      bullets: [
        "Use quality 80 for important visuals.",
        "Use quality 70 for general body images.",
        "Use quality 60 for thumbnails and size limits.",
        "Be careful with text-heavy screenshots.",
        "Compare the result beside the original before downloading.",
      ],
    },
    "mobile-photo-compression-before-upload": {
      title: "Compress Mobile Photos Before Uploading",
      description:
        "How to prepare smartphone photos for blogs, stores, forms, and messages without installing a separate app.",
      label: "Mobile Photos",
      paragraphs: [
        "Modern smartphone photos are often several megabytes each. Uploading originals directly to a blog, store, or form can slow the page and waste mobile data. Compressing before upload is a simple way to avoid that problem.",
        "First decide what the image is for. Keep the original for personal storage, then create a separate web-ready copy for publishing. Many web images do not need the full camera resolution.",
        "Start around quality 70 to 80. Use a higher value for food, portraits, and products where texture and color matter, and use a lower value for simple reference photos or temporary sharing.",
        "Browser-based compression is convenient because it does not require an app install. Very large batches may still take time on older phones, so process the most important images first or split the batch into smaller groups.",
      ],
      bullets: [
        "Keep original photos separate from upload copies.",
        "Resize images to the size they will actually be displayed.",
        "Start with quality 70 to 80.",
        "Split very large batches on older phones.",
        "Check the uploaded page on mobile.",
      ],
    },
    "webp-conversion-seo-guide": {
      title: "Does WebP Conversion Help SEO?",
      description:
        "How WebP conversion supports faster pages, better user experience, and image SEO when used with proper filenames and alt text.",
      label: "WebP SEO",
      paragraphs: [
        "Converting images to WebP does not guarantee rankings by itself. It can, however, reduce image file size, improve loading speed, and support a better user experience. Those improvements can contribute to a healthier SEO foundation.",
        "Google describes WebP as a modern image format for the web with lossy, lossless, and transparency support. In practice, it often produces smaller files than JPG or PNG at similar visual quality, especially on image-heavy pages.",
        "Image SEO still needs more than format conversion. Descriptive filenames, helpful alt text, relevant surrounding content, proper dimensions, and crawlable image URLs all work together.",
        "A good workflow is to keep original files, export WebP for web delivery, and verify the result in the actual page. If a channel does not support WebP, keep a JPG or PNG fallback ready.",
      ],
      bullets: [
        "WebP can reduce file size and improve page speed.",
        "SEO depends on content quality, accessibility, and performance together.",
        "Use descriptive filenames and alt text.",
        "Keep fallbacks for tools or platforms that do not accept WebP.",
        "Do not use WebP if the result is larger than the original.",
      ],
    },
    "naver-blog-image-size-guide": {
      title: "Naver Blog Image Size and Compression Guide",
      description:
        "How to prepare clear, lightweight images for Naver Blog posts, reviews, travel articles, and product content.",
      label: "Naver Blog",
      paragraphs: [
        "Naver Blog posts are often read on mobile. When a post contains many full-size photos, readers can feel the delay before the content becomes useful. Compressing images before upload can make the reading experience smoother.",
        "Body images rarely need full camera resolution. Resize large originals and start around quality 75 to 85. Use a higher setting for review photos where detail affects trust.",
        "Descriptive filenames help with personal content management even when the platform changes image URLs later. Include topic, place, product, or sequence information where useful.",
        "Because platforms may process images again after upload, avoid over-compressing before publishing. Keep enough quality so an additional platform conversion does not make the image look poor.",
      ],
      bullets: [
        "Batch-compress photo-heavy posts before upload.",
        "Resize images to fit the reading layout.",
        "Start around quality 80 for review images.",
        "Use filenames that describe topic or sequence.",
        "Check the final post on mobile.",
      ],
    },
    "google-image-seo-alt-filename-guide": {
      title: "Google Image SEO: Filenames and Alt Text",
      description:
        "How to write image filenames, alt text, and surrounding content that help search engines and users understand your images.",
      label: "Image SEO",
      paragraphs: [
        "Image SEO is not only about smaller files. Search engines use filenames, alt text, captions, surrounding text, and page context to understand what an image represents.",
        "Use short, descriptive filenames. A filename like `webp-compression-quality-comparison.webp` is more useful than `image1.webp`. Lowercase English words with hyphens are usually easy to manage across systems.",
        "Alt text should describe the image's meaning or function. Avoid stuffing keywords. If the image is a product photo, describe the product; if it is a UI screenshot, describe what the screenshot shows.",
        "Surrounding content should support the image. Adding unrelated images and forcing keywords into alt text does not create a useful page. The best image SEO comes from helpful images placed in the right context.",
      ],
      bullets: [
        "Write descriptive filenames with hyphens.",
        "Use alt text as an image description, not a keyword list.",
        "Place images near relevant text.",
        "Avoid over-describing decorative images.",
        "Optimize file size and accessibility together.",
      ],
    },
    "product-thumbnail-compression-checklist": {
      title: "Product Thumbnail Compression Checklist",
      description:
        "How to make ecommerce thumbnails lightweight, consistent, and clear across category grids and recommendation sections.",
      label: "Thumbnails",
      paragraphs: [
        "Product thumbnails may be small, but they appear in large numbers. A category page can load dozens of them at once, so thumbnail optimization can have a large impact on perceived speed.",
        "Do not use full-size product photos for grid thumbnails. Resize them close to their displayed dimensions, then compress them separately from detail images.",
        "Quality 65 to 75 is often enough for thumbnails, but color-sensitive categories like fashion, beauty, and interiors need extra review. The image must remain attractive at the size users actually see.",
        "Check edges, background noise, and product clarity after compression. A fast thumbnail is only useful if it still makes users want to click.",
      ],
      bullets: [
        "Resize thumbnails to the grid size.",
        "Compress thumbnails more than detail images.",
        "Review color-sensitive categories carefully.",
        "Check product edges and background noise.",
        "Judge results by the full category page speed.",
      ],
    },
    "website-speed-core-web-vitals-images": {
      title: "Image Optimization for Website Speed and Core Web Vitals",
      description:
        "How image size, dimensions, lazy loading, and WebP conversion affect performance and user experience.",
      label: "Web Performance",
      paragraphs: [
        "Images are often the largest resources on a page. If a hero image loads slowly, users perceive the page as slow. If image dimensions are missing, the layout may shift while the page loads.",
        "The image that becomes the Largest Contentful Paint element deserves special attention. Resize it to the displayed size, compress it carefully, and test a modern format such as WebP.",
        "Lazy loading can help below-the-fold images, but the implementation should still be crawlable. Important image URLs should be present in rendered HTML rather than only appearing after a user action.",
        "File compression is only the beginning. Dimensions, responsive image sources, caching, and page placement all affect the real performance users feel.",
      ],
      bullets: [
        "Optimize above-the-fold images first.",
        "Resize images to the displayed dimensions.",
        "Compare WebP output against JPG or PNG.",
        "Set width and height to reduce layout shifts.",
        "Use crawlable lazy loading for lower-page images.",
      ],
    },
    "transparent-png-webp-guide": {
      title: "Transparent PNG to WebP: What to Check",
      description:
        "How to reduce logo, icon, and cutout image file size while preserving transparency and clean edges.",
      label: "Transparency",
      paragraphs: [
        "Transparent PNGs are common for logos, icons, and product cutouts. They can become large when the image contains photo-like details. Transparent WebP can sometimes reduce file size while keeping the alpha channel.",
        "Do not convert transparent graphics to JPG if transparency matters. JPG does not support transparency, so transparent areas will be filled with a solid background.",
        "For logos and icons, inspect edge sharpness after compression. A small file is not worth it if the brand mark looks blurry or colored edges appear around the shape.",
        "For product cutouts, preview the result on light and dark backgrounds. This helps reveal unwanted halos or missing transparent areas before publishing.",
      ],
      bullets: [
        "Avoid JPG when transparency is required.",
        "Compare PNG and WebP file sizes and edges.",
        "Prioritize sharpness for logos.",
        "Preview product cutouts on different backgrounds.",
        "Do not over-compress tiny icons.",
      ],
    },
    "social-media-upload-image-compression": {
      title: "Image Compression Guide for Social Media Uploads",
      description:
        "How to reduce photo and card image size before uploading to social platforms without making them look over-compressed.",
      label: "Social Media",
      paragraphs: [
        "Social platforms often recompress uploaded images. If you upload an image that is already too heavily compressed, the second compression pass can make it look worse.",
        "Feed images can usually be smaller than camera originals. Start around quality 75 to 85 for photos. For text-heavy cards, inspect the text edges before publishing.",
        "Crop and resize to the platform's intended ratio before compression. This avoids wasting file size on pixels that may be cropped away after upload.",
        "For community posts or message sharing with strict limits, quality 60 to 70 may be acceptable. Use readability and subject clarity as the final decision criteria.",
      ],
      bullets: [
        "Resize to the target platform ratio first.",
        "Check text clarity on card images.",
        "Start around quality 75 to 85 for feed photos.",
        "Try quality 60 to 70 for strict limits.",
        "Avoid overly low quality before platform recompression.",
      ],
    },
    "email-attachment-image-size-guide": {
      title: "How to Reduce Photo Size for Email Attachments",
      description:
        "Prepare compatible, smaller image attachments for email without sending unnecessarily huge smartphone originals.",
      label: "Email Attachments",
      paragraphs: [
        "Email attachment limits can make full-size smartphone photos difficult to send. In many cases, the recipient only needs a clear viewing copy rather than a full-resolution original.",
        "For maximum compatibility, JPG is still a safe format. WebP is efficient on the web, but older viewers or office workflows may not open it reliably.",
        "For review-only photos, resize to a practical width and use quality 70 to 80. For print or design work, send the original through a cloud link instead of compressing it.",
        "When sending multiple images, rename files so the recipient can understand the order and subject. Clear filenames reduce follow-up questions and mistakes.",
      ],
      bullets: [
        "Use JPG when compatibility matters most.",
        "Resize viewing copies before attaching.",
        "Do not compress originals needed for print.",
        "Use ordered, descriptive filenames.",
        "Check total attachment size before sending.",
      ],
    },
    "portfolio-image-optimization-guide": {
      title: "Portfolio Image Optimization Guide",
      description:
        "Balance visual quality and page speed for design, photography, development, and creative portfolio websites.",
      label: "Portfolio",
      paragraphs: [
        "Portfolio websites rely on image quality, but heavy originals can make the first impression slow. The goal is not maximum compression; it is preserving trust while keeping the page responsive.",
        "Start around quality 80 or higher for featured work. Use smaller, more compressed files for listing thumbnails, and keep more detailed files for project detail pages.",
        "UI screenshots contain text and thin lines, so aggressive lossy compression can make them blurry. Compare PNG and near-lossless WebP for interface work, and use lossy WebP for photo-heavy projects.",
        "For search visibility, include project names, roles, and asset context in filenames and alt text where natural. Accuracy matters more than keyword repetition.",
      ],
      bullets: [
        "Use quality 80 or higher for featured work.",
        "Prepare separate thumbnail and detail files.",
        "Check UI screenshot text clarity.",
        "Compare WebP for photo-heavy projects.",
        "Write accurate filenames and alt text.",
      ],
    },
    "batch-image-compression-workflow": {
      title: "Batch Image Compression Workflow",
      description:
        "A practical workflow for compressing many images consistently before blog, ecommerce, social, or email publishing.",
      label: "Batch Workflow",
      paragraphs: [
        "Batch compression saves time and keeps quality consistent, but only when similar images are grouped together. Applying one setting to every file can create poor results for exceptions.",
        "First group images by purpose: hero images, body images, thumbnails, and attachments. Each group may need a different size, format, and quality setting.",
        "Choose a starting quality for each group, then test a few sample images. For example, blog body images may work well around 75 to 85, thumbnails around 65 to 75, and product details around 80.",
        "After processing, review exceptions: files that became larger, screenshots with blurry text, and transparent images that lost clean edges. Batch work still needs a final quality check.",
      ],
      bullets: [
        "Group files by publishing purpose.",
        "Test a few samples before processing everything.",
        "Use the same settings only within similar groups.",
        "Skip results that are larger than the original.",
        "Review exceptions before publishing.",
      ],
    },
  },
} satisfies Record<Locale, Record<string, ArticlePage>>;
