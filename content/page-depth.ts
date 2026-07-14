import type { Locale } from "@/i18n";

export type PageDepthSection = {
  title: string;
  body: string;
};

export const pageDepthSections = {
  ko: {
    about: [
      {
        title: "왜 별도 이미지 압축 도구가 필요한가요?",
        body: "블로그, 쇼핑몰, 포트폴리오 운영자는 이미지를 자주 다루지만 매번 전문 편집 프로그램을 열기는 번거롭습니다. PixelZipKit은 업로드 전 빠르게 용량을 줄이고 결과를 확인하는 작은 작업에 초점을 둡니다. 사용자는 원본을 보관한 상태에서 게시용 사본만 만들 수 있고, 파일이 서버에 저장되지 않는 구조라 개인 사진이나 업무 캡처를 다룰 때 부담을 줄일 수 있습니다.",
      },
      {
        title: "운영 방향",
        body: "이 사이트는 압축 버튼과 함께, 어떤 상황에서 어떤 포맷과 품질값을 선택해야 하는지 안내하는 이미지 최적화 자료를 제공합니다. 공개된 고정 테스트 자산과 결과 파일, 실패하기 쉬운 사례, 업로드 위치별 검수 기준을 함께 제시해 사용자가 자신의 파일을 판단할 수 있도록 구성합니다.",
      },
      {
        title: "PixelZipKit이 집중하는 사용자 문제",
        body: "많은 사용자는 이미지 파일이 크다는 사실은 알지만, 어떤 설정으로 줄여야 안전한지는 알기 어렵습니다. PixelZipKit은 품질값, 최대 크기, WebP 변환 여부를 한 화면에서 조정하게 하여 결과를 바로 비교하도록 설계되었습니다. 단순한 파일 변환보다 중요한 것은 사용자가 자신의 게시 목적에 맞는 결정을 내리는 것이며, 사이트의 가이드는 그 판단을 돕기 위해 작성됩니다.",
      },
    ],
    guide: [
      {
        title: "압축 전 먼저 정해야 하는 기준",
        body: "이미지 최적화는 무조건 작은 파일을 만드는 작업이 아닙니다. 먼저 이미지가 어디에 쓰이는지 정해야 합니다. 블로그 본문 이미지는 읽는 흐름이 중요하고, 쇼핑몰 상세 이미지는 색상과 질감이 중요하며, 이메일 첨부 이미지는 호환성과 전체 첨부 용량이 중요합니다. 목적을 먼저 정하면 품질값과 포맷 선택이 훨씬 명확해집니다.",
      },
      {
        title: "결과 검수 순서",
        body: "압축 후에는 원본 크기와 결과 크기만 보지 말고 이미지의 핵심 정보를 확인해야 합니다. 상품 라벨, 작은 글자, 사람 얼굴, 투명 배경 가장자리, 그라데이션 영역은 압축 흔적이 잘 보이는 부분입니다. 이 부분이 자연스럽다면 파일 용량이 줄어든 결과를 사용할 수 있고, 흐림이나 번짐이 보이면 품질을 높여 다시 처리하는 것이 좋습니다.",
      },
      {
        title: "권장 작업 흐름",
        body: "처음부터 모든 파일을 한 번에 처리하기보다 대표 샘플을 먼저 테스트하세요. 예를 들어 블로그 본문 사진 2장, 캡처 이미지 1장, 썸네일 1장을 먼저 압축해 결과를 비교하면 전체 이미지 묶음에 적용할 기준을 빠르게 정할 수 있습니다. 샘플 검수 후 같은 목적의 이미지에만 동일한 설정을 적용하면 품질 편차와 재작업을 줄일 수 있습니다.",
      },
    ],
    faq: [
      {
        title: "처음 사용하는 사용자를 위한 판단 기준",
        body: "처음에는 품질값을 80 전후로 두고 한두 장만 테스트하는 것이 좋습니다. 결과가 자연스럽다면 같은 목적의 이미지 묶음에 동일한 기준을 적용하고, 텍스트 캡처나 상품 상세컷처럼 중요한 이미지는 별도로 검수하세요. 모든 이미지를 한 번에 가장 낮은 품질로 줄이면 재작업이 늘어날 수 있습니다.",
      },
      {
        title: "문제가 생겼을 때 확인할 것",
        body: "결과 파일이 원본보다 크거나, 투명 배경이 예상과 다르게 보이거나, WebP 파일을 업로드할 수 없는 경우가 있습니다. 이때는 원본 포맷을 유지하거나 JPG와 PNG를 별도 결과로 비교하는 것이 안전합니다. 특히 외부 플랫폼은 지원 포맷이 다를 수 있으므로 업로드 위치의 기준을 함께 확인해야 합니다.",
      },
      {
        title: "자주 생기는 오해",
        body: "이미지 압축은 화질을 무조건 낮추는 작업이 아닙니다. 웹에 표시되는 크기보다 큰 원본을 적정 크기로 줄이고, 사람 눈에 크게 티 나지 않는 범위에서 불필요한 데이터를 줄이는 작업입니다. 따라서 좋은 압축 결과는 단순히 가장 작은 파일이 아니라, 사용자가 내용을 자연스럽게 이해하면서도 페이지가 빠르게 열리는 파일입니다.",
      },
    ],
    "use-cases": [
      {
        title: "운영자별 추천 흐름",
        body: "블로그 운영자는 대표 이미지와 본문 이미지를 나누어 압축하고, 쇼핑몰 운영자는 썸네일과 상세 이미지를 별도 기준으로 처리하는 것이 좋습니다. 포트폴리오 제작자는 목록 이미지는 가볍게 만들되 상세 작품 이미지는 품질을 높게 유지해야 합니다. 같은 이미지를 쓰더라도 게시 위치에 따라 필요한 품질과 크기가 달라집니다.",
      },
      {
        title: "실수하기 쉬운 부분",
        body: "가장 흔한 실수는 고해상도 원본을 모든 위치에 그대로 사용하는 것입니다. 반대로 모든 이미지를 너무 강하게 압축하면 브랜드 신뢰를 떨어뜨릴 수 있습니다. 목록 페이지처럼 여러 장이 동시에 노출되는 곳은 용량 절감이 중요하고, 구매나 평가에 영향을 주는 상세 이미지는 디테일 유지가 더 중요합니다.",
      },
      {
        title: "같은 이미지도 위치별로 다르게 준비하기",
        body: "대표 이미지는 공유 미리보기와 첫 화면에서 사용되고, 썸네일은 목록에서 빠르게 스캔되는 역할을 하며, 상세 이미지는 사용자가 정보를 확인하는 역할을 합니다. 하나의 원본에서 출발하더라도 위치별로 다른 크기와 품질의 파일을 준비하면 전체 페이지 속도와 시각 품질을 함께 관리할 수 있습니다.",
      },
    ],
    formats: [
      {
        title: "포맷 선택을 잘못했을 때 생기는 문제",
        body: "사진을 PNG로 저장하면 파일이 지나치게 커질 수 있고, 투명 로고를 JPG로 바꾸면 배경이 사라집니다. WebP는 웹에 적합하지만 일부 업무 시스템이나 오래된 편집 도구에서는 호환성이 떨어질 수 있습니다. 따라서 최종 포맷은 이미지 종류와 업로드 위치를 함께 보고 결정해야 합니다.",
      },
      {
        title: "권장 선택 순서",
        body: "일반 사진은 WebP와 JPG를 먼저 비교하고, 투명 배경이 있는 이미지는 PNG와 투명 WebP를 비교하세요. 글자가 많은 캡처는 낮은 품질에서 흐려지기 쉬우므로 결과를 확대해서 확인해야 합니다. 이메일이나 제출용 파일처럼 수신자 환경을 알 수 없는 경우에는 JPG가 더 안전한 선택일 수 있습니다.",
      },
      {
        title: "웹 게시와 파일 전달은 기준이 다릅니다",
        body: "웹사이트에 직접 게시하는 이미지는 브라우저 지원과 로딩 속도가 중요하므로 WebP가 좋은 선택이 될 수 있습니다. 반면 메일 첨부, 기관 제출, 협업 파일 전달처럼 상대방의 환경을 알 수 없는 경우에는 JPG 또는 PNG가 더 안전할 수 있습니다. 이미지 포맷은 기술적으로 우수한 것보다 목적에 맞는 것이 더 중요합니다.",
      },
    ],
    "blog-image-optimization-checklist": [
      {
        title: "발행 전 블로그 이미지 점검 순서",
        body: "글을 발행하기 전에는 대표 이미지, 본문 이미지, 캡처 이미지를 구분해서 확인하세요. 대표 이미지는 검색 결과와 공유 미리보기에서 첫인상을 만들고, 본문 이미지는 읽는 흐름을 보조합니다. 캡처 이미지는 글자 선명도가 중요하므로 사진과 같은 품질 기준을 적용하면 안 됩니다.",
      },
      {
        title: "블로그 이미지가 콘텐츠 가치에 주는 영향",
        body: "이미지가 빠르게 열리면 사용자는 본문을 읽기 전에 기다리는 시간을 줄일 수 있습니다. 반대로 이미지가 너무 무겁거나 흐리면 글의 신뢰도가 떨어집니다. 좋은 블로그 이미지는 검색 유입을 위한 장식이 아니라, 본문을 이해하도록 돕는 자료여야 하며 파일명과 대체 텍스트도 그 목적에 맞게 작성해야 합니다.",
      },
      {
        title: "본문 이미지와 대표 이미지의 차이",
        body: "대표 이미지는 글의 주제를 빠르게 전달해야 하므로 적당한 선명도와 안정적인 색감이 중요합니다. 본문 이미지는 문단의 이해를 돕는 역할이므로 필요한 크기 이상으로 클 필요가 없습니다. 캡처 이미지는 사진보다 압축 흔적이 잘 보이기 때문에 작은 글자가 포함되어 있다면 품질값을 높게 두고 결과를 확대해서 확인하는 편이 좋습니다.",
      },
      {
        title: "발행 후 확인할 지표",
        body: "이미지를 최적화한 뒤에는 실제 게시글에서 첫 화면이 얼마나 빨리 열리는지, 모바일에서 이미지가 늦게 밀려 나오지 않는지, 공유 미리보기 이미지가 깨지지 않는지 확인하세요. 이미지 최적화는 업로드 직전 작업에서 끝나는 것이 아니라 실제 독자가 보는 화면을 기준으로 판단해야 합니다.",
      },
      {
        title: "압축 기준을 기록해두기",
        body: "블로그를 꾸준히 운영한다면 글 종류별 이미지 기준을 기록해두는 것이 좋습니다. 예를 들어 리뷰 글은 품질 80, 일반 정보 글은 75, 캡처 이미지는 글자 선명도 우선처럼 기준을 정하면 매번 새로 판단하지 않아도 됩니다. 이렇게 하면 글 전체의 시각 품질도 일정하게 유지됩니다.",
      },
    ],
    "ecommerce-product-image-compression-guide": [
      {
        title: "상품 이미지에서 압축보다 중요한 것",
        body: "상품 이미지는 구매 판단에 직접 연결됩니다. 용량을 줄이더라도 색상, 소재감, 작은 라벨, 구성품 정보가 흐려지면 안 됩니다. 목록 썸네일은 빠른 탐색을 위해 더 가볍게 만들 수 있지만, 상세 페이지의 대표 컷과 확대 컷은 품질을 높게 유지하는 편이 안전합니다.",
      },
      {
        title: "쇼핑몰 업로드 전 체크리스트",
        body: "압축 후에는 모바일 상품 상세 페이지에서 실제로 확인해야 합니다. 흰 배경 노이즈, 상품 경계 번짐, 색상 왜곡, 옵션명 식별 가능 여부를 살펴보세요. 특히 같은 상품의 색상 변형 이미지는 압축 기준이 달라지면 색이 다르게 보일 수 있으므로 같은 설정으로 처리하는 것이 좋습니다.",
      },
      {
        title: "상세 이미지와 목록 이미지 분리",
        body: "목록 이미지는 빠른 탐색을 돕는 역할이므로 작은 용량이 중요합니다. 반면 상세 이미지는 구매자가 상품을 판단하는 자료이므로 지나친 압축을 피해야 합니다. 같은 상품 사진이라도 목록용 파일과 상세용 파일을 분리해 준비하면 카테고리 페이지 속도와 상세 페이지 신뢰도를 동시에 관리할 수 있습니다.",
      },
      {
        title: "반품과 문의를 줄이는 이미지 품질",
        body: "상품 색상이나 구성품이 흐리게 보이면 구매 후 기대와 실제 상품의 차이가 커질 수 있습니다. 이미지 용량을 줄이더라도 사용자가 구매 전에 확인해야 하는 정보는 유지되어야 합니다. 특히 패션, 뷰티, 인테리어 상품은 미묘한 색감 차이가 중요하므로 압축 후 실제 상품과의 인상 차이를 확인하는 것이 좋습니다.",
      },
      {
        title: "운영 효율을 위한 파일 관리",
        body: "상품 이미지는 시즌, 색상, 옵션, 광고 소재에 따라 반복해서 쓰이는 경우가 많습니다. 원본, 상세용, 썸네일용 파일을 구분해 저장하면 나중에 이미지 교체나 광고 소재 제작이 훨씬 쉬워집니다. 압축 파일명에는 상품명과 용도를 함께 넣어 관리 실수를 줄이는 것이 좋습니다.",
      },
    ],
    "jpg-png-webp-format-choice": [
      {
        title: "사진과 그래픽을 구분해야 하는 이유",
        body: "사진은 색상이 연속적으로 변하는 영역이 많아 손실 압축을 적용해도 자연스럽게 보이는 경우가 많습니다. 반면 로고, 아이콘, UI 캡처는 선과 글자가 또렷해야 하므로 포맷과 품질 선택이 더 민감합니다. 이미지가 사진인지 그래픽인지 먼저 구분하면 압축 실패를 줄일 수 있습니다.",
      },
      {
        title: "실무에서 가장 안전한 결정법",
        body: "최종 결정은 원본 용량, 결과 용량, 시각 품질, 업로드 위치의 지원 여부를 함께 보는 것입니다. WebP가 작게 나오더라도 사용하려는 플랫폼이 지원하지 않으면 JPG나 PNG가 더 적합합니다. 반대로 웹사이트에 직접 게시하는 이미지라면 WebP가 페이지 속도 개선에 유리할 수 있습니다.",
      },
      {
        title: "투명 배경과 글자 선명도 확인",
        body: "포맷을 바꿀 때 가장 먼저 확인할 것은 투명 배경 유지 여부와 글자 선명도입니다. JPG는 투명도를 지원하지 않으므로 로고나 누끼 이미지에는 적합하지 않습니다. PNG는 선명하지만 사진에서는 용량이 커질 수 있고, WebP는 효율적이지만 사용처의 지원 여부를 확인해야 합니다.",
      },
      {
        title: "파일 확장자만 바꾸는 것은 변환이 아닙니다",
        body: "파일 이름의 확장자만 바꾼다고 이미지 포맷이 바뀌지는 않습니다. 실제 변환은 브라우저나 이미지 처리 도구가 픽셀 데이터를 새 포맷으로 다시 저장하는 과정입니다. 따라서 변환 후에는 파일 크기와 MIME 타입, 실제 미리보기 결과를 함께 확인하는 것이 안전합니다.",
      },
      {
        title: "포맷 선택을 팀 기준으로 만들기",
        body: "혼자 운영하는 사이트가 아니라면 포맷 선택 기준을 팀 안에서 통일하는 것이 좋습니다. 상품 사진은 WebP, 제출용 파일은 JPG, 투명 로고는 PNG처럼 기준을 정하면 작업자마다 다른 결과를 만드는 일을 줄일 수 있습니다. 일관된 기준은 사이트 품질 관리에도 도움이 됩니다.",
      },
    ],
    "image-quality-60-70-80-comparison": [
      {
        title: "품질값을 숫자만 보고 정하면 안 되는 이유",
        body: "같은 품질 70이라도 이미지 내용에 따라 결과가 다르게 보입니다. 하늘이나 배경처럼 단순한 영역은 낮은 품질에서도 자연스럽지만, 얼굴, 작은 글자, 제품 질감은 쉽게 손상됩니다. 따라서 품질값은 절대 기준이 아니라 이미지 종류별 출발점으로 보는 것이 정확합니다.",
      },
      {
        title: "추천 테스트 방법",
        body: "중요한 이미지는 60, 70, 80 세 가지 결과를 만들어 나란히 비교해보세요. 썸네일에서는 60도 충분할 수 있지만 상세 이미지에서는 80이 필요할 수 있습니다. 파일 크기 차이가 크지 않다면 품질을 조금 높게 유지하는 것이 사용자 신뢰 측면에서 더 나은 선택입니다.",
      },
      {
        title: "품질 60이 어울리는 경우",
        body: "품질 60은 작은 썸네일, 임시 공유용 이미지, 빠른 미리보기처럼 시각적 디테일보다 용량 제한이 중요한 상황에 어울립니다. 그러나 인물 사진, 상품 상세컷, 텍스트 캡처에는 압축 흔적이 눈에 띌 수 있습니다. 낮은 품질을 사용할수록 실제 표시 크기에서 다시 확인해야 합니다.",
      },
      {
        title: "품질 80이 필요한 경우",
        body: "품질 80은 제품 질감, 음식 사진, 포트폴리오 이미지처럼 시각적 인상이 중요한 콘텐츠에 적합합니다. 용량 절감 폭은 60이나 70보다 작을 수 있지만, 사용자가 이미지를 보고 신뢰를 판단하는 페이지에서는 더 안정적인 선택입니다. 중요한 이미지는 용량보다 정보 보존을 먼저 고려하세요.",
      },
      {
        title: "압축률보다 중요한 최종 기준",
        body: "압축률이 높다고 항상 좋은 결과는 아닙니다. 방문자가 이미지 속 정보를 읽고 이해할 수 있어야 하며, 브랜드나 상품의 인상이 훼손되지 않아야 합니다. 따라서 최종 기준은 숫자가 아니라 실제 화면에서 자연스럽게 보이는지 여부입니다. 용량과 품질의 균형을 함께 보세요.",
      },
    ],
    "mobile-photo-compression-before-upload": [
      {
        title: "스마트폰 사진을 그대로 올리면 생기는 문제",
        body: "스마트폰 원본 사진은 웹 게시용으로는 과한 해상도와 용량을 가진 경우가 많습니다. 사진 몇 장만으로도 페이지가 느려지고, 모바일 데이터 사용량이 늘어납니다. 업로드용 사본을 따로 만들어 줄이면 방문자는 더 빠르게 콘텐츠를 볼 수 있고, 운영자는 업로드 실패를 줄일 수 있습니다.",
      },
      {
        title: "모바일에서 안전하게 처리하는 방법",
        body: "대량 사진을 한 번에 처리하기보다 목적이 같은 사진부터 묶어서 압축하세요. 예를 들어 후기용 사진, 증빙용 사진, 썸네일용 사진은 필요한 품질이 다릅니다. 오래된 휴대폰에서는 큰 이미지를 여러 장 처리할 때 시간이 걸릴 수 있으므로 결과를 확인하며 나누어 작업하는 편이 안정적입니다.",
      },
      {
        title: "업로드 실패를 줄이는 준비",
        body: "신청서, 게시판, 커뮤니티, 쇼핑몰 관리자 페이지는 파일 크기 제한이 있는 경우가 많습니다. 원본 사진을 그대로 올리면 제한에 걸리거나 업로드 시간이 길어질 수 있습니다. 압축한 게시용 파일을 따로 준비하면 실패 가능성을 줄이고, 같은 사진을 여러 플랫폼에 반복해서 올릴 때도 작업이 빨라집니다.",
      },
      {
        title: "개인 사진을 다룰 때의 주의점",
        body: "가족 사진이나 위치 정보가 포함된 사진을 다룰 때는 업로드 위치와 공유 범위를 항상 확인해야 합니다. PixelZipKit은 이미지를 서버에 저장하지 않는 브라우저 기반 처리를 지향하지만, 최종 다운로드 파일을 어디에 올리는지는 사용자가 결정해야 합니다. 공개 게시 전에는 사진 안의 개인정보도 함께 확인하세요.",
      },
      {
        title: "모바일 환경에서의 결과 확인",
        body: "모바일 사진은 촬영 화면에서는 선명해 보여도 압축 후 작은 글자나 어두운 영역이 뭉개질 수 있습니다. 압축 결과를 다운로드하기 전 미리보기에서 핵심 피사체와 글자 부분을 확인하세요. 특히 증빙용 사진은 파일 용량보다 식별 가능성이 더 중요합니다.",
      },
    ],
    "webp-conversion-seo-guide": [
      {
        title: "WebP가 SEO의 전부는 아닙니다",
        body: "WebP 변환은 파일 용량을 줄여 페이지 속도 개선에 도움을 줄 수 있지만, 그 자체로 검색 순위를 보장하지는 않습니다. 검색엔진은 페이지 주제, 본문 품질, 이미지 설명, 접근성, 로딩 속도 등을 함께 평가합니다. WebP는 좋은 콘텐츠를 빠르게 전달하기 위한 기술적 선택지입니다.",
      },
      {
        title: "WebP 적용 전 확인할 것",
        body: "사이트에 직접 게시하는 이미지는 WebP가 유리한 경우가 많지만, 외부 플랫폼이나 업무 시스템에 제출하는 파일은 지원 여부를 확인해야 합니다. 또한 변환 결과가 원본보다 커지거나 품질이 떨어진다면 원본 포맷을 유지하는 것이 더 낫습니다. 항상 결과 용량과 실제 화면 품질을 함께 비교하세요.",
      },
      {
        title: "이미지 SEO에서 함께 봐야 하는 요소",
        body: "검색엔진은 이미지 파일만 따로 평가하지 않습니다. 이미지 주변의 본문, 파일명, 대체 텍스트, 페이지 주제, 로딩 속도, 모바일 사용성을 함께 이해합니다. WebP 변환은 이 중 로딩 속도와 데이터 사용량을 개선하는 데 도움을 줄 수 있지만, 이미지가 본문과 관련 있고 사용자에게 설명 가치를 제공해야 효과가 커집니다.",
      },
      {
        title: "WebP와 원본 보관 전략",
        body: "웹 게시용으로 WebP를 만들더라도 원본 JPG나 PNG는 별도로 보관하는 것이 좋습니다. 나중에 인쇄, 편집, 다른 플랫폼 제출이 필요할 수 있기 때문입니다. 운영자는 원본 보관용 폴더와 웹 게시용 폴더를 나누어 관리하면 실수로 낮은 품질 파일을 재편집하는 문제를 줄일 수 있습니다.",
      },
      {
        title: "성능 개선을 확인하는 방법",
        body: "WebP 적용 후에는 파일 크기만 보는 것이 아니라 실제 페이지에서 이미지가 빨리 표시되는지 확인해야 합니다. 대표 이미지가 첫 화면에서 늦게 뜨면 사용자는 페이지가 느리다고 느낄 수 있습니다. 이미지 크기, 포맷, 표시 위치를 함께 점검해야 실질적인 성능 개선을 기대할 수 있습니다.",
      },
    ],
    "naver-blog-image-size-guide": [
      {
        title: "사진이 많은 글의 첫 화면 관리",
        body: "네이버 블로그 후기나 여행 글은 사진이 여러 장 이어지는 경우가 많습니다. 대표 이미지는 선명도를 유지하고, 본문 아래쪽 반복 이미지는 표시 폭에 맞게 줄이는 방식이 좋습니다. 모든 사진을 같은 품질로 낮추기보다 대표 이미지, 본문 이미지, 캡처 이미지를 나누어 처리하면 모바일에서 읽는 흐름을 더 안정적으로 만들 수 있습니다.",
      },
      {
        title: "플랫폼 재처리를 고려한 압축",
        body: "블로그 플랫폼은 업로드 후 이미지를 다시 처리할 수 있습니다. 업로드 전 품질을 지나치게 낮추면 플랫폼 재처리까지 거치며 글자나 질감이 더 흐려질 수 있습니다. PixelZipKit에서는 먼저 80 전후로 결과를 만들고, 원본과 압축본을 비교한 뒤 품질을 낮추는 순서가 안전합니다.",
      },
      {
        title: "파일명과 글 맥락 정리",
        body: "검색과 관리 모두를 생각하면 파일명도 정리하는 편이 좋습니다. 장소, 제품명, 촬영 순서가 드러나는 파일명은 나중에 같은 이미지를 다시 찾을 때 도움이 됩니다. alt 텍스트나 본문 설명은 키워드 반복보다 사진이 글의 어떤 부분을 설명하는지 자연스럽게 연결하는 것이 좋습니다.",
      },
    ],
    "google-image-seo-alt-filename-guide": [
      {
        title: "파일명은 검색엔진보다 사람에게 먼저 읽혀야 합니다",
        body: "좋은 파일명은 검색엔진 신호이기 전에 운영자가 이미지를 관리하기 쉽게 만드는 정보입니다. 이미지 주제, 용도, 순서를 짧게 담고 공백 대신 하이픈을 쓰면 여러 시스템에서 다루기 쉽습니다. 무의미한 카메라 파일명보다 문맥이 드러나는 이름이 이미지 SEO와 운영 효율에 모두 유리합니다.",
      },
      {
        title: "alt 텍스트의 실패 패턴",
        body: "alt 텍스트에 키워드를 반복하면 검색 친화적으로 보일 수 있지만 실제 사용자에게는 도움이 되지 않습니다. 이미지가 보이지 않을 때 대신 전달해야 할 정보를 문장으로 적는 것이 핵심입니다. 장식용 이미지라면 과한 설명을 넣지 않고, 정보 전달 이미지라면 본문 이해에 필요한 세부 내용을 적습니다.",
      },
      {
        title: "압축과 접근성은 함께 점검합니다",
        body: "이미지를 작게 만들더라도 사용자가 읽어야 할 글자나 제품 정보가 흐려지면 콘텐츠 가치가 떨어집니다. 파일 용량, 이미지 설명, 주변 문맥, 실제 모바일 화면을 함께 점검해야 검색엔진과 사용자 모두에게 유용한 이미지가 됩니다.",
      },
    ],
    "product-thumbnail-compression-checklist": [
      {
        title: "목록 페이지 기준으로 판단하기",
        body: "상품 썸네일은 한 장만 볼 때보다 목록 전체에서 볼 때 중요성이 드러납니다. 20개 이상의 이미지가 한 번에 노출되면 작은 용량 차이도 페이지 체감 속도에 영향을 줍니다. 썸네일은 상세 이미지보다 과감하게 줄이되, 상품 경계와 색상은 실제 목록 화면에서 다시 확인해야 합니다.",
      },
      {
        title: "대표 상품은 예외로 관리합니다",
        body: "일괄 압축 기준이 있더라도 대표 상품, 광고 소재, 시즌 메인 상품은 별도로 검수하는 편이 좋습니다. 클릭을 유도해야 하는 썸네일에서 색감이 흐려지거나 흰 배경 노이즈가 생기면 성능 개선보다 손실이 커질 수 있습니다.",
      },
      {
        title: "상세 이미지와 파일을 분리하는 이유",
        body: "같은 원본에서 출발하더라도 목록용 썸네일과 상세용 이미지는 역할이 다릅니다. 썸네일은 빠른 탐색, 상세 이미지는 구매 판단을 돕습니다. 두 용도를 하나의 파일로 처리하면 목록은 느려지거나 상세 이미지는 흐려질 수 있으므로 별도 사본을 만드는 것이 안전합니다.",
      },
    ],
    "website-speed-core-web-vitals-images": [
      {
        title: "LCP 이미지는 가장 먼저 다룹니다",
        body: "첫 화면에서 가장 크게 보이는 대표 이미지는 사용자가 페이지 속도를 느끼는 기준이 됩니다. 이 이미지는 표시 크기보다 큰 원본을 피하고, 품질을 낮추기 전에 실제 표시 영역에 맞춘 리사이즈부터 적용하는 것이 좋습니다. WebP 결과와 원본 포맷을 비교해 용량과 선명도의 균형을 확인하세요.",
      },
      {
        title: "레이아웃 흔들림을 줄이는 이미지 준비",
        body: "압축만으로는 성능 문제가 모두 해결되지 않습니다. 이미지의 너비와 높이가 명확하지 않으면 로딩 중 콘텐츠가 밀릴 수 있습니다. 웹사이트 운영자는 압축 파일을 준비한 뒤 실제 페이지에서 이미지 크기 속성, 반응형 표시, 지연 로딩 위치까지 함께 점검해야 합니다.",
      },
      {
        title: "실제 개선은 페이지에서 확인합니다",
        body: "파일 용량이 줄어도 첫 화면에 불필요하게 큰 이미지를 넣거나, 아래쪽 이미지를 한꺼번에 불러오면 사용자는 여전히 느리다고 느낄 수 있습니다. PixelZipKit의 압축 결과는 시작점이며, 최종 판단은 실제 페이지의 로딩 흐름과 모바일 체감 속도를 기준으로 해야 합니다.",
      },
    ],
    "transparent-png-webp-guide": [
      {
        title: "투명도는 용량보다 먼저 확인합니다",
        body: "로고, 아이콘, 누끼 이미지는 배경이 투명하게 유지되는지가 핵심입니다. JPG는 투명도를 지원하지 않으므로 이런 이미지에는 적합하지 않습니다. WebP 결과가 작더라도 밝은 배경과 어두운 배경에서 가장자리가 자연스럽게 보이는지 먼저 확인해야 합니다.",
      },
      {
        title: "작은 그래픽은 압축 이득이 작을 수 있습니다",
        body: "아이콘처럼 이미 작은 파일은 변환 후 절감 폭이 크지 않을 수 있습니다. 이런 경우에는 작은 용량 차이보다 가장자리 선명도와 브랜드 색상 유지가 더 중요합니다. 결과가 원본보다 커지면 원본 포맷을 유지하는 것이 더 나은 선택입니다.",
      },
      {
        title: "상품 누끼 이미지는 배경별로 검수합니다",
        body: "상품 누끼 이미지는 흰 배경에서는 괜찮아 보여도 어두운 배경에서 가장자리 번짐이 드러날 수 있습니다. 쇼핑몰 카드, 상세 페이지, 광고 소재처럼 서로 다른 배경에 쓰일 수 있다면 여러 배경색에서 미리 확인하는 것이 좋습니다.",
      },
    ],
    "social-media-upload-image-compression": [
      {
        title: "플랫폼 재압축을 감안한 출발값",
        body: "SNS는 업로드 후 자체 압축을 거치는 경우가 많으므로 업로드 전에 너무 낮은 품질로 줄이면 두 번 압축된 결과가 됩니다. 피드 사진은 75에서 85 사이로 시작하고, 텍스트가 있는 카드 이미지는 글자 경계가 흐려지지 않는지 먼저 확인하는 편이 안전합니다.",
      },
      {
        title: "비율을 먼저 맞추면 낭비가 줄어듭니다",
        body: "정사각형, 세로형, 가로형처럼 게시 위치의 비율을 먼저 정하면 잘려나갈 픽셀을 압축하지 않아도 됩니다. 압축 전에 크롭과 리사이즈를 정리하면 파일 용량을 줄이면서도 중요한 피사체가 자동 크롭으로 사라지는 문제를 줄일 수 있습니다.",
      },
      {
        title: "공유용 이미지의 최종 기준",
        body: "커뮤니티나 메신저 공유용 이미지는 용량 제한이 중요하지만, 최종 기준은 읽을 수 있어야 하는 글자와 핵심 피사체의 식별 가능성입니다. 용량이 작아졌다는 이유만으로 게시하지 말고 실제 업로드 화면에서 다시 확인하세요.",
      },
    ],
    "email-attachment-image-size-guide": [
      {
        title: "첨부용과 보관용을 분리합니다",
        body: "이메일 첨부용 이미지는 상대방이 빠르게 확인할 수 있는 보기용 파일이면 충분한 경우가 많습니다. 반대로 인쇄, 디자인, 보정이 필요한 원본은 압축하면 안 됩니다. 원본 보관용과 첨부용 사본을 분리하면 품질 손실과 재작업을 줄일 수 있습니다.",
      },
      {
        title: "호환성이 필요한 경우의 포맷",
        body: "WebP는 웹 게시에는 효율적이지만 수신자의 업무 환경이 오래된 뷰어나 문서 도구라면 열리지 않을 수 있습니다. 기관 제출, 거래처 전달, 업무 메일처럼 호환성이 더 중요한 상황에서는 JPG가 더 안전한 선택일 수 있습니다.",
      },
      {
        title: "여러 장을 보낼 때의 검수 순서",
        body: "여러 이미지를 첨부할 때는 전체 용량, 파일명 순서, 식별 가능한 선명도를 함께 확인합니다. 압축 결과가 작아도 수신자가 어떤 사진인지 알기 어렵거나 중요한 글자가 흐리면 다시 작업해야 하므로, 파일명과 품질을 동시에 정리하는 것이 좋습니다.",
      },
    ],
    "portfolio-image-optimization-guide": [
      {
        title: "첫인상을 만드는 이미지는 보수적으로 압축합니다",
        body: "포트폴리오의 대표 이미지는 단순한 장식이 아니라 작업자의 신뢰를 보여주는 자료입니다. 품질 80 이상에서 시작하고, 용량 절감 폭이 크지 않다면 더 높은 품질을 유지하는 편이 좋습니다. 목록 썸네일과 상세 작품 이미지는 별도 파일로 준비하세요.",
      },
      {
        title: "UI 캡처와 사진 작품은 기준이 다릅니다",
        body: "UI 캡처는 작은 글자와 얇은 선이 많아 손실 압축에서 쉽게 흐려집니다. 반면 사진 중심 작품은 WebP 변환으로 큰 용량 절감을 얻을 수 있습니다. 작품 유형별로 포맷과 품질 기준을 나누면 시각 품질과 속도를 함께 관리할 수 있습니다.",
      },
      {
        title: "검색보다 작품 이해가 먼저입니다",
        body: "파일명과 alt 텍스트에 프로젝트명과 역할을 넣는 것은 도움이 되지만, 키워드를 반복하는 방식은 포트폴리오의 신뢰를 낮출 수 있습니다. 사용자가 작품을 이해하는 데 필요한 맥락을 정확히 설명하는 것이 더 중요합니다.",
      },
    ],
    "batch-image-compression-workflow": [
      {
        title: "일괄 압축 전 샘플을 먼저 봅니다",
        body: "이미지가 많을수록 한 번에 처리하고 싶지만, 모든 파일에 같은 품질을 적용하면 실패 사례를 놓치기 쉽습니다. 대표 이미지, 본문 사진, 캡처, 썸네일에서 각각 한두 장을 먼저 테스트해 기준값을 정한 뒤 같은 목적의 파일에만 일괄 적용하는 것이 좋습니다.",
      },
      {
        title: "예외 파일을 찾는 기준",
        body: "일괄 처리 후에는 원본보다 커진 결과, 글자가 흐려진 캡처, 투명 배경 가장자리가 깨진 파일을 따로 확인해야 합니다. PixelZipKit은 결과 크기와 감소율을 보여주므로 파일 크기와 시각 품질을 함께 검수하는 흐름에 적합합니다.",
      },
      {
        title: "팀 작업을 위한 기준 기록",
        body: "반복적으로 이미지를 업로드하는 팀이라면 블로그 본문, 상품 상세, 썸네일, 이메일 첨부처럼 목적별 기준을 문서화하는 것이 좋습니다. 기준을 남기면 작업자마다 다른 품질을 만드는 문제를 줄이고, 전체 사이트의 시각 품질을 안정적으로 유지할 수 있습니다.",
      },
    ],
    articles: [
      {
        title: "핵심 글을 먼저 보여주는 이유",
        body: "이미지 압축 주제는 검색 결과에 비슷한 글이 많기 때문에, PixelZipKit은 모든 글을 같은 무게로 나열하지 않습니다. 테스트 결과, 품질 비교, 블로그, 쇼핑몰, 모바일, WebP SEO, 성능 최적화처럼 사용자가 실제로 결정을 내려야 하는 핵심 글을 먼저 묶어 보여줍니다.",
      },
      {
        title: "구어체와 비즈니스 문체를 함께 쓰는 방식",
        body: "처음 읽는 사용자는 쉬운 말로 핵심을 이해하고, 운영자나 실무자는 바로 적용할 수 있는 기준 문장으로 판단할 수 있어야 합니다. 그래서 핵심 글에는 쉬운 요약과 비즈니스 기준을 나누어 제공해 같은 내용을 서로 다른 사용 맥락에서 활용할 수 있게 합니다.",
      },
    ],
    research: [
      {
        title: "측정값과 판단 기준을 분리합니다",
        body: "파일 크기 감소율은 숫자로 기록할 수 있지만, 실제 게시 가능 여부는 이미지가 맡은 역할에 따라 달라집니다. 텍스트 캡처는 글자 선명도, 상품 사진은 질감과 색상, 투명 그래픽은 가장자리와 알파 채널을 중심으로 검수합니다.",
      },
      {
        title: "콘텐츠 검수일을 별도로 관리합니다",
        body: "벤치마크 파일의 실측일과 글의 최종 검수일은 서로 다릅니다. PixelZipKit은 테스트 파일의 측정 기록은 유지하면서, 설명과 판단 기준이 개선된 날짜를 페이지 메타데이터와 sitemap에 반영해 최신 콘텐츠 상태를 명확하게 보여줍니다.",
      },
    ],
    privacy: [
      {
        title: "이미지 파일 처리 범위",
        body: "PixelZipKit의 핵심 이미지 압축과 WebP 변환 기능은 사용자의 브라우저 안에서 실행됩니다. 선택한 파일은 압축 결과를 만들기 위한 목적으로만 로컬 환경에서 처리되며, 사이트 운영 서버에 이미지 원본이나 결과물을 저장하는 구조가 아닙니다. 사용자는 작업이 끝난 뒤 필요한 결과 파일만 직접 다운로드합니다.",
      },
      {
        title: "광고와 분석 도구 사용 시 고지",
        body: "사이트 운영 과정에서 트래픽 분석이나 광고 서비스가 사용될 수 있으며, 이 경우 서비스 제공자가 쿠키 또는 유사 기술을 사용할 수 있습니다. 개인정보처리방침은 이러한 가능성을 사용자에게 설명하기 위한 문서이며, 광고 적용 전후로 실제 사용 도구와 고지 문구가 일치하도록 계속 점검합니다.",
      },
    ],
    terms: [
      {
        title: "사용자가 지켜야 할 기본 원칙",
        body: "사용자는 자신이 소유했거나 처리 권한이 있는 이미지에 대해서만 이 도구를 사용해야 합니다. 타인의 저작권, 초상권, 상표권을 침해하는 이미지 처리나 배포는 허용되지 않습니다. 압축 도구는 파일 크기를 줄이는 편의 기능을 제공할 뿐, 이미지 사용 권한을 대신 확인해주지는 않습니다.",
      },
      {
        title: "결과 파일에 대한 책임 범위",
        body: "이미지 압축 결과는 원본 파일의 형식, 해상도, 색상, 투명도, 세부 묘사에 따라 달라질 수 있습니다. 중요한 원본은 반드시 별도로 보관해야 하며, 게시나 제출 전에 결과 파일을 직접 확인해야 합니다. 사이트는 모든 파일에서 동일한 압축률이나 품질을 보장하지 않습니다.",
      },
      {
        title: "서비스 변경 가능성",
        body: "사이트 운영자는 안정적인 서비스 제공을 위해 기능, 화면 구성, 처리 방식, 정책 문구를 변경할 수 있습니다. 변경 사항은 사용자가 이해하기 쉬운 형태로 사이트에 반영하며, 이미지 파일 처리와 개인정보 보호에 영향을 줄 수 있는 내용은 관련 정책 페이지에서 확인할 수 있도록 관리합니다.",
      },
    ],
    contact: [
      {
        title: "문의할 때 포함하면 좋은 정보",
        body: "오류 제보를 보낼 때는 사용한 브라우저, 이미지 형식, 대략적인 파일 크기, 어떤 단계에서 문제가 발생했는지 알려주면 확인에 도움이 됩니다. 개인정보가 포함된 원본 이미지는 보내지 않아도 됩니다. 필요한 경우 문제 상황을 설명하는 텍스트만으로도 원인 파악을 시작할 수 있습니다.",
      },
      {
        title: "기능 제안과 운영 문의",
        body: "이미지 편집 기능 제안, 플랫폼별 업로드 가이드 요청, 접근성 개선 의견, 광고 및 제휴 문의도 접수할 수 있습니다. 반복적으로 요청되는 기능과 콘텐츠 주제는 정기 검수 과정에서 우선순위를 정해 반영합니다.",
      },
      {
        title: "답변이 필요한 문의",
        body: "정책, 개인정보, 광고, 제휴처럼 답변이 필요한 문의는 가능한 한 구체적으로 작성해 주세요. 사이트 주소, 문의 목적, 확인이 필요한 페이지, 재현 가능한 상황을 함께 남기면 더 정확히 검토할 수 있습니다. 단, 민감한 이미지 원본이나 불필요한 개인정보는 보내지 않는 것을 권장합니다.",
      },
    ],
  },
  en: {
    about: [
      {
        title: "Why a dedicated image compression tool is useful",
        body: "Bloggers, store operators, and portfolio creators often need a quick way to prepare publishing copies without opening a full editing program. PixelZipKit focuses on that small but frequent workflow: reduce file size, compare the result, and keep the original separate.",
      },
      {
        title: "Editorial direction",
        body: "The site combines a practical browser tool with publishing guidance, before-and-after examples, platform-specific recommendations, and common failure cases so users can make better decisions before uploading images.",
      },
    ],
    guide: [
      {
        title: "Start with the publishing purpose",
        body: "Image optimization is not only about making the smallest file possible. A blog image needs smooth reading, an ecommerce image needs trustworthy detail, and an email attachment needs compatibility. Deciding the purpose first makes format and quality choices clearer.",
      },
      {
        title: "Review the result, not just the file size",
        body: "After compression, check labels, faces, transparent edges, gradients, and small text. These areas reveal compression artifacts quickly. If the important details remain clear, the smaller file is usually safe to publish.",
      },
    ],
    faq: [
      {
        title: "A safer first workflow",
        body: "Start around quality 80 and test one or two files first. If the result looks natural, apply the same setting to similar images. Review screenshots and product photos separately because they can react differently to compression.",
      },
      {
        title: "When the result is unexpected",
        body: "Some files may become larger after conversion, transparency may need extra review, and some platforms may not accept WebP. In those cases, keep the original format or compare JPG, PNG, and WebP before publishing.",
      },
    ],
    "use-cases": [
      {
        title: "Choose settings by publishing context",
        body: "The same photo may need different settings for a blog article, product detail page, thumbnail, or social post. Start with the displayed size and the detail users need to inspect, then choose format and quality for that context.",
      },
      {
        title: "Review the page, not only the downloaded file",
        body: "A result can look acceptable in a file preview but feel too soft once it appears in a product grid or a mobile article. Check the final page for loading speed, readable labels, and consistent color across similar images.",
      },
    ],
    formats: [
      {
        title: "Match the format to the image type",
        body: "Use JPG or lossy WebP for photographs, and compare PNG with transparent WebP for logos, cutouts, and interface captures. The best format is the one that preserves the needed detail at the smallest practical size.",
      },
      {
        title: "Compatibility is part of the decision",
        body: "WebP is efficient for modern websites, but a recipient, marketplace, or office workflow may require JPG or PNG. Check the destination before converting a file that someone else must open or upload.",
      },
    ],
    privacy: [
      {
        title: "How image processing works",
        body: "Compression and WebP conversion run in the browser. Selected files are not stored on this site's server, and users decide whether to download the result after reviewing it.",
      },
      {
        title: "Analytics and advertising notice",
        body: "Analytics or advertising services may use cookies or similar technologies according to their own policies. The privacy policy explains the service categories involved and how users can manage advertising preferences.",
      },
    ],
    terms: [
      {
        title: "Use files you have the right to process",
        body: "Use the tool only with images you own or are authorized to edit. The service helps create smaller publishing copies, but users remain responsible for copyright, consent, and the final use of each file.",
      },
      {
        title: "Review results before publishing",
        body: "Compression results depend on image content, transparency, resolution, and the selected settings. Keep important originals separately and review the downloaded result before using it in a live page or submission.",
      },
    ],
    contact: [
      {
        title: "Useful details for a support request",
        body: "For an issue report, include the browser, image format, approximate file size, selected settings, and the step where the issue occurred. Do not send source images containing unnecessary personal information.",
      },
      {
        title: "Feature and partnership inquiries",
        body: "Feature ideas, accessibility feedback, privacy questions, and partnership requests are welcome. A clear explanation of the intended workflow helps prioritize improvements that make the tool more useful.",
      },
    ],
    articles: [
      {
        title: "Why the core guides are separated",
        body: "Image compression is a crowded topic, so PixelZipKit does not treat every article as equal. The hub highlights the guides that carry the strongest publishing value: benchmarks, quality comparison, blogs, ecommerce, mobile uploads, WebP SEO, and performance.",
      },
      {
        title: "Plain language plus business rules",
        body: "A first-time visitor needs a quick explanation, while a site operator needs a rule that can be used in a workflow. Core guides therefore separate conversational summaries from business-ready decision language.",
      },
    ],
    research: [
      {
        title: "Measurements and judgment are separate",
        body: "File-size reduction can be measured, but publishing readiness depends on the role of the image. Text screenshots are reviewed for readability, product photos for color and texture, and transparent graphics for edges and alpha preservation.",
      },
      {
        title: "Review dates are maintained independently",
        body: "Benchmark measurement dates and editorial review dates are not the same. PixelZipKit keeps measurement records visible while reflecting updated explanations and decision rules in metadata and sitemap dates.",
      },
    ],
    "blog-image-optimization-checklist": [
      {
        title: "Pre-publishing review",
        body: "Separate hero images, body images, and screenshots before compressing. Hero images affect previews and first impression, body images support reading, and screenshots need clear text. Each group deserves a different review standard.",
      },
      {
        title: "How images add value to a blog post",
        body: "A useful image is not just decoration. It should help explain the article, load quickly, and remain clear on mobile screens. Descriptive filenames and alt text should support that purpose instead of repeating keywords.",
      },
    ],
    "ecommerce-product-image-compression-guide": [
      {
        title: "Preserve buying signals",
        body: "Product images affect trust. Color, texture, labels, and included components should remain clear after compression. Thumbnails can be lighter, but main product photos and detail shots need more careful quality settings.",
      },
      {
        title: "Review on the actual product page",
        body: "After compression, check the image in the mobile product page. Look for noisy white backgrounds, blurred product edges, color shifts, and unreadable option labels. Similar product variants should use consistent settings.",
      },
    ],
    "jpg-png-webp-format-choice": [
      {
        title: "Separate photos from graphics",
        body: "Photos often tolerate lossy compression well because color changes are gradual. Logos, icons, and UI screenshots need sharper edges and clearer text. Identifying the image type first prevents many format mistakes.",
      },
      {
        title: "A practical decision rule",
        body: "Choose the final format by comparing original size, output size, visual quality, and destination support. WebP may be best for a website, while JPG or PNG may be safer for older tools or external submission systems.",
      },
    ],
    "image-quality-60-70-80-comparison": [
      {
        title: "Quality numbers are starting points",
        body: "Quality 70 can look excellent on a simple image and poor on a detailed product label. Faces, small text, gradients, and fine textures reveal compression problems faster than plain backgrounds.",
      },
      {
        title: "Compare three outputs for important images",
        body: "For important images, test 60, 70, and 80 side by side. A thumbnail may be fine at 60, while a detailed product image may need 80. If the size difference is small, keeping more quality is often the better choice.",
      },
    ],
    "mobile-photo-compression-before-upload": [
      {
        title: "Why phone originals are often too large",
        body: "Modern phone photos are usually much larger than a web page needs. Uploading originals can slow down pages and increase mobile data use. Creating a separate publishing copy gives users a faster experience.",
      },
      {
        title: "Process mobile batches safely",
        body: "Group photos by purpose before compressing. Review photos, proof images, and thumbnails need different settings. Older phones may take longer with large batches, so processing smaller groups can be more stable.",
      },
    ],
    "webp-conversion-seo-guide": [
      {
        title: "WebP is not SEO by itself",
        body: "WebP can reduce file size and improve loading speed, but rankings depend on content quality, page context, accessibility, and user experience together. Treat WebP as a delivery improvement for useful content.",
      },
      {
        title: "Check compatibility before publishing",
        body: "WebP is often a good choice for websites, but not every external platform or workflow accepts it. If the converted result is larger or visually worse, keep the original format instead.",
      },
    ],
    "naver-blog-image-size-guide": [
      {
        title: "Mobile reading comes first",
        body: "Naver Blog posts are frequently consumed on mobile, especially for reviews, travel notes, food posts, and product content. A photo-heavy post should separate the lead image from repeated body images so the first screen stays useful while the rest of the article remains clear.",
      },
      {
        title: "Avoid quality loss before platform processing",
        body: "Publishing platforms may resize or recompress uploads after the user sends them. If an image is already compressed too aggressively, the platform pass can make it visibly worse. Start around quality 80 for review images, then lower the setting only after checking the uploaded result.",
      },
    ],
    "google-image-seo-alt-filename-guide": [
      {
        title: "Write for people before search engines",
        body: "A descriptive filename helps editors, developers, and search engines understand the image. Use short lowercase words and hyphens where practical, and make the file name describe the image rather than a keyword target alone.",
      },
      {
        title: "Alt text should replace the image meaning",
        body: "Good alt text explains the image's role in the page. A product image may need color and shape, while a UI screenshot may need the action or screen state. Repeating keywords is weaker than describing what the image actually communicates.",
      },
    ],
    "product-thumbnail-compression-checklist": [
      {
        title: "Judge thumbnails as a grid",
        body: "A single thumbnail can look harmless, but category pages load many thumbnails together. Resize and compress based on the grid size, then review the whole page for loading speed, edge clarity, and consistent color across related products.",
      },
      {
        title: "Separate thumbnail and detail files",
        body: "The thumbnail's job is fast scanning, while the detail image's job is purchase confidence. Using one file for both usually makes one of those jobs worse. Create a smaller thumbnail copy and keep a more careful detail image.",
      },
    ],
    "website-speed-core-web-vitals-images": [
      {
        title: "Start with the LCP candidate",
        body: "The largest above-the-fold image often shapes the user's speed perception. Resize it to its displayed dimensions, compare WebP with the original format, and avoid using an oversized camera export as the first visible asset.",
      },
      {
        title: "Compression is only part of performance",
        body: "Reduced files still need stable width and height, responsive sources, caching, and sensible lazy loading. The compressed asset is the input; the actual page determines whether users feel the improvement.",
      },
    ],
    "transparent-png-webp-guide": [
      {
        title: "Check alpha before size",
        body: "Transparent assets are useful only if the alpha channel and edges survive the conversion. Preview logos, icons, and product cutouts on both light and dark backgrounds before replacing a PNG with WebP.",
      },
      {
        title: "Tiny graphics may not need conversion",
        body: "Small icons and simple logos may already be efficient. If WebP saves very little or introduces edge artifacts, keeping the PNG can be the better publishing decision.",
      },
    ],
    "social-media-upload-image-compression": [
      {
        title: "Leave room for platform recompression",
        body: "Social platforms often process uploaded images again. Start around quality 75 to 85 for feed photos and inspect text-heavy cards carefully, because a second compression pass can make small type look soft.",
      },
      {
        title: "Crop before compressing",
        body: "Resize and crop to the intended platform ratio before compression. This avoids spending bytes on pixels that may be removed later and helps keep the subject inside the visible area after upload.",
      },
    ],
    "email-attachment-image-size-guide": [
      {
        title: "Separate viewing copies from originals",
        body: "An email recipient often needs a clear viewing copy, not a full-resolution original. Keep original files for print or design work, and send compressed JPG copies when compatibility and attachment limits matter more.",
      },
      {
        title: "Check total attachment size",
        body: "When sending many photos, review the total size, naming order, and readability before attaching. A smaller image still fails the workflow if the recipient cannot identify the subject or read important text.",
      },
    ],
    "portfolio-image-optimization-guide": [
      {
        title: "Protect featured work",
        body: "Portfolio hero images and featured projects communicate trust. Start at quality 80 or higher, use lighter files for listing thumbnails, and keep more detail for project pages where users inspect the work.",
      },
      {
        title: "Treat UI screenshots differently",
        body: "Interface screenshots contain type, icons, and thin lines that can blur under aggressive lossy compression. Compare PNG and WebP carefully for UI work, while using lossy WebP more freely for photographic case-study images.",
      },
    ],
    "batch-image-compression-workflow": [
      {
        title: "Sample before the batch",
        body: "Batch compression works best after testing representative files. Try one hero image, one body image, one screenshot, and one thumbnail first, then apply settings only to files with the same publishing purpose.",
      },
      {
        title: "Review exceptions after processing",
        body: "After the batch finishes, look for outputs larger than the original, screenshots with soft text, and transparent files with damaged edges. The fastest workflow still needs a final quality pass.",
      },
    ],
  },
} satisfies Record<Locale, Record<string, PageDepthSection[]>>;
