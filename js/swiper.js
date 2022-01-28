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

var programSlide = new Swiper(".program-swiper", {
    navigation: {
        nextEl: ".program-button-next",
        prevEl: ".program-button-prev",
    },
    slidesPerView: "auto",
    spaceBetween:20,
    speed:750,
    loop: false,
    
    breakpoints: {
        768: {
            spaceBetween:20,
            slidesPerView: 3,
            slidesPerGroup: 3,
            loop: true,
        }
    }
});

var programSlide2 = new Swiper(".program-swiper2", {
    loop: true,
    slidesPerView: "auto",
    pagination: {
        el: ".program2-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed:1000,
    // 드래그 막는 코드
    simulateTouch:false
});

var startupSlide = new Swiper(".startup-swiper", {
    navigation: {
        nextEl: ".startup-button-next",
        prevEl: ".startup-button-prev",
    },
    slidesPerView: "auto",
    spaceBetween:20,
    loop: false,
    speed:750,    

    breakpoints: {
        768: {
            spaceBetween:20,
            slidesPerView: 3,
            slidesPerGroup: 3,
            loop: true,
        }
    }
});

var recommendationProjectSlide = new Swiper(".recommendation-project-swiper", {
    navigation: {
        nextEl: ".recommendation-project-button-next",
        prevEl: ".recommendation-project-button-prev",
    },
    slidesPerView: "auto",
    spaceBetween:20,
    speed:750,
    loop: false,
    
    breakpoints: {
        768: {
            spaceBetween:20,
            slidesPerView: 3,
            slidesPerGroup: 3,
            loop: true,
        }
    }
});

var companyTeamSlide = new Swiper(".team-slide", {
    navigation: {
        nextEl: ".team-img-next-btn",
        prevEl: ".team-img-prev-btn",
    },
    slidesPerView: "auto",
    spaceBetween: 20,
    speed:750,
})