"use strict"

document.addEventListener('DOMContentLoaded', swiperInit);


function swiperInit() {
    let deviceWidth = window.innerWidth;
    if (deviceWidth <= 768) { cardsSwiperInit(); } else { cubeSwiperInit(); }


    function cardsSwiperInit() {
        var swiper = new Swiper('.portfolio__slider.swiper', {
            // Налаштування Swiper
            effect: 'cards',
            // effect: 'cube', //https://swiperjs.com/swiper-api#cube-effect:~:text=Enables%20slides%20shadows-,Cube%20Effect,-Be%20sure%20to
            // effect: 'coverflow',
            // effect: 'fade', // на всю ширину контейнера
            // effect: 'flip',  // на всю ширину контейнера
            // effect: 'creative', // https://swiperjs.com/swiper-api#creative-effect:~:text=Enables%20slides%20shadows-,Creative%20Effect,-Be%20sure%20to
            // width: 340,
            // slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            width: null,
            autoHeight: false,
            spaceBetween: 100,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }

    function cubeSwiperInit() {
        var swiper = new Swiper('.portfolio__slider.swiper', {
            // Налаштування Swiper
            effect: 'cube',
            // effect: 'cube', //https://swiperjs.com/swiper-api#cube-effect:~:text=Enables%20slides%20shadows-,Cube%20Effect,-Be%20sure%20to
            // effect: 'coverflow',
            // effect: 'fade', // на всю ширину контейнера
            // effect: 'flip',  // на всю ширину контейнера
            // effect: 'creative', // https://swiperjs.com/swiper-api#creative-effect:~:text=Enables%20slides%20shadows-,Creative%20Effect,-Be%20sure%20to
            // width: 340,
            // slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            width: null,
            autoHeight: false,
            spaceBetween: 100,
            pagination: {
                el: '.swiper-pagination',
            },
        });


    };
};