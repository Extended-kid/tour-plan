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
  function closeModal() {
    
    var modalOverlay = $('.modal__overlay')
    var modalWindow = $('.modal__window')
    modalOverlay.removeClass('modal__overlay_visible')
    modalWindow.removeClass('modal__window_visible')
  };
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 27:
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
});