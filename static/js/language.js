$(() => {
    const languageData = {
        ko: {
            "#header .gnb > li:nth-child(1) > a": "브랜드 소개",
            "#header .gnb > li:nth-child(2) > a": "제품",
            "#header .gnb > li:nth-child(3) > a": "용도와 팁",
            "#header .gnb > li:nth-child(4) > a": "고객지원",
            ".welcome-content strong": "<b>스카치&trade;</b>에 방문하신 것을 환영합니다.",
            ".product .section-title": "제품군",
            ".use-and-tip .section-title": "용도와 팁",
            ".review .section-title": "고객 리뷰",
            ".btn": "더보기",
            "#footer .link-list li:nth-child(1) a": "개인정보 처리 방침",
            "#footer .link-list li:nth-child(2) a": "법적 정보",
            "#footer .link-list li:nth-child(3) a": "쿠키 설정",
            "#footer .copyright": "&copy; 3M 2024. All Rights Reserved.",
            ".swiper-slide:nth-child(1) > .visual-title h2": "<b>스카치&trade;</b> 브랜드",
            ".swiper-slide:nth-child(1) > .visual-title p":
                "다양한 용도로 완벽한 <b>스카치&trade;</b> 테이프, 일상 속 모든 순간을 깔끔하게 정리하세요.",
            ".swiper-slide:nth-child(1) > .visual-title .btn-cta": "제품 보기",
            ".swiper-slide:nth-child(2) > .visual-title h2": "<b>스카치&trade;</b> 브랜드",
            ".swiper-slide:nth-child(2) > .visual-title p": "혁신적인 접착 솔루션으로 일상을 더 편리하게",
            ".swiper-slide:nth-child(2) > .visual-title .btn-cta": "자세히 보기",
            ".welcome-content p":
                "<b>스카치&trade; 브랜드</b>는 수십 년간 테이프 제품을 통해 일상적인 문제를 해결해 왔습니다. 간단한 수리에서부터 창의적인 프로젝트까지, 다양한 작업에 최적화된 <b>스카치&trade;</b> 제품군은 언제나 완벽한 결과를 제공합니다. 어떤 도전도 <b>스카치&trade;</b>와 함께라면 쉽고 빠르게 해결할 수 있습니다.",
            ".product-family li:nth-child(1) .family-content dt": "테이프",
            ".product-family li:nth-child(1) .family-content dd":
                "일상에서부터 전문적인 작업까지 다양한 용도로 사용되는 믿을 수 있는 제품입니다.",
            ".product-family li:nth-child(2) .family-content dt": "풀 & 접착제",
            ".product-family li:nth-child(2) .family-content dd":
                "일상부터 다양한 작업까지 간편하게 사용할 수 있는 든든한 접착 솔루션입니다.",
            ".product-family li:nth-child(3) .family-content dt": "패키징 솔루션",
            ".product-family li:nth-child(3) .family-content dd":
                "다양한 작업에서 신뢰할 수 있는 포장 솔루션을 제공합니다.",
            ".product-family li:nth-child(4) .family-content dt": "양면 테이프 / 탈부착 테이프",
            ".product-family li:nth-child(4) .family-content dd":
                "다양한 작업에 적합한 강력한 양면 테이프부터, 깔끔하게 탈부착 가능한 테이프까지 제공하는 솔루션입니다.",
            ".use-and-tip-list li:nth-child(1) .uat-content strong": "선물 포장의 기초",
            ".use-and-tip-list li:nth-child(1) .uat-content p":
                "스카치&trade; 다용도 테이프는 내구성과 투명 광택으로 선물 포장의 완성도를 높여줍니다.",
            ".use-and-tip-list li:nth-child(2) .uat-content strong": "테이프의 모든 것",
            ".use-and-tip-list li:nth-child(2) .uat-content p":
                "어떤 작업이든 적절한 도구가 필요하며, 스카치&trade; 테이프는 각각의 문제 해결을 위해 설계되었습니다.",
            ".use-and-tip-list li:nth-child(3) .uat-content strong": "순간 접착제 사용 가이드",
            ".use-and-tip-list li:nth-child(3) .uat-content p":
                "순간 접착제는 금속, 도기, 가죽, 고무, 비닐, 일부 플라스틱 등 다양한 재료 표면에서 강력한 결합력을 형성합니다.",
            "#footer .information li:nth-child(1) dt": "대표자",
            "#footer .information li:nth-child(2) dt": "사업자등록번호",
            "#footer .information li:nth-child(3) dt": "주소",
            "#footer .information li:nth-child(4) dt": "대표전화",
            ".use-and-tip .under-btn": "더 알아보기",
            "#header .gnb > li:nth-child(1) .lnb li:nth-child(1) a": "3M",
            "#header .gnb > li:nth-child(1) .lnb li:nth-child(2) a": "스카치",
            "#header .gnb > li:nth-child(2) .lnb li:nth-child(1) a": "테이프",
            "#header .gnb > li:nth-child(2) .lnb li:nth-child(2) a": "풀 & 접착제",
            "#header .gnb > li:nth-child(2) .lnb li:nth-child(3) a": "패키징 솔루션",
            "#header .gnb > li:nth-child(2) .lnb li:nth-child(4) a": "양면 테이프<br />탈부착 테이프",
            "#header .gnb > li:nth-child(3) .lnb li:nth-child(1) a": "테이프의 모든 것",
            "#header .gnb > li:nth-child(3) .lnb li:nth-child(2) a": "선물 포장의 기초",
            "#header .gnb > li:nth-child(3) .lnb li:nth-child(3) a": "순간 접착제<br />사용 가이드",
            "#header .gnb > li:nth-child(4) .lnb li:nth-child(1) a": "자주 묻는 질문",
            "#header .gnb > li:nth-child(4) .lnb li:nth-child(2) a": "고객문의",
            // ".search-result-information": "{0}개의 검색 결과를 찾았습니다.",
            "#sort option[value='name_asc']": "이름순",
            "#sort option[value='price_desc']": "가격 높은순",
            "#sort option[value='price_asc']": "가격 낮은순",
            "#category option[value='all']": "전체",
            "#category option[value='tape']": "테이프",
            "#category option[value='glue']": "풀 & 접착제",
            "#category option[value='packaging']": "패키징 솔루션",
            "#category option[value='doublesided']": "양면 테이프 / 탈부착 테이프",
            "#category option[value='other']": "기타",
            "#search-text": "제품명을 입력하세요",
            ".product-wrap h2": "제품",
            ".product-wrap .search-wrap label": "검색",
            ".product-wrap .search-wrap button span": "검색",
            ".product-wrap .sort-wrap label": "정렬",
            ".product-wrap .category-wrap label": "카테고리",
            ".h-wrap.search > label": "검색어",
            ".h-wrap.sort > label": "정렬",
            ".h-wrap.category > label": "카테고리",
            "[.h-wrap.search > input[type='text']]": "placeholder|제품명",
            ".products .section-title": "제품 목록",
        },
        en: {
            "#header .gnb > li:nth-child(1) > a": "Brand Introduction",
            "#header .gnb > li:nth-child(2) > a": "Products",
            "#header .gnb > li:nth-child(3) > a": "Uses and Tips",
            "#header .gnb > li:nth-child(4) > a": "Customer Support",
            ".welcome-content strong": "Welcome to <b>Scotch&trade;</b>",
            ".product .section-title": "Product Family",
            ".use-and-tip .section-title": "Uses and Tips",
            ".review .section-title": "Customer Reviews",
            ".btn": "View More",
            "#footer .link-list li:nth-child(1) a": "Privacy Policy",
            "#footer .link-list li:nth-child(2) a": "Legal Information",
            "#footer .link-list li:nth-child(3) a": "Cookie Settings",
            "#footer .copyright": "&copy; 3M 2024. All Rights Reserved.",
            ".swiper-slide:nth-child(1) > .visual-title h2": "<b>Scotch&trade;</b> Brand",
            ".swiper-slide:nth-child(1) > .visual-title p":
                "Perfect for various uses, <b>Scotch&trade;</b> tape neatly organizes every moment of your daily life.",
            ".swiper-slide:nth-child(1) > .visual-title .btn-cta": "View Products",
            ".welcome-content p":
                "The <b>Scotch&trade; Brand</b> has been solving everyday problems through tape products for decades. From simple repairs to creative projects, the <b>Scotch&trade;</b> product line optimized for various tasks always provides perfect results. Any challenge can be solved quickly and easily with <b>Scotch&trade;</b>.",
            ".swiper-slide:nth-child(2) > .visual-title h2": "<b>Scotch&trade;</b> Brand",
            ".swiper-slide:nth-child(2) > .visual-title p":
                "Making everyday life easier with innovative adhesive solutions",
            ".swiper-slide:nth-child(2) > .visual-title .btn-cta": "Learn More",
            ".product-family li:nth-child(1) .family-content dt": "Tape",
            ".product-family li:nth-child(1) .family-content dd":
                "A reliable product used for various purposes from everyday to professional work.",
            ".product-family li:nth-child(2) .family-content dt": "Glue & Adhesives",
            ".product-family li:nth-child(2) .family-content dd":
                "A reliable adhesive solution that can be easily used from everyday to various tasks.",
            ".product-family li:nth-child(3) .family-content dt": "Packaging Solutions",
            ".product-family li:nth-child(3) .family-content dd":
                "Provides reliable packaging solutions for various tasks.",
            ".product-family li:nth-child(4) .family-content dt": "Double-sided Tape / Removable Tape",
            ".product-family li:nth-child(4) .family-content dd":
                "A solution that provides strong double-sided tape suitable for various tasks, as well as cleanly removable tape.",
            ".use-and-tip-list li:nth-child(1) .uat-content strong": "Basics of Gift Wrapping",
            ".use-and-tip-list li:nth-child(1) .uat-content p":
                "Scotch&trade; multi-purpose tape enhances the quality of gift wrapping with its durability and transparent gloss.",
            ".use-and-tip-list li:nth-child(2) .uat-content strong": "All About Tape",
            ".use-and-tip-list li:nth-child(2) .uat-content p":
                "Any task requires the right tool, and Scotch&trade; tape is designed to solve each problem.",
            ".use-and-tip-list li:nth-child(3) .uat-content strong": "Super Glue Usage Guide",
            ".use-and-tip-list li:nth-child(3) .uat-content p":
                "Super glue forms a strong bond on various material surfaces such as metal, pottery, leather, rubber, vinyl, and some plastics.",
            "#footer .information li:nth-child(1) dt": "Representative",
            "#footer .information li:nth-child(2) dt": "Business Registration Number",
            "#footer .information li:nth-child(3) dt": "Address",
            "#footer .information li:nth-child(4) dt": "Main Phone",
            ".use-and-tip .under-btn": "Learn More",
            "#header .gnb > li:nth-child(1) .lnb li:nth-child(1) a": "3M",
            "#header .gnb > li:nth-child(1) .lnb li:nth-child(2) a": "Scotch",
            "#header .gnb > li:nth-child(2) .lnb li:nth-child(1) a": "Tape",
            "#header .gnb > li:nth-child(2) .lnb li:nth-child(2) a": "Glue & Adhesives",
            "#header .gnb > li:nth-child(2) .lnb li:nth-child(3) a": "Packaging Solutions",
            "#header .gnb > li:nth-child(2) .lnb li:nth-child(4) a": "Double-sided Tape<br />Removable Tape",
            "#header .gnb > li:nth-child(3) .lnb li:nth-child(1) a": "All About Tape",
            "#header .gnb > li:nth-child(3) .lnb li:nth-child(2) a": "Basics of Gift Wrapping",
            "#header .gnb > li:nth-child(3) .lnb li:nth-child(3) a": "Super Glue<br />Usage Guide",
            "#header .gnb > li:nth-child(4) .lnb li:nth-child(1) a": "FAQ",
            "#header .gnb > li:nth-child(4) .lnb li:nth-child(2) a": "Customer Inquiry",
            // ".search-result-information": "{0} search results found.",
            "#sort option[value='name_asc']": "Name",
            "#sort option[value='price_desc']": "Price: High to Low",
            "#sort option[value='price_asc']": "Price: Low to High",
            "#category option[value='all']": "All",
            "#category option[value='tape']": "Tape",
            "#category option[value='glue']": "Glue & Adhesives",
            "#category option[value='packaging']": "Packaging Solutions",
            "#category option[value='doublesided']": "Double-sided Tape / Removable Tape",
            "#category option[value='other']": "Other",
            "#search-text": "Enter product name",
            ".product-wrap h2": "Products",
            ".product-wrap .search-wrap label": "Search",
            ".product-wrap .search-wrap button span": "Search",
            ".product-wrap .sort-wrap label": "Sort",
            ".product-wrap .category-wrap label": "Category",
            ".h-wrap.search > label": "Search",
            ".h-wrap.sort > label": "Sort",
            ".h-wrap.category > label": "Category",
            "[.h-wrap.search > input[type='text']]": "placeholder|Product Name",
            ".products .section-title": "Product List",
        },
    };

    const $languageSelect = $("#language, #mobile-language");

    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + ";expires=" + expires.toUTCString() + ";path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function changeLanguage(lang) {
        if (lang === "ko") {
            return;
        }

        $.each(languageData[lang], function (selector, value) {
            const isProperty = selector.startsWith("[") && selector.endsWith("]");
            if (isProperty) {
                selector = selector.slice(1, -1);
            }
            $(selector).each(function () {
                if (isProperty) {
                    const [attribute, attrValue] = value.split("|");
                    $(this).attr(attribute, attrValue);
                } else {
                    $(this).html(value);
                }
            });
        });
    }

    // 페이지 로드 시 저장된 언어 설정 적용
    const savedLang = getCookie("language");
    if (savedLang) {
        $languageSelect.val(savedLang);
        changeLanguage(savedLang);
    }

    // 언어 선택 변경 시 쿠키 저장 및 언어 변경
    $languageSelect.on("change", function () {
        const selectedLang = $(this).val();
        setCookie("language", selectedLang, 30); // 30일 동안 쿠키 유지
        // changeLanguage(selectedLang);
        location.reload(true);
    });
});
