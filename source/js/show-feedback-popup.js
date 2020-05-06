(function(){
	var feedbackButton = document.querySelector('.feedback__button');
	var overlay = document.querySelector('.popup__overlay');
	var feedbackPopup = document.querySelector('.popup--feedback');
	var popupCloseButton = feedbackPopup.querySelector('.popup__close');

	var closePopup = function() {
		feedbackPopup.classList.remove('popup--show');
		overlay.classList.remove('popup__overlay--show');
	};

	var feedbackPopupHandler = function() {
		feedbackPopup.classList.add('popup--show');
		overlay.classList.add('popup__overlay--show');

		popupCloseButton.addEventListener('click', function(evt) {
			evt.preventDefault();
			closePopup();
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
	
	feedbackButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		feedbackPopupHandler();
	});

}());