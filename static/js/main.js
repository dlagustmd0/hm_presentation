$(() => {
    const visualSwiper = new Swiper(".visual-slider", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".visual-slider-wrap .pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".visual-slider-wrap .btn-next",
            prevEl: ".visual-slider-wrap .btn-prev",
        },
    });

    const reviewSwiper = new Swiper(".review-slider", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        keyboard: {
            enabled: true,
        },
        spaceBetween: 80,
        pagination: {
            el: ".review-slider-wrap .pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".review-slider-wrap .btn-next",
            prevEl: ".review-slider-wrap .btn-prev",
        },
    });
});
