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
});
