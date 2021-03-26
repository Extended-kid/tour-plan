$(document).ready(function () {
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  console.log(modalButton);
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay')
    var modalWindow = $('.modal__window')
    $("body").addClass("modal-open");
    modalOverlay.addClass('modal__overlay_visible')
    modalWindow.addClass('modal__window_visible')
  };
  function closeModal(event) {
    event.preventDefault(event);
    var modalOverlay = $('.modal__overlay')
    var modalWindow = $('.modal__window')
    $("body").removeClass("modal-open")
    modalOverlay.removeClass('modal__overlay_visible')
    modalWindow.removeClass('modal__window_visible')
  };
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 27:
          console.log('escape')
          closeModal();
          break;
    }
  };
  $(document).on('click', function(e){
		if (!(
		($(e.target).parents('.modal__window').length)
		||	($(e.target).hasClass('modal__window'))
		||	($(e.target).hasClass('hotel-booking-button')))
		) {
			closeModal();
		}
  });
    
  $('.modal__window')
    .on('shown', function () {
      $('body').on('wheel.modal mousewheel.modal', function () {
        return false;
      });
    })
    .on('hidden', function () {
      $('body').off('wheel.modal mousewheel.modal');
    });


  //обработка форм
  $('.form').each(function() {
    $(this).validate({
    messages: {
      name: {
        required: "Please specify your name",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      phone: {
        required: "Please specify your phone",
        minlength: "Enter your phone in international format"
      }
    }
  }
  );
  })
  //mask jquery
  $('.phone-mask').mask('+7 (999) 999-99-99',  {
    'translation': {
      9: { pattern: /[0-9*]/ }
    }
  });

  // modal menu
  var menuButton = document.querySelector(".menu-button")
  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom_visible")
  })

  AOS.init();
  $(".search__input").focus();
});