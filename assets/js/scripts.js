let header = $(".header-main");
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(header).addClass("active");
    } else {
        $(header).removeClass("active");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 700) {
        $(".fixed-btn").addClass("active");
    } else {
        $(".fixed-btn").removeClass("active");
    }
});

function menuOpen() {
    $(".fixed-menu").addClass("active")
}
function menuClose() {
    $(".fixed-menu").removeClass("active")
}

const modal = $(".custom-modal")
function toggleModal() {
    modal.toggleClass("show-modal");
}


let partnersSlider = new Swiper(".partners-slider", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        },
        1440: {
            slidesPerView: 7,
        },
    },
});

$(".plans-btn").on("click", function () {
    $(".plans-btn").removeClass("active");
    $(this).addClass('active');
    const target = $(this).data('target');
    $(".plans-slider").removeClass("active-tab");
    $("." + target).addClass("active-tab");
})


let floorPlansSlider = new Swiper(".floor-plans-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // effect: "fade",
    // fadeEffect: {
    //     crossFade: true,
    // },
    // mousewheel: true,
    // keyboard: true,
    // grabCursor: true,  
});

let masterPlansSlider = new Swiper(".master-plans-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    fadeEffect: {
        crossFade: true,
    },
});

var swiper = new Swiper(".gallerySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 50,
    navigation: {
        nextEl: ".swiper-button-next-gl",
        prevEl: ".swiper-button-prev-gl"
    },
    pagination: {
        el: ".swiper-pagination-gl",
        clickable: true,
    }
});


