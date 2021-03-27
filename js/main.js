const hotel_swiper = new Swiper('.hotel__swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button_next',
    prevEl: '.hotel-slider__button_prev',
  },
});

const about_swiper = new Swiper('.about__swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.about-button_next',
    prevEl: '.about-button_prev',
  },
});


document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            hotel_swiper.slidePrev(300, true)
            break;
        case 39:
            hotel_swiper.slideNext(300, true)
            break;
    }
};





