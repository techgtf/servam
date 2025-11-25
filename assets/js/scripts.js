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


const modal = $(".custom-modal")
function toggleModal() {
    modal.toggleClass("show-modal");
}