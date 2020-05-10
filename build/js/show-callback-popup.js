(function(){
	var callbackButtons = document.querySelectorAll('.callback__button');
	var overlay = document.querySelector('.popup__overlay');
	var callbackPopup = document.querySelector('.popup--callback');
	var popupCloseButton = callbackPopup.querySelector('.popup__close');
	var form = document.querySelector('.callback__form');
	
	var closeCallbackPopup = function() {
		callbackPopup.classList.remove('popup--show');
		overlay.classList.remove('popup__overlay--show');
	};

	var callbackPopupHandler = function() {

		callbackPopup.classList.add('popup--show');
		overlay.classList.add('popup__overlay--show');

		popupCloseButton.addEventListener('click', function(evt) {
			evt.preventDefault();
			closeCallbackPopup();
		});

		overlay.addEventListener('click', function(evt) {
			evt.preventDefault();
			closeCallbackPopup();
		});

		var closePopupEsc = function(evt) {
			if (evt.keyCode === 27) {
				evt.preventDefault();
				closePopup();
				document.removeEventListener('keydown', closePopupEsc);
			}
		};
		document.addEventListener('keydown', closePopupEsc);
	};

	callbackButtons.forEach(function(button) {
		button.addEventListener('click', function(evt) {
			evt.preventDefault();
			callbackPopupHandler();
		});
	})

}());