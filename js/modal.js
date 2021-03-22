$(document).ready(function () {
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  console.log(modalButton);
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay')
    var modalWindow = $('.modal__window')
    modalOverlay.addClass('modal__overlay_visible')
    modalWindow.addClass('modal__window_visible')
  };
  function closeModal(event) {
    event.preventDefault(event);
    var modalOverlay = $('.modal__overlay')
    var modalWindow = $('.modal__window')
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
        required: "We need your phone number to contact you",
      }
    }
  }
  );
  })
  //mask jquery
  $('.phone-mask').mask('+7 (000) 000-00-00', {
    'translation': {
      0: { pattern: /[0-9*]/ },
      7: { pattern: /[7*]/ }
    }
  });
});