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
        body: "이 사이트는 단순히 압축 버튼만 제공하는 도구가 아니라, 어떤 상황에서 어떤 포맷과 품질값을 선택해야 하는지 함께 안내하는 이미지 최적화 자료실을 목표로 합니다. 향후에는 실제 압축 전후 비교, 업로드 플랫폼별 권장 기준, 자주 발생하는 실패 사례를 계속 보강해 사용자가 스스로 판단할 수 있는 기준을 제공할 예정입니다.",
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
        body: "추가되면 좋은 이미지 편집 기능, 플랫폼별 업로드 가이드, 접근성 개선, 광고 및 제휴 문의도 접수할 수 있습니다. 모든 제안이 바로 반영되는 것은 아니지만, 반복적으로 요청되는 기능은 향후 업데이트 우선순위를 정하는 데 참고합니다.",
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
        body: "The site is designed to combine a practical browser tool with publishing guidance. Future updates can add before-and-after examples, platform-specific recommendations, and common failure cases so users can make better decisions before uploading images.",
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
  },
} satisfies Record<Locale, Record<string, PageDepthSection[]>>;
