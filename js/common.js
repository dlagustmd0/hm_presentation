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
    const $header = $("header");
    const $menu = $(".gnb > li");
    const $submenu = $(".gnb > li > .lnb");
    const $selects = $(".select-wrap select");
    const duration = 300;

    $menu.on("mouseenter", function () {
        $(this).addClass("on");
        $header.addClass("expand");
        $submenu.stop().slideDown(duration);
    });
    $header.on("mouseleave", function () {
        $(this).removeClass("on");
        $header.removeClass("expand");
        $submenu.stop().slideUp(duration);
    });

    $selects.on("focus", function () {
        $(this).parent().addClass("focused");
    });
    $selects.on("blur change", function () {
        $(this).parent().removeClass("focused");
    });

    const $productLink = $(".product-link");
    $productLink.on("click", () => {
        setCookie("filter", $productLink.attr("data-filter"), 1);
    });

    $(".lnb-product")
        .children()
        .each((_, item) => {
            const $item = $(item);
            const $linkItem = $(item).children();
            $item.on("click", () => {
                setCookie("filter", $linkItem.attr("data-filter"), 1);
            });
        });
});
