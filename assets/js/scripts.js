let mainSection = $(".main-section");
let firstHeroImage = $(".hero-img-div img").first();

if (firstHeroImage[0].complete) {
    mainSection.addClass("active");
} else {
    firstHeroImage.on("load", function () {
        mainSection.addClass("active");
    });
}

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
            slidesPerView: 3,
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
    },
    breakpoints: {
        0: {
            spaceBetween: 10,
        },
        768: {
            spaceBetween: 50,
        },
    }
});

$(document).ready(function () {

    function animateOnScroll() {
        $(".animate").each(function () {
            let elementTop = $(this).offset().top;
            let elementHeight = $(this).outerHeight();
            let windowBottom = $(window).scrollTop() + $(window).height();
            // Trigger when 20% of element is visible
            if (windowBottom > elementTop + elementHeight * 0.2) {
                $(this).addClass("animate-show");
            }
        });
    }
    // Run on scroll
    $(window).on("scroll", animateOnScroll);
    // Run on page load
    animateOnScroll();
});

// custom images modal
$(document).ready(function () {
    let modal = $("#imgModal");
    let swiperInstance;
    $(document).on("click", ".modal-openr", function () {
        let section = $(this).closest("section");
        let images = section.find(".modal-openr");

        let wrapper = $(".modal-swiper .swiper-wrapper");
        wrapper.html("");

        images.each(function () {
            // let thumbSrc = $(this).attr('src');
            // let largeSrc = $(this).attr('data-large') || thumbSrc; // It accepts both src and data-large
            let largeSrc = $(this).attr('data-large') 

            wrapper.append(`
                <div class="swiper-slide">
                    <img src="${largeSrc}" />
                </div>
            `);
        });
        modal.fadeIn(200);
        if (swiperInstance) swiperInstance.destroy(true, true);
        swiperInstance = new Swiper(".modal-swiper", {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
        let index = images.index($(this));
        swiperInstance.slideToLoop(index, 0);
    });
    $(".close-modal, #imgModal").on("click", function (e) {
        if (e.target === this) $("#imgModal").fadeOut(200);
    });
});

