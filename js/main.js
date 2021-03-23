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
ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [7.89096874, 98.29429420],
      zoom: 17
    }); 
    HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='my-hint'>" +
            "<b>{{ properties.object }}</b><br />" +
            "{{ properties.address }}" +
            "</div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                    var el = this.getElement(),
                        result = null;
                    if (el) {
                        var firstChild = el.firstChild;
                        result = new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ])
                        );
                    }
                    return result;
                }
            }
        );

    var myPlacemark = new ymaps.Placemark([7.89096874, 98.29429420], {
        object: "GRAND HILTON HOTEL"
    }, {
        hintLayout: HintLayout
    });

    myMap.geoObjects.add(myPlacemark);
}




var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener('click', function () {
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom_visible")
 
})