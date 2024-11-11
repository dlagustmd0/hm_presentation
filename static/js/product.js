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

$(() => {
    const $productListWrap = $(".product-list-wrap");
    const $searchResultInformation = $(".search-result-information");
    const $sortSelect = $("#sort");
    const $categorySelect = $("#category");
    const $searchText = $("#search-text");
    const $searchIcon = $(".h-wrap.search .search-icon");

    function clearProducts() {
        $(".product-list-wrap").empty();
    }

    function addProductItem(productData) {
        const productItem = $(`
            <li>
                <a href="#">
                    <figure>
                        <img src="${productData.image}" alt="${productData.name}" />
                        <figcaption class="hidden">${productData.name}</figcaption>
                    </figure>
                    <div class="product-content">
                        <strong>${productData.name}</strong>
                        <p>${productData.seller} - ${productData.storeName}</p>
                    </div>
                </a>
            </li>
        `);

        $productListWrap.append(productItem);
    }

    function koreanSearch(text, target) {
        const chosung = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
        const unicode = [
            [0xac00, 0xd7a3], // 가 ~ 힣
            [0x3131, 0x314e], // ㄱ ~ ㅎ
            [0x314f, 0x3163], // ㅏ ~ ㅣ
        ];

        function isKorean(char) {
            return unicode.some(([from, to]) => char.charCodeAt(0) >= from && char.charCodeAt(0) <= to);
        }

        function getChosung(char) {
            if (!isKorean(char)) return char;
            const code = char.charCodeAt(0);
            if (code >= 0xac00 && code <= 0xd7a3) {
                return chosung[Math.floor((code - 0xac00) / 588)];
            }
            return char;
        }

        function convertToChosung(str) {
            return str.split("").map(getChosung).join("");
        }

        const textChosung = convertToChosung(text);
        return text.includes(target) || textChosung.includes(target);
    }

    function filterItem(item, filter) {
        console.log(item, filter);
        if (filter.category !== "all" && item.category !== filter.category) {
            return false;
        }
        if (filter.text !== "" && !koreanSearch(item.name, filter.text)) {
            return false;
        }
        return true;
    }

    function filterItems(json) {
        const filter = {
            category: $categorySelect.val(),
            text: $searchText.val(),
        };
        return json.filter((item) => filterItem(item, filter));
    }

    function sortItems(items) {
        const sortOption = $sortSelect.val();
        return items.sort((a, b) => {
            switch (sortOption) {
                case "name_asc":
                    return a.name.localeCompare(b.name, "ko");
                case "price_desc":
                    return b.price - a.price;
                case "price_asc":
                    return a.price - b.price;
                default:
                    return 0;
            }
        });
    }

    function updateProducts() {
        $productListWrap.fadeOut(300, function () {
            clearProducts();

            fetch("../static/products.json")
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("네트워크 응답이 올바르지 않습니다");
                    }
                    return res.json();
                })
                .then((json) => {
                    items = filterItems(json);

                    if (!Array.isArray(items) || items.length === 0) {
                        $searchResultInformation.text(`검색 결과가 없습니다!`);
                        $searchResultInformation.siblings().hide();
                    } else {
                        sortItems(items).forEach((item) => {
                            addProductItem(item);
                        });
                        $searchResultInformation.text(`${items.length}개의 검색 결과를 찾았습니다.`);
                        $searchResultInformation.siblings().show();
                    }

                    $productListWrap.fadeIn(300);
                })
                .catch((error) => {
                    console.error("제품을 가져오는 중 오류가 발생했습니다:", error);
                    $searchResultInformation.text("제품을 불러오는 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
                    $productListWrap.fadeIn(300);
                });
        });
    }

    const filterCategory = getCookie("filter");
    if (filterCategory != null) {
        $categorySelect.val(filterCategory).change();
    }

    $categorySelect.on("change", updateProducts);
    $sortSelect.on("change", updateProducts);
    $searchIcon.on("click", updateProducts);
    $searchText.on("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            updateProducts();
        }
    });
    // $searchText.on("blur", updateProducts);

    updateProducts();
});
