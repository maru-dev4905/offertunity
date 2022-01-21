var bannerSlide = new Swiper(".banner-swiper", {
    pagination: {
        el: ".banner-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".banner-button-next",
        prevEl: ".banner-button-prev",
    },
    slidesPerView: "auto",
    loop: true,
    speed:750,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // 드래그 막는 코드
    simulateTouch:false
});