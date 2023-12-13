"use strict"
var mySwiper = null;
document.addEventListener('DOMContentLoaded', function () {

    swiperInit();


});
window.addEventListener('resize', function () {

    swiperInit(); // Переініціалізуємо Swiper при зміні розміру екрану
    // this.location.reload();

});

function swiperInit() {


    if (mySwiper) {
        mySwiper.destroy(true, true); // Видалення попереднього екземпляру Swiper
    }


    let deviceWidth = window.innerWidth;
    if (deviceWidth <= 768) { mySwiper = cardsSwiperInit(); } else if (deviceWidth <= 1024) { mySwiper = cubeSwiperInit(); } else { mySwiper = coverflowSwiperInit() }


    function cardsSwiperInit() {
        var swiper = new Swiper('.portfolio__slider.swiper', {
            // Налаштування Swiper
            effect: 'cards',

            loop: true,

            autoHeight: false,

            pagination: {
                el: '.swiper-pagination',
            },
        });
        return swiper;
    }

    function cubeSwiperInit() {
        var swiper = new Swiper('.portfolio__slider.swiper', {
            // Налаштування Swiper
            effect: 'cube',

            slidesPerGroup: 1,
            loop: true,
            width: null,
            autoHeight: false,
            spaceBetween: 100,
            transitionDuration: 0.3,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            mousewheel: {
                invert: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        return swiper;
    };
    function coverflowSwiperInit() {
        var swiper = new Swiper('.portfolio__slider.swiper', {
            // Налаштування Swiper
            effect: 'coverflow',

            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            width: null,
            autoHeight: false,
            spaceBetween: 10,
            transitionDuration: 0.3,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },

            pagination: {
                el: '.swiper-pagination',
            },
        });
        return swiper;
    };
};



