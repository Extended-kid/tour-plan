const swiper = new Swiper('.swiper-container', {
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


document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            swiper.slidePrev(300, true)
            break;
        case 39:
            swiper.slideNext(300, true)
            break;
    }
};
ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [7.89096874, 98.29429420],
      zoom: 17
    });
}